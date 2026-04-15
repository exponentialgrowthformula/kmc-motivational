# Content-001 Verification Archive

**Archived:** 2026-04-11
**Source:** assets/staging/content-001-package-brief.md
**Reason:** QA verification complete. Tables archived to reduce active document size.
**Verdict:** All assets approved 2026-04-09. No blocking flags.

---

## Physical File Intake — 2026-04-09

All 8 files confirmed present in `/assets/staging/production/`:

| File | Expected | Actual | Status |
|---|---|---|---|
| `cr-pdh-grow-001.mp4` | MP4, ~31s, under 650MB | MP4, 26.4s, 16MB | Confirmed |
| `cr-pdh-grow-001-cover.jpg` | JPEG, 1080x1920px | JPEG, 130KB | Confirmed |
| `cp-pdh-grow-001-slide-01.jpg` | JPEG, 1080x1920px | JPEG, 130KB | Confirmed |
| `cp-pdh-grow-001-slide-02.jpg` | JPEG, 1080x1920px | JPEG, 133KB | Confirmed |
| `cp-pdh-grow-001-slide-03.jpg` | JPEG, 1080x1920px | JPEG, 132KB | Confirmed |
| `cp-pdh-grow-001-slide-04.jpg` | JPEG, 1080x1920px | JPEG, 139KB | Confirmed |
| `cp-pdh-grow-001-slide-05.jpg` | JPEG, 1080x1920px | JPEG, 141KB | Confirmed |
| `cp-pdh-grow-001-slide-06.jpg` | JPEG, 1080x1920px | JPEG, 120KB | Confirmed |

**Duration note:** Anticipated ~31s; actual 26.4s. No minimum Reel duration constraint applies. Approved as delivered.

**Format B scope note:** The original staging brief described only Format A. Format B (6-slide carousel JPEG set) was produced as an additional format. Both use content-001, BGV-PDH-004, and the same copy set. No discrepancy.

---

## Overlay Text Cross-Check — 2026-04-07

All slide text confirmed matching between Content Brief and Asset Delivery Note. No discrepancies.

| Slide | Element | Status |
|---|---|---|
| Slide 1 | Hook anchor | Confirmed match |
| Slide 2 | Friction anchor | Confirmed match |
| Slide 3 | Reframe 1 anchor | Confirmed match |
| Slide 3 | Reframe 1 supporting | Confirmed match |
| Slide 4 | Reframe 2 anchor | Confirmed match |
| Slide 4 | Reframe 2 supporting | Confirmed match |
| Slide 5 | Identity-Vote anchor | Confirmed match |
| Slide 6 | Close anchor | Confirmed match |
| Slide 6 | Close supporting | Confirmed match |
| Slide 6 | CTA | Confirmed match |

**Annotation note (non-blocking):** CB design note for Slide 4 contains alternate phrasing "That is the version you were handed" — this is in the design note annotation only, not the overlay text field. ADN correctly implements the overlay text field. No action required.

---

## Platform Design Spec Compliance — 2026-04-07

### Safe Zones

| Check | Spec | ADN | Status |
|---|---|---|---|
| Top UI clearance (y=0–150px) | No text | No text on any slide | Confirmed |
| Top anchor clearance (y=150–250px) | Nav only | Slide numbers at y=270px | Confirmed |
| Slide 1 anchor top edge | Below y=250px | ~y=513px | Confirmed |
| Left/right insets | x=80–1000px | All text within 900px column | Confirmed |
| Bottom UI boundary | No text below y=1670px | Slide 6 CTA bottom ~y=1605px | Confirmed |
| Feed crop (4:5: y=285–1635px) | All critical text within | All anchors y=513–1078px; CTA ~1605px | Confirmed |

### Typography

| Element | Spec | ADN | Status |
|---|---|---|---|
| Slide 1 anchor | CG Medium 500, 88–96px, #F0EAD9, 1.15lh | 88px, -0.5px tracking | Confirmed |
| Slides 2–5 anchor | CG Medium 500, 72–88px | 76px / 76px / 74px / 72px | Confirmed |
| Slide 6 anchor | CB instructs 88–96px | 92px | Confirmed |
| Anchor accent word | CG Medium 500, #C9973A | Slide 5 "built" — 72px, #C9973A | Confirmed |
| Supporting line | DM Sans Light 300, 32–40px, #C8BBA8 | 36px (S3, S6), 34px (S4) | Confirmed |
| CTA text | DM Sans Light 300, 28–32px, +1px tracking | 30px, +1px, #C8BBA8 | Confirmed |
| Slide number | DM Sans Regular 400, 22–26px, +1.5px | 24px, +1.5px, #C8BBA8 | Confirmed |

### Export Settings

MP4, H.264, 1080x1920px, 23.976fps, 6000k target bitrate (3500k–8000k range), AAC, 128kbps min, sRGB, under 650MB. All confirmed.

### Cover Frame

JPEG, 1080x1920px, Slide 1 overlay applied. Anchor at 88px within grid visible zone (y=420–1500px). Grid crop check passed.

### Transitions

Fade in 0.5s | Hold at black 0.15s | Fade out 0.5s | Text entrance: 0.5–0.6s ease-in-out simultaneous with slide fade-in. All confirmed.

### Other

- Background loop (BGV-PDH-004): continuous across all slides. Confirmed.
- Audio: not embedded. Routed to Publisher. Confirmed.
- Naming convention: `cr-pdh-grow-001.mp4`, `cr-pdh-grow-001-cover.jpg`, `cp-pdh-grow-001-slide-01..06.jpg`. All confirmed compliant.

**Operator production flags (non-blocking):**
- Em dash preservation on Slides 2 and 4 — input manually if tool auto-converts (Unicode U+2014).
- Slide 5 anchor block bottom ~y=1078px — verify against y=1150px lower content zone boundary.
- Gold accent on Slide 5 ("built") — confirmed warranted per CB instruction and BSG Section 5.5.
