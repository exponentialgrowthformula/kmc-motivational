# Session Start — @exponentialgrowthformula_

**Last updated:** 2026-04-15 (session-014)
**Update this file at the end of every session.**

---

## Current Status

### Content-001 "You Are Not Behind"

| Format | Status | Files | Audio |
|---|---|---|---|
| Format A — Slide-Style Reel (`cr-`) | **READY TO PUBLISH** | `cr-pdh-grow-001.mp4` + cover → `/assets/staging/production/` | `calm-piano-indie-483190.mp3` baked in |
| Format B — Audio Carousel (`cp-`) | **READY TO PUBLISH** | `cp-pdh-grow-001-slide-01..06.jpg` → `/assets/staging/production/` | Manual in Instagram app at post time |
| Format C — Stacked Reveal (`sr-`) | **READY TO PUBLISH** | `sr-pdh-grow-001.mp4` + cover → `/assets/staging/production/` | `perky-piano-512261.mp3` baked in |

**Audio strategy (session-013):** Audio baked into Format A + C MP4s at build time via FFmpeg `mixAudio()`. No manual audio step at publish. Format B still requires in-app audio (needed for Reels tab eligibility). Full details in `assets/staging/content-001-package-brief.md`.

**A/B test framing (session-013):** AB-001 is a total-vibe package test — Format A and C differ intentionally on visual, background, duration, and audio. Not a single-variable test. See `analytics/ab-test-brief-001.md`.

**Format C spec:** `bg-pdh-007-amber-sky-wide.jpg` · outlined text (`-webkit-text-stroke: 1.5px #0F0802` + `paint-order: stroke fill`) · 16.8s total
**Format C timing (perky-piano-512261):** Beat = 1.1625s (3/4 feel, Canva-verified). Instant pop (no fade). Lines 1–2 × 1 beat, lines 3–6 × 2 beats, line 7 × 4 beat hold. Audio offset 2 beats (2.325s). Timing is track-specific — alternate tracks need custom timing.

### Asset Library (as of 2026-04-08)

19/52 image target. PDH: 7, DFC: 6, DWR: 4, SNL: 2, DET: 0, DIW: 0. Video loops: PDH ×2.

### Audio Library (as of 2026-04-15)

6 tracks in `assets/audio/` — all Pixabay CC0, free for commercial Instagram use:

| File | Theme | Assigned to |
|---|---|---|
| `calm-piano-indie-483190.mp3` | Calm, indie piano | Format A (content-001) |
| `calm-romantic-piano-375974.mp3` | Calm, romantic piano | Unassigned |
| `perky-piano-512261.mp3` | Perky piano | Format C (content-001) |
| `upbeat-orchestra-481663.mp3` | Upbeat orchestral | Unassigned |
| `upbeat-piano-495642.mp3` | Upbeat piano | Unassigned |
| `upbeat-synthwave-398285.mp3` | Upbeat synthwave | Unassigned |

---

## Next Actions

1. ~~**Setup: GitHub repo**~~ — **DONE** (session-012).
2. ~~**Setup: Postiz MCP**~~ — **DECIDED AGAINST** (session-013). Postiz cloud: $29/mo minimum. Self-hosted: requires Temporal (v2.12+). Buffer: free but still manual. **Decision: bake audio via FFmpeg → publish direct via ig-mcp.**
3. ~~**Audio sourcing + build**~~ — **DONE** (session-013). 6 tracks sourced from Pixabay CC0. `mixAudio()` added to both build scripts. content-001 Formats A + C rebuilt with audio.
4. ~~**Format C beat-sync timing**~~ — **DONE** (session-014). Beat interval 1.1625s measured via Canva. Instant pop (no fade). Pattern: lines 1–2 × 1 beat, lines 3–6 × 2 beats, line 7 × 4 beat hold. Audio offset 2 beats. Timing locked to perky-piano-512261 — alternate tracks need custom timing.
5. **Publisher — Publish content-001** — All 3 formats ready. Publish via ig-mcp. Sequence: Variant A (Format A) Day 0 → Variant B (Format C) Day 5 → Format B Day 10. **ig-mcp requires a public URL — commit production files to GitHub first, then use `raw.githubusercontent.com/kirstiemc/kmc-motivational/master/assets/staging/production/<filename>` as the video_url.** ← **next action**
6. ~~**SEO Agent** — Confirm replacement hashtag set for Variant B (Format C) before Day 5.~~ **DONE** (session-015). P-6 assigned to Variant B: `#innerwork #selfgrowth #becomingbetter`. Written to `content-briefs/discoverability-brief-001b.md`.
7. **Asset sourcing** — DET + DIW prompts not yet developed; SNL/PDH/DFC/DWR gaps remain toward 52-image target.
8. **Token refresh** — Access token valid until 2026-06-13. Refresh before that date.

---

## Key File Pointers

| What | Path |
|---|---|
| **This file** | `reference/session-start.md` |
| Content Brief 001 | `content-briefs/content-brief-001.md` |
| Discoverability Brief 001 | `content-briefs/discoverability-brief-001.md` |
| Staging Package Brief 001 | `assets/staging/content-001-package-brief.md` |
| A/B Test Brief 001 | `analytics/ab-test-brief-001.md` |
| Verification archive | `assets/staging/archive/content-001-verification-archive.md` |
| Build script (Format A+B) | `scripts/build-reel.js` |
| Build script (Format C) | `scripts/build-stacked-reveal.js` |
| Format C HTML overlays | `scripts/stacked-outline/` (line-1..7.html) |
| Audio library | `assets/audio/` |
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
- **Audio strategy:** Bake into MP4 at build time via FFmpeg (`AUDIO_TRACK` + `MUSIC_VOL` constants in each build script). Format B exception — audio added in Instagram app for Reels tab eligibility.
- **Format C timing is track-specific:** `AUDIO_OFFSET` + `HOLD_DURS` in `build-stacked-reveal.js` are dialled to the backing track's beat interval (measured via Canva). Each new track requires its own timing profile. Current profile locked to `perky-piano-512261` (beat = 1.1625s, 3/4 feel).
- **A/B test framing:** AB-001 tests total format vibe (visual + audio + duration as a package), not a single isolated variable. Intentional.
- **Audio library:** `assets/audio/` — flat structure. Tracks must be CC0 or equivalent for commercial Instagram use. Pixabay CC0 confirmed.
- **Approved background assets move out of `intake/`** — build script paths reference the parent folder, not `intake/`.
- **Dark Earth aesthetic:** locked. Warm dark NOT cool dark. `#1C1612` bg / `#F0EAD9` text / `#C9973A` accent
- **Text outline standard:** `-webkit-text-stroke` must always pair with `paint-order: stroke fill` — preserves letterforms
- **Instagram safe zone:** No text below y=1400px in 1920px frame — bottom ~400px crops in feed preview
- **Hashtag set P-3** used on post 001 (Variant A) — do not reuse. Variant B needs a fresh set from SEO Agent before Day 5.
- **Build tools:** Node.js v24.13.1, FFmpeg v8.0.1, Playwright MCP. Python not installed — use `uv run`.
- **Instagram Graph API:** Meta App configured. App ID `1710348726649294`, IG Account ID `17841479343890092`. All 4 credentials secured by operator. Long-lived access token valid until **2026-06-13** — refresh before that date. ig-mcp operational — live API confirmed session-010.
- **Account type:** Creator (not Business) — preserves music library access for Reels.
