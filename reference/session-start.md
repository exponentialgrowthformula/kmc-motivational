# Session Start — @exponentialgrowthformula_

**Last updated:** 2026-04-14 (session-012)
**Update this file at the end of every session.**

---

## Current Status

### Content-001 "You Are Not Behind"

| Format | Status | Files |
|---|---|---|
| Format A — Slide-Style Reel (`cr-`) | **APPROVED** | `cr-pdh-grow-001.mp4` + cover → `/assets/staging/production/` |
| Format B — Audio Carousel (`cp-`) | **APPROVED** | `cp-pdh-grow-001-slide-01..06.jpg` → `/assets/staging/production/` |
| Format C — Stacked Reveal (`sr-`) | **APPROVED** | `sr-pdh-grow-001.mp4` + cover → `/assets/staging/production/` |

**Format C spec:** `bg-pdh-007-amber-sky-wide.jpg` · outlined text (`-webkit-text-stroke: 1.5px #0F0802` + `paint-order: stroke fill`) · 1.9s line interval · 15.0s total

### Asset Library (as of 2026-04-08)

19/52 image target. PDH: 7, DFC: 6, DWR: 4, SNL: 2, DET: 0, DIW: 0. Video loops: PDH ×2.

---

## Next Actions

1. ~~**Setup: GitHub repo**~~ — **DONE** (session-012). Repo: https://github.com/exponentialgrowthformula/kmc-motivational. Raw URLs operational. GitHub CLI authenticated as `exponentialgrowthformula`.
2. **Setup: Postiz MCP** — Install and configure Postiz for Instagram scheduling. Postiz is the publish mechanism for all three formats (ig-mcp cannot be used — music must be added pre-publish, which requires a draft creation flow the Graph API does not support). ← next session
3. **Publisher** — Once Postiz + Drive are operational, schedule content-001. All 3 formats approved in staging. A/B test brief filed at `analytics/ab-test-brief-001.md`. Publishing sequence: Variant A (Format A) Day 0 → Variant B (Format C) Day 5 → Format B Day 10.
4. **SEO Agent** — Confirm replacement hashtag set for Variant B (Format C) before Day 5. P-3 is assigned to Variant A only.
5. **Asset sourcing** — DET + DIW prompts not yet developed; SNL/PDH/DFC/DWR gaps remain toward 52-image target.
6. **Token refresh** — Access token valid until 2026-06-13. Set calendar reminder before that date.

---

## Key File Pointers

| What | Path |
|---|---|
| **This file** | `reference/session-start.md` |
| Content Brief 001 | `content-briefs/content-brief-001.md` |
| Discoverability Brief 001 | `content-briefs/discoverability-brief-001.md` |
| Staging Package Brief 001 | `assets/staging/content-001-package-brief.md` |
| Verification archive | `assets/staging/archive/content-001-verification-archive.md` |
| Build script (Format A+B) | `scripts/build-reel.js` |
| Build script (Format C) | `scripts/build-stacked-reveal.js` |
| Format C HTML overlays | `scripts/stacked-outline/` (line-1..7.html) |
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
- **Background for content-001 Formats A+B:** `bg-pdh-001-sway-slow.mp4` (BGV-PDH-004)
- **Background for content-001 Format C:** `bg-pdh-007-amber-sky-wide.jpg` (BGI-PDH-017) — static image
- **Dark Earth aesthetic:** locked. Warm dark NOT cool dark. `#1C1612` bg / `#F0EAD9` text / `#C9973A` accent
- **Text outline standard:** `-webkit-text-stroke` must always pair with `paint-order: stroke fill` — preserves letterforms
- **Instagram safe zone:** No text below y=1400px in 1920px frame — bottom ~400px crops in feed preview
- **Hashtag set P-3** used on post 001 — do not reuse on post 002
- **Build tools:** Node.js v24.13.1, FFmpeg v8.0.1, Playwright MCP. Python not installed — use `uv run`.
- **Instagram Graph API:** Meta App configured. App ID `1710348726649294`, IG Account ID `17841479343890092`. All 4 credentials secured by operator. Long-lived access token valid until **2026-06-13** — refresh before that date. ig-mcp operational — live API confirmed session-010.
- **Account type:** Creator (not Business) — preserves music library access for Reels.
