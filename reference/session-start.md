# Session Start — @exponentialgrowthformula_

**Last updated:** 2026-04-20 (session-024)
**Update this file at the end of every session.**

---

## Upcoming Triggers

| Date | Action |
|---|---|
| **2026-04-20** | Publisher — publish content-001 Format B carousel `cp-pdh-grow-001-slide-01..06.jpg`, add music in-app, use P-6 (slot 4) |
| **2026-04-21** | Publisher — publish content-002 Format A (slot 5 — pipeline dependent) |
| **2026-04-21** | Analyst — pull content-003 Format C 24h read (posted Apr 20) |
| **2026-04-22** | Analyst — pull Variant A 7-day read (001-A posted Apr 15) |
| **2026-04-23** | Publisher — publish content-001 Format C `sr-pdh-grow-001.mp4`, hashtag P-4: `#growthmindset #selfgrowth #becomingbetter` (slot 7 — AB-001 Variant B) |
| **2026-04-24** | Analyst — pull Variant B (001-C) 24h read (posted Apr 23) |
| **2026-04-27** | Analyst — pull content-003 Format C 7-day read |
| **2026-04-30** | Analyst — pull Variant B (001-C) 7-day read, begin AB-001 evaluation |
| **2026-04-30–May 2** | Analyst — deliver AB-001 findings in Weekly Insight Brief |
| **2026-06-13** | Token refresh — Instagram access token expires, refresh before this date |

---

## Current Status

### Content-001 "You Are Not Behind"

| Format | Status | Files |
|---|---|---|
| Format A — Slide-Style Reel (`cr-`) | **PUBLISHED 2026-04-15** — Media ID `18077728049544507` | `cr-pdh-grow-001.mp4` → `/assets/published/2026-04/instagram/` |
| Format B — Audio Carousel (`cp-`) | **READY — publish 2026-04-20** | `cp-pdh-grow-001-slide-01..06.jpg` → `/assets/staging/production/` |
| Format C — Stacked Reveal (`sr-`) | **READY — publish 2026-04-23** (AB-001 Variant B) | `sr-pdh-grow-001.mp4` → `/assets/staging/production/` |

**Audio:** Format A + C have audio baked in — do not add a second track in-app. Format B requires in-app audio at post time (Reels tab eligibility). See `assets/staging/content-001-package-brief.md`.

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

### Asset Library (as of 2026-04-08)

19/52 image target. PDH: 7, DFC: 6, DWR: 4, SNL: 2, DET: 0, DIW: 0. Video loops: PDH ×2. Audio: 6 tracks in `assets/audio/` — all Pixabay CC0.

---

## Next Actions

1. **Publish content-001 Format B** — 2026-04-20 (today). Carousel post (not Reel). Add music in-app. Use P-6. Move slides to `assets/published/2026-04/instagram/` after confirming live.
2. **Publish content-001 Format C** — 2026-04-23 (AB-001 Variant B). Use P-4 (`#growthmindset #selfgrowth #becomingbetter`). ig-mcp URL: `https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/sr-pdh-grow-001.mp4`.
3. **Analyst — pull 001-A 7-day read** — 2026-04-22.
4. **Analyst — pull 001-C 24h read** — 2026-04-24 (after Format C publishes Apr 23).
5. **Run Format C builds for 004–006** — configs exist in `scripts/configs/`. Trigger build-engineer subagent per content piece.
6. **Content-003 Format A + B** — Designer to produce `scripts/slides-003/` HTML files. Publisher to select audio track (not perky-piano). Then Build Engineer runs `content-003-format-a.json` (to be created).
7. **Content-002 Format A + B builds** — same pipeline dependency as above.
8. **Asset sourcing** — DET + DIW prompts not yet developed; SNL/PDH/DFC/DWR gaps remain toward 52-image target.
9. **Token refresh** — Access token valid until 2026-06-13. Refresh before that date. See `reference/ig-api-notes.md`.

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
- **ig-mcp Reels metrics (session-020/021):** `ig_reels_avg_watch_time` and `ig_reels_video_view_total_time` are the operative Reels metrics. `plays` has been removed from Instagram Graph API v22.0+ — requesting it returns error #100. `video_views` also does not work for Reels. Implied plays = `ig_reels_video_view_total_time` ÷ `ig_reels_avg_watch_time`. Completion rate = `ig_reels_avg_watch_time (ms)` ÷ video duration (ms). Durations: 001-A ÷26400, 001-C (Variant B) ÷16800, 002-C ÷19076. NOT committed upstream.
- **ig-mcp video URL:** `https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/<filename>` — org is `exponentialgrowthformula`, not `kirstiemc`.
- **Account type:** Creator (not Business) — preserves music library access for Reels.
