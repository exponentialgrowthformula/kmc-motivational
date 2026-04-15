# Staging Package Brief — Content 001 — "You Are Not Behind"
**Prepared by:** Asset Manager
**Date:** 2026-04-07
**Last updated:** 2026-04-13 — Format C (Stacked Reveal) intake completed. All three formats now approved. Package is complete and ready for Publishing.
**Status:** COMPLETE — Format A (Slide-Style Reel), Format B (Audio Carousel), and Format C (Stacked Reveal Reel) all approved and ready for publishing. Publisher may schedule any or all three formats.

---

## Quick Reference

- **Format A:** APPROVED — `cr-pdh-grow-001.mp4` + `cr-pdh-grow-001-cover.jpg` → `/assets/staging/production/`
- **Format B:** APPROVED — `cp-pdh-grow-001-slide-01..06.jpg` → `/assets/staging/production/`
- **Format C:** APPROVED — `sr-pdh-grow-001.mp4` + `sr-pdh-grow-001-cover.jpg` → `/assets/staging/production/`
- **Background (Format A + B):** `bg-pdh-001-sway-slow.mp4` (BGV-PDH-004)
- **Background (Format C):** `bg-pdh-007-amber-sky-wide.jpg` (BGI-PDH-017) — static image
- **Audio (Format A):** `calm-piano-indie-483190.mp3` — baked into MP4 at build time. Do not add a second track.
- **Audio (Format B):** Added in Instagram app at post time (required for Reels tab eligibility)
- **Audio (Format C):** `perky-piano-512261.mp3` — baked into MP4 at build time. Do not add a second track.

---

## Content Reference

| Field | Value |
|---|---|
| Content ID | content-001 |
| Title | "You Are Not Behind" |
| Format | Triple-format package: Format A (Slide-Style Reel) + Format B (Audio Carousel) + Format C (Stacked Reveal Reel) |
| Content Brief | `content-briefs/content-brief-001.md` |
| Asset Delivery Note | `content-briefs/asset-delivery-note-001.md` |
| Asset Manager Verification | Completed 2026-04-07 (spec compliance) + 2026-04-09 (physical file intake, Formats A+B) + 2026-04-13 (Format C intake) |

---

## Files Approved — Format A: Instagram Reel

| Asset ID | File Name | Format | File Size | Status | Location |
|---|---|---|---|---|---|
| CPA-001-A1 | `cr-pdh-grow-001.mp4` | MP4, H.264, 1080x1920px, 26.4s | 16MB | Approved 2026-04-09 | `/assets/staging/production/` |
| CPA-001-A2 | `cr-pdh-grow-001-cover.jpg` | JPEG, 1080x1920px | 130KB | Approved 2026-04-09 | `/assets/staging/production/` |

**Note on duration:** The brief anticipated approximately 31 seconds. Actual rendered duration is 26.4 seconds. This is within spec (no minimum duration constraint for Reels) and does not constitute a discrepancy requiring escalation. The file is approved as delivered.

---

## Files Approved — Format B: Audio Carousel

| Asset ID | File Name | Format | File Size | Status | Location |
|---|---|---|---|---|---|
| CPA-001-B1 | `cp-pdh-grow-001-slide-01.jpg` | JPEG, 1080x1920px | 130KB | Approved 2026-04-09 | `/assets/staging/production/` |
| CPA-001-B2 | `cp-pdh-grow-001-slide-02.jpg` | JPEG, 1080x1920px | 133KB | Approved 2026-04-09 | `/assets/staging/production/` |
| CPA-001-B3 | `cp-pdh-grow-001-slide-03.jpg` | JPEG, 1080x1920px | 132KB | Approved 2026-04-09 | `/assets/staging/production/` |
| CPA-001-B4 | `cp-pdh-grow-001-slide-04.jpg` | JPEG, 1080x1920px | 139KB | Approved 2026-04-09 | `/assets/staging/production/` |
| CPA-001-B5 | `cp-pdh-grow-001-slide-05.jpg` | JPEG, 1080x1920px | 141KB | Approved 2026-04-09 | `/assets/staging/production/` |
| CPA-001-B6 | `cp-pdh-grow-001-slide-06.jpg` | JPEG, 1080x1920px | 120KB | Approved 2026-04-09 | `/assets/staging/production/` |

**Naming convention note:** Format B files use prefix `cp-` (Carousel Post) to distinguish them from the `cr-` (Carousel Reel) Format A files. Both share the same scene/pillar/sequence codes: `pdh-grow-001`.

---

## Files Approved — Format C: Stacked Reveal Video Reel

| Asset ID | File Name | Format | File Size | Status | Location |
|---|---|---|---|---|---|
| CPA-001-C1 | `sr-pdh-grow-001.mp4` | MP4, H.264, 1080x1920px, 16.8s | 1.0MB | Approved 2026-04-13 (rebuilt 2026-04-15 — beat-sync timing + audio baked in) | `/assets/staging/production/` |
| CPA-001-C2 | `sr-pdh-grow-001-cover.jpg` | JPEG, 1080x1920px | 123KB | Approved 2026-04-13 | `/assets/staging/production/` |

**Format C production details:**
- Background: `bg-pdh-007-amber-sky-wide.jpg` (BGI-PDH-017) — static image, not the video loop used in Formats A+B
- Typography: Cormorant Garamond 500, #F0EAD9, 1.5px dark outline (#0F0802) with paint-order: stroke fill
- 7 lines, instant pop reveal (no fade). Beat interval 1.1625s (Canva-verified, 3/4 feel). Pattern: lines 1–2 × 1 beat, lines 3–6 × 2 beats, line 7 × 4 beat hold. Audio offset 2 beats. Total 16.8s.
- Build script: `scripts/build-stacked-reveal.js`
- HTML source: `scripts/stacked-outline/` (lines 1–7)
- QC approved 2026-04-12 — 8 frames extracted, all 7 lines clean, gold accent confirmed
- Rebuilt 2026-04-15: beat-sync timing dialled to `perky-piano-512261`, audio baked in via FFmpeg

**Audio routing:** `perky-piano-512261.mp3` baked into MP4 at build time (vol 0.25, 2-beat audio offset). Do not add a second audio track in the Instagram app.

---

## Background Asset

**Format A + Format B:** `bg-pdh-001-sway-slow.mp4` — Asset ID: BGV-PDH-004
- Location: `/assets/backgrounds/video-loops/`
- Approval Status: Approved
- Use in Format A: Continuous ambient background loop across all 6 slides. Runs uninterrupted — does not restart per slide.
- Use in Format B: Background used to produce the static JPEG slides. The video loop is not present in the carousel files themselves; background is rendered into each slide as a still frame.

**Format C:** `bg-pdh-007-amber-sky-wide.jpg` — Asset ID: BGI-PDH-017
- Location: `/assets/backgrounds/images/`
- Approval Status: Approved
- Note: luminous mid-frame zone — text placement confined to the darker upper portion. Compatible with stacked reveal single-screen layout.

**Fallback 1 (if primary unavailable for Format A/B):** `bg-pdh-004-double-glow.jpg` — Asset ID: BGI-PDH-013
- Approval Status: Approved
- If using static fallback, apply a very subtle slow zoom-out (Ken Burns, 102% to 100% scale over full reel duration). This is the only permitted motion treatment on the static.

**Fallback 2:** `bg-pdh-007-amber-sky-wide.jpg` — Asset ID: BGI-PDH-017
- Approval Status: Approved. Note: this background has limited template compatibility (hook, CTA, single reel, quote templates only — full body template not viable due to luminous mid-frame zone). Acceptable as a last resort for this piece given the anchor-heavy slide compositions but not preferred. Now used as primary for Format C.

---

## Audio Routing

**Audio is baked into Format A and Format C MP4 files at build time.** No manual audio selection is required at publish for Reels. Do not add a second audio track in the Instagram app.

| Format | Track | Volume | Source |
|---|---|---|---|
| Format A (`cr-`) | `calm-piano-indie-483190.mp3` | 0.25 (25%) | Pixabay CC0 |
| Format C (`sr-`) | `perky-piano-512261.mp3` | 0.25 (25%) | Pixabay CC0 |
| Format B (`cp-`) | Added in Instagram app at post time | Low | Instagram native library |

**Format B audio:** Format B (audio carousel) is the only format requiring manual audio selection. Add music from the Instagram native library at posting time — this is what grants Reels tab eligibility for the carousel. Preferred tracks: "I Speak Blessings" (Delana Hope) or "Resiliencia" (instrumental). Fallback: most-played instrumental from the "mindset" or "personal growth" trending shelf at time of posting.

**Build scripts:** Audio is mixed via FFmpeg `mixAudio()` in `scripts/build-reel.js` (Format A) and `scripts/build-stacked-reveal.js` (Format C). `AUDIO_TRACK` and `MUSIC_VOL` constants at the top of each script control track selection and volume for future builds.

---

## Publisher Instructions — Format A: Instagram Reel

Upload `cr-pdh-grow-001.mp4` as an Instagram Reel via ig-mcp. Audio is baked in — no in-app audio step required.

**ig-mcp publish note:** `publish_media` requires a publicly accessible URL. Commit the file to the public GitHub repo (master branch) first, then use:
`https://raw.githubusercontent.com/kirstiemc/kmc-motivational/master/assets/staging/production/cr-pdh-grow-001.mp4`

**Pre-scheduling checklist for Format A:**
- [ ] Commit `cr-pdh-grow-001.mp4` to GitHub (master) — required before ig-mcp can access the file
- [ ] Publish via ig-mcp `publish_media` with `video_url` (raw GitHub URL above) and `caption` (see Section 1 of the approval package)
- [ ] Audio is already baked in — do NOT add a second audio track in the Instagram app
- [ ] Confirm caption complete: includes "identity shift" in first line, secondary keywords in body, CTA, hashtag set P-3 (#identityshift #personalgrowthjourney #mindsetshift) at end — separated by single line break below CTA
- [ ] Log hashtag set P-3 as used on post 001. Do not use P-3 or repeat any of these three tags on post 002.
- [ ] Notify Analyst immediately upon publish — AB-001 measurement window begins at publish time
- [ ] Register AB-001 as Active in `/analytics/test-log.md`

---

## Publisher Instructions — Format B: Audio Carousel

Upload the 6 JPEG slides (`cp-pdh-grow-001-slide-01.jpg` through `cp-pdh-grow-001-slide-06.jpg`) as a standard carousel POST — not as a Reel. Upload in slide order (01 through 06).

Add music from the Instagram library within the post creation flow. Adding music to this image-only carousel post makes it eligible to appear in the Reels tab, expanding reach beyond the standard carousel audience. This is confirmed platform behaviour (verified by Researcher — see `research/audio-carousel-reels-feed-brief-001.md`).

**Account type requirement:** This feature requires a Creator account with full Instagram music library access. Business accounts have restricted music library access. Creator account status is confirmed for this account.

**Pre-scheduling checklist for Format B:**
- [ ] Upload 6 JPEG slides in order (slide-01 through slide-06) as a carousel POST
- [ ] Add music from Instagram native library at time of posting — select from approved audio options (see Audio Routing above)
- [ ] Confirm music is added before posting — this is what grants Reels tab eligibility
- [ ] Apply alt text: "Personal growth quote: identity shift — bold white text over a cinematic background. For people working on becoming who they know they can be."
- [ ] Confirm caption complete — same caption as Format A applies (hashtag set P-3, CTA, keyword placement)
- [ ] Note: if both formats are being posted, coordinate caption and hashtag use across both posts so hashtag rotation rules are respected. Consult the content calendar and Publishing Agent for sequencing guidance.
- [ ] Confirm scheduling timing against content calendar

---

## Publisher Instructions — Format C: Stacked Reveal Reel

Upload `sr-pdh-grow-001.mp4` as an Instagram Reel via ig-mcp. Audio (`perky-piano-512261.mp3`) is baked into the MP4 — do not add a second audio track in the Instagram app.

**ig-mcp publish note:** `publish_media` requires a publicly accessible URL. Commit the file to the public GitHub repo (master branch) first, then use:
`https://raw.githubusercontent.com/kirstiemc/kmc-motivational/master/assets/staging/production/sr-pdh-grow-001.mp4`

**Pre-scheduling checklist for Format C:**
- [ ] Commit `sr-pdh-grow-001.mp4` to GitHub (master) — required before ig-mcp can access the file
- [ ] Publish via ig-mcp `publish_media` with `video_url` (raw GitHub URL above) and `caption`
- [ ] Set cover image: manually select `sr-pdh-grow-001-cover.jpg` — do not allow Instagram to auto-select a frame
- [ ] Disable auto-captions at upload — this account uses text overlays, not auto-generated captions
- [ ] Audio is already baked in — do NOT add a second audio track in the Instagram app
- [ ] Apply alt text: "Personal growth quote: identity shift — bold white text over a cinematic background. For people working on becoming who they know they can be."
- [ ] Confirm caption complete — same caption structure as Format A. Coordinate hashtag use with Format A scheduling so hashtag rotation rules are respected. Consult the content calendar.
- [ ] Note: Format C is the primary format for A/B testing against Format A. Analyst to issue A/B test brief before scheduling to confirm test parameters and sequencing.
- [ ] Confirm scheduling timing against content calendar

---

## Asset Manager Verification

**Status:** All 10 files approved. No blocking flags. Full spec compliance confirmed.
- Formats A + B: verified 2026-04-07 (spec compliance) + 2026-04-09 (physical file intake)
- Format C: verified 2026-04-13 (physical file intake; QC approved 2026-04-12)

**Full verification tables (Formats A+B):** [assets/staging/archive/content-001-verification-archive.md](assets/staging/archive/content-001-verification-archive.md)
