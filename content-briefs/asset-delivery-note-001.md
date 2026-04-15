# Asset Delivery Note — You Are Not Behind — 2026-04-07

**Produced by:** Designer
**Date:** 2026-04-07
**Status:** Visual specification complete — ready for production

---

## Content Brief Reference

Content Brief: "You Are Not Behind" — 2026-04-07
Format: Instagram Carousel Reel — 6 slides, 9:16, 1080x1920px
Template set: T-CR-HOOK (Slide 1) + T-CR-BODY (Slides 2–5) + T-CR-CTA (Slide 6)

---

## Visual Specification — Full Production Brief

This section is written for a human operator building the final asset in Canva, CapCut, Adobe Express, After Effects, or equivalent. All design decisions are made here. The operator populates the templates and exports — no design judgment is required at the production stage.

Read this section in full before opening your production tool.

---

### Background Selection

**Primary recommendation: bg-pdh-001-sway-slow.mp4**

Use this single video loop as the background for all six slides. Visual continuity is the governing principle for this piece — "You Are Not Behind" is a single emotional arc. Varying the background across slides would interrupt that arc. One world, one ambient environment, one visual field for all six moments.

Rationale for bg-pdh-001-sway-slow.mp4 over the alternative approved loop (bg-pdh-002-cloud-peek.mp4):
- The "sway-slow" descriptor indicates ambient organic movement — this matches the Content Brief's direction of "a slow, almost imperceptible drift... The motion should feel like breathing, not animation."
- An amber band at the horizon provides the warm light source required by the Brand Style Guide and establishes the thematic environment: the moment before dawn, the moment before becoming.
- The loop plays beneath all text as a continuous, uninterrupted environment. The viewer stays in one world for the full carousel.

**If bg-pdh-001-sway-slow.mp4 is unavailable or unsuitable at production:** Use bg-pdh-004-double-glow.jpg (static) as the fallback. The double glow describes a pre-dawn horizon with two warm light sources — strong visual depth, strong amber presence, appropriate for the emotional arc of the piece. If using static, apply a very subtle slow zoom-out (Ken Burns, scale from 102% to 100% over the full duration of the reel) to provide the "breathing" movement the Content Brief specifies. This is the only motion treatment permitted on a static if the video loop is unavailable.

**Second fallback (static, single background for all slides):** bg-pdh-007-amber-sky-wide.jpg. Wide composition with amber sky gives strong text placement zone clearance in the upper 60% and a warmly lit lower third.

**Background must-verify at production:**
- Confirm the upper 60% of the frame (y=0 to y=1152px approximately) reads as dark warm charcoal with minimal detail. This is the text placement zone across all slides.
- The warm light (amber band / horizon glow) should be visible in the lower 40% of the frame — the light source is present but not competing with text.
- At first frame / loop start, the background should be at its most stable and compositionally dark — this frame becomes the feed thumbnail and cover image.

---

### Overlay Treatment — All Slides

**Vignette:** Apply the VIGNETTE layer on all six slides. Settings:
- Type: Radial gradient, darkest at center.
- Color: `#0E0A07` (shadow-depth)
- Center opacity: 25–35% (calibrate to the specific background loop frame — increase if the background has any midtone variation in the text zone, reduce if the background is already reliably dark in center)
- Outer edge opacity: 0%
- Purpose: This ensures `#F0EAD9` text maintains its full contrast ratio (target 10:1) even if the background loop includes a slightly lighter moment in the ambient movement cycle.

**No background fills.** Per Brand Style Guide Section 5.6, text sits directly on the image/vignette. No text boxes, frosted panels, or color fills behind any text element on any slide.

**No divider rules on this piece.** The emotional tone is continuous and flowing — a 1px rule would introduce a visual pause that works against the arc. Omit the DIVIDER RULE layer across all slides.

---

### Slide-by-Slide Typography and Placement Specification

All text is horizontally centered within the 900px text column (x=80px to x=1000px).
All measurements are from the top of the 1080x1920px canvas.

---

#### Slide 1 — Hook

**Template:** T-CR-HOOK
**Text:** "Somewhere along the way, you decided you were behind."
**Word count:** 11 words — use lower end of hook size range.

**ANCHOR LINE layer:**
- Typeface: Cormorant Garamond
- Weight: Medium (500)
- Size: 88px
- Line height: 1.15
- Letter spacing: -0.5px
- Color: `#F0EAD9`
- Alignment: Center
- Line break: Force break after "way," — three-line composition:
  - Line 1: "Somewhere along the way,"
  - Line 2: "you decided"
  - Line 3: "you were behind."
- Vertical placement: Anchor text block visually centered in the Upper Content Zone to Center Zone range (y=400px to y=950px). Target the visual midpoint of the text block at approximately y=680px. This shifts the composition upward from the default center-zone midpoint (y=875px) per the Content Brief direction: "This line should occupy the upper-center of the frame to ensure it clears Instagram UI."
- Total text block height estimate at 88px / 1.15 line height: approximately 335px (three lines at ~102px rendered line height each, with natural line-height gaps). Top of text block at approximately y=513px, bottom at approximately y=848px.

**ANCHOR ACCENT layer:** Hidden — no gold accent on Slide 1. No single word in this hook genuinely demands isolation above the others. The line operates as a complete thought; gilding one word would reduce the effect, not increase it.

**SUPPORTING LINE layer:** Hidden — hook is anchor-only per Content Brief and Brand Style Guide Section 5.3 guidance.

**SLIDE NUMBER layer:** Hidden — no slide number on Slide 1 per template rules.

**Composition intent:** A single warm-ivory serif statement sitting in the upper center of a dark warm pre-dawn horizon. Maximum contrast, maximum authority, no competing elements. The viewer reads it in under two seconds and feels something.

---

#### Slide 2 — Friction

**Template:** T-CR-BODY
**Text:** "You've felt it — the pull toward something more. And then talked yourself out of it."
**Word count:** 17 words — long anchor line, use lower end of body size range.

**ANCHOR LINE layer:**
- Typeface: Cormorant Garamond
- Weight: Medium (500)
- Size: 76px
- Line height: 1.15
- Letter spacing: -0.5px
- Color: `#F0EAD9`
- Alignment: Center
- Line break: Force break to preserve the em dash rhythm — four-line composition:
  - Line 1: "You've felt it —"
  - Line 2: "the pull toward something more."
  - Line 3: "And then talked yourself"
  - Line 4: "out of it."
- Vertical placement: Anchor text block centered in the Center Zone. Target visual midpoint of block at y=875px. Total block height estimate at 76px / 1.15 line height: approximately 380px (four lines at ~87px rendered line height each). Top of block at approximately y=685px, bottom at approximately y=1065px.
- Verify: Bottom of text block must remain above y=1150px (Lower Content Zone boundary). At the estimated block height, this is satisfied with clearance.

**ANCHOR ACCENT layer:** Hidden — no gold accent. Content Brief does not designate a gold word, and no single word in this line carries more weight than the em dash rhythm itself.

**SUPPORTING LINE layer:** Hidden — anchor-only per Content Brief.

**SLIDE NUMBER layer:**
- Text: "02"
- Typeface: DM Sans
- Weight: Regular (400)
- Size: 24px
- Letter spacing: +1.5px
- Color: `#C8BBA8`
- Treatment: All-caps ("02" renders numerically — apply uppercase letter spacing style)
- Placement: Upper Accent Zone, horizontally centered (x=540px center point), y=270px (well within Upper Accent Zone y=150–350px, with clearance above and below)

**Production note for Slide 2:** The em dash in "You've felt it —" is a typographic pause — it is structurally significant. Preserve it exactly. If your design tool auto-converts or displaces the em dash, input it manually (Unicode U+2014). Do not replace with a hyphen or double-hyphen.

---

#### Slide 3 — Reframe Part 1

**Template:** T-CR-BODY
**Anchor text:** "Behind only makes sense if there's one right path to be on."
**Supporting text:** "There isn't. You already know that."
**Word count (anchor):** 13 words — use lower end of body range.

**ANCHOR LINE layer:**
- Typeface: Cormorant Garamond
- Weight: Medium (500)
- Size: 76px
- Line height: 1.15
- Letter spacing: -0.5px
- Color: `#F0EAD9`
- Alignment: Center
- Line break: Three-line composition:
  - Line 1: "Behind only makes sense"
  - Line 2: "if there's one right path"
  - Line 3: "to be on."
- Vertical placement: Position the anchor block in the upper half of the Center Zone, with the visual midpoint of the anchor block at approximately y=800px. The anchor and supporting line together form a compound composition — place the anchor higher to leave room for the supporting line below with proper spacing.
- Total anchor block height estimate at 76px / 1.15: approximately 290px (three lines). Top of anchor at approximately y=655px, bottom at approximately y=945px.

**SUPPORTING LINE layer:**
- Text: "There isn't. You already know that."
- Typeface: DM Sans
- Weight: Light (300)
- Size: 36px
- Line height: 1.5
- Letter spacing: +0.5px
- Color: `#C8BBA8`
- Alignment: Center
- Single line (this text fits on one line at 36px within the 900px column — verify at production).
- Placement: 40px below the bottom of the anchor text block. If anchor bottom is at y=945px, supporting line top edge at y=985px. Supporting line rendered height at 36px: approximately 54px. Bottom of supporting line: approximately y=1039px.
- Verify: Supporting line must remain above y=1500px (Lower Accent Zone). This is satisfied with significant clearance.

**ANCHOR ACCENT layer:** Hidden — no gold accent. The reframe here is structural and conceptual; accenting a single word would shift the meaning away from the whole-line force of the argument.

**SLIDE NUMBER layer:**
- Text: "03"
- Spec: Same as Slide 2. Placed at y=270px, horizontally centered.

**Composition intent:** The anchor lands the intellectual challenge. The supporting line ("There isn't. You already know that.") releases it with warmth. The size differential — 76px serif vs. 36px sans — must read immediately as two distinct registers: the statement and the quiet acknowledgment that follows.

---

#### Slide 4 — Reframe Part 2

**Template:** T-CR-BODY
**Anchor text:** "The version of you that has been showing up — that is not all of you."
**Supporting text:** "That is the version your own story decided was safe."
**Word count (anchor):** 16 words — long line, use lower end of body range.

**ANCHOR LINE layer:**
- Typeface: Cormorant Garamond
- Weight: Medium (500)
- Size: 74px
- Line height: 1.15
- Letter spacing: -0.5px
- Color: `#F0EAD9`
- Alignment: Center
- Line break: Four-line composition, preserving the em dash as a deliberate pause:
  - Line 1: "The version of you"
  - Line 2: "that has been showing up —"
  - Line 3: "that is not"
  - Line 4: "all of you."
- Vertical placement: Anchor block visual midpoint at approximately y=780px. At 74px / 1.15 line height, four lines produce approximately 375px total block height. Top of anchor at approximately y=592px, bottom at approximately y=967px.

**SUPPORTING LINE layer:**
- Text: "That is the version your own story decided was safe."
- Typeface: DM Sans
- Weight: Light (300)
- Size: 34px
- Line height: 1.5
- Letter spacing: +0.5px
- Color: `#C8BBA8`
- Alignment: Center
- This line will break to two lines at 34px within 900px column — allow natural wrap:
  - Line 1: "That is the version your own story"
  - Line 2: "decided was safe."
- Placement: 40px below the bottom of the anchor block. Anchor bottom estimated at y=967px, supporting line top at y=1007px. Two lines at 34px / 1.5 line height render to approximately 105px total height. Bottom of supporting block at approximately y=1112px.
- Verify: Bottom of supporting block must remain above y=1500px. Satisfied with substantial clearance.

**ANCHOR ACCENT layer:** Hidden — no gold accent on this slide. The Content Brief note describes the subtext as the pivot, with a warm and quiet tone of acknowledgment. Adding a gold accent to the anchor line would compete with the quiet register the slide requires.

**SLIDE NUMBER layer:**
- Text: "04"
- Spec: Same as Slides 2 and 3. y=270px, horizontally centered.

**Production note for Slide 4:** The em dash in "showing up —" must be preserved exactly. The pause it creates is structurally important — it separates "the version showing up" from the reframe "that is not all of you." Input manually if your tool displaces it.

---

#### Slide 5 — Identity-Vote

**Template:** T-CR-BODY
**Text:** "Identity is not discovered. It is built — one choice at a time, starting from wherever you actually are."
**Word count:** 18 words — longest anchor line in the piece. Use lower end of body range with a size reduction for line count management.

**ANCHOR LINE layer:**
- Typeface: Cormorant Garamond
- Weight: Medium (500)
- Size: 72px
- Line height: 1.15
- Letter spacing: -0.5px
- Color: `#F0EAD9`
- Alignment: Center
- Line break: Five-line composition, breaking to preserve the natural pause structure created by the period and em dash:
  - Line 1: "Identity is not discovered."
  - Line 2: "It is built —"
  - Line 3: "one choice at a time,"
  - Line 4: "starting from wherever"
  - Line 5: "you actually are."
- Vertical placement: Anchor block visual midpoint at approximately y=850px. Five lines at 72px / 1.15 produce approximately 455px total block height (five lines at ~83px rendered line height). Top of anchor at approximately y=623px, bottom at approximately y=1078px.
- Verify: Bottom of anchor block must remain above y=1150px (Lower Content Zone boundary). At estimated y=1078px, clearance is tight — verify at production and adjust top position if the block extends beyond y=1150px. A top starting position of y=640px is the safe default; reduce to y=620px if block reads as too low.

**ANCHOR ACCENT layer — ACTIVE on this slide:**
- Word: "built"
- This is the only gold accent in the piece at this slide. "Built" is the pivot word — it is the moment where the carousel's premise crystallizes into agency. "Identity is not discovered" — passive framing. "It is built" — the active inversion. Gold on "built" points to this exact semantic hinge. It is justified.
- The word "built" appears on Line 2 of the five-line composition.
- Implementation: In tools that support inline color changes within a text block, change only the word "built" to `#C9973A` within the ANCHOR LINE layer. In tools that require a separate element (e.g., Canva with its per-element color rules), use the ANCHOR ACCENT layer: position it precisely over the word "built" at the same font, weight, size (72px), and y-position as Line 2 of the anchor block. The color `#C9973A` applies to that word alone.
- Do not gold any other word on this slide.

**SUPPORTING LINE layer:** Hidden — anchor-only per Content Brief. The length of this anchor line at five lines provides sufficient visual presence without a supporting line. Adding one would crowd the composition.

**SLIDE NUMBER layer:**
- Text: "05"
- Spec: Same as previous body slides. y=270px, horizontally centered.

**Composition intent for Slide 5:** The Content Brief requests "slightly more energy in the composition if possible — tighter crop on background, slightly more light in the frame." Apply this at the background level: if the video loop contains a moment where the amber horizon glow is slightly more visible, attempt to time or position this slide's segment of the loop to coincide with that moment. In a static fallback: slightly increase background exposure by +5 to +10% before overlaying text. Still within the Dark Earth system — the warmth should feel earned, not added.

---

#### Slide 6 — Close / The Save (CTA Slide)

**Template:** T-CR-CTA
**Anchor text:** "You are not behind."
**Supporting text:** "You are becoming exactly who you chose to start being today."
**CTA text:** "Save this."
**Word count (anchor):** 4 words — very short, use upper end of CTA range.

**ANCHOR LINE layer:**
- Typeface: Cormorant Garamond
- Weight: Medium (500)
- Size: 92px
- Line height: 1.15
- Letter spacing: 0px (no tightening on a 4-word line at this size — each word deserves its space)
- Color: `#F0EAD9`
- Alignment: Center
- Single-line composition: "You are not behind."
- Vertical placement: Position this line in the upper half of the Center Zone. Target top edge of text block at approximately y=580px, bottom edge at approximately y=686px (single line at 92px rendered height ~106px). The visual midpoint of this line sits at approximately y=633px.
- This is the screenshot slide. Give the anchor line height and breathing room above and below — it should float on the frame with generosity, not sit compressed.

**ANCHOR ACCENT layer:** Hidden — no gold accent on Slide 6. "You are not behind." is four words of equal weight. The entire line is the emphasis. Gilding one word — "not," "behind" — would fracture a statement that only works as a complete unit. Leave it clean.

**SUPPORTING LINE layer (closing thought):**
- Text: "You are becoming exactly who you chose to start being today."
- Typeface: DM Sans
- Weight: Light (300)
- Size: 36px
- Line height: 1.5
- Letter spacing: +0.5px
- Color: `#C8BBA8`
- Alignment: Center
- Line break: Two-line natural wrap within 900px column:
  - Line 1: "You are becoming exactly who you"
  - Line 2: "chose to start being today."
- Placement: 48px below the bottom of the anchor line. Anchor bottom estimated at y=686px, supporting line top at y=734px. Two lines at 36px / 1.5 render to approximately 108px total. Bottom of supporting block at approximately y=842px.

**CTA text ("Save this.") — layer assignment:**

Use the SUPPORTING LINE layer for the closing resolution text above. The CTA "Save this." requires its own layer. Place it in the ATTRIBUTION layer (repurposed as CTA prompt per the T-CR-CTA template rules):

- Text: "Save this."
- Typeface: DM Sans
- Weight: Light (300)
- Size: 30px
- Line height: 1.5
- Letter spacing: +1px
- Color: `#C8BBA8`
- Alignment: Center
- Placement: Lower Accent Zone. Target y=1560px for the top edge of this text. This positions it near the lower boundary of the visible frame (above y=1670px UI boundary) while leaving clear breathing room between the supporting line above and this prompt below.
- Visual intent: Per the Content Brief, "small, unobtrusive, but present." At 30px in `#C8BBA8`, this reads as a quiet invitation — visible without demanding attention. The viewer's eye moves: big serif statement at top of center zone, warm sans resolution text beneath, then the quiet "Save this." anchoring the bottom third. This is the screenshot slide. That bottom prompt is what tells the viewer what to do after they've already felt the impulse.

**SLIDE NUMBER layer:**
- Text: "06"
- Spec: Same as body slides. y=270px, horizontally centered.

**Background treatment for Slide 6:** If using the video loop, attempt to time or position the Slide 6 segment to coincide with the moment in the loop where the amber horizon glow is most clearly visible — more warmth, slightly more light at the horizon edge. Per T-CR-CTA template rules: "The closing slide may use a slightly warmer, lighter background within the Dark Earth family... to signal resolution." This should be achieved through loop timing, not a separate background file, to maintain visual continuity across all six slides.

If the loop does not offer meaningful variation, do not compensate artificially. The composition itself delivers the resolution.

---

### Composition Summary — All Six Slides

| Slide | Template | Anchor Size | Anchor Lines | Gold Accent | Supporting Line | CTA Text | Slide No. |
|---|---|---|---|---|---|---|---|
| 1 — Hook | T-CR-HOOK | 88px | 3 | None | Hidden | None | Hidden |
| 2 — Friction | T-CR-BODY | 76px | 4 | None | Hidden | None | 02 |
| 3 — Reframe 1 | T-CR-BODY | 76px | 3 | None | "There isn't. You already know that." | None | 03 |
| 4 — Reframe 2 | T-CR-BODY | 74px | 4 | None | "That is the version your own story decided was safe." | None | 04 |
| 5 — Identity | T-CR-BODY | 72px | 5 | "built" — `#C9973A` | Hidden | None | 05 |
| 6 — Close | T-CR-CTA | 92px | 1 | None | "You are becoming exactly..." | "Save this." | 06 |

---

### Animation Specification

**Background loop:** bg-pdh-001-sway-slow.mp4 runs as a continuous ambient loop beneath all text layers for the full duration of the reel. Do not restart the loop per slide — allow it to run through naturally. This preserves the "one world" visual continuity.

**Slide transitions:**
- Slide fade-out: 0.5 seconds — current slide fades to `#0E0A07`
- Hold at black: 0.15 seconds
- Slide fade-in: 0.5 seconds — next slide fades up from `#0E0A07`
- Total transition: approximately 1.15 seconds

**Text entrance:** Text enters with the background as a unified element. Fade from zero opacity, 0.5–0.6 seconds, ease-in-out, beginning simultaneously with each slide's fade-in. No independent text animation. No slide, bounce, or pop effects on any text layer.

**Slide duration (each):** 3.5–4.5 seconds visible hold per slide (after fade-in completes, before fade-out begins). The anchor line on each slide must be readable in full — at 3.5 seconds minimum hold, a viewer reading at comfortable pace can absorb all lines including the longer 5-line anchor on Slide 5.

**Total reel duration estimate:** 6 slides × 4 seconds hold + 6 transitions × 1.15 seconds = 24 + 6.9 = approximately 31 seconds. This is within acceptable Reel length for this content type and gives each slide adequate reading time.

**Audio:** Do not finalize audio selection at the design stage. Per Content Brief routing note, audio selection routes to the Publisher. The Designer confirms only that the composition is built for ambient instrumental at low BPM (50–90 BPM) per Brand Style Guide Section 7. The Publisher will apply track selection from the approved options ("I Speak Blessings" by Delana Hope or "Resiliencia" instrumental) at scheduling.

---

### Cover Frame Specification

**Template:** T-CR-COVER
**File to produce:** cr-pdh-grow-001-cover.jpg

The Cover Frame is a still JPEG that visually mirrors Slide 1. It is a separate file produced independently of the video — not extracted from it.

**Specs:**
- Canvas: 1080x1920px, RGB, sRGB
- Background: First compositionally stable, dark frame from bg-pdh-001-sway-slow.mp4 — export as a still JPEG, or use bg-pdh-004-double-glow.jpg if the video still is insufficiently dark or compositionally strong.
- Apply the same vignette treatment as all slides (VIGNETTE layer, `#0E0A07` radial, 25–35% center opacity, 0% edges).
- Apply the same anchor line as Slide 1: "Somewhere along the way, you decided you were behind." — Cormorant Garamond Medium 500, 88px, `#F0EAD9`, same three-line break, same vertical placement (visual midpoint at y=680px).
- No gold accent. No supporting line. No slide number.
- Export as JPEG, high quality (90%+).

**Grid crop check:** In the profile grid, the cover displays as a center square crop — the visible area is approximately y=420px to y=1500px of the 1080x1920px canvas. The anchor line block (estimated y=513px to y=848px) falls entirely within this crop zone. Legibility at thumbnail scale (approximately 293x293px display) should be verified at 88px anchor size — this is at the upper end of the size scale and should hold at grid size.

---

## Assets Included

| File | Format | Platform | Dimensions | Notes |
|---|---|---|---|---|
| cr-pdh-grow-001.mp4 | MP4, H.264 | Instagram Carousel Reel | 1080x1920px | 6-slide reel, 9:16, ~31 seconds |
| cr-pdh-grow-001-cover.jpg | JPEG | Instagram Cover Frame | 1080x1920px | Grid thumbnail; select at upload |

---

## Text Overlay Specifications — Quick Reference

### All Slides — Common Rules
- Column width: 900px (x=80px to x=1000px)
- Horizontal alignment: Center throughout
- No fills, no text boxes, no borders
- Vignette: `#0E0A07` radial, 25–35% center opacity, 0% outer edge, on all slides

### Slide 1 — Hook
- Font: Cormorant Garamond, Medium 500
- Size: 88px
- Color: `#F0EAD9`
- Line height: 1.15 | Letter spacing: -0.5px
- Placement: Anchor visual midpoint at y=680px (upper-center, three-line break)
- No gold accent | No supporting line | No slide number

### Slide 2 — Friction
- Font: Cormorant Garamond, Medium 500
- Size: 76px
- Color: `#F0EAD9`
- Line height: 1.15 | Letter spacing: -0.5px
- Placement: Anchor visual midpoint at y=875px (four-line break, em dash preserved)
- No gold accent | No supporting line
- Slide number: DM Sans Regular 400, 24px, `#C8BBA8`, +1.5px letter spacing, "02", y=270px center

### Slide 3 — Reframe 1
- Anchor: Cormorant Garamond Medium 500, 76px, `#F0EAD9`, 1.15 line height, -0.5px letter spacing
- Anchor placement: Visual midpoint at y=800px (three lines)
- Supporting: DM Sans Light 300, 36px, `#C8BBA8`, 1.5 line height, +0.5px letter spacing, 40px below anchor bottom
- No gold accent
- Slide number: "03", same spec as Slide 2

### Slide 4 — Reframe 2
- Anchor: Cormorant Garamond Medium 500, 74px, `#F0EAD9`, 1.15 line height, -0.5px letter spacing
- Anchor placement: Visual midpoint at y=780px (four lines, em dash preserved)
- Supporting: DM Sans Light 300, 34px, `#C8BBA8`, 1.5 line height, +0.5px letter spacing, 40px below anchor bottom (two-line natural wrap)
- No gold accent
- Slide number: "04", same spec as Slide 2

### Slide 5 — Identity-Vote
- Anchor: Cormorant Garamond Medium 500, 72px, `#F0EAD9`, 1.15 line height, -0.5px letter spacing
- Anchor placement: Visual midpoint at y=850px (five lines)
- Gold accent: Word "built" only — `#C9973A`, same font/weight/size as anchor (72px Cormorant Garamond Medium)
- No supporting line
- Slide number: "05", same spec as Slide 2

### Slide 6 — Close / CTA
- Anchor: Cormorant Garamond Medium 500, 92px, `#F0EAD9`, 1.15 line height, 0px letter spacing
- Anchor placement: Single line, top edge at y=580px
- Supporting: DM Sans Light 300, 36px, `#C8BBA8`, 1.5 line height, +0.5px letter spacing, 48px below anchor bottom (two-line natural wrap)
- CTA "Save this.": DM Sans Light 300, 30px, `#C8BBA8`, 1.5 line height, +1px letter spacing, centered, top edge at y=1560px
- No gold accent
- Slide number: "06", same spec as Slide 2

---

## Background

**Primary:** bg-pdh-001-sway-slow.mp4 — Pre-Dawn Horizon video loop, slow organic sway motion. Used continuously across all six slides. Warm amber horizon band in lower portion of frame provides the warm light source. Dark warm charcoal upper field provides the text placement zone. Static fallback: bg-pdh-004-double-glow.jpg (all slides). Second fallback: bg-pdh-007-amber-sky-wide.jpg (all slides).

---

## Animation Notes

- Background loop: Continuous, uninterrupted across all slides
- Slide transition: 0.5s fade to `#0E0A07` / 0.15s hold / 0.5s fade from `#0E0A07`
- Text entrance: Opacity 0 to 100%, 0.5–0.6s ease-in-out, simultaneous with slide fade-in
- Slide hold: 3.5–4.5 seconds per slide
- Audio: Not assigned at design stage — routes to Publisher (see Content Brief audio routing note)
- Audio fade: 1-second fade-in at reel start, 1-second fade-out at reel end (Publisher applies at scheduling)

---

## Platform Design Spec Compliance

**Format:** Instagram Carousel Reel — 9:16, 1080x1920px

**Safe zone check: Confirmed.**
- Top UI clearance (y=0 to 150px): No text in this zone on any slide.
- Top anchor clearance (y=150 to 250px): Slide numbers placed at y=270px — below the anchor clearance boundary.
- Slide 1 anchor top edge at approximately y=513px — well below the y=250px anchor clearance boundary.
- Left/right insets (x=80px to x=1000px): All text within the 900px column. Confirmed.
- Bottom UI boundary (y=1670px): CTA text on Slide 6 top edge at y=1560px, estimated bottom edge at y=1605px — above the y=1670px boundary. Confirmed.

**Feed crop compliance (4:5 crop zone y=285px to y=1635px):**
All anchor lines across all slides fall within y=513px to y=1078px — entirely within the 4:5 feed crop zone. The Slide 6 CTA text (top at y=1560px, bottom at approximately y=1605px) falls within the y=1635px crop boundary. Confirmed.

**Slide count:** 6 slides — within the 5–7 slide range specified in the Platform Design Spec.

**Export settings to apply:**
- Output: MP4
- Video codec: H.264
- Resolution: 1080x1920px
- Frame rate: 23.976fps
- Bitrate: Target 6,000 kbps
- Audio codec: AAC, 128 kbps minimum
- Color space: sRGB
- File size: Under 650 MB

---

## Flags

None. All copy from the Content Brief has been implemented as provided. No text was altered. No escalations required.

The em dash in Slides 2 and 4 has been flagged in the slide-specific production notes — the operator must confirm their tool preserves these characters correctly before export.

Gold accent on Slide 5 ("built") is a design decision made within the bounds of the Content Brief's explicit instruction ("Consider placing 'built' in accent gold if the line permits a single emphasis word without breaking the flow") and confirmed against Brand Style Guide Section 5.5 criteria: "built" is the semantic hinge of the slide's premise, the one word that carries the active inversion from discovered to made. The accent is warranted.

---

*Asset Delivery Note produced by the Designer for Content Brief 001 — "You Are Not Behind" — 2026-04-07.*
*Deliver completed files to the Asset Manager as: cr-pdh-grow-001.mp4 and cr-pdh-grow-001-cover.jpg*
