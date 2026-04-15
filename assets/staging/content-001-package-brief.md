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
- **Audio:** "I Speak Blessings" (Delana Hope) or "Resiliencia" — Publisher selects at scheduling

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
| CPA-001-C1 | `sr-pdh-grow-001.mp4` | MP4, H.264, 1080x1920px, 15.0s | 837KB | Approved 2026-04-13 | `/assets/staging/production/` |
| CPA-001-C2 | `sr-pdh-grow-001-cover.jpg` | JPEG, 1080x1920px | 123KB | Approved 2026-04-13 | `/assets/staging/production/` |

**Format C production details:**
- Background: `bg-pdh-007-amber-sky-wide.jpg` (BGI-PDH-017) — static image, not the video loop used in Formats A+B
- Typography: Cormorant Garamond 500, #F0EAD9, 1.5px dark outline (#0F0802) with paint-order: stroke fill
- 7 lines, 1.9s interval between reveals (1.1s hold + 0.8s fade per line), line 7 hold 2.3s, total 15.0s
- Build script: `scripts/build-stacked-reveal.js` (primary, updated to these settings)
- HTML source: `scripts/stacked-outline/` (lines 1–7)
- QC approved 2026-04-12 — 8 frames extracted, all 7 lines clean, gold accent confirmed

**Audio routing:** No audio baked in — Publisher adds music in the Instagram app at time of posting (same as Format A).

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

Audio selection is NOT embedded in any asset format. It is the Publisher's responsibility at scheduling time for Formats A, B, and C.

**Preferred options (from Content Brief and Discoverability Brief):**
1. "I Speak Blessings" — Delana Hope (confirm availability in Instagram native audio library at time of scheduling)
2. "Resiliencia" — instrumental version (confirm availability in Instagram native audio library at time of scheduling)

**Fallback rule:** If neither track is available, select the most-played instrumental from the "mindset" or "personal growth" trending audio shelf at the time of scheduling. Do not delay the post for audio.

**Audio settings the Publisher must apply (all formats):**
- Track must be instrumental only — no lyrics
- Volume: low (atmosphere, not dominant)
- Tempo: 50–90 BPM ambient or lo-fi range
- Audio fade-in: 1 second at reel start
- Audio fade-out: 1 second at reel end
- Source requirement: Instagram native audio library or Artlist/Artgrid track with a social media license that explicitly covers Instagram Reels. Do not use tracks sourced from YouTube, SoundCloud, or unverified sources.

---

## Publisher Instructions — Format A: Instagram Reel

Upload `cr-pdh-grow-001.mp4` as an Instagram Reel. This is a video file with no audio baked in. Audio must be added in the Instagram app at time of posting.

**Pre-scheduling checklist for Format A:**
- [ ] Upload `cr-pdh-grow-001.mp4` as a Reel
- [ ] Set cover image: manually select `cr-pdh-grow-001-cover.jpg` at upload — do not allow Instagram to auto-select a frame from the video
- [ ] Disable auto-captions at upload — this account uses text overlays, not auto-generated captions
- [ ] Add audio track from approved options (see Audio Routing above); apply fades
- [ ] Apply alt text: "Personal growth quote: identity shift — bold white text over a cinematic background. For people working on becoming who they know they can be."
- [ ] Confirm caption complete: includes "identity shift" in first line, secondary keywords in body, CTA "Save this when you need a reminder that you are not behind", hashtag set P-3 (#identityshift #personalgrowthjourney #mindsetshift) at end — separated by single line break below CTA
- [ ] Log hashtag set P-3 as used on post 001. Do not use P-3 or repeat any of these three tags on post 002.
- [ ] Confirm scheduling timing against content calendar

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

Upload `sr-pdh-grow-001.mp4` as an Instagram Reel. This is a video file with no audio baked in. Audio must be added in the Instagram app at time of posting.

**Pre-scheduling checklist for Format C:**
- [ ] Upload `sr-pdh-grow-001.mp4` as a Reel
- [ ] Set cover image: manually select `sr-pdh-grow-001-cover.jpg` at upload — do not allow Instagram to auto-select a frame from the video
- [ ] Disable auto-captions at upload — this account uses text overlays, not auto-generated captions
- [ ] Add audio track from approved options (see Audio Routing above); apply fades
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
