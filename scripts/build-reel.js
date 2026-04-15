/**
 * build-reel.js
 * Produces cr-pdh-grow-001.mp4 and cr-pdh-grow-001-cover.jpg
 * from the 6 slide HTML templates + background video loop.
 *
 * Prerequisites:
 *   npm install (in this scripts/ directory)
 *   ffmpeg available on PATH
 *   Google Chrome at default Windows location
 *
 * Usage: node build-reel.js
 */

'use strict';

const { chromium } = require('playwright-core');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// ─── Paths ────────────────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, '..');
const SLIDES_DIR = path.join(__dirname, 'slides');
const OUTPUT_DIR = path.join(ROOT, 'assets', 'staging', 'production');
const TEMP_DIR   = path.join(__dirname, '_tmp');

const BG_VIDEO = path.join(
  ROOT, 'assets', 'backgrounds', 'video-loops', 'pdh',
  'bg-pdh-001-sway-slow.mp4'
);
const BG_FALLBACK_IMG = path.join(
  ROOT, 'assets', 'backgrounds', 'images', 'pdh',
  'bg-pdh-004-double-glow.jpg'
);

const CHROME_PATH =
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const FINAL_VIDEO = path.join(OUTPUT_DIR, 'cr-pdh-grow-001.mp4');
const FINAL_COVER = path.join(OUTPUT_DIR, 'cr-pdh-grow-001-cover.jpg');

// ─── Audio ────────────────────────────────────────────────────────────────────
// Set to a path under assets/audio/ to bake music into the final MP4.
// null = no audio (video exported silent — set before sourcing a track).
// Source tracks licensed for commercial Instagram use: Epidemic Sound, Artlist.
const AUDIO_TRACK = path.join(ROOT, 'assets', 'audio', 'calm-piano-indie-483190.mp3');
const MUSIC_VOL   = 0.25; // background level — low enough not to compete with text focus

// Format B — Audio Carousel (cp = Carousel Post)
// Individual JPEG per slide, uploaded as a carousel POST with audio added in Instagram.
// cp naming convention: cp-[scene-code]-[pillar-code]-[NNN]-slide-[NN].jpg
const CAROUSEL_IMAGES = Array.from({ length: 6 }, (_, i) =>
  path.join(OUTPUT_DIR, `cp-pdh-grow-001-slide-${String(i + 1).padStart(2, '0')}.jpg`)
);

// Shared temp path for the extracted background still (used by cover + carousel images)
const BG_FRAME = path.join(TEMP_DIR, 'bg_first_frame.jpg');

// ─── Reel parameters ──────────────────────────────────────────────────────────

// FORMAT NOTE: This produces a Reel video with carousel-style presentation.
// It is a single MP4 uploaded as an Instagram Reel — NOT a native Instagram
// Carousel. There are no pagination dots, no slide counter, and no user
// swipe interaction. The viewer watches passively at a fixed pace.
// Relevant metrics: watch time, completion rate, saves, shares.
// Carousel-specific metrics (swipe-through rate, per-slide drop-off) do not apply.

const SLIDE_COUNT   = 6;
const FADE_DUR      = 0.5;   // seconds — fade in / fade out per slide
const BLACK_DUR     = 0.15;  // seconds — black hold between slides

// Per-slide hold durations — minimum comfortable passive read time.
// Passive Reel viewers cannot pause or replay; pacing is fixed.
// Reading rate basis: ~3.5 words/second for large display text.
// Word counts:         [11,   17,   20,   26,   18,   18 ]
const HOLD_DURS = [
  2.0,  // Slide 1 — Hook (11w): short punchy lines, hook must land before boredom
  3.0,  // Slide 2 — Friction (17w): 4 short lines, em-dash rhythm aids fast read
  3.5,  // Slide 3 — Reframe 1 (20w): two-register read (anchor + supporting)
  4.5,  // Slide 4 — Reframe 2 (26w): most text in piece, two distinct stanzas
  3.5,  // Slide 5 — Identity (18w): 5 lines, punchy pacing with period + em-dash
  3.0,  // Slide 6 — Close (18w): anchor is 4 words (instant), CTA is decorative
];

const SEGMENT_DURS = HOLD_DURS.map(h => FADE_DUR + h + FADE_DUR + BLACK_DUR);
const TOTAL_DUR    = SEGMENT_DURS.reduce((a, b) => a + b, 0);
const FRAME_RATE    = '23.976';
const VIDEO_BITRATE = '6000k';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function run(cmd, label) {
  console.log(`\n▶ ${label}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`✗ Failed: ${label}`);
    throw err;
  }
  console.log(`✓ ${label}`);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Convert Windows path to forward-slash path for use in FFmpeg on Windows
function ffPath(p) {
  return p.replace(/\\/g, '/');
}

// ─── Step 1: Screenshot slides ───────────────────────────────────────────────

async function screenshotSlides() {
  console.log('\n═══ Step 1: Screenshotting slides with Playwright ═══');

  ensureDir(TEMP_DIR);

  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1920 });

  for (let i = 1; i <= SLIDE_COUNT; i++) {
    const htmlFile = path.join(SLIDES_DIR, `slide-${i}.html`);
    const pngOut   = path.join(TEMP_DIR, `slide-${i}.png`);

    if (!fs.existsSync(htmlFile)) {
      throw new Error(`Missing HTML file: ${htmlFile}`);
    }

    // Navigate to file:// URL — forward slashes required on Windows for file://
    const fileUrl = 'file:///' + htmlFile.replace(/\\/g, '/');
    await page.goto(fileUrl);

    // Wait for fonts and network resources to fully load
    await page.waitForLoadState('networkidle');

    // Small extra wait to ensure font rendering is complete
    await page.waitForTimeout(500);

    await page.screenshot({
      path: pngOut,
      omitBackground: true,  // transparent PNG — essential for FFmpeg compositing
    });

    console.log(`  ✓ slide-${i}.png`);
  }

  await browser.close();
  console.log('All slides screenshotted.');
}

// ─── Step 2: Create looped background ────────────────────────────────────────

function createLoopedBackground() {
  console.log('\n═══ Step 2: Creating looped background video ═══');

  const loopedBg = path.join(TEMP_DIR, 'bg_looped.mp4');

  if (!fs.existsSync(BG_VIDEO)) {
    throw new Error(`Background video not found: ${BG_VIDEO}`);
  }

  // Loop background video to cover full reel duration + small buffer
  run(
    `ffmpeg -y -stream_loop -1 -i "${ffPath(BG_VIDEO)}" ` +
    `-t ${TOTAL_DUR + 1} ` +
    `-c:v libx264 -preset ultrafast -crf 18 -r ${FRAME_RATE} -an ` +
    `"${ffPath(loopedBg)}"`,
    `Loop background to ${(TOTAL_DUR + 1).toFixed(1)}s`
  );

  return loopedBg;
}

// ─── Step 3: Build per-slide segments ────────────────────────────────────────

function buildSegment(slideIndex, bgOffset, loopedBg) {
  const slideNum    = slideIndex + 1;
  const holdDur     = HOLD_DURS[slideIndex];
  const segmentDur  = SEGMENT_DURS[slideIndex];
  const fadeOutSt   = FADE_DUR + holdDur;
  const segOut      = path.join(TEMP_DIR, `segment-${slideNum}.mp4`);
  const slidePNG    = path.join(TEMP_DIR, `slide-${slideNum}.png`);

  console.log(`\n  Slide ${slideNum}: hold=${holdDur}s  segment=${segmentDur.toFixed(2)}s  bg-offset=${bgOffset.toFixed(2)}s`);

  // Each segment:
  //   [bg]  fade in from black over 0.5s, hold, fade out to black over 0.5s
  //   [text] alpha fades in 0.5s, holds, alpha fades out 0.5s
  //   The final 0.15s of the segment is pure black (both fades complete)
  const filter = [
    `[0:v]trim=start=${bgOffset}:duration=${segmentDur},setpts=PTS-STARTPTS,`,
    `fade=in:st=0:d=${FADE_DUR},fade=out:st=${fadeOutSt}:d=${FADE_DUR}[bg_faded];`,
    `[1:v]format=rgba,`,
    `fade=in:st=0:d=${FADE_DUR}:alpha=1,`,
    `fade=out:st=${fadeOutSt}:d=${FADE_DUR}:alpha=1[text_faded];`,
    `[bg_faded][text_faded]overlay=format=auto[out]`,
  ].join('');

  run(
    `ffmpeg -y ` +
    `-i "${ffPath(loopedBg)}" ` +
    `-loop 1 -t ${segmentDur} -i "${ffPath(slidePNG)}" ` +
    `-filter_complex "${filter}" ` +
    `-map "[out]" ` +
    `-t ${segmentDur} ` +
    `-r ${FRAME_RATE} ` +
    `-c:v libx264 -preset fast -crf 18 ` +
    `"${ffPath(segOut)}"`,
    `Segment ${slideNum}`
  );

  return segOut;
}

// ─── Step 4: Concatenate segments ────────────────────────────────────────────

function concatenateSegments(segments) {
  console.log('\n═══ Step 4: Concatenating segments ═══');

  ensureDir(OUTPUT_DIR);

  // Write concat file list
  const concatList = path.join(TEMP_DIR, 'concat.txt');
  const listContent = segments
    .map(s => `file '${ffPath(s).replace(/'/g, "\\'")}'`)
    .join('\n');
  fs.writeFileSync(concatList, listContent, 'utf8');

  // Concat then re-encode to hit spec bitrate target (3,500–8,000 kbps).
  // CRF 18 on dark/minimal-motion content undershoots the spec minimum, so
  // we enforce a target bitrate here while keeping a quality floor via -crf 18.
  run(
    `ffmpeg -y ` +
    `-f concat -safe 0 -i "${ffPath(concatList)}" ` +
    `-c:v libx264 -preset slow ` +
    `-b:v ${VIDEO_BITRATE} -minrate 3500k -maxrate 8000k -bufsize 16000k ` +
    `-r ${FRAME_RATE} ` +
    `-movflags +faststart ` +
    `-an ` +
    `"${ffPath(FINAL_VIDEO)}"`,
    'Concatenate and encode final MP4 at target bitrate'
  );

  console.log(`\n✓ Video: ${FINAL_VIDEO}`);
}

// ─── Step 5: Cover JPEG ───────────────────────────────────────────────────────

function produceCover() {
  console.log('\n═══ Step 5: Producing cover JPEG (Format A) ═══');

  // Extract first stable frame from original background video.
  // BG_FRAME is reused by produceCarouselImages() — do not delete before that step.
  run(
    `ffmpeg -y -i "${ffPath(BG_VIDEO)}" -vframes 1 -q:v 1 "${ffPath(BG_FRAME)}"`,
    'Extract first frame from background video'
  );

  // Composite slide-1 overlay onto background frame
  run(
    `ffmpeg -y ` +
    `-i "${ffPath(BG_FRAME)}" ` +
    `-i "${ffPath(path.join(TEMP_DIR, 'slide-1.png'))}" ` +
    `-filter_complex "[0:v][1:v]overlay=format=auto[out]" ` +
    `-map "[out]" ` +
    `-q:v 2 -update 1 ` +
    `"${ffPath(FINAL_COVER)}"`,
    'Composite cover JPEG'
  );

  console.log(`✓ Cover: ${FINAL_COVER}`);
}

// ─── Step 6: Carousel images (Format B) ──────────────────────────────────────

function produceCarouselImages() {
  console.log('\n═══ Step 6: Producing carousel images (Format B — Audio Carousel) ═══');
  console.log('  cp-pdh-grow-001-slide-01.jpg through slide-06.jpg');
  console.log('  Upload as a carousel POST in Instagram, add audio to target Reels feed.');

  // Same background still used for all slides — visual continuity across the carousel.
  // BG_FRAME already extracted by produceCover().
  for (let i = 0; i < SLIDE_COUNT; i++) {
    const slideNum = i + 1;
    const slidePNG = path.join(TEMP_DIR, `slide-${slideNum}.png`);
    const slideOut = CAROUSEL_IMAGES[i];

    run(
      `ffmpeg -y ` +
      `-i "${ffPath(BG_FRAME)}" ` +
      `-i "${ffPath(slidePNG)}" ` +
      `-filter_complex "[0:v][1:v]overlay=format=auto[out]" ` +
      `-map "[out]" ` +
      `-q:v 2 -update 1 ` +
      `"${ffPath(slideOut)}"`,
      `Carousel slide ${slideNum}`
    );
  }

  console.log(`✓ Carousel images: ${OUTPUT_DIR}`);
}

// ─── Step 7: Mix audio track ──────────────────────────────────────────────────

function mixAudio(videoPath, totalDur) {
  if (!AUDIO_TRACK) {
    console.log('\n═══ Step 7: Audio mixing skipped (AUDIO_TRACK not set) ═══');
    return;
  }

  console.log(`\n═══ Step 7: Mixing audio — ${path.basename(AUDIO_TRACK)} ═══`);

  if (!fs.existsSync(AUDIO_TRACK)) {
    throw new Error(`Audio track not found: ${AUDIO_TRACK}`);
  }

  // Rename silent video to temp path, produce audio-mixed version at original path
  const silentTmp = videoPath.replace(/\.mp4$/, '_silent.mp4');
  fs.renameSync(videoPath, silentTmp);

  const fadeOutSt = Math.max(0, totalDur - 2.0).toFixed(3);

  run(
    `ffmpeg -y ` +
    `-i "${ffPath(silentTmp)}" ` +
    `-i "${ffPath(AUDIO_TRACK)}" ` +
    `-filter_complex "[1:a]volume=${MUSIC_VOL},afade=in:st=0:d=1,afade=out:st=${fadeOutSt}:d=2[a]" ` +
    `-map 0:v -map "[a]" ` +
    `-c:v copy -c:a aac -b:a 192k ` +
    `-shortest ` +
    `"${ffPath(videoPath)}"`,
    `Mix audio — vol=${MUSIC_VOL}, fade out at ${fadeOutSt}s`
  );

  fs.unlinkSync(silentTmp);
  console.log(`✓ Audio mixed: ${videoPath}`);
}

// ─── Step 8: Cleanup ─────────────────────────────────────────────────────────

function cleanup() {
  console.log('\n═══ Step 8: Cleaning up temp files ═══');
  fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  console.log('✓ Temp files removed.');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

(async () => {
  console.log('═══════════════════════════════════════════════');
  console.log('  build-reel.js — cr-pdh-grow-001');
  console.log(`  Slides: ${SLIDE_COUNT}  |  Total: ${TOTAL_DUR.toFixed(2)}s`);
  console.log(`  Hold durations: [${HOLD_DURS.join(', ')}]s`);
  console.log('═══════════════════════════════════════════════');

  try {
    // Step 1: Screenshots
    await screenshotSlides();

    // Step 2: Looped background
    const loopedBg = createLoopedBackground();

    // Step 3: Build segments (cumulative bg offset tracks position in looped video)
    console.log('\n═══ Step 3: Building slide segments ═══');
    const segments = [];
    let bgOffset = 0;
    for (let i = 0; i < SLIDE_COUNT; i++) {
      const seg = buildSegment(i, bgOffset, loopedBg);
      segments.push(seg);
      bgOffset += SEGMENT_DURS[i];
    }

    // Step 4: Concatenate
    concatenateSegments(segments);

    // Step 5: Cover (also extracts BG_FRAME reused by Step 6)
    produceCover();

    // Step 6: Carousel images (Format B)
    produceCarouselImages();

    // Step 7: Mix audio into Format A video (Format B carousel images are audio-free)
    mixAudio(FINAL_VIDEO, TOTAL_DUR);

    // Step 8: Cleanup
    cleanup();

    console.log('\n╔═════════════════════════════════════════════╗');
    console.log('║  BUILD COMPLETE                             ║');
    console.log('╚═════════════════════════════════════════════╝');
    console.log('  Format A — Video Reel:');
    console.log(`    ${FINAL_VIDEO}`);
    console.log(`    ${FINAL_COVER}`);
    console.log('  Format B — Audio Carousel:');
    CAROUSEL_IMAGES.forEach(f => console.log(`    ${f}`));
    console.log('');
    console.log('Next step: Researcher verification of audio carousel claim,');
    console.log('then Asset Manager intake for both format packages.');

  } catch (err) {
    console.error('\n✗ Build failed:', err.message);
    process.exit(1);
  }
})();
