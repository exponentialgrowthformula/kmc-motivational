/**
 * build-stacked-reveal.js
 * Produces sr-pdh-grow-001.mp4 and sr-pdh-grow-001-cover.jpg
 * Format C — Stacked Reveal. Lines appear one at a time via alpha fade,
 * stacking progressively until the full composition is held on screen.
 * Background runs uninterrupted throughout.
 *
 * Prerequisites:
 *   npm install (in this scripts/ directory)
 *   ffmpeg available on PATH
 *   Google Chrome at default Windows location
 *
 * Usage: node build-stacked-reveal.js
 */

'use strict';

const { chromium } = require('playwright-core');
const { execSync }  = require('child_process');
const path          = require('path');
const fs            = require('fs');

// ─── Paths ────────────────────────────────────────────────────────────────────

const ROOT        = path.resolve(__dirname, '..');
const STACKED_DIR = path.join(__dirname, 'stacked-outline');
const OUTPUT_DIR  = path.join(ROOT, 'assets', 'staging', 'production');
const TEMP_DIR    = path.join(__dirname, '_tmp_sr');

const BG_IMAGE = path.join(
  ROOT, 'assets', 'backgrounds', 'images', 'pdh',
  'bg-pdh-007-amber-sky-wide.jpg'
);

const CHROME_PATH =
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const FINAL_VIDEO = path.join(OUTPUT_DIR, 'sr-pdh-grow-001.mp4');
const FINAL_COVER = path.join(OUTPUT_DIR, 'sr-pdh-grow-001-cover.jpg');

// ─── Audio ────────────────────────────────────────────────────────────────────
// Set to a path under assets/audio/ to bake music into the final MP4.
// null = no audio (video exported silent — set before sourcing a track).
// Source tracks licensed for commercial Instagram use: Pixabay CC0.
//
// IMPORTANT: Reveal timing below is TRACK-SPECIFIC. When switching to a
// different backing track, derive a new beat interval via Canva beat tracker
// (or equivalent) and dial in a custom AUDIO_OFFSET + HOLD_DURS to match.
// Do not reuse these values for a different track.
const AUDIO_TRACK  = path.join(ROOT, 'assets', 'audio', 'perky-piano-512261.mp3');
const MUSIC_VOL    = 0.25; // background level — low enough not to compete with text focus

// ─── Reveal timing — perky-piano-512261 ──────────────────────────────────────
// Beat interval:  1.1625s (Canva beat tracker, confirmed 2026-04-15)
// Time signature: 3/4 feel (1-2-3, 1-2-3)
// Audio offset:   2 beats (2.325s) — aligns line 1 pop to beat 3 of the track
// Reveal pattern: lines 1-2 × 1 beat, lines 3-6 × 2 beats, line 7 × 4 beat hold
const AUDIO_OFFSET = 2.325; // seconds into track to begin playback

// ─── Reveal timing ───────────────────────────────────────────────────────────

const LINE_COUNT   = 7;
const REVEAL_DUR   = 0.042;  // seconds — 1 frame (instant pop, no fade)
const FADE_IN_DUR  = 0.5;  // seconds — background fades in from black at start
const FADE_OUT_DUR = 0.5;  // seconds — fades to black at end

// How long each line is FULLY VISIBLE before the next line begins to fade in.
// Line 7 hold = final hold with all lines visible simultaneously.
// Timing locked to perky-piano-512261 (beat = 1.1625s). See note above.
const HOLD_DURS = [
  1.121,  // Line 1 — opening line       (1 beat)
  1.121,  // Line 2 — naming the internal story (1 beat)
  2.283,  // Line 3 — fulcrum (ownership redirect) → pace drops to 2 beats
  2.283,  // Line 4 — opens the door     (2 beats)
  2.283,  // Line 5 — identity framework, declarative
  2.283,  // Line 6 — present-tense grounding
  4.650,  // Line 7 — payoff. Hold the full composition. (4 beats)
];

// Reveal start time for each line (when the alpha fade-in begins).
// T[0] = 0 (line 1 fades in immediately as the video opens).
// T[N] = T[N-1] + REVEAL_DUR + HOLD_DURS[N-1]
const REVEAL_TIMES = HOLD_DURS.reduce((acc, hold, i) => {
  if (i === 0) return [0];
  const prev = acc[acc.length - 1];
  acc.push(parseFloat((prev + REVEAL_DUR + HOLD_DURS[i - 1]).toFixed(3)));
  return acc;
}, []);
// [0, 1.163, 2.325, 3.488, 4.650, 5.813, 6.975]  — 1 beat @ 1.1625s

// When all 7 lines are fully visible: last reveal time + REVEAL_DUR
const ALL_VISIBLE_AT = parseFloat((REVEAL_TIMES[LINE_COUNT - 1] + REVEAL_DUR).toFixed(3));

// When the fade-out begins: all-visible + final hold
const FADE_OUT_ST = parseFloat((ALL_VISIBLE_AT + HOLD_DURS[LINE_COUNT - 1]).toFixed(3));

// Total video duration
const TOTAL_DUR = parseFloat((FADE_OUT_ST + FADE_OUT_DUR).toFixed(3));

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

// Convert Windows path to forward-slash path for FFmpeg on Windows
function ffPath(p) {
  return p.replace(/\\/g, '/');
}

// ─── Step 1: Screenshot individual line HTML files ────────────────────────────

async function screenshotLines() {
  console.log('\n═══ Step 1: Screenshotting line overlays with Playwright ═══');
  console.log(`  Lines: ${LINE_COUNT}  |  Stacked dir: ${STACKED_DIR}`);

  ensureDir(TEMP_DIR);

  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1920 });

  for (let i = 1; i <= LINE_COUNT; i++) {
    const htmlFile = path.join(STACKED_DIR, `line-${i}.html`);
    const pngOut   = path.join(TEMP_DIR, `line-${i}.png`);

    if (!fs.existsSync(htmlFile)) {
      throw new Error(`Missing HTML file: ${htmlFile}`);
    }

    const fileUrl = 'file:///' + htmlFile.replace(/\\/g, '/');
    await page.goto(fileUrl);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    await page.screenshot({
      path: pngOut,
      omitBackground: true,  // transparent PNG — required for FFmpeg alpha compositing
    });

    console.log(`  ✓ line-${i}.png  (reveal at t=${REVEAL_TIMES[i - 1]}s)`);
  }

  await browser.close();
  console.log('All line PNGs captured.');
}

// ─── Step 2: Extract background first frame (for cover) ──────────────────────

function extractBgFrame() {
  console.log('\n═══ Step 2: Verifying background image ═══');

  if (!fs.existsSync(BG_IMAGE)) {
    throw new Error(`Background image not found: ${BG_IMAGE}`);
  }

  console.log(`  ✓ ${BG_IMAGE}`);
  return BG_IMAGE;
}

// ─── Step 3: Build the stacked reveal video ───────────────────────────────────
//
// Two-pass approach:
//   Pass A: filter_complex → MJPEG intermediate (no x264 in the same process)
//   Pass B: MJPEG intermediate → H.264 MP4 (no complex filter, x264 alone)
//
// Reason: x264 malloc fails intermittently when initialised alongside a large
// filter_complex on Windows (FFmpeg 8 / memory fragmentation). Separating the
// filter graph from the encoder eliminates the simultaneous allocation spike.

function buildStackedReveal() {
  console.log('\n═══ Step 3: Building stacked reveal video ═══');
  console.log(`  Total duration: ${TOTAL_DUR}s  |  Lines: ${LINE_COUNT}`);
  console.log(`  Reveal times:   [${REVEAL_TIMES.join(', ')}]s`);
  console.log(`  All visible at: ${ALL_VISIBLE_AT}s  |  Fade out: ${FADE_OUT_ST}s`);

  ensureDir(OUTPUT_DIR);

  const intermediate = path.join(TEMP_DIR, 'reveal_intermediate.avi');

  // FFmpeg inputs string
  const bgInput = `-loop 1 -t ${TOTAL_DUR + 1} -i "${ffPath(BG_IMAGE)}"`;
  const lineInputs = Array.from({ length: LINE_COUNT }, (_, i) => {
    const png = path.join(TEMP_DIR, `line-${i + 1}.png`);
    return `-r ${FRAME_RATE} -loop 1 -t ${TOTAL_DUR + 1} -i "${ffPath(png)}"`;
  }).join(' ');

  // bg: scale to output size, explicit yuv420p before fades.
  const bgFilter = [
    `[0:v]`,
    `scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,`,
    `format=yuv420p,`,
    `fade=in:st=0:d=${FADE_IN_DUR},`,
    `fade=out:st=${FADE_OUT_ST}:d=${FADE_OUT_DUR}`,
    `[bg]`,
  ].join('');

  // Each line PNG: fade in at reveal time, fade out with the background.
  const lineFilters = REVEAL_TIMES.map((t, i) =>
    `[${i + 1}:v]format=rgba,fade=in:st=${t}:d=${REVEAL_DUR}:alpha=1,fade=out:st=${FADE_OUT_ST}:d=${FADE_OUT_DUR}:alpha=1[l${i + 1}]`
  ).join('; ');

  // Overlay chain. Final overlay uses format=yuv420 so the intermediate is
  // in a standard YUV pixel format that MJPEG and x264 both accept cleanly.
  const overlayChain = Array.from({ length: LINE_COUNT }, (_, i) => {
    const inA    = i === 0 ? 'bg'       : `c${i}`;
    const inB    = `l${i + 1}`;
    const isLast = i === LINE_COUNT - 1;
    const outL   = isLast ? 'out' : `c${i + 1}`;
    const filter = isLast ? `overlay=format=yuv420` : `overlay=format=auto`;
    return `[${inA}][${inB}]${filter}[${outL}]`;
  }).join('; ');

  const filterComplex = `"${bgFilter}; ${lineFilters}; ${overlayChain}"`;

  // Pass A — render full filter_complex to MJPEG AVI intermediate
  run(
    `ffmpeg -y ` +
    `${bgInput} ` +
    `${lineInputs} ` +
    `-filter_complex ${filterComplex} ` +
    `-map "[out]" ` +
    `-t ${TOTAL_DUR} ` +
    `-r ${FRAME_RATE} ` +
    `-c:v mjpeg -q:v 2 ` +
    `-an ` +
    `"${ffPath(intermediate)}"`,
    `Pass A — render to MJPEG intermediate`
  );

  // Pass B — re-encode MJPEG intermediate to H.264 MP4
  run(
    `ffmpeg -y ` +
    `-i "${ffPath(intermediate)}" ` +
    `-c:v libx264 -preset medium -crf 18 ` +
    `-maxrate 8000k -bufsize 8000k ` +
    `-pix_fmt yuv420p ` +
    `-movflags +faststart ` +
    `-an ` +
    `"${ffPath(FINAL_VIDEO)}"`,
    `Pass B — encode to H.264 MP4`
  );

  console.log(`\n✓ Video: ${FINAL_VIDEO}`);
}

// ─── Step 4: Produce cover JPEG ──────────────────────────────────────────────

function produceCover(bgFrame) {
  console.log('\n═══ Step 4: Producing cover JPEG ═══');
  console.log('  Cover = BG first frame + all 7 lines composited (fully revealed state).');

  // Chain all 7 line PNGs onto the background frame in a single FFmpeg command.
  // This produces the "all lines visible" state as the cover frame.
  const linePngs = Array.from({ length: LINE_COUNT }, (_, i) =>
    `-i "${ffPath(path.join(TEMP_DIR, `line-${i + 1}.png`))}"`
  ).join(' ');

  // Build overlay chain: bg → overlay l1 → overlay l2 → ... → out
  const coverChain = Array.from({ length: LINE_COUNT }, (_, i) => {
    const inA  = i === 0 ? '0:v'      : `cc${i}`;
    const inB  = `${i + 1}:v`;
    const outL = i === LINE_COUNT - 1 ? 'cout' : `cc${i + 1}`;
    return `[${inA}][${inB}]overlay=format=auto[${outL}]`;
  }).join('; ');

  run(
    `ffmpeg -y ` +
    `-i "${ffPath(bgFrame)}" ` +
    `${linePngs} ` +
    `-filter_complex "${coverChain}" ` +
    `-map "[cout]" ` +
    `-q:v 2 -update 1 ` +
    `"${ffPath(FINAL_COVER)}"`,
    'Composite cover JPEG (all lines revealed)'
  );

  console.log(`✓ Cover: ${FINAL_COVER}`);
}

// ─── Step 5: Mix audio track ──────────────────────────────────────────────────

function mixAudio(videoPath, totalDur) {
  if (!AUDIO_TRACK) {
    console.log('\n═══ Step 5: Audio mixing skipped (AUDIO_TRACK not set) ═══');
    return;
  }

  console.log(`\n═══ Step 5: Mixing audio — ${path.basename(AUDIO_TRACK)} ═══`);

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
    `-ss ${AUDIO_OFFSET} -i "${ffPath(AUDIO_TRACK)}" ` +
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

// ─── Step 6: Cleanup ──────────────────────────────────────────────────────────

function cleanup() {
  console.log('\n═══ Step 6: Cleaning up temp files ═══');
  fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  console.log('✓ Temp files removed.');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

(async () => {
  console.log('═══════════════════════════════════════════════════════');
  console.log('  build-stacked-reveal.js — sr-pdh-grow-001');
  console.log('  Format C — Stacked Reveal');
  console.log(`  Lines: ${LINE_COUNT}  |  Total: ${TOTAL_DUR}s`);
  console.log(`  Reveal times: [${REVEAL_TIMES.join(', ')}]s`);
  console.log('═══════════════════════════════════════════════════════');

  try {
    // Step 1: Screenshot line HTML files
    await screenshotLines();

    // Step 2: Extract BG first frame for cover
    const bgFrame = extractBgFrame();

    // Step 3: Render stacked reveal video
    buildStackedReveal();

    // Step 4: Cover JPEG
    produceCover(bgFrame);

    // Step 5: Mix audio into video
    mixAudio(FINAL_VIDEO, TOTAL_DUR);

    // Step 6: Cleanup
    cleanup();

    console.log('\n╔═════════════════════════════════════════════════════╗');
    console.log('║  BUILD COMPLETE                                     ║');
    console.log('╚═════════════════════════════════════════════════════╝');
    console.log('  Format C — Stacked Reveal:');
    console.log(`    ${FINAL_VIDEO}`);
    console.log(`    ${FINAL_COVER}`);
    console.log('');
    console.log('Next steps:');
    console.log('  1. Review sr-pdh-grow-001.mp4 — verify reveal timing and text positions.');
    console.log('  2. Asset Manager intake for Format C package.');
    console.log('  3. Analyst — issue A/B test brief (Format A vs Format C).');

  } catch (err) {
    console.error('\n✗ Build failed:', err.message);
    process.exit(1);
  }
})();
