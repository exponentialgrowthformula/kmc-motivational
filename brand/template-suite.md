# Template Suite — @exponentialgrowthformula_
**Visual Direction:** Dark Earth ("Before Dawn")
**Produced by:** Designer
**Date:** 2026-03-18
**Version:** 1.0
**Status:** Active

---

## How to Use This Document

This document is the build brief for every reusable template the account uses in production. It is written for a human operator who will open a design tool of choice — Canva, Figma, CapCut, Adobe Photoshop, After Effects, or equivalent — and build each template from scratch using the specifications here.

Every section for every template is self-contained. You do not need to read the whole document before building a single template. Navigate to the template ID you need, read its section in full, then build it.

**What this document does not contain:** Visual files, image files, or example renders. Those are produced by the operator building the templates. This document defines what to build; the operator's design tool produces the result.

**What this document depends on:**
- Brand Style Guide (`/brand/brand-style-guide.md`) — governs all color, typography, and composition rules. Referenced throughout but not reproduced in full here. Open it alongside this document when building.
- Platform Design Specification (`/brand/platform-design-spec.md`) — governs canvas sizes, safe zones, export settings, and naming conventions.

**Changes to this document** require Strategy Director approval. The Designer may propose updates; the Strategy Director approves. Do not implement template changes unilaterally.

**Agents who reference this document:** Designer, Asset Manager, Content Writer.

---

## Template Architecture Overview

This suite is organized into three canvas groups based on the shared-base decisions established in Platform Design Spec Section 8. Do not build templates from scratch independently — build the master base first, then derive format variants from it.

### Group 1 — 9:16 Vertical Base (1080x1920px)
All three vertical formats share one base canvas. Build the master vertical template once, then duplicate it and configure each format variant.

Formats in this group:
- T-CR (Carousel Reel) — variants: HOOK, BODY, CTA, COVER
- T-SR (Standard Reel) — variant: SINGLE
- T-ST (Story) — variants: QUOTE, ENGAGEMENT

### Group 2 — 4:5 Portrait Base (1080x1350px)
Static Post and Carousel Post share one base canvas.

Formats in this group:
- T-SP (Static Post) — variants: SINGLE, CAROUSEL-SLIDE

### Group 3 — 1:1 Square (1080x1080px)
Rare use. Independent build. Do not derive from the portrait base.

Not yet templated. Build only when a square format post is confirmed as needed.

---

## Universal Layer Naming Convention

Every template must use these exact layer names. The names must be identical across all templates where the layer serves the same function. This is what allows the Designer and Asset Manager to hand off files without confusion.

Layer names appear in ALL CAPS. Do not rename them in production files — only the content inside them changes.

| Layer Name | What It Contains | Notes |
|---|---|---|
| `[FORMAT] SAFE ZONE GUIDE` | Non-printing guide showing hard safe zone boundaries for this format | Color: red at 30% opacity. Lock this layer. Never move it. |
| `[FORMAT] TEXT ZONE GUIDE` | Non-printing guide showing recommended text placement zones | Color: blue at 30% opacity. Lock this layer. |
| `BG VIDEO` | Background video loop layer | Bottom of layer stack. Used on Reel formats. |
| `BG IMAGE` | Background still image layer | Bottom of layer stack. Used on Static Post and Story static formats. |
| `VIGNETTE` | Optional dark edge vignette | Sits above BG layer, below all text. Use only if background needs edge deepening. |
| `DIVIDER RULE` | Optional 1px horizontal rule in `#C9973A` | Use no more than once per slide. Sits above VIGNETTE, below text. |
| `ATTRIBUTION` | Attribution line text element | DM Sans Light Italic. Lower content or lower accent zone. |
| `SLIDE NUMBER` | Slide number text element | DM Sans Regular. Upper accent zone or lower accent zone. |
| `SWIPE PROMPT` | "Swipe to continue" text element | Carousel Post slide 1 only. Hidden on all other slides. |
| `SUPPORTING LINE` | Secondary text layer | DM Sans Light. Below the anchor line. |
| `ANCHOR ACCENT` | Gold accent word — separate text element | Cormorant Garamond Medium, `#C9973A`. Used if your tool requires a separate element for the gold word color. |
| `ANCHOR LINE` | Primary quote text layer | Cormorant Garamond Medium 500. Center zone default. Top of text layer stack. |
| `[FORMAT] TEXT ZONE GUIDE` | Guide layer | Non-printing. Top of stack below safe zone guide. |
| `[FORMAT] SAFE ZONE GUIDE` | Guide layer | Non-printing. Topmost layer in stack. |

**Layer order from bottom to top — mandatory:**

1. `BG VIDEO` or `BG IMAGE`
2. `VIGNETTE` (if used)
3. `DIVIDER RULE` (if used)
4. `ATTRIBUTION`
5. `SLIDE NUMBER`
6. `SWIPE PROMPT`
7. `SUPPORTING LINE`
8. `ANCHOR ACCENT`
9. `ANCHOR LINE`
10. `[FORMAT] TEXT ZONE GUIDE`
11. `[FORMAT] SAFE ZONE GUIDE`

Guide layers (10 and 11) are always visible to the editor but never appear in exports. Confirm your tool's guide or non-printing layer feature is correctly applied.

---

## Template File Naming

Template native files are stored at `/assets/templates/`. Name all template files using this pattern:

`tpl-[format-code]-v[version].[ext]`

Format codes: `cr` (Carousel Reel), `sr` (Standard Reel), `cp` (Carousel Post), `sp` (Static Post), `st` (Story)

Examples: `tpl-cr-v1.aep`, `tpl-sp-v1.psd`, `tpl-st-v1.fig`

Deliver alongside each native template file: one flattened JPEG preview of the template structure for quick reference without opening the design software.

---

## Group 1 — Carousel Reel Templates (9:16, 1080x1920px)

Carousel Reels are the account's primary format. These templates receive the most production effort. Build these before all others.

A Carousel Reel is a multi-slide video post with background video loops and slide transitions. Each slide is a frame within the Reel. Templates T-CR-HOOK, T-CR-BODY, and T-CR-CTA define the three slide types. T-CR-COVER defines the thumbnail.

---

### T-CR-HOOK — Carousel Reel Hook Slide

**Template ID:** T-CR-HOOK
**Format:** Carousel Reel — 9:16, 1080x1920px
**Slide position:** Slide 1 (always)

#### Purpose and When to Use

The Hook Slide is the scroll-stopper. It is the only slide the viewer sees before deciding whether to continue watching. It must land an emotional hook within 2 seconds of viewing. Every Carousel Reel opens with exactly one Hook Slide.

This template is more constrained than the Body template. Fewer elements, larger text, maximum visual impact with minimum complexity.

#### Fixed Elements

These elements do not change between uses. Build them once into the template and do not alter them when populating a new post.

- **Canvas:** 1080x1920px, RGB, sRGB color profile
- **Background zone marker:** The `CAROUSEL REEL SAFE ZONE GUIDE` layer defines the hard boundaries: no text above y=150px (UI clearance), no anchor text above y=250px, no text left of x=80px or right of x=1000px, no text below y=1670px (UI clearance). Lock this layer in red at 30% opacity.
- **Text zone guide:** The `CAROUSEL REEL TEXT ZONE GUIDE` layer marks the five composition zones: Upper Accent Zone (y=150–350px), Upper Content Zone (y=350–600px), Center Zone (y=600–1150px), Lower Content Zone (y=1150–1500px), Lower Accent Zone (y=1500–1670px). Lock this layer in blue at 30% opacity.
- **Typographic hierarchy:** Anchor line is always Cormorant Garamond Medium (500), `#F0EAD9`, 88–96px, centered. This is the largest text in the entire carousel — it sets the visual authority of the series.
- **Alignment:** All text horizontally centered. Text block occupies x=80px to x=1000px (900px column).
- **No slide number on this slide.** Slide numbers do not appear on Slide 1.
- **No attribution on this slide.** Attribution, if required, belongs on the final or body slides, not the hook.

#### Variable Elements

These change with every new post. The Content Brief provides the values; the operator drops them into the template.

- **Background video or image:** Replace `BG VIDEO` or `BG IMAGE` with the approved background file for this post. The background must pass the warm-dark check and warm light source rule (Brand Style Guide Section 4). The opening frame of the background — the frame visible at y=0, t=0 — becomes the thumbnail in the feed grid. Select a background whose first frame is compositionally strong, dark, and atmospheric.
- **Anchor line text:** The main hook statement. Drop it into the `ANCHOR LINE` layer. Set in Cormorant Garamond Medium 500, `#F0EAD9`, 88–96px. Word count: 6–9 words optimal, 12 words maximum hard limit. If the Content Brief provides more than 12 words for the hook slide, flag to the Content Writer before proceeding — do not reduce font size to fit.
- **Accent word (optional):** If the Content Brief designates one word for gold accent, set that word in `ANCHOR ACCENT` at `#C9973A`, same font, weight, and size as the surrounding anchor text. Maximum one gold word per slide. If the hook works without a gold accent, leave `ANCHOR ACCENT` empty and hide the layer.
- **Supporting line (optional):** If the Content Brief includes a short supporting line for Slide 1 (maximum 4–6 words), set it in `SUPPORTING LINE`, DM Sans Light 300, `#C8BBA8`, 32–40px. Position it in the Lower Content Zone (y=1150–1500px), at least 40px below the last line of the anchor. If the hook is anchor-line only, hide `SUPPORTING LINE`.

#### Layer Structure

Build the template with all layers present. Show or hide per the variable content for each post.

```
[top]
CAROUSEL REEL SAFE ZONE GUIDE  (locked, red 30%, non-printing)
CAROUSEL REEL TEXT ZONE GUIDE  (locked, blue 30%, non-printing)
ANCHOR LINE
ANCHOR ACCENT                  (hide if no gold word)
SUPPORTING LINE                (hide if hook is anchor-only)
SLIDE NUMBER                   (hide on Slide 1 — always hidden in this template)
ATTRIBUTION                    (hide — not used on hook slide)
SWIPE PROMPT                   (hide — not used on Carousel Reel)
DIVIDER RULE                   (hide unless explicitly needed)
VIGNETTE                       (show if background needs edge deepening)
BG VIDEO or BG IMAGE
[bottom]
```

#### Composition Rules — Hook Slide Specific

**Default anchor placement:** Vertically centered in the Center Zone (y=600–1150px). Visual midpoint of the anchor text block should target approximately y=875px. For pre-dawn horizon backgrounds where visual weight concentrates at the bottom, adjust anchor upward toward y=750px.

**Single-element option:** The strongest hook slide composition is often the anchor line alone — no supporting line, no accent word, no other elements. One Cormorant Garamond statement in warm ivory on a dark warm background. If the hook lands with this treatment, do not add elements for the sake of filling space.

**Gold accent decision rule:** If one word in the hook genuinely carries the emotional weight of the whole line, gold it. If you are uncertain which word to gold, the answer is probably none. The gold accent is a pointer, not decoration.

**Vignette use:** If the background has mid-tone values that reduce text legibility at the anchor placement zone, use the `VIGNETTE` layer to deepen the center of the frame. The vignette should be `#0E0A07` at a radial gradient with the darkest point at center, fading to 0% opacity at the frame edges. Opacity of the vignette layer: 20–40% maximum. The background must still be clearly visible — the vignette deepens the image; it does not cover it.

**No text fills, no boxes:** Per Brand Style Guide Section 5.6, text sits directly on the background. If legibility is a problem, solve it by selecting a better background or adjusting the crop.

#### Production Notes

- Build the Hook Slide template first. The Body and CTA templates derive from it — they use slightly smaller anchor text and add or modify layers.
- The anchor text size (88–96px) on the Hook Slide is deliberately larger than on body slides (72–88px). This size difference is intentional and structural — it communicates that Slide 1 is the most important moment in the carousel.
- Before exporting, verify the anchor line text block falls within y=420px to y=1500px (the feed crop zone for 9:16 Reels appearing in the main feed at 4:5). This is satisfied by the default center zone placement.
- The Hook Slide is Slide 1 of the video. In the editor's timeline, this slide begins at t=0. Apply the fade-in from black at the video start: 0.5-second fade-in from `#0E0A07` to full opacity. Text enters simultaneously with the background.

#### Thumbnail Appearance

At grid thumbnail size (approximately 293x293px display, center crop y=420px to y=1500px of the 1080x1920px canvas), this slide appears as:
- A dark warm background field
- The anchor line text centered, readable at thumbnail size if set at 88px or larger
- Any gold accent word visible as a warmer tone within the text block
- No other elements

The thumbnail must communicate warmth, authority, and legibility. Verify at actual thumbnail size before approving the background selection for any post.

---

### T-CR-BODY — Carousel Reel Body Slide

**Template ID:** T-CR-BODY
**Format:** Carousel Reel — 9:16, 1080x1920px
**Slide position:** Slides 2 through N-1 (all body/development slides)

#### Purpose and When to Use

The Body Slide carries the development content of the carousel — the expansion, deepening, and building of the idea introduced on the Hook Slide. Every slide between the Hook and the CTA is a Body Slide. A standard 5-slide carousel has 3 body slides (slides 2, 3, 4).

Body slides are slightly less typographically dominant than the hook — the anchor size steps down — but they maintain the same visual system and composition rules.

#### Fixed Elements

- **Canvas:** 1080x1920px, RGB, sRGB color profile
- **Safe zone and text zone guides:** Same as T-CR-HOOK. Same locked guide layers.
- **Anchor text spec:** Cormorant Garamond Medium 500, `#F0EAD9`, 72–88px. Use the lower end of this range (72–80px) for longer lines (8–12 words). Use the upper end (80–88px) for shorter lines (1–7 words).
- **Supporting line spec:** DM Sans Light 300, `#C8BBA8`, 32–40px. At least 40px below the last anchor line.
- **Attribution spec:** DM Sans Light Italic 300 or Cormorant Garamond Light Italic, `#C8BBA8`, 28–32px. At least 30px below the last supporting line. Set only when the Content Brief specifies attribution.
- **Slide number spec:** DM Sans Regular 400, `#C8BBA8`, 22–26px. Positioned in the Upper Accent Zone (y=150–350px), horizontally centered or right-aligned within the safe zone. Use all-caps or small-caps treatment with letter spacing +1.5px.
- **Alignment:** All text horizontally centered. 900px column (x=80px to x=1000px).

#### Variable Elements

- **Background video or image:** Replace `BG VIDEO` or `BG IMAGE` per post. Must match the visual family of the Hook Slide background — same scene category, same warmth level, same level of visual complexity. The viewer must feel they are in the same world.
- **Anchor line text:** Content from the Content Brief. Drop into `ANCHOR LINE`. Apply size from the range based on line length.
- **Accent word (optional):** One gold word maximum per slide. Not every body slide requires one. Set in `ANCHOR ACCENT` if used, hide if not.
- **Supporting line text (optional):** If the Content Brief provides a supporting line for this slide, set it in `SUPPORTING LINE`. If the slide is anchor-only, hide `SUPPORTING LINE`.
- **Attribution text (optional):** Set in `ATTRIBUTION` if specified in the Content Brief. Hide if not applicable.
- **Slide number:** Set to the current slide number (e.g., "02", "03"). Always visible on body slides.

#### Layer Structure

```
[top]
CAROUSEL REEL SAFE ZONE GUIDE  (locked, non-printing)
CAROUSEL REEL TEXT ZONE GUIDE  (locked, non-printing)
ANCHOR LINE
ANCHOR ACCENT                  (hide if no gold word)
SUPPORTING LINE                (hide if slide is anchor-only)
ATTRIBUTION                    (show only if Content Brief specifies)
SLIDE NUMBER                   (always visible on body slides)
SWIPE PROMPT                   (hide — not used on Carousel Reel)
DIVIDER RULE                   (hide unless explicitly needed)
VIGNETTE                       (show if background needs edge deepening)
BG VIDEO or BG IMAGE
[bottom]
```

#### Composition Rules — Body Slide

**Warm light source placement within the frame:** On body slides, the warm light source in the background should ideally be positioned where it does not directly compete with the text block. A light source in the lower third or upper third of the frame, with the text sitting in the darker mid-tone zone, is the strongest composition. If the warm light source is centered, use the vignette layer carefully to create a slight darkening in the center text zone without eliminating the light source from the periphery.

**Mood arc guidance:** Body slides that develop tension or complication in the narrative benefit from slightly darker, more atmospheric background selections (deeper forest, darker pre-dawn horizon before the amber edge is visible). Body slides that provide resolution or a lift benefit from slightly warmer backgrounds (more amber visible, pre-dawn with an evident horizon glow). This is compositional judgment — apply it where it serves the content, not mechanically to every slide.

**Slide number position options:**
- Upper accent zone, centered: Clean and minimal. Preferred when the anchor composition is strong and the slide number should not compete.
- Upper accent zone, right-aligned (x=1000px boundary): Creates a navigation edge feel. Use only when the centered option feels visually awkward with the specific background.
- Do not position slide numbers in the lower accent zone on body slides — the lower zone is reserved for attribution.

**Divider rule:** The optional 1px horizontal rule in `#C9973A` may be used between the anchor line and the supporting line as a typographic separator. Use no more than once per slide and no more than once every three slides across a carousel. When in doubt, omit it.

#### Production Notes

- When building a full carousel, create one Body Slide template instance and duplicate it for each body slide in the carousel. Replace the background, text content, and slide number per slide. Do not create a separate template for each slide — the template is one master Body Slide; instances of it are populated per post.
- The Body Slide anchor size (72–88px) is intentionally smaller than the Hook Slide (88–96px). The viewer should feel the pacing shift: the hook lands with impact, the body slides carry the weight with slightly more ease.
- The slide number layer on body slides serves a functional navigation role. Keep it visually quiet — it is in `#C8BBA8` at small size. It must be readable but must not compete with the anchor.

---

### T-CR-CTA — Carousel Reel Final Slide (Closing / CTA)

**Template ID:** T-CR-CTA
**Format:** Carousel Reel — 9:16, 1080x1920px
**Slide position:** Final slide (always the last slide)

#### Purpose and When to Use

The CTA Slide is the final slide of every Carousel Reel. At the account's current stage (account-building, pre-product), the "CTA" is always a closing thought — a line that completes the emotional arc of the carousel, invites reflection or action, but does not sell. The CTA slide may evolve to include direct product calls-to-action once the account reaches the product launch phase. For now, treat it as the emotional close of the carousel.

The CTA Slide may differ slightly in visual treatment from body slides to signal that the carousel is ending — either a warmer background (more amber visible, lighter overall), or slightly more breathing room in the composition. This is a guideline, not a rule.

#### Permitted CTAs at Launch Phase

The Content Writer provides the CTA text. The Designer only implements it visually. The following CTA types are permitted at launch:

- A closing statement that completes the carousel's emotional arc (most common)
- A reflective prompt: "Save this for when you need it." / "Share this with someone building their future."
- A subtle engagement prompt: "Which of these lands hardest for you?" (when the carousel format supports it)

The following are not permitted at launch:
- Product sales language
- "Link in bio" references (nothing to link to yet)
- Promises of guaranteed outcomes

If the Content Brief provides a CTA that appears to conflict with these rules, flag to the Content Writer before production.

#### Fixed Elements

- **Canvas:** 1080x1920px, RGB, sRGB color profile
- **Safe zone and text zone guides:** Same as all Carousel Reel templates.
- **Anchor text spec:** Cormorant Garamond Medium 500, `#F0EAD9`, 72–88px. Same as body slides. The closing thought is not visually louder than the body — it resolves rather than peaks.
- **Slide number:** Present. Set to the final slide number in the sequence (e.g., "05" for a 5-slide carousel). Same spec as body slides.
- **No attribution on CTA slide** unless the closing thought is a direct quote from a named source.

#### Variable Elements

- **Background video or image:** The closing slide may use a slightly warmer, lighter background within the Dark Earth family — a pre-dawn horizon with more amber visible, a forest canopy where the warm light is more present. This visual lift signals resolution. It must still pass all dark-warm and warm light source checks — it is warmer within the system, not outside it.
- **Anchor line text (closing thought):** From the Content Brief. Set in `ANCHOR LINE`.
- **Accent word (optional):** One gold word if genuinely warranted. At the close of a carousel, the gold accent on the final slide can be very effective — it creates a moment of emphasis that sends the viewer off with one word ringing. Apply only if a specific word in the closing thought merits it.
- **Supporting line (optional):** If the Content Brief includes a closing supporting line or a CTA prompt line (e.g., "Save this."), set it in `SUPPORTING LINE`.
- **Account handle (optional):** Some closing slides include the account handle as a subtle watermark or brand element. If the Content Brief calls for this, set it in `ATTRIBUTION` layer (repurposed for the handle), DM Sans Light 300, `#C8BBA8`, 24–28px, positioned in the Lower Accent Zone. Handle format: `@exponentialgrowthformula_`. This is not a standard element — use it when the Content Brief specifies it or when the Strategy Director directs.

#### Layer Structure

```
[top]
CAROUSEL REEL SAFE ZONE GUIDE  (locked, non-printing)
CAROUSEL REEL TEXT ZONE GUIDE  (locked, non-printing)
ANCHOR LINE
ANCHOR ACCENT                  (hide if no gold word)
SUPPORTING LINE                (hide if CTA is anchor-only)
ATTRIBUTION                    (repurpose for account handle if specified, else hide)
SLIDE NUMBER                   (always visible)
SWIPE PROMPT                   (hide)
DIVIDER RULE                   (optional — a divider rule before a CTA prompt line can work well)
VIGNETTE                       (use if background needs center deepening)
BG VIDEO or BG IMAGE
[bottom]
```

#### Production Notes

- The CTA Slide exists as a separate template from the Body Slide to allow different background mood and compositional rules. In practice, the layer structure is nearly identical. The distinction is in background selection guidance and the permitted visual lift toward warmth.
- The CTA is the last frame the viewer sees before the reel loops or they swipe away. It should feel like an arrival — a place to land, not a push. The visual must support that feeling.
- If the carousel is 5 slides, the slide number on the CTA reads "05". If 7 slides, it reads "07". Always use zero-padded two-digit format.

---

### T-CR-COVER — Carousel Reel Cover Frame

**Template ID:** T-CR-COVER
**Format:** Carousel Reel — 9:16, 1080x1920px (delivered as JPEG)
**Usage:** The cover frame is uploaded separately at publish time. It appears in the profile grid and as the thumbnail before the reel plays.

#### Purpose and When to Use

Instagram allows — and this account requires — a custom cover frame for every Reel. The cover frame is a still JPEG designed to represent the reel in the profile grid and in the feed before a viewer clicks play. It is always selected manually at upload. Never allow Instagram to auto-select a cover frame — auto-selection pulls an arbitrary video frame, frequently a black fade frame.

The Cover Frame is produced as a companion to every Carousel Reel. It is a separate file; it is not extracted from the video.

#### Relationship to T-CR-HOOK

The Cover Frame is designed to look like a still version of the Hook Slide. It should share:
- The same (or very similar) background — the first compositionally stable frame of the background loop used on Slide 1
- The same anchor line text from Slide 1
- The same gold accent word if used on Slide 1
- The same composition: anchor in the center zone, no supporting line (or the same supporting line if Slide 1 has one)

The Cover Frame is not identical to the Hook Slide in production terms — it is a separate still file — but visually it should be indistinguishable from a still frame of Slide 1.

#### What Must Be Visible at Grid Crop

In the profile grid, the Cover Frame is cropped to a center square: y=420px to y=1500px of the 1080x1920px canvas. This crop zone must contain:
- The anchor line text (set in the center zone per standard placement — this is satisfied by default)
- The warm background atmosphere
- Any gold accent word

Check this explicitly before approving the Cover Frame. Place a 1080x1080px guide box centered at y=960px (center of canvas) and confirm all critical elements appear within it.

#### Fixed Elements

- **Canvas:** 1080x1920px, RGB, sRGB color profile
- **Output format:** JPEG, quality 85–95
- **Safe zone and text zone guides:** Same as all 9:16 templates. These guides ensure placement consistency with the Hook Slide.
- **Typography:** Identical to Hook Slide — Cormorant Garamond Medium 500, `#F0EAD9`, 88–96px anchor.

#### Variable Elements

- **Background image:** A still capture or still export of the opening frame of the Carousel Reel's Slide 1 background. This should be the most compositionally strong, dark, warm frame from the video — not the first literal frame of the file if the first frame is a black fade. Identify the first fully visible stable frame of the background loop and use that.
- **Anchor line text:** Same as Hook Slide. Drop from the Content Brief.
- **Accent word:** Same as Hook Slide.

#### Layer Structure

```
[top]
CAROUSEL REEL SAFE ZONE GUIDE        (locked, non-printing)
CAROUSEL REEL TEXT ZONE GUIDE        (locked, non-printing)
GRID CROP GUIDE (1080x1080 centered) (locked, non-printing — added for Cover Frame template only)
ANCHOR LINE
ANCHOR ACCENT                        (hide if no gold word)
VIGNETTE                             (match Slide 1 vignette if used)
BG IMAGE                             (still frame export from Slide 1 background)
[bottom]
```

#### File Naming

`[reel-filename]-cover.jpg`

Examples:
- `cr-pdh-mfst-001-cover.jpg` for the cover frame accompanying `cr-pdh-mfst-001.mp4`

Deliver the Cover Frame JPEG to the Asset Manager alongside the MP4 file as a set.

#### Production Notes

- The Cover Frame is produced after the Reel is complete — it uses a frame from the finished background. Do not produce it from a placeholder.
- The JPEG must be sharp and well-exposed. If the background loop has very dark opening frames that look underexposed at thumbnail size, choose the first frame where the warm light source is clearly visible as the cover background.
- The Cover Frame also functions as the primary grid element for the account's visual identity. Across many posts, the grid of Cover Frames tells the visual story of the account. Apply background selection extra carefully for the cover — it is the face of the post in the grid.

---

## Group 2 — Standard Reel Templates (9:16, 1080x1920px)

Standard Reels are single continuous video posts — not carousel-style multi-slide. For this account, a Standard Reel is typically a single quote card held on screen with a background loop, for 10–20 seconds. It is used for single powerful statements that do not need expansion across multiple slides.

---

### T-SR-SINGLE — Standard Reel Single Quote

**Template ID:** T-SR-SINGLE
**Format:** Standard Reel — 9:16, 1080x1920px
**Video duration:** 10–20 seconds (target range for this format and content type)

#### Purpose and When to Use

Use T-SR-SINGLE when:
- The Content Brief contains a single, complete, self-contained statement that does not require multiple slides to develop
- The content is intended as a brief ambient moment — a line held in space with a breathing background
- The Strategy Director or Content Brief explicitly specifies Standard Reel format

Do not use T-SR-SINGLE as a shortcut to avoid building a full Carousel Reel. The account's primary format is Carousel Reel. T-SR-SINGLE is for content that genuinely benefits from the single-frame, held-duration format.

#### Fixed Elements

- **Canvas:** 1080x1920px, RGB, sRGB color profile
- **Safe zone guide:** `STANDARD REEL SAFE ZONE GUIDE` — same boundaries as Carousel Reel: no text above y=150px, no anchor text above y=250px, no text left of x=80px or right of x=1000px, no text below y=1670px.
- **Text zone guide:** `STANDARD REEL TEXT ZONE GUIDE` — same five zones as Carousel Reel.
- **Anchor text spec:** Cormorant Garamond Medium 500, `#F0EAD9`, 88–96px. Apply Slide 1 sizing (the upper end of the range) because a Standard Reel is functionally one long Hook Slide.
- **Alignment:** All text horizontally centered. 900px column.
- **No slide number.** Standard Reels have no slides to count.
- **No attribution on screen** unless the Content Brief specifies it (named quote source). If attribution is present, apply it in the Lower Accent Zone, DM Sans Light Italic, `#C8BBA8`, 28–32px.

#### Variable Elements

- **Background video:** Replace `BG VIDEO` with the approved background loop for this post. The loop must run for the full video duration without obvious repetition (target a 12–15 second loop for a 15-second reel; a loop shorter than the reel should repeat at a point where repetition is not detectable within normal single viewing). See Platform Design Spec Format 2 loop guidance for the cross-dissolve technique at the loop point.
- **Anchor line text:** The full quote. From the Content Brief. Drop into `ANCHOR LINE`. Word count: 12 words maximum. If the content exceeds this, it likely belongs in a Carousel Reel — flag to the Content Writer.
- **Accent word (optional):** One gold word maximum. Set in `ANCHOR ACCENT`. Same rules as Carousel Reel.
- **Supporting line (optional):** One short supporting line (4–6 words maximum) may be included if the Content Brief specifies one. Set in `SUPPORTING LINE`, DM Sans Light 300, `#C8BBA8`, 32–40px, at least 40px below anchor. The Standard Reel format works best with anchor-only or anchor + one supporting line — no more.
- **Attribution (optional):** Set in `ATTRIBUTION` if Content Brief specifies a named source.

#### Layer Structure

```
[top]
STANDARD REEL SAFE ZONE GUIDE  (locked, non-printing)
STANDARD REEL TEXT ZONE GUIDE  (locked, non-printing)
ANCHOR LINE
ANCHOR ACCENT                  (hide if no gold word)
SUPPORTING LINE                (hide if anchor-only)
ATTRIBUTION                    (hide if no attribution)
VIGNETTE                       (show if background needs center deepening)
BG VIDEO
[bottom]
```

#### Text Entrance Timing Reference

The text enters simultaneously with the video background. Apply the following animation to all text layers:

- Fade in from zero opacity to full opacity: 0.5–0.6 seconds, ease-in-out
- Begins at t=0 simultaneously with the video
- No motion — text does not move, drift, or scale during entrance
- Hold at full opacity for the body of the video
- Text exits with the video on fade-out: 0.5 seconds to match the video end

The anchor text and supporting line (if present) enter together as a unified element. Do not animate them independently.

Gold accent words do not animate independently. They enter and exit as part of the anchor line.

#### Production Notes

- The Standard Reel's cover frame is handled the same way as the Carousel Reel cover frame: a separate JPEG companion file, the first compositionally stable frame of the background loop, with the overlay text set at production spec. Name it `[sr-filename]-cover.jpg`.
- For looping backgrounds, verify the loop transition is invisible at 1x playback speed. If you can see the loop point, the transition needs a cross-dissolve or a different loop edit.
- Export spec: MP4, H.264, 1080x1920px, 23.976fps, 3500–8000 kbps, AAC audio 128 kbps minimum. See Platform Design Spec Format 2 for full export table.

---

## Group 3 — Static Post Templates (4:5 Portrait, 1080x1350px)

Static posts are still images published to the feed. They carry less algorithmic distribution than Reels but serve an important role: filling the posting cadence, diversifying the feed, and providing a format that is saved and re-shared at different rates than Reels.

Both static templates in this group — T-SP-SINGLE and T-SP-CAROUSEL-SLIDE — share the same 4:5 portrait base canvas. Build the base once; toggle layers to configure each variant.

---

### T-SP-SINGLE — Single Static Quote Post

**Template ID:** T-SP-SINGLE
**Format:** Static Post, portrait — 4:5, 1080x1350px
**Output:** Single JPEG or PNG file

#### Purpose and When to Use

Use T-SP-SINGLE when:
- The Content Brief contains a single complete thought that does not need expansion
- The post is filling cadence between Carousel Reels
- A quotation from a named source works best as a single attributed card
- The Analyst brief flags a static post as appropriate for the period's test objectives

Do not substitute T-SP-SINGLE for a Carousel Reel when the content warrants a carousel. Default to Carousel Reel when either format could work.

#### Fixed Elements

- **Canvas:** 1080x1350px, RGB, sRGB color profile
- **Safe zone guide:** `STATIC POST SAFE ZONE GUIDE` — hard insets: no text above y=80px, no text below y=1270px, no text left of x=80px or right of x=1000px. Recommended text boundary: top y=200px, bottom y=1200px. Lock in red at 30% opacity.
- **Text zone guide:** `STATIC POST TEXT ZONE GUIDE` — marks the effective content zone: y=200px to y=1200px, x=80px to x=1000px. Lock in blue at 30% opacity.
- **Anchor text spec:** Cormorant Garamond Medium 500, `#F0EAD9`, 72–88px. Use the upper end for short lines; lower end for longer lines.
- **Supporting line spec:** DM Sans Light 300, `#C8BBA8`, 30–38px.
- **Attribution spec:** DM Sans Light Italic 300 or Cormorant Garamond Light Italic, `#C8BBA8`, 26–30px.
- **No slide number.** Single static posts do not use slide numbers.
- **Alignment:** All text horizontally centered. 900px column (x=80px to x=1000px).

#### Variable Elements

- **Background image:** Replace `BG IMAGE` with the approved still image for this post. Must pass all Dark Earth warm-dark and warm light source checks.
- **Anchor line text:** From the Content Brief. Drop into `ANCHOR LINE`.
- **Accent word (optional):** One gold word maximum. Set in `ANCHOR ACCENT`. Hide if not used.
- **Supporting line (optional):** Set in `SUPPORTING LINE` if the Content Brief includes one. Hide if anchor-only.
- **Attribution (optional):** Set in `ATTRIBUTION` if the Content Brief specifies a named source. Hide if not applicable.

#### Layer Structure

```
[top]
STATIC POST SAFE ZONE GUIDE   (locked, non-printing)
STATIC POST TEXT ZONE GUIDE   (locked, non-printing)
ANCHOR LINE
ANCHOR ACCENT                 (hide if no gold word)
SUPPORTING LINE               (hide if anchor-only)
ATTRIBUTION                   (hide if no attribution)
SLIDE NUMBER                  (hide — always hidden on T-SP-SINGLE)
SWIPE PROMPT                  (hide — always hidden on T-SP-SINGLE)
DIVIDER RULE                  (optional)
VIGNETTE                      (show if background needs deepening)
BG IMAGE
[bottom]
```

#### Composition Rules

**Default anchor placement:** The visual midpoint of the anchor text block should target approximately y=675px (center of the effective content zone: (200+1200)/2 = 700px, adjusted slightly for visual weight). Adjust upward or downward based on background visual weight — a background with a warm light source concentrated at the bottom (low horizon) can be balanced by placing the text slightly higher.

**Grid crop consideration:** In the profile grid, the portrait post is cropped to a center square (y=135px to y=1215px visible). Anchor text in the center zone (targeting y=675px) falls well within this range. Verify explicitly.

**Attribution placement:** On posts with attribution, position the attribution line at least 30px below the supporting line (or 30px below the anchor if there is no supporting line), within the lower portion of the content zone (y=900–1200px range). Attribution should feel quiet and secondary — it is `#C8BBA8` at the smallest text size in the system.

#### Production Notes

- Export as JPEG at quality 85–95. Use PNG if JPEG artifacts are visible at text edges (fine stroke characters in Cormorant Garamond can sometimes show JPEG ringing at text boundaries at lower quality settings).
- File naming: `sp-[scene-code]-[pillar-code]-[NNN].jpg`
- Deliver as a single file to the Asset Manager with the Asset Delivery Note.

---

### T-SP-CAROUSEL-SLIDE — Static Carousel Post Slide

**Template ID:** T-SP-CAROUSEL-SLIDE
**Format:** Carousel Post (static, non-Reel), portrait — 4:5, 1080x1350px
**Output:** Individual JPEG or PNG files per slide, delivered in numbered sequence

#### Purpose and When to Use

Use T-SP-CAROUSEL-SLIDE when producing a Carousel Post (static slides, not a Reel). This is a multi-slide static image post where viewers swipe through frames in the feed. It does not appear on the Reels tab and does not require audio.

Use when:
- The content is list-style or step-by-step and reads better as static slides than animated frames
- Background video loops are not available or appropriate for the content tone
- The Analyst brief or Strategy Director direction specifically calls for a static Carousel Post
- The content has high save-and-reread value (static carousels often outperform on saves in certain content categories)

Default to Carousel Reel over Carousel Post whenever the content can work in either format.

#### Difference from T-SP-SINGLE

T-SP-CAROUSEL-SLIDE is the same base template as T-SP-SINGLE with two additional active elements:
1. `SLIDE NUMBER` is visible and populated
2. `SWIPE PROMPT` is visible and populated on Slide 1 only, hidden on all subsequent slides

Everything else — canvas, safe zones, typography, color, layer order — is identical to T-SP-SINGLE.

#### Fixed Elements

All fixed elements are identical to T-SP-SINGLE. Additionally:

- **Slide number:** DM Sans Regular 400, `#C8BBA8`, 22–26px, all-caps, letter spacing +1.5px. Position in the Upper Accent Zone, centered (preferred) or right-aligned.
- **Swipe prompt (Slide 1 only):** DM Sans Light 300, `#C8BBA8`, 22–26px. Text: "Swipe to continue" or "Keep reading". Position in the Lower Content Zone, below the main anchor and supporting lines, above the bottom safe zone boundary. This element is only visible on Slide 1 of the carousel.

#### Variable Elements

Same as T-SP-SINGLE, plus:
- **Slide number value:** Set to the current slide number ("01", "02", etc.)
- **Swipe prompt text:** "Swipe to continue" on Slide 1. Hidden on all other slides.

#### Layer Structure

```
[top]
STATIC POST SAFE ZONE GUIDE   (locked, non-printing)
STATIC POST TEXT ZONE GUIDE   (locked, non-printing)
ANCHOR LINE
ANCHOR ACCENT                 (hide if no gold word)
SUPPORTING LINE               (hide if anchor-only)
ATTRIBUTION                   (hide if no attribution)
SLIDE NUMBER                  (visible on all slides)
SWIPE PROMPT                  (visible on Slide 1 only; hide on slides 2+)
DIVIDER RULE                  (optional)
VIGNETTE                      (show if background needs deepening)
BG IMAGE
[bottom]
```

#### Composition Rules

**Background continuity across slides:** All slides in a Carousel Post must share visual family — same scene category, same warmth level, same level of visual complexity. Slight mood arc variation (slightly warmer/lighter on the final slide) is appropriate but the visual world must feel unified.

**Cover slide (Slide 1):** The first slide of a Carousel Post is the only slide visible in the profile grid. Its thumbnail crop (y=135px to y=1215px) must contain the anchor line and communicate the post topic. The swipe prompt is positioned below the anchor — it must also fall within the crop zone (above y=1215px) to serve its function.

**Slide count:** Minimum 2 slides, maximum 10 (platform limit). Recommended: 4–7 slides following the same Hook — Body — CTA narrative logic as Carousel Reels.

#### File Naming

`cp-[scene-code]-[pillar-code]-[NNN]-s[slide].jpg`

Example for a 5-slide Carousel Post:
- `cp-snl-mfst-001-s1.jpg` (Slide 1 — Hook)
- `cp-snl-mfst-001-s2.jpg` (Slide 2 — Body)
- `cp-snl-mfst-001-s3.jpg`
- `cp-snl-mfst-001-s4.jpg`
- `cp-snl-mfst-001-s5.jpg` (Slide 5 — CTA)

Deliver all slides as a numbered set with the Asset Delivery Note specifying the intended order.

#### Production Notes

- All slides must be the same aspect ratio (4:5 portrait). Do not mix portrait and square within a Carousel Post.
- Number files sequentially so the Asset Manager and Publisher can confirm order without opening each file.
- Slide 1's swipe prompt text should be set at a size that is readable but visually quiet. It is a functional cue, not a design element — it should not compete with the anchor line.

---

## Group 4 — Story Templates (9:16, 1080x1920px)

Stories are a relationship and retention tool, not a growth tool. They reach existing followers, not new ones. At the account-building phase, Stories are supplementary — produced primarily to share new feed posts to Stories immediately after publishing.

Story templates share the same canvas dimensions as Reel templates (1080x1920px) but have significantly tighter effective text zones due to larger Instagram UI footprints.

**Critical dimension difference from Reels:** The Story effective text zone runs y=350px to y=1300px (950px tall). This is substantially smaller than the Reel effective text zone. Do not apply Reel text placements to Story templates without adjustment.

---

### T-ST-QUOTE — Quote Story

**Template ID:** T-ST-QUOTE
**Format:** Story — 9:16, 1080x1920px
**Output:** JPEG/PNG for static Stories; MP4 for video background Stories

#### Purpose and When to Use

Use T-ST-QUOTE to share a quote or excerpt as a Story frame — either as a companion to a new feed post or as standalone Story content. This is the primary Story template for this account.

Appropriate uses:
- Sharing a new Carousel Reel to Stories: Create a Story frame with the hook quote and a visual call to see the full post in the feed
- Standalone quote Stories between feed posts (low priority compared to feed content)
- Highlight frames for the account's saved Story Highlights (these are viewed long-term on the profile)

#### Fixed Elements

- **Canvas:** 1080x1920px, RGB, sRGB color profile
- **Safe zone guide:** `STORY SAFE ZONE GUIDE` — critical dimensions differ from Reels:
  - y=0 to y=250px: No text (progress bar, account name, UI)
  - y=250px to y=350px: Avoid anchor text (clearance buffer for UI)
  - x=80px to x=1000px: Hard side insets (same as Reels)
  - y=1300px to y=1500px: Link sticker zone — leave clear if a link sticker will be added at publish (Publisher adds the link sticker at upload; Designer leaves this zone empty)
  - y=1500px to y=1920px: No text (tap zone and UI)
  - Hard text boundary: y=1300px maximum for any text element
  Lock this layer in red at 30% opacity. This safe zone is different from the Reel safe zone — do not confuse them.
- **Text zone guide:** `STORY TEXT ZONE GUIDE` — marks the effective text zone: y=350px to y=1300px (950px tall), x=80px to x=1000px. Lock in blue at 30% opacity.
- **Link sticker zone guide:** `LINK STICKER ZONE` — marks y=1300px to y=1500px in a distinct color (green at 30% opacity). Lock this layer. The Publisher places the link sticker in this zone at upload. The Designer produces the Story frame without any element in this zone.
- **Anchor text spec:** Cormorant Garamond Medium 500, `#F0EAD9`, 72–88px. Use the lower end (72–80px) if the quote exceeds 6 words — the shorter vertical text zone means longer quotes need smaller text to breathe.
- **Supporting line spec:** DM Sans Light 300, `#C8BBA8`, 28–36px.
- **Attribution spec:** DM Sans Light Italic 300 or Cormorant Garamond Light Italic, `#C8BBA8`, 24–28px.
- **No slide numbers.** Stories are not slide-navigated.
- **Alignment:** Horizontally centered. 900px column.

#### Variable Elements

- **Background (video or still):** Replace `BG VIDEO` or `BG IMAGE`. Same Dark Earth warm-dark requirements apply. For video Stories: target 10–15 seconds, with the same imperceptible-movement background rule as Reels. For static Stories: the image is displayed for exactly 7 seconds — design for a 4-second read time at maximum.
- **Anchor line text:** From the Content Brief. Drop into `ANCHOR LINE`. Target 72–88px based on line length. The 950px tall text zone is less forgiving than the Reel format — long quotes may need to be a single line rather than two wrapped lines to maintain legibility at scale.
- **Accent word (optional):** One gold word maximum. Hide `ANCHOR ACCENT` if not used.
- **Supporting line (optional):** Set in `SUPPORTING LINE`. Hide if anchor-only.
- **Attribution (optional):** Set in `ATTRIBUTION`. Hide if not applicable.

#### Layer Structure

```
[top]
STORY SAFE ZONE GUIDE      (locked, non-printing)
STORY TEXT ZONE GUIDE      (locked, non-printing)
LINK STICKER ZONE          (locked, non-printing — green 30%)
ANCHOR LINE
ANCHOR ACCENT              (hide if no gold word)
SUPPORTING LINE            (hide if anchor-only)
ATTRIBUTION                (hide if no attribution)
DIVIDER RULE               (optional)
VIGNETTE                   (use if background needs deepening — especially important for the tighter text zone)
BG VIDEO or BG IMAGE
[bottom]
```

#### Composition Rules — Story Specific

**Vertical centering in the effective zone:** With the text zone running y=350px to y=1300px (950px tall), the visual midpoint is approximately y=825px. Place the anchor text block centered around this point. Adjust upward if a supporting line or attribution falls below the anchor — you need room for all elements to breathe within the 950px zone.

**Crowding prevention:** With a shorter vertical range than Reels, be conservative about stacking multiple text tiers. An anchor + supporting line on a Story is fine. Anchor + supporting line + attribution risks crowding the 950px zone. If attribution is required, consider dropping the supporting line, or reducing the anchor size to the lower end of the range.

**Link sticker zone awareness:** Even if no link sticker is planned for a specific Story, build the template with the link sticker zone clear by default. It is the Publisher's decision whether to add a link sticker — the Designer's job is to not put anything there that a sticker would cover.

**Static Story pacing:** Instagram auto-advances static Stories after 7 seconds. All text on the frame must be readable in 4 seconds. Simpler compositions — fewer words, larger type — serve the format. If a quote requires more than 4 seconds to read, it may be better as a feed post than a Story.

#### Production Notes

- File naming for static Story: `st-[scene-code]-[pillar-code]-[NNN].jpg`
- File naming for video Story: `st-[scene-code]-[pillar-code]-[NNN].mp4`
- Export settings — static: JPEG 85–95 quality, sRGB
- Export settings — video: MP4, H.264, 1080x1920px, 23.976fps, under 250 MB (Instagram Story limit is 250 MB)
- If delivering a Story sequence (multiple frames for consecutive Story posts), name frames sequentially: `st-[scene-code]-[pillar-code]-[NNN]-f1.jpg`, `f2.jpg`, etc. Include intended display order in the Asset Delivery Note.

---

### T-ST-ENGAGEMENT — Engagement Story

**Template ID:** T-ST-ENGAGEMENT
**Format:** Story — 9:16, 1080x1920px
**Output:** JPEG or PNG (static; engagement stickers are added at upload by Publisher)

#### Purpose and When to Use

Use T-ST-ENGAGEMENT when the Content Brief specifies an engagement Story — a Story frame designed to host an interactive sticker element (poll, question box, slider, or quiz). Engagement Stories are used to generate audience feedback data that the Analyst can use to understand the audience.

This template is lower priority than T-ST-QUOTE during the early account-building phase (when the follower base is small, engagement Stories produce limited data). The Analyst brief will flag when engagement Story frequency should increase.

#### How This Template Differs from T-ST-QUOTE

The key structural difference: T-ST-ENGAGEMENT reserves a dedicated zone for the interactive sticker. Instagram's engagement stickers (polls, question boxes, etc.) are placed over the Story frame by the Publisher at upload. They cannot be designed into the frame — they are platform widgets. The Designer's role is to:

1. Design the background and any brand text that sets up the engagement prompt
2. Leave a clearly designated zone for the sticker that does not conflict with brand text
3. Brief the Publisher on where the sticker should be placed

#### Interactive Sticker Placement Zone

**Sticker zone:** y=800px to y=1100px, horizontally centered. This is the primary zone for Instagram's interactive stickers. It sits in the lower portion of the effective text zone, below the prompt text.

This zone must be visually clear in the template — no text, no brand elements positioned here. The background should be sufficiently dark in this area to make the Instagram-generated sticker legible regardless of its styling.

#### Fixed Elements

- **Canvas:** 1080x1920px, RGB, sRGB color profile
- **Safe zone guide:** `STORY SAFE ZONE GUIDE` — same as T-ST-QUOTE. Include the link sticker zone guide at y=1300–1500px. Same hard boundaries.
- **Text zone guide:** `STORY TEXT ZONE GUIDE` — same as T-ST-QUOTE.
- **Sticker zone guide:** `ENGAGEMENT STICKER ZONE` — marks y=800px to y=1100px. Color: yellow at 30% opacity. Lock this layer. Non-printing. This guide tells the operator where NOT to place brand text, and tells the Publisher where to place the sticker.
- **Typography:** Same specs as T-ST-QUOTE. Prompt text (the setup question or invitation) set in Cormorant Garamond Medium 500, `#F0EAD9`, 72–88px.

#### Variable Elements

- **Background:** Same Dark Earth warm-dark requirements. For engagement Stories, the background in the sticker zone (y=800–1100px) should be reliably dark — a background with a warm light source concentrated in the upper portion of the frame works well, leaving the lower text zone consistently dark for sticker legibility.
- **Prompt text:** The question or invitation that sets up the engagement sticker. From the Content Brief. Set in `ANCHOR LINE`. Place in the Upper Content Zone (y=350–600px) so it sits clearly above the sticker zone.
- **Supporting line (optional):** A brief additional context line below the prompt if needed. Set in `SUPPORTING LINE`. Position between the prompt and the sticker zone — within y=600px to y=750px — so it clears the sticker zone.
- **Accent word (optional):** Standard rules apply.

#### Layer Structure

```
[top]
STORY SAFE ZONE GUIDE         (locked, non-printing)
STORY TEXT ZONE GUIDE         (locked, non-printing)
LINK STICKER ZONE             (locked, non-printing)
ENGAGEMENT STICKER ZONE       (locked, non-printing — yellow 30%)
ANCHOR LINE                   (prompt text — upper content zone)
ANCHOR ACCENT                 (hide if no gold word)
SUPPORTING LINE               (below prompt, above sticker zone)
DIVIDER RULE                  (optional — a rule between prompt and sticker zone can visually separate them)
VIGNETTE                      (use to ensure the sticker zone is reliably dark)
BG IMAGE
[bottom]
```

#### Composition Logic

The T-ST-ENGAGEMENT composition reads from top to bottom:

1. **Upper zone (y=350–600px):** Prompt text — the question or invitation that the sticker will answer. Example: a prompt like "Which one lands for you?" set in the anchor style.
2. **Transition (y=600–800px):** Breathing room. Supporting line if needed. Clear space between the text and the sticker.
3. **Sticker zone (y=800–1100px):** Empty in the design file. Publisher places the sticker here at upload.
4. **Lower zone (y=1100–1300px):** Clear of brand text. The sticker may extend slightly below y=1100px — leave this zone completely open.
5. **Link sticker zone (y=1300–1500px):** Reserved per standard Story rules.

#### Publisher Briefing Note (included in Asset Delivery Note)

When delivering a T-ST-ENGAGEMENT frame, include this guidance in the Asset Delivery Note for the Publisher:

"This Story frame is designed for an interactive sticker. Place the [poll / question box / slider — specify type from Content Brief] sticker in the y=800–1100px zone (centered horizontally). The frame text above this zone sets up the sticker prompt. Do not place the sticker over the text area above y=800px."

#### Production Notes

- T-ST-ENGAGEMENT frames are always static — JPEG or PNG. The engagement stickers are platform widgets; they cannot be embedded in video.
- File naming: `st-[scene-code]-[pillar-code]-[NNN].jpg`
- The Analyst will track engagement Story response rates. Deliver all engagement Story frames with a note in the Asset Delivery Note about the prompt type (poll, question box, etc.) and the intended sticker zone position.

---

## Template Usage Decision Tree

Use this guide when the Content Brief arrives and you need to determine which template(s) to produce. Work through the questions in order.

**Step 1 — How many distinct ideas does this post contain?**

- Single complete thought, does not need expansion: Go to Step 2.
- Multiple ideas or a development arc (hook + body + close): The format is a Carousel Reel (T-CR-HOOK + T-CR-BODY + T-CR-CTA + T-CR-COVER). Stop here.

**Step 2 — What format does the Content Brief specify?**

- Carousel Reel: T-CR-HOOK + T-CR-BODY (x slides 2 through N-1) + T-CR-CTA + T-CR-COVER
- Standard Reel: T-SR-SINGLE + companion cover JPEG
- Static Post (single image): T-SP-SINGLE
- Carousel Post (static, non-Reel): T-SP-CAROUSEL-SLIDE (applied to each slide)
- Quote Story: T-ST-QUOTE
- Engagement Story: T-ST-ENGAGEMENT
- Not specified: Go to Step 3.

**Step 3 — If format is not specified, use this priority order:**

1. Is this a multi-idea development piece? Carousel Reel.
2. Is this a single powerful statement? Standard Reel.
3. Is this filling cadence between Reels or is video background unavailable? Static Post (T-SP-SINGLE).
4. Is this being published to Stories only? T-ST-QUOTE.
5. Is this a list or step-by-step piece where static slides work better than animated? Carousel Post (T-SP-CAROUSEL-SLIDE).

**Content Pillar x Format guidance:**

| Pillar | Primary template | Common secondary |
|---|---|---|
| Manifestation | T-CR (Carousel Reel) | T-SR-SINGLE |
| Confidence & Self-Worth | T-CR (Carousel Reel) | T-SP-SINGLE |
| Gratitude | T-SP-SINGLE or T-SR-SINGLE | T-CR |
| Personal Growth | T-CR (Carousel Reel) | T-SP-CAROUSEL-SLIDE |
| Abundance Mindset | T-CR (Carousel Reel) | T-SR-SINGLE |
| Business Growth | T-SP-CAROUSEL-SLIDE or T-CR | T-SR-SINGLE |

This is guidance, not a constraint. The Content Brief format specification takes precedence. Use the pillar mapping when the format is unspecified.

---

## Variable Element Constraints

These constraints apply across all templates and govern how variable elements may be populated. They prevent content from breaking the visual system through copy length or accent word overuse.

### Word Count Limits by Text Zone

| Element | Template(s) | Maximum Word Count | Notes |
|---|---|---|---|
| Anchor line — Hook Slide | T-CR-HOOK, T-SR-SINGLE | 12 words hard limit; 6–9 optimal | Flag to Content Writer if exceeded. Do not reduce font size to fit more words. |
| Anchor line — Body and CTA Slides | T-CR-BODY, T-CR-CTA | 12 words | Same hard limit. |
| Anchor line — Static Post | T-SP-SINGLE, T-SP-CAROUSEL-SLIDE | 12 words | Same hard limit. |
| Anchor line — Story | T-ST-QUOTE, T-ST-ENGAGEMENT | 10 words recommended; 12 maximum | Story text zone is tighter. 10 words is the practical limit for comfortable legibility. |
| Supporting line — all templates | All | 8 words maximum | Supporting lines must feel clearly shorter and lighter than the anchor. If they approach 8 words, they are too long. |
| Swipe prompt — T-SP-CAROUSEL-SLIDE Slide 1 | T-SP-CAROUSEL-SLIDE | Fixed text: "Swipe to continue" or "Keep reading" | Do not use custom swipe prompt copy. |
| Attribution — all templates | All | 6 words maximum (typically 2–4) | Format: Author name, or "— Author Name". Abbreviate long attribution strings. |
| Account handle — T-CR-CTA | T-CR-CTA | Fixed: @exponentialgrowthformula_ | Use only when Content Brief specifies. |

If the Content Brief provides text that exceeds these limits, flag to the Content Writer before production. Do not adapt the text — the Writer owns the copy.

### Background Selection Constraints

At the template level, the following background rules apply in addition to the Brand Style Guide sourcing criteria:

- **Within a single Carousel Reel or Carousel Post:** All slide backgrounds must belong to the same scene category, or to scene categories with compatible tonal families (e.g., Pre-Dawn Horizon and Shadowed Natural Landscape can coexist; Pre-Dawn Horizon and Dark Interior should not be mixed in the same carousel unless the Content Brief calls for a tonal contrast and Strategy Director approves).
- **Cover frame background (T-CR-COVER):** Must be derived from the Slide 1 background — the same background file, first stable frame. Do not use a different background for the cover.
- **Story backgrounds:** Choose backgrounds where the warm light source is in the upper portion of the frame, leaving the lower text zone (and especially the sticker zone on T-ST-ENGAGEMENT) reliably dark.
- **Engagement Story backgrounds (T-ST-ENGAGEMENT):** The background in the y=800–1100px sticker zone must be reliably dark. Do not use a background where a warm light source (horizon glow, lamp, backlight) falls in this zone — the Instagram-generated sticker will be difficult to read against a light area.

### Accent Word Frequency Cap

The gold accent word (`#C9973A`) is governed by the following limits across all templates:

- **Per slide / per frame:** One gold word maximum. Not one per tier — one per the entire slide.
- **Per carousel (T-CR):** No more than approximately half the slides in the carousel should have a gold accent. A 5-slide carousel: 2–3 slides with gold maximum. A 7-slide carousel: 3–4 slides with gold maximum.
- **Per Carousel Post (T-SP-CAROUSEL-SLIDE):** Same rule as Carousel Reel — approximately half the slides.
- **Standard Reel and single-frame templates:** One gold word maximum per post, or none.
- **Story templates:** One gold word maximum per frame, or none.

If the Content Brief designates gold words on more slides than the frequency cap allows, use judgment to select the most important designations and note the deselections in the Asset Delivery Note. Do not apply gold to every slide because the copy contains many potential emphasis words.

---

## Template Version Control

### When Templates Are Versioned

Templates are versioned when a structural change is made — a change to the layer structure, the safe zone dimensions, the canvas size, or any fixed element. Small adjustments to composition judgment (e.g., adjusting where the anchor sits within the center zone for a specific post) are not versioning events.

The following trigger a new version:
- Instagram updates its safe zone dimensions (UI coverage changes)
- The Brand Style Guide is updated in a way that changes fixed template elements (color change, typeface change, layout rule change)
- The Strategy Director approves a new template structure
- A new template is added to the suite (adds to the suite; does not increment versions of existing templates)

### Version Numbering

Templates are versioned using `v[integer]`: v1, v2, v3.

File naming: `tpl-[format-code]-v[version].[ext]`
Documentation: Update the Template ID header in this document (e.g., "T-CR-HOOK v2") and note the change in the Version History table below.

Previous versions are archived by the Asset Manager. They are never deleted — the archive confirms what template was in use at any given time, which may matter when auditing older published posts.

### Who Approves Updates

- **Minor production notes or guidance adjustments in this specification document:** Designer proposes, Strategy Director approves.
- **Template structural changes (layer structure, safe zones, canvas):** Designer proposes with rationale, Strategy Director approves before the updated template is built.
- **New template additions (new formats or new slide types):** Designer proposes, Strategy Director approves, Asset Manager stores.

Do not implement template changes unilaterally. All changes flow through this approval sequence.

### Version History

| Version | Date | Change Summary | Approved By |
|---|---|---|---|
| 1.0 | 2026-03-18 | Initial template suite specification | Strategy Director |

---

## Document Control

| Property | Value |
|---|---|
| Document owner | Designer |
| Version | 1.0 |
| Date produced | 2026-03-18 |
| Last updated | 2026-03-18 |
| Status | Living — update when templates are versioned or platform specs change |
| Approval required | Strategy Director approval for all structural changes |
| Storage location | `/brand/template-suite.md` |

*All changes to this document must include an updated "Last updated" date and an entry in the Version History table.*
