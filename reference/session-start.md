# Session Start — @exponentialgrowthformula_

**Last updated:** 2026-04-21 (session-025)
**Update this file at the end of every session. In the Upcoming Triggers table: delete completed rows immediately — do not mark done, just remove the row. The table should only show pending actions.**

---

## Upcoming Triggers

| Date | Action |
|---|---|
| **DECISION NEEDED** | Strategy Director — Format B carousel publish blocked: Instagram Graph API has deprecated `CAROUSEL_ALBUM` media type — error 100/2207023 regardless of image dimensions. Confirmed 2026-04-22 via direct API testing. Slides rebuilt at 4:5 (1080×1350) are staged and ready. Options: (1) post manually via Instagram app (fully functional — recommended), (2) retire Format B. See `reference/ig-api-notes.md` for full diagnosis. |
| **2026-04-21** | Publisher — publish content-002 Format A (slot 5 — pipeline dependent) |
| **2026-04-21** | Analyst — pull content-003 Format C 24h read (posted Apr 20) |
| **2026-04-22** | Analyst — pull content-004 Format C 24h read (posted Apr 21) |
| **2026-04-22** | Analyst — pull Variant A 7-day read (001-A posted Apr 15) |
| **2026-04-23** | Publisher — publish content-001 Format C `sr-pdh-grow-001.mp4`, hashtag P-4: `#growthmindset #selfgrowth #becomingbetter` (slot 7 — AB-001 Variant B) |
| **2026-04-24** | Analyst — pull Variant B (001-C) 24h read (posted Apr 23) |
| **2026-04-27** | Analyst — pull content-003 Format C 7-day read |
| **2026-04-28** | Analyst — pull content-004 Format C 7-day read |
| **2026-04-30** | Analyst — pull Variant B (001-C) 7-day read, begin AB-001 evaluation |
| **2026-04-30–May 2** | Analyst — deliver AB-001 findings in Weekly Insight Brief |
| **2026-06-13** | Token refresh — Instagram access token expires, refresh before this date |

---

## Current Status

### Content-001 "You Are Not Behind"

| Format | Status | Files |
|---|---|---|
| Format A — Slide-Style Reel (`cr-`) | **PUBLISHED 2026-04-15** — Media ID `18077728049544507` | `cr-pdh-grow-001.mp4` → `/assets/published/2026-04/instagram/` |
| Format B — Audio Carousel (`cp-`) | **BLOCKED — Instagram Graph API has deprecated `CAROUSEL_ALBUM` media type (error 100/2207023). Slides rebuilt at 4:5 (1080×1350) and staged. Manual in-app posting is the only viable path. Strategy Director decision required.** | `cp-pdh-grow-001-slide-01..06.jpg` → `/assets/staging/production/` |
| Format C — Stacked Reveal (`sr-`) | **READY — publish 2026-04-23** (AB-001 Variant B) | `sr-pdh-grow-001.mp4` → `/assets/staging/production/` |

**Audio:** Format A + C have audio baked in — do not add a second track in-app. Format B requires in-app audio at post time (Reels tab eligibility). See `assets/staging/content-001-package-brief.md`.

**Format B BLOCKER (updated 2026-04-22):** Instagram Graph API has deprecated `CAROUSEL_ALBUM` as a media type — error 100/2207023, message "The media type 'CAROUSEL_ALBUM' is unknown." Confirmed via direct API testing with correct token across API versions v19.0 and v22.0. This is NOT an aspect ratio issue — child container creation succeeds, carousel container creation fails regardless of image dimensions. Slides have been rebuilt at 4:5 (1080×1350) and are committed to GitHub master. The rebuild is complete. Only the publish path is blocked. Options: (1) Post manually via Instagram app (recommended — fully functional, app supports carousel even though API does not); (2) Retire Format B for API publishing. Strategy Director decision required. See `reference/ig-api-notes.md` for full diagnosis.

**A/B test:** AB-001 measurement window started 2026-04-15. Format A vs Format C — total vibe package test. See `analytics/ab-test-brief-001.md`.

### Content-002 "The Permission You Were Never Waiting For"

| Item | Status |
|---|---|
| Trend Report 002 | **DONE** — `research/trend-report-002.md` |
| Raw Hashtag Observations 002 | **DONE** — `research/raw-hashtag-observations-002.md` |
| Discoverability Brief 002 | **DONE** — `seo/discoverability-brief-002.md` · Hashtag set P-5 |
| Content Brief 002 — Format C | **APPROVED** — `content-briefs/content-brief-002.md` |
| Format C Build 002 | **PUBLISHED 2026-04-16** — Media ID `18093691952146858` — `sr-dfc-worth-002.mp4` → `/assets/published/2026-04/instagram/` |
| Content Brief 002 — Format A (slide-style) | **APPROVED** — appended to `content-briefs/content-brief-002.md` |
| Content Brief 002 — Format B (audio carousel) | **APPROVED** — uses Format A overlay, confirmed in `content-briefs/content-brief-002.md` |

**Pillar:** Confidence & Self-Worth
**Format C overlay (approved):**
Line 1: You have been waiting for permission.
Line 2: For someone else to say you're right.
Line 3: That someone was always you.
Line 4: The waiting was a choice you made.
Line 5: Every day you waited, you decided.
Line 6: Self-worth is not earned — it is claimed.
Line 7: The permission was always yours to give.

---

### Content-003 "Attention Is the Practice"

| Item | Status |
|---|---|
| Content Brief 003 — all formats | **APPROVED** — `content-briefs/content-brief-003.md` |
| Discoverability Brief 003 | **DONE** — appended to `content-briefs/content-brief-003.md` · Hashtag set P-7 |
| Format C Build 003 | **PUBLISHED 2026-04-20** — Media ID `17856363339650516` — `sr-dfc-manif-003.mp4` → `assets/published/2026-04/instagram/` |
| Format A Build 003 | **BLOCKED** — needs slide HTML files (Designer) + audio track selection (Publisher) |
| Format B Build 003 | **BLOCKED** — depends on Format A |

**Pillar:** Manifestation
**Format C build spec:** scrimOpacity 0.55, font-size 52px, background `bg-dfc-005-raking-light-forest.jpg`, audio `perky-piano-512261.mp3`
**Hashtag set:** P-7 (`#manifestation #abundancemindset #manifestationjournal`)

---

### Content-004 "What You Notice Grows"

| Item | Status |
|---|---|
| Content Brief 004 — all formats | **APPROVED** — `content-briefs/content-brief-004.md` |
| Discoverability Brief 004 | **DONE** — appended to `content-briefs/content-brief-004.md` · Hashtag set P-8 |
| Format C Build 004 | **PUBLISHED 2026-04-21** — Media ID `17905711623404988` — `sr-dwr-grat-004.mp4` → `/assets/published/2026-04/instagram/` |
| Format A Build 004 | **BLOCKED** — needs slide HTML files (Designer) |
| Format B Build 004 | **BLOCKED** — depends on Format A |

**Pillar:** Gratitude
**Format C build spec:** background `bg-dwr-004-rocky-shore-glow.jpg`, scrimOpacity 0, audio `perky-piano-512261.mp3`
**Hashtag set:** P-8 (`#gratitude #gratitudepractice #positivemindset`)

---

### Content-005 "Scarcity Sounds Like This"

| Item | Status |
|---|---|
| Content Brief 005 — all formats | **APPROVED** — `content-briefs/content-brief-005.md` |
| Discoverability Brief 005 | **DONE** — appended to `content-briefs/content-brief-005.md` · Hashtag set P-9 |
| Format C Build 005 | **STAGED 2026-04-21** — `sr-pdh-abnd-005.mp4` + `sr-pdh-abnd-005-cover.jpg` → `assets/staging/production/` |
| Format A Build 005 | **BLOCKED** — needs slide HTML files (Designer) |
| Format B Build 005 | **BLOCKED** — depends on Format A |

**Pillar:** Abundance Mindset
**Format C build spec:** background `bg-pdh-005-mid-glowup.jpg`, scrimOpacity 0, audio `perky-piano-512261.mp3`
**Cover note:** Cover extracted from video frame (t=12s) — source image `bg-pdh-005-mid-glowup.jpg` is 5412×8118 and OOMs the cover compositor. Downscale this image before next use.
**Hashtag set:** P-9 (`#mindset #wealthmindset #scarcitymindset`)

---

### Content-006 "The Real Prize"

| Item | Status |
|---|---|
| Content Brief 006 — all formats | **APPROVED** — `content-briefs/content-brief-006.md` |
| Discoverability Brief 006 | **DONE** — appended to `content-briefs/content-brief-006.md` · Hashtag set P-10 |
| Format C Build 006 | **STAGED 2026-04-21** — `sr-pdh-bizg-006.mp4` + `sr-pdh-bizg-006-cover.jpg` → `assets/staging/production/` |
| Format A Build 006 | **BLOCKED** — needs slide HTML files (Designer) |
| Format B Build 006 | **BLOCKED** — depends on Format A |

**Pillar:** Business Growth
**Format C build spec:** background `bg-pdh-001-horiz-amber-band.jpg`, scrimOpacity 0, audio `perky-piano-512261.mp3`
**Hashtag set:** P-10 (`#entrepreneurmindset #solopreneur #timeiswealth`)

---

### Content-007 "Confidence Is a Daily Choice"

| Item | Status |
|---|---|
| Content Brief 007 — all formats | **APPROVED** — `content-briefs/content-brief-007.md` |
| Discoverability Brief 007 | **DONE** — appended to `content-briefs/content-brief-007.md` · Hashtag set P-11 |
| Format C Build 007 | **STAGED 2026-04-21** — `sr-dfc-worth-007.mp4` + `sr-dfc-worth-007-cover.jpg` → `assets/staging/production/` |
| Format A Build 007 | **BLOCKED** — needs slide HTML files (Designer) |
| Format B Build 007 | **BLOCKED** — depends on Format A |

**Pillar:** Confidence & Self-Worth
**Format C build spec:** background `bg-dfc-004-amber-backlight-forest.jpg`, scrimOpacity 0.45, audio `perky-piano-512261.mp3`
**Background note:** Brief calls for "soft warm interior light through window" — no matching asset in library. Used `bg-dfc-004-amber-backlight-forest.jpg` as closest available warm/intimate DFC image.
**Hashtag set:** P-11 (`#selflove #selfconfidence #confidencejourney`)

---

### Asset Library (as of 2026-04-08)

19/52 image target. PDH: 7, DFC: 6, DWR: 4, SNL: 2, DET: 0, DIW: 0. Video loops: PDH ×2. Audio: 6 tracks in `assets/audio/` — all Pixabay CC0.

---

## Next Actions

1. **Content-001 Format B BLOCKED — manual post required** — Instagram Graph API has deprecated `CAROUSEL_ALBUM` (error 100/2207023 — "media type unknown"). Confirmed 2026-04-22 via direct API testing. Slides rebuilt at 4:5 (1080×1350) are committed to GitHub master and staged. API publishing is not possible. Strategy Director decision: post manually via Instagram app or retire Format B. If posting manually: use caption from `content-briefs/content-brief-001.md` (em dashes removed — see caption below), P-6 hashtags: `#personaldevelopment #selfimprovement #selfimprovementdaily`. Add music in-app. See `reference/ig-api-notes.md`.
2. **Publish content-001 Format C** — 2026-04-23 (AB-001 Variant B). Use P-4 (`#growthmindset #selfgrowth #becomingbetter`). ig-mcp URL: `https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/sr-pdh-grow-001.mp4`.
3. **Analyst — pull 001-A 7-day read** — 2026-04-22.
4. **Analyst — pull 001-C 24h read** — 2026-04-24 (after Format C publishes Apr 23).
5. **Format C builds 004–007 DONE** — all staged in `assets/staging/production/`. See content entries above.
6. **Format A + B Designer work (002–007)** — 6 pieces × 6 slides = 36 slide HTML files needed in `scripts/slides-002/` through `scripts/slides-007/`. Plus build configs per piece per format. Run builds sequentially (not parallel — OOM risk).
7. **Content-003 Format A + B** — Designer to produce `scripts/slides-003/` HTML files. Publisher to select audio track (not perky-piano). Then Build Engineer runs `content-003-format-a.json` (to be created).
8. **Content-002 Format A + B builds** — same pipeline dependency as above.
9. **Downscale `bg-pdh-005-mid-glowup.jpg`** — currently 5412×8118, OOMs the cover compositor. Resize to ≤3000×4000 before next use in any build.
10. **Asset sourcing** — DET + DIW prompts not yet developed; SNL/PDH/DFC/DWR gaps remain toward 52-image target.
11. **Token refresh** — Access token valid until 2026-06-13. Refresh before that date. See `reference/ig-api-notes.md`.

---

## Key File Pointers

| What | Path |
|---|---|
| **This file** | `reference/session-start.md` |
| Content Brief 001 | `content-briefs/content-brief-001.md` |
| Content Brief 002 (Format C approved) | `content-briefs/content-brief-002.md` |
| Content Brief 003 | `content-briefs/content-brief-003.md` |
| Discoverability Brief 002 | `seo/discoverability-brief-002.md` |
| Trend Report 002 | `research/trend-report-002.md` |
| Discoverability Brief 001 (Format A) | `content-briefs/discoverability-brief-001.md` |
| Discoverability Brief 001b (Format C) | `content-briefs/discoverability-brief-001b.md` |
| Staging Package Brief 001 | `assets/staging/content-001-package-brief.md` |
| A/B Test Brief 001 | `analytics/ab-test-brief-001.md` |
| Build script (unified) | `scripts/build.js` — accepts config name e.g. `node build.js content-002-format-c` |
| Build configs | `scripts/configs/` — one JSON per content piece per format |
| ig-mcp API notes | `reference/ig-api-notes.md` — patches, token expiry, metrics |
| Hashtag rotation tracker | `seo/hashtag-rotation.md` |
| Overlay HTML (Format C — content-002) | `scripts/stacked-outline-002/line-1..7.html` |
| Asset status log | `assets/asset-status-log.md` |
| AI prompt library | `assets/ai-prompt-library.md` |
| Brand quick reference | `brand/brand-quick-reference.md` |
| Platform tech reference | `brand/platform-tech-reference.md` |
| System overview | `reference/system-overview.md` |
| Agent task schedule | `reference/agent-task-schedule.md` |
| File index | `reference/file-index.md` |

---

## Active Decisions / Constraints

- **Three-format strategy** locked: Format C (sr-) primary, Format A (cr-) A/B test, Format B (cp-) companion
- **Signal hierarchy:** Watch time / completion rate > DM shares > Saves
- **Audio strategy:** Bake into MP4 at build time via FFmpeg. Format B exception — audio added in Instagram app for Reels tab eligibility.
- **Format C timing is track-specific:** `AUDIO_OFFSET` + `HOLD_DURS` in build scripts are dialled to the backing track. Current profile locked to `perky-piano-512261` (beat = 1.1625s). Alternate tracks need custom timing.
- **Format C design paradigm (locked from content-002):** No gold accent — all lines `#F0EAD9`. Final line (line N) uses slow fade reveal (~2.3s / 2 beats) as the emphasis device instead of color. Lines 1 to N-1 remain instant pop (0.042s). Documented in `reference/system-overview.md` and `/_archive/platform-design-spec.md`.
- **File naming convention:** `{format}-{bg-category}-{pillar}-{sequence}`. Pillar codes: `grow` (Personal Growth), `worth` (Confidence & Self-Worth). Documented in `assets/asset-status-log.md`.
- **A/B test framing:** AB-001 tests total format vibe (visual + audio + duration as a package), not a single isolated variable. Intentional.
- **Hashtag rotation:** P-3 used on content-001 Format A. P-4 (`#growthmindset #selfgrowth #becomingbetter`) assigned to content-001 Format C (Variant B). P-5 (`#personalgrowth #selfworth #innerwork #ownyourvalue`) assigned to content-002. P-7 (`#manifestation #abundancemindset #manifestationjournal`) used on content-003 Format C. See `seo/hashtag-sets.md`.
- **Dark Earth aesthetic:** locked. Warm dark NOT cool dark. `#1C1612` bg / `#F0EAD9` text / `#C9973A` accent
- **Text outline standard:** `-webkit-text-stroke` must always pair with `paint-order: stroke fill` — preserves letterforms
- **Instagram safe zone:** No text below y=1400px in 1920px frame — bottom ~400px crops in feed preview
- **Build tools:** Node.js v24.13.1, FFmpeg v8.0.1, Playwright MCP. Python not installed — use `uv run`.
- **Instagram Graph API:** Meta App configured. App ID `1710348726649294`, IG Account ID `17841479343890092`. Access token valid until **2026-06-13**. ig-mcp operational — Reel publish confirmed session-016.
- **ig-mcp patch (session-016):** Two changes applied to `C:/Users/kirst/github/ig-mcp/src/instagram_client.py` — (1) `media_type=REELS` on video container creation, (2) `use_cache=False` on container status poll. NOT committed upstream — must be reapplied if ig-mcp is reinstalled.
- **ig-mcp pydantic fix (2026-04-22):** `PublishCarouselRequest` in `src/models/instagram_models.py` had invalid `@field_validator("image_url", "video_url")` referencing non-existent fields. Removed. Model now loads correctly.
- **Instagram carousel API constraint (confirmed 2026-04-22):** Instagram Graph API does NOT support 9:16 (1080x1920) images in carousel posts — error 100/2207023 on carousel container creation. API minimum is 4:5 portrait (1080x1350). The in-app Instagram carousel allows 9:16, but the API does not. All Format B slides must be built at 4:5 for API publishing. Alternative: post Format B manually via Instagram app.
- **ig-mcp Reels metrics (session-020/021):** `ig_reels_avg_watch_time` and `ig_reels_video_view_total_time` are the operative Reels metrics. `plays` has been removed from Instagram Graph API v22.0+ — requesting it returns error #100. `video_views` also does not work for Reels. Implied plays = `ig_reels_video_view_total_time` ÷ `ig_reels_avg_watch_time`. Completion rate = `ig_reels_avg_watch_time (ms)` ÷ video duration (ms). Durations: 001-A ÷26400, 001-C (Variant B) ÷16800, 002-C ÷19076. NOT committed upstream.
- **ig-mcp video URL:** `https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/<filename>` — org is `exponentialgrowthformula`, not `kirstiemc`.
- **Account type:** Creator (not Business) — preserves music library access for Reels.
