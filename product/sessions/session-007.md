# Session 007
**Date:** 2026-04-13
**Phase coverage:** Phase 3 — Format C iteration, QC, and approval
**Session type:** Production iteration — background selection, text legibility, pacing optimisation

---

## Narrative Summary

This session picked up where the Format C (Stacked Reveal) build left off. The original `sr-pdh-grow-001.mp4` had been QC-approved in the prior session — but the operator wanted to explore alternate versions before committing to the canonical file. The session became a focused iteration loop: build variants, compare, approve one, archive the rest.

Three dimensions were tested in sequence: background, text legibility, and pacing.

**Background.** The original used `bg-pdh-004-double-glow.jpg` — a dark, warm image that matched the brand's Dark Earth aesthetic closely but left little contrast for light text. The operator wanted to test `bg-pdh-007-amber-sky-wide.jpg` (an amber sunset landscape with a bright horizon band) as an alternative. This became v2.

**Text legibility.** The operator identified that similar Instagram accounts use a thin outline around white/cream text to allow it to pop against varied backgrounds. This is standard practice for faceless quote accounts with light backgrounds — the outline separates the letterform from any colour behind it regardless of tonal value. The initial implementation used `-webkit-text-stroke` alone, which produced degraded letterforms: the stroke is centred on the glyph edge, so half bleeds inward and destroys the fine serifs of Cormorant Garamond. The fix was `paint-order: stroke fill` — this draws the stroke first (behind), then the fill on top, so only the outward halo of the stroke is visible. Letterforms are preserved. The HTML overlay files were separated into a `stacked-outline/` directory to keep the original `stacked/` files intact.

**Pacing.** Three pacing variants emerged from the comparison:
- v1: 2.6s between lines (original), total 20.9s
- v2: same 2.6s pacing, amber sky, outlined text — the clean comparison baseline
- v3: 1.9s between lines (compressed to match a 15s video background), total 15.0s

The faster pacing was preferred. A direct pacing comparison was then run using the same static background in both v2 and v3, eliminating background as a variable. The 1.9s pacing was approved.

v3 was promoted to canonical (`sr-pdh-grow-001.mp4`), the primary build script was updated to match its settings, and the variants were archived.

The "Save this." CTA was also removed this session — it sat at y=1560px (near the bottom of the 1920px frame) and was unreadable in Instagram's cropped preview area.

By end of session: Format C is fully approved and at canonical state. Asset Manager intake is running.

---

## Structured Log

### Files Changed This Session

| File | Change |
|---|---|
| `scripts/stacked-outline/line-1..7.html` | Created — outline versions of line HTML files (`-webkit-text-stroke: 1.5px #0F0802` + `paint-order: stroke fill`) |
| `scripts/stacked/line-7.html` | "Save this." CTA div removed |
| `scripts/stacked-outline/line-7.html` | "Save this." CTA div removed |
| `scripts/build-stacked-reveal.js` | Updated: STACKED_DIR → `stacked-outline/`, BG → `bg-pdh-007-amber-sky-wide.jpg`, HOLD_DURS → [1.1×6, 2.3] |
| `scripts/archive/build-stacked-reveal-v2.js` | Archived variant build script |
| `scripts/archive/build-stacked-reveal-v3.js` | Archived variant build script |
| `assets/staging/production/sr-pdh-grow-001.mp4` | Replaced — now the approved v3 build |
| `assets/staging/production/sr-pdh-grow-001-cover.jpg` | Replaced — cover from approved v3 build |
| `assets/staging/archive/sr-variants/sr-pdh-grow-001-v1.*` | Archived — original dark bg, no outline, 20.9s |
| `assets/staging/archive/sr-variants/sr-pdh-grow-001-v2.*` | Archived — amber sky, outline, 20.9s |

---

### Approved Format C Spec

| Parameter | Value |
|---|---|
| Background | `bg-pdh-007-amber-sky-wide.jpg` (BGI-PDH-007) |
| Font | Cormorant Garamond 500, 52px, #F0EAD9 |
| Text outline | `-webkit-text-stroke: 1.5px #0F0802` + `paint-order: stroke fill` |
| Accent | `#C9973A` on "becoming." (line 7) |
| Line interval | 1.9s (0.8s fade-in + 1.1s hold) |
| Line 7 hold | 2.3s |
| Total duration | 15.0s |
| Fade in/out | 0.5s each |
| Build script | `scripts/build-stacked-reveal.js` |
| HTML source | `scripts/stacked-outline/` |

---

### Technical Learning — `-webkit-text-stroke` and `paint-order`

**Problem:** `-webkit-text-stroke` alone degrades thin serif letterforms. The stroke is centred on the glyph path — half the stroke width bleeds inward into the fill, narrowing strokes and destroying hairline serifs (especially damaging for Cormorant Garamond at 52px).

**Fix:** Add `paint-order: stroke fill` to the same element. The browser renders the stroke first (as a layer behind), then paints the fill on top. Result: only the outward half of the stroke is visible. The letterform fill is untouched.

**When to apply:** Any time `-webkit-text-stroke` is used with an elegant or thin-stroked serif font at any size. With robust sans-serifs the inward bleed is less noticeable, but `paint-order: stroke fill` is still the correct implementation.

---

### Pacing Comparison — What Was Tested

| Version | Interval | Hold per line | Line 7 hold | Total |
|---|---|---|---|---|
| v1 (original) | 2.6s | 1.8s | 4.0s | 20.9s |
| v2 (amber sky, slow) | 2.6s | 1.8s | 4.0s | 20.9s |
| v3 (amber sky, fast) | 1.9s | 1.1s | 2.3s | 15.0s |

**Decision:** v3 pacing approved. Faster cadence suits the stacked reveal format — the progressive build reads as momentum, not patience.

---

### "Save this." CTA — Removed

The CTA was positioned at y=1560px in a 1920px frame. Instagram crops Reels in the feed preview, and this location falls in or near the cropped zone. It was also visually weak at 30px/Light 300 weight against the amber sky. Removed from both `stacked/` and `stacked-outline/` line-7 files.

**Implication for future content:** CTAs placed in the lower ~400px of the frame risk being cropped in feed preview. If a CTA is needed, position it no lower than y=1400px, or consider overlaying it via caption rather than as a visual element.

---

## Open Items Entering Next Session

| Item | Owner | Status |
|---|---|---|
| Asset Manager intake — Format C package | Asset Manager | Running |
| Analyst — A/B test brief (Format A vs Format C) | Analyst | Unblocked after intake |
| Publisher — Schedule content-001 (all 3 formats) | Publisher | Unblocked |
| Asset sourcing — DET, DIW, SNL gaps | SD | Ongoing |

---

## For the Product

- **Iteration over a single canonical file is the right workflow.** Rather than committing to one output and regretting it, the operator built three variants and compared them side-by-side. The build script parameterisation (swapping background path, hold durations, STACKED_DIR) made this fast. For a product template, this suggests the build script should expose a small config block at the top — background path, pacing constants, output name — so variants are easy to spin up without touching the core pipeline logic.

- **`paint-order: stroke fill` is a non-obvious fix that most people will not find without hitting the problem first.** Document it prominently in the typography chapter of the playbook. Any pipeline that renders text over variable backgrounds will eventually need outlined text, and anyone who reaches for `-webkit-text-stroke` without `paint-order` will produce degraded letterforms.

- **Instagram's safe zone matters for text placement.** The bottom ~400px of a 1920px frame is unreliable in feed preview. Design specs and build scripts should encode this constraint explicitly — either as a hard rule (no text below y=1400) or by testing every layout in the actual Instagram app before approving.

- **A direct variable-isolation test is faster than subjective comparison.** When the operator couldn't tell if they preferred the pacing or the background, the right move was to hold the background constant and test pacing alone. This is basic A/B hygiene — one variable at a time. The build system made this easy to do in under a minute.
