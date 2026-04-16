# Session Start — @exponentialgrowthformula_

**Last updated:** 2026-04-16 (session-019)
**Update this file at the end of every session.**

---

## Upcoming Triggers

| Date | Action |
|---|---|
| **2026-04-17** | Analyst — pull Variant A 48h read (Media ID `18077728049544507`) |
| **2026-04-17** | Analyst — pull Variant A 48h read |
| **2026-04-20** | Publisher — publish content-001 Format C (`sr-pdh-grow-001.mp4`), hashtag set P-4: `#growthmindset #selfgrowth #becomingbetter` |
| **2026-04-22** | Analyst — pull Variant A 7-day read + Variant B 24h read |
| **2026-04-25** | Publisher — publish Format B (carousel `cp-pdh-grow-001-slide-01..06.jpg`), add music in Instagram app at post time |
| **2026-04-27** | Analyst — pull Variant B 7-day read, begin AB-001 evaluation |
| **2026-04-27–29** | Analyst — deliver AB-001 findings in Weekly Insight Brief |
| **2026-06-13** | Token refresh — Instagram access token expires, refresh before this date |

---

## Current Status

### Content-001 "You Are Not Behind"

| Format | Status | Files |
|---|---|---|
| Format A — Slide-Style Reel (`cr-`) | **PUBLISHED 2026-04-15** — Media ID `18077728049544507` | `cr-pdh-grow-001.mp4` → `/assets/staging/production/` |
| Format B — Audio Carousel (`cp-`) | **READY — publish 2026-04-25** | `cp-pdh-grow-001-slide-01..06.jpg` → `/assets/staging/production/` |
| Format C — Stacked Reveal (`sr-`) | **READY — publish 2026-04-20** | `sr-pdh-grow-001.mp4` → `/assets/staging/production/` |

**Audio:** Format A + C have audio baked in — do not add a second track in-app. Format B requires in-app audio at post time (Reels tab eligibility). See `assets/staging/content-001-package-brief.md`.

**A/B test:** AB-001 measurement window started 2026-04-15. Format A vs Format C — total vibe package test. See `analytics/ab-test-brief-001.md`.

### Content-002 "The Permission You Were Never Waiting For"

| Item | Status |
|---|---|
| Trend Report 002 | **DONE** — `research/trend-report-002.md` |
| Raw Hashtag Observations 002 | **DONE** — `research/raw-hashtag-observations-002.md` |
| Discoverability Brief 002 | **DONE** — `seo/discoverability-brief-002.md` · Hashtag set P-5 |
| Content Brief 002 — Format C | **APPROVED** — `content-briefs/content-brief-002.md` |
| Format C Build 002 | **PUBLISHED 2026-04-16** — Media ID `18093691952146858` — `sr-dfc-worth-002.mp4` |
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

### Asset Library (as of 2026-04-08)

19/52 image target. PDH: 7, DFC: 6, DWR: 4, SNL: 2, DET: 0, DIW: 0. Video loops: PDH ×2. Audio: 6 tracks in `assets/audio/` — all Pixabay CC0.

---

## Next Actions

1. ~~**Post-publish housekeeping**~~ **DONE 2026-04-15** — (a) Format A logged in `/publishing/post-log.md`. (b) AB-001 registered as Active in `/analytics/test-log.md`. (c) Analyst notified in test-log — 24h read due 2026-04-16. (d) P-3 logged as used in rotation record (post-log).
2. **Publish Format C** — 2026-04-20. Use hashtag set P-4: `#growthmindset #selfgrowth #becomingbetter`. See `content-briefs/discoverability-brief-001b.md`. ig-mcp video URL: `https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/sr-pdh-grow-001.mp4`
3. **Publish Format B** — 2026-04-25. Carousel post (not Reel). Add music from Instagram native library at post time.
4. ~~**Content Brief 002 — Format A + B**~~ **DONE 2026-04-16** — Format A (6-slide slide-style Reel, `cr-`) and Format B (audio carousel, `cp-`) appended to `content-briefs/content-brief-002.md`. Both QA passed. Ready for Designer.
5. ~~**Build content-002 Format C**~~ **DONE 2026-04-16** — `sr-dfc-worth-002.mp4` built. DFC glowing tree background, 45% scrim, perky-piano audio, slow final-line reveal (2.3s). Ready to publish.
6. ~~**Publish content-002 Format C**~~ **DONE 2026-04-16** — Media ID `18093691952146858`. P-5 logged. Caption revised (em dash removed, punchy short-sentence style).
7. **Asset sourcing** — DET + DIW prompts not yet developed; SNL/PDH/DFC/DWR gaps remain toward 52-image target.
8. **Token refresh** — Access token valid until 2026-06-13. Refresh before that date.

---

## Key File Pointers

| What | Path |
|---|---|
| **This file** | `reference/session-start.md` |
| Content Brief 001 | `content-briefs/content-brief-001.md` |
| Content Brief 002 (Format C approved) | `content-briefs/content-brief-002.md` |
| Discoverability Brief 002 | `seo/discoverability-brief-002.md` |
| Trend Report 002 | `research/trend-report-002.md` |
| Discoverability Brief 001 (Format A) | `content-briefs/discoverability-brief-001.md` |
| Discoverability Brief 001b (Format C) | `content-briefs/discoverability-brief-001b.md` |
| Staging Package Brief 001 | `assets/staging/content-001-package-brief.md` |
| A/B Test Brief 001 | `analytics/ab-test-brief-001.md` |
| Build script (Format A+B) | `scripts/build-reel.js` |
| Build script (Format C — content-001) | `scripts/build-stacked-reveal.js` |
| Build script (Format C — content-002) | `scripts/build-stacked-reveal-002.js` |
| Overlay HTML (Format C — content-002) | `scripts/stacked-outline-002/line-1..7.html` |
| Asset status log | `assets/asset-status-log.md` |
| AI prompt library | `assets/ai-prompt-library.md` |
| Brand style guide | `brand/brand-style-guide.md` |
| Platform design spec | `brand/platform-design-spec.md` |
| System overview | `reference/system-overview.md` |
| Agent task schedule | `reference/agent-task-schedule.md` |
| File index | `reference/file-index.md` |

---

## Active Decisions / Constraints

- **Three-format strategy** locked: Format C (sr-) primary, Format A (cr-) A/B test, Format B (cp-) companion
- **Signal hierarchy:** Watch time / completion rate > DM shares > Saves
- **Audio strategy:** Bake into MP4 at build time via FFmpeg. Format B exception — audio added in Instagram app for Reels tab eligibility.
- **Format C timing is track-specific:** `AUDIO_OFFSET` + `HOLD_DURS` in build scripts are dialled to the backing track. Current profile locked to `perky-piano-512261` (beat = 1.1625s). Alternate tracks need custom timing.
- **Format C design paradigm (locked from content-002):** No gold accent — all lines `#F0EAD9`. Final line (line N) uses slow fade reveal (~2.3s / 2 beats) as the emphasis device instead of color. Lines 1 to N-1 remain instant pop (0.042s). Documented in `reference/system-overview.md` and `brand/platform-design-spec.md`.
- **File naming convention:** `{format}-{bg-category}-{pillar}-{sequence}`. Pillar codes: `grow` (Personal Growth), `worth` (Confidence & Self-Worth). Documented in `assets/asset-status-log.md`.
- **A/B test framing:** AB-001 tests total format vibe (visual + audio + duration as a package), not a single isolated variable. Intentional.
- **Hashtag rotation:** P-3 used on content-001 Format A. P-4 (`#growthmindset #selfgrowth #becomingbetter`) assigned to content-001 Format C (Variant B). P-5 (`#personalgrowth #selfworth #innerwork #ownyourvalue`) assigned to content-002. See `seo/hashtag-sets.md`.
- **Dark Earth aesthetic:** locked. Warm dark NOT cool dark. `#1C1612` bg / `#F0EAD9` text / `#C9973A` accent
- **Text outline standard:** `-webkit-text-stroke` must always pair with `paint-order: stroke fill` — preserves letterforms
- **Instagram safe zone:** No text below y=1400px in 1920px frame — bottom ~400px crops in feed preview
- **Build tools:** Node.js v24.13.1, FFmpeg v8.0.1, Playwright MCP. Python not installed — use `uv run`.
- **Instagram Graph API:** Meta App configured. App ID `1710348726649294`, IG Account ID `17841479343890092`. Access token valid until **2026-06-13**. ig-mcp operational — Reel publish confirmed session-016.
- **ig-mcp patch (session-016):** Two changes applied to `C:/Users/kirst/github/ig-mcp/src/instagram_client.py` — (1) `media_type=REELS` on video container creation, (2) `use_cache=False` on container status poll. NOT committed upstream — must be reapplied if ig-mcp is reinstalled.
- **ig-mcp video URL:** `https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/<filename>` — org is `exponentialgrowthformula`, not `kirstiemc`.
- **Account type:** Creator (not Business) — preserves music library access for Reels.
