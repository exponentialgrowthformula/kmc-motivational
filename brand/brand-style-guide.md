# Brand Style Guide — @exponentialgrowthformula_
**Visual Direction:** Dark Earth ("Before Dawn")
**Produced by:** Designer
**Date:** 2026-03-18
**Version:** 1.0
**Status:** Awaiting Strategy Director approval before first publish

---

## How to Use This Document

This is the authoritative visual reference for every agent in the pipeline. It governs every design decision for every asset produced for this account — backgrounds, typography, color, overlay composition, animation, and motion.

If a decision is not covered here, escalate to the Designer before proceeding. Do not improvise.

**Agents who reference this document:** Content Writer, Designer, Asset Manager, Publisher, SEO Specialist.

**Changes to this document** require Strategy Director approval. Submit a proposed change with rationale to the Strategy Director. Do not implement changes unilaterally.

---

## Section 1 — Aesthetic Identity Statement

Dark Earth is not a dark aesthetic. It is a warm aesthetic that lives in the dark.

The distinction matters. Most dark content aesthetics are built on cool, blue-black near-blacks — they communicate coldness, precision, and distance. Dark Earth is built on deep brown-black with an orange undertone. The darkness here feels like earth, not shadow. Like charcoal still warm from a fire. Like the hour before dawn when the sky is not yet blue but the horizon has already started to glow amber. This aesthetic holds its warmth even in its deepest values, which gives it a quality no cool-dark aesthetic can replicate: it feels safe. Powerful and safe at the same time.

This is exactly where the audience lives emotionally. They are 28 to 55 years old. They have done the grind, followed the rules, and arrived somewhere that does not feel like the destination they imagined. Their quiet pain is not dramatic — it is the gap between who they are and who they know they could be. They do not need to be confronted. They need to be seen, steadied, and then moved. The Dark Earth aesthetic does all three: the depth of the palette says "this is serious, and I understand you"; the amber light that lives inside every frame says "there is warmth here, you are not alone"; and the spare, elevated typography says "these words matter." The visual system is not decoration. It is emotional infrastructure.

The visual DNA of this account is a synthesis of two impulses: the naturalistic warmth and ground-level humanity of Option 1 (Elevated Earth) — which wanted to sit with the audience, not above them — and the cinematic weight and formal precision of Option 2 (Dark Clarity) — which understood that authority and differentiation require a stronger visual statement than golden hour alone. Dark Earth keeps Option 1's warmth and soul but applies it to a dark ground, which gives it Option 2's scroll-stopping contrast and brand distinctiveness. The amber gold accent is Option 1's `#C9973A` — warmer, more orange, more like firelight than lamp brass. The typography leans into the serif depth of Option 2 but carries the accessibility of Option 1. The motion follows Option 2's heartbeat pacing, but the content of what moves — the landscapes, the organic loops — belongs to Option 1's naturalistic world.

Every visual decision made under this guide should reinforce the same emotional truth: *You are standing at the threshold. The light is coming.*

---

## Section 2 — Color System

### 2.1 Full Palette

| Token Name | Hex | Role | Description |
|---|---|---|---|
| `--background-base` | `#1C1612` | Primary background | Deep warm charcoal with brown undertone. The dominant frame color. NOT a cool near-black. |
| `--shadow-depth` | `#0E0A07` | Deep background / shadow | The darkest value in the palette. Used at frame edges, in depth transitions, and in the deepest shadow areas of background images. |
| `--text-primary` | `#F0EAD9` | Primary overlay text | Warm ivory. This is the body color for all main overlay text. Never pure white — that reads clinical against the warm dark. |
| `--accent-gold` | `#C9973A` | Accent / emphasis | Amber gold with an orange warmth. Used for single emphasis words, divider rules, and selective motion accents. This is firelight, not jewelry. |
| `--accent-copper` | `#8B5E3C` | Secondary accent | Muted copper/bronze. Used very sparingly — decorative dividers, tertiary elements, subtle texture overlays. Never for body text. |
| `--text-soft` | `#C8BBA8` | Secondary / supporting text | Muted warm grey-tan. Used for attribution lines, slide numbers, and supporting text that should recede behind the anchor line. |

### 2.2 Combination Rules

**Permitted combinations:**

| Foreground | Background | Use |
|---|---|---|
| `--text-primary` `#F0EAD9` | `--background-base` `#1C1612` | All primary overlay text on dark backgrounds. Primary use case. |
| `--accent-gold` `#C9973A` | `--background-base` `#1C1612` | Single emphasis word per slide. Never full sentences. |
| `--text-soft` `#C8BBA8` | `--background-base` `#1C1612` | Attribution, slide numbers, supporting text that should read quieter than the anchor. |
| `--text-primary` `#F0EAD9` | Dark area of a background image | When the image area behind text is reliably dark (verified at production). |
| `--accent-gold` `#C9973A` | Dark area of a background image | Accent word only. Same rules as on flat background. |

**Forbidden combinations:**

- Pure white (`#FFFFFF`) on any background. It reads harsh and clinical and breaks the warmth of the palette.
- `--accent-copper` `#8B5E3C` as body or anchor text on any background. It does not provide sufficient contrast and reads muddy at small sizes.
- `--accent-gold` on light or mid-tone areas of a background image. Gold on light backgrounds loses legibility and visual impact.
- Any cool-grey text color. All text in the system must be warm-toned. If a color reads blue, grey-green, or neutral, it is not in the palette.
- `--text-soft` as an anchor line color. It is a receding color by design and must not carry the most important text on a slide.
- `--accent-gold` on more than one word per slide. One word. If you feel the need to emphasize two words on the same slide, the copy needs re-evaluation, not the design.

### 2.3 Accessibility Notes

**Primary combination — `#F0EAD9` on `#1C1612`:**
Approximate contrast ratio: 10.2:1. Exceeds WCAG AA (4.5:1) and WCAG AAA (7:1) for normal text. This combination is highly accessible at all text sizes used in the system.

**Accent combination — `#C9973A` on `#1C1612`:**
Approximate contrast ratio: 5.3:1. Meets WCAG AA for normal text and WCAG AA for large text. Acceptable for emphasis use. Do not use for small supporting text at sizes below 18px equivalent.

**Secondary text — `#C8BBA8` on `#1C1612`:**
Approximate contrast ratio: 6.8:1. Meets WCAG AA. Acceptable for attribution and slide number use. Do not use for primary or anchor text — it is designed to recede and does not have the visual weight to carry important content.

**Practical note:** Contrast ratios above assume a flat background of `#1C1612`. When text sits over a background image rather than a flat color, verify legibility at actual production resolution before finalizing. Dark areas of images can vary. If a background image has a lighter mid-tone in the text placement zone, either select a different background or adjust crop. Never add a text box or fill to compensate — see Section 5.6 for the no-fill rule.

### 2.4 Usage Proportions

In a typical Carousel Reel frame:

- **`--background-base` / image dark tones:** Approximately 80–85% of the total frame area. The darkness is not empty — it is the environment in which everything else lives.
- **`--text-primary` (ivory text):** Concentrated in the central composition zone. Typically 5–10% of the frame area in terms of ink coverage. Text is intentionally sparse.
- **`--accent-gold`:** One word or a short decorative element per slide. Represents approximately 1–3% of frame area. Its power comes from rarity — if it appears too frequently, it loses emphasis.
- **`--shadow-depth`:** Present in corners, edges, and transitional zones of background images. Not applied artificially unless the vignette technique is being used to deepen the frame edge.
- **`--accent-copper` / `--text-soft`:** Combined, less than 5% of frame area per slide.

---

## Section 3 — Typography System

### 3.1 Typefaces

**Primary Typeface — Cormorant Garamond**
A high-contrast old-style serif with exceptional elegance at large display sizes. Used for all anchor lines (main quote text). On dark backgrounds, use Medium (500) or SemiBold (600) weight — the thin strokes of Cormorant Garamond at Regular weight can disappear against a dark field. This is the voice of the account. It carries authority without coldness.

- Fallback primary: Playfair Display (Bold or Regular depending on line length — shorter lines can use Bold for more visual weight; longer lines use Regular to maintain legibility).
- Do not use weights below Medium on dark backgrounds.
- Do not use Italic for anchor lines — it softens the authority. Italic is permitted for attribution only.

**Secondary Typeface — DM Sans**
A clean, humanist geometric sans-serif with warmth in its proportions. Used for all supporting lines, attribution, slide numbers, and any metadata text. Weight: Light (300) for supporting lines and attribution. Regular (400) for slide numbers where they need to be clearly readable.

- Fallback secondary: Inter (same weight rules apply).
- Do not use DM Sans for anchor lines. The contrast between the serif anchor and the sans supporting line is structural — removing it collapses the hierarchy.
- Do not use Bold DM Sans in any text overlay context. Supporting text must always subordinate to the anchor.

### 3.2 Size Scale — Carousel Reels (1080x1920px, 9:16)

All sizes are in pixels at 1x production resolution. These are minimum sizes — err toward larger, not smaller. The audience is reading on mobile in motion.

| Element | Typeface | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Anchor line (core quote) | Cormorant Garamond | Medium (500) | 72–96px | 1.15 | 0 to -0.5px |
| Supporting line (secondary thought) | DM Sans | Light (300) | 32–40px | 1.5 | +0.5px |
| Attribution (author/source) | Cormorant Garamond or DM Sans | Light Italic or Light | 28–32px | 1.5 | +1px |
| Slide number | DM Sans | Regular (400) | 22–26px | — | +1.5px |
| Accent word (gold, within anchor) | Cormorant Garamond | Medium (500) | Same as anchor | 1.15 | Same as anchor |

**Notes on size range application:**
- Use the upper end of the anchor size range (88–96px) for short anchor lines (1–5 words). Use the lower end (72–80px) for longer lines (8–12 words).
- Do not exceed 12 words on an anchor line. If the copy requires more than 12 words to express a single thought, it is a copy issue — flag to the Content Writer, do not reduce font size.
- Supporting lines should feel significantly smaller than the anchor. If they look close in size, they are too large. The visual relationship should read immediately as hierarchy, not as two competing lines at similar scale.

### 3.3 Alignment

**Default alignment: Center.** All text overlays are horizontally centered by default. This is the primary alignment rule.

**Left alignment exceptions:** Left alignment may be used on slides where the background composition has a strong focal element on the right side of the frame, and centering the text would produce visual competition. This requires explicit design judgment and must be noted in the Asset Delivery Note. Do not use left alignment as a stylistic default — it reads less confidently on this type of content.

**Vertical placement:** See Section 5.1 for placement zones.

### 3.4 Type on Dark Backgrounds — Rules

**Do:**
- Use Medium (500) or heavier for Cormorant Garamond on dark backgrounds. Thin strokes of Regular weight can visually break at fine lines in the letterform.
- Give anchor lines generous line height (1.15–1.2). Tight leading on a dark background makes text feel compressed and hard.
- Verify legibility at actual phone screen size (375px wide viewport equivalent) before approving any asset. A layout that looks clean at full desktop resolution may compress poorly on a 6-inch screen.
- Use letter spacing on DM Sans supporting lines (+0.5 to +1px). It adds elegance and separates the characters enough to read clearly at smaller sizes.

**Never do:**
- Never set Cormorant Garamond at Regular (400) weight for anchor lines on a dark background. It will look thin and unintentional.
- Never underline, strike-through, or box text. These treatments break the visual language of the system.
- Never use all-caps for anchor lines. It is a different register — assertive in a way that conflicts with the considered tone. All-caps DM Sans is permitted for slide numbers only.
- Never set supporting text and anchor text at sizes within 20px of each other. The size differential is what creates the hierarchy. If the gap collapses, so does the composition.
- Never allow text to run to the edge of the frame. The minimum inset from any frame edge is 80px on all sides.
- Never stack more than two typographic tiers in a single slide composition (anchor + supporting is the maximum). A third tier makes the slide cluttered and forces the viewer to do too much work.

---

## Section 4 — Background System

### 4.1 Sourcing Criteria

A background is approved when it meets all of the following:

1. **Warm dark dominant tone.** The majority of the frame must read as dark warm — brown-black, warm charcoal, dark amber, deep earth. The dominant background color must read as warm when measured against the `#1C1612` reference tone. Backgrounds that read as neutral-dark or cool-dark fail this check.
2. **At least one warm light source present.** This is non-negotiable. Every approved background must have a visible or strongly implied warm light source — a dawn edge, a horizon glow, raking amber light across a surface, warm backlight through organic material (leaves, branches, grass), firelight, or a warm-light lamp. A background with no light source reads as dead, not atmospheric. It will not work.
3. **Low-to-medium background detail in the text placement zone.** The center third of the frame — where text will be placed — must be relatively uncluttered. Strong detail or high-contrast visual elements directly in the text zone will compete with the words. Out-of-focus backgrounds, dark sky, open landscape, and blurred earth textures all work. A sharp-focus rock wall behind the text does not.
4. **Cinematic quality.** The image or video must read as intentional and composed, not as accidental stock photography. Adequate depth, good exposure control, and genuine atmospheric quality are required. If it looks like a free stock photo, reject it.
5. **No rejected content.** See Section 4.6.

### 4.2 Scene Categories

The following scene categories are approved for use in this system. Each description includes the key visual elements that make a background in that category work.

**Pre-Dawn Horizon**
The sky is dark, near-black at the top, with an amber or deep gold gradient building at the horizon line. Stars may be visible in the upper portion. The warm light at the horizon is the light source. Silhouetted landforms (hills, trees, mountains) create depth. This is the most on-brand scene category — it is literally the moment of becoming. Exemplar images: mountain ridge at pre-dawn, desert floor with horizon glow, ocean horizon with amber sky edge. Works as static or video loop.

**Shadowed Natural Landscape**
Open landscape scenes where the majority of the frame is in deep shadow, but warm light rakes across a surface from a low angle. A hillside in the last seconds of daylight. A forest floor with amber light coming through a gap in the canopy. Long shadows across warm earth. The landscape is the subject, but the darkness and the light source together create the emotional depth. Works as static or slow-drift video loop.

**Dark Earth Texture**
Close-range textures of natural dark materials — volcanic stone, dark soil, the surface of bark, dry earth. The texture must be warm in tone (dark brown to warm charcoal range) and must have a light source that creates visible surface relief. A warm sidelight or raking light creates the depth that makes texture visible. Avoid: cool grey stone, wet rock with blue sheen, white sand. Works as static or very subtle video loop.

**Deep Forest / Canopy Shadow**
Dark forest interior with warm light breaking through — amber backlight through leaves, a gap in the canopy with a warm sky beyond, late-day light creating golden horizontal beams between trunks. The forest itself is dark, warm-dark, with the light source playing through it. The key is that the forest reads as shelter, not threat. The light coming through is the warmth. Avoid: dense, dark-to-the-edge forest with no light source visible anywhere in the frame. Works as static or gentle organic movement video loop.

**Dark Water with Reflected Light**
Dark water surfaces — a lake, river, or ocean — at a moment when warm light is reflected on the water from a dawn sky or low sun. The water is dark but the surface catches amber and gold. Fog or mist across a dark river with warm light at the horizon. The reflection is the warm light source. Avoid: cool blue ocean, midday bright water. Works well as a slow video loop.

**Dark Interior with Single Warm Light**
A warm lamp, candlelight, or warm window light in an otherwise dark space. Very dark surround with a single contained warm light source. This category is used sparingly — it risks reading as "cozy" rather than "powerful" if overdone. Best used for gratitude and personal growth pillar content. The light source must be warm (amber to gold range, not white). Avoid: clinical white light, multiple light sources, identifiable branded spaces. Works as static or very slow light-shift loop.

### 4.3 Scene Category × Content Pillar Guidance

Scene categories are not locked to specific content pillars — the Dark Earth aesthetic provides brand coherence, not the scene-pillar pairing. Any scene can be used with any pillar when the creative brief calls for it.

The following is soft guidance for the Designer when the Content Brief does not specify a background direction. Use it as a starting point, not a constraint.

| Scene | Best fit pillars | Use sparingly for |
|---|---|---|
| PDH — Pre-Dawn Horizon | Manifestation, Confidence & Self-Worth | Gratitude |
| SNL — Shadowed Natural Landscape | Personal Growth, Abundance Mindset | — |
| DFC — Deep Forest / Canopy | Personal Growth, Manifestation | Business Growth |
| DWR — Dark Water Reflected Light | Gratitude, Abundance Mindset | Confidence & Self-Worth |
| DET — Dark Earth Texture | Any pillar (texture accent, use sparingly) | — |
| DIW — Dark Interior Warm Light | Gratitude, Personal Growth | Confidence & Self-Worth |

**Rationale:** PDH ("the moment of becoming") carries forward-momentum energy that suits Manifestation and Confidence. DWR and DIW have a quieter, more reflective quality that fits Gratitude and Abundance. SNL and DFC sit in the middle — grounded and expansive, suited to growth and mindset content. DET is a texture layer rather than a mood driver and can back any pillar.

---

### 4.4 Color Temperature Rules

**Acceptable warm dark range:**
The dominant dark tone of any background must fall within the following reference window: deep warm brown (`#0E0A07`) to warm charcoal with brown undertone (`#2A2018`). Backgrounds that drift toward cool grey-black (`#1A1A1F` equivalent) or blue-black are rejected.

**The warm test:**
When in doubt, apply this test. Desaturate the background image. If the dark tones read as warm grey (leaning toward brown) when desaturated, the background is acceptable. If they read as cool grey or blue-grey when desaturated, the background fails.

**Amber accent presence:**
Approved backgrounds should contain at least some amber, gold, or warm orange tonal values — even if they occupy a small portion of the frame (the horizon edge, a light source, reflected warm light). These warm accents are what ties the background to the color system and makes the `--accent-gold` text color feel integrated rather than imposed.

**Rejection threshold:**
Any background where the dominant cool-dark tone occupies more than 50% of the frame is rejected. Any background where no warm light source is present is rejected regardless of other qualities.

### 4.5 The Warm Light Source Rule

**Every background used in this system must contain at least one warm light source. This is not a preference. It is a production gate.**

The warm light source can be:
- A dawn or pre-dawn horizon glow
- Direct or raking amber sunlight from a low angle
- Warm lamp or interior light
- Firelight or candlelight (not in a religious context — fire as element, not ritual)
- Warm reflected light on water or a surface
- Backlit organic material (leaves, branches) with a warm sky behind

The warm light source may be subtle — a thin line of amber at the horizon in an otherwise very dark frame qualifies. What does not qualify is a background where the warm light has been edited out or where it exists only as an implied suggestion without any visible evidence in the frame.

**In review:** Before any background is approved, confirm the warm light source. Name it in the asset approval note. If you cannot name it specifically, the background does not have one.

### 4.6 Texture Level Guidance

Target texture level: **Medium.** Enough texture to feel real, organic, and hand-crafted. Not so much that the background competes with the text.

Texture should be present in the dark mid-range tones, not in the lightest values (light source areas) or the deepest shadows. The ideal is a background where the texture is felt rather than analyzed — the eye registers "this is real and warm" without identifying specific texture features.

Too much texture: close-up bark where every grain is sharp and dominant; rough stone where the surface relief is the main visual event; highly detailed soil patterns that create visual noise in the text zone.

Too little texture: flat, digitally processed backgrounds that have lost all surface information and read as a color wash. These feel artificial and cheapen the visual system.

Video loop backgrounds: texture in motion adds dimensionality. A gentle camera drift across a textured surface, or a slow light shift that reveals surface relief over time, reinforces the organic quality of the aesthetic. The motion itself becomes a form of texture.

### 4.6 Movement and Loop Guidance for Video Backgrounds

**Movement philosophy:** The background moves as if it is breathing. The viewer should feel the movement before they consciously see it. At no point should the background movement call attention to itself.

**Approved loop types:**
- Very slow horizontal or vertical camera drift across a landscape (imperceptible at normal viewing pace; obvious only when scrubbing)
- Ambient light shift — the quality or intensity of the warm light source changes very slowly over the loop (simulating the passage of time in pre-dawn)
- Subtle organic motion — leaves barely moving, water surface with a gentle ripple, grass breathing in wind
- Light breathing — a warm light source that very gently pulses in intensity (flame, lamp, backlit leaves)

**Loop length:** Minimum 6 seconds; ideal 12–20 seconds. The carousel Reel format typically holds 3–5 seconds per slide with transitions. A 12-second loop allows 2–3 full cycles across a standard Reel length without obvious repetition.

**Rejected movement types:**
- Fast pans or tilts
- Zoom in or out at any noticeable speed
- Cut edits within the background loop
- Motion blur that obscures the warm tone of the background
- Artificial looping artifacts (visible jump-cut at loop point)

**Loop quality check:** Play the loop back at 1x speed. If you notice the background moving, it is moving too fast. The test is: can you read a quote slide over this background without the background pulling your eye?

---

## Section 5 — Text Overlay System

### 5.1 Placement Zones and Safe Areas

Instagram Reels dimensions: 1080x1920px (9:16).

**Safe area — absolute:** No text outside the rectangle bounded by 80px from each edge. This is the minimum margin from all four sides of the frame.

**Instagram UI safe zone — bottom:** The bottom 250px of a 1080x1920 frame are occupied by Instagram UI elements (like icon, comment button, share, sound toggle). Text must not be placed in this zone. The practical bottom boundary for any text element is 1670px from the top of the frame (250px clearance from the bottom).

**Instagram UI safe zone — top:** The top 150px can contain Instagram UI overlays (profile name, following tag). Avoid placing critical text in the top 150px. Supporting elements (like a subtle slide number) may appear in the 150–250px range, but no anchor text.

**Practical composition zones:**

| Zone | Vertical Position | Purpose |
|---|---|---|
| Upper accent zone | 150–350px from top | Slide number, subtle top supporting text. Infrequent use. |
| Upper content zone | 350–600px from top | Opening supporting lines or context lines. Used when anchor is centered. |
| Center zone | 600–1150px from top | Primary anchor line placement. Default. |
| Lower content zone | 1150–1500px from top | Supporting lines, secondary content, attribution. |
| Lower accent zone | 1500–1670px from top | Attribution line, slide number (if bottom-positioned). Infrequent use. |

**Default composition:** Anchor line centered in the frame, occupying the center zone. Supporting line in the lower content zone, spaced at least 40px below the last line of the anchor. Attribution, if present, at least 30px below the supporting line in the lower content zone or lower accent zone.

### 5.2 Hierarchy Rules

**Maximum two typographic tiers per slide.** This is a hard limit.

Tier 1: Anchor line. The primary thought. Set in Cormorant Garamond Medium or SemiBold.
Tier 2: Supporting line, attribution, or slide number. Set in DM Sans Light.

If a slide requires three tiers of information, reconsider the slide structure. Slide number alone does not count as a tier — it is a navigation element and can coexist with a two-tier composition.

**The hierarchy must be visible immediately.** The viewer should not need to read the text to understand which line is more important. Size differential, weight differential, and vertical spacing must all work together to establish priority at a glance.

**Anchor line sizing drives the composition.** Set the anchor line first. Everything else scales relative to it. The anchor should occupy enough vertical space to read at 375px width (phone viewport) at a distance of 25–30cm from the face.

### 5.3 Slide 1 — Hook Slide Composition Rules

Slide 1 is the scroll-stopper. It is the only slide the viewer sees before they decide to continue or swipe. It has specific rules that are stricter than the general overlay system.

**Word count:** 12 words maximum. 6–9 words is the optimal range for slide 1. Short enough to read in under 2 seconds. Long enough to land with weight.

**Composition:** Anchor line only, or anchor line + one very short supporting line (4–6 words maximum). No attribution on slide 1. No slide number on slide 1 unless it is a design element, not a count.

**Font size:** Use the upper range of the anchor size scale (88–96px) for slide 1. Slide 1 should be the most visually bold slide in the carousel. Its size communicates that something important is about to happen.

**Placement:** Center-frame default. The anchor line should sit in the visual center of gravity of the background image. For pre-dawn horizon backgrounds, the visual center of gravity is usually just above the literal center due to the dark upper frame pulling weight upward.

**No supporting line required:** Slide 1 can be anchor-line only. A single powerful line at 96px, warm ivory on a dark warm background, is often the strongest possible composition. The impulse to add a supporting line on slide 1 should be questioned. Most of the time, less is more.

**Gold accent on slide 1:** One word maximum, same as all slides. If the hook has a natural emphasis word, gold it. If the hook works equally well without the gold, leave it. Gold is not decoration — it is a pointer. If everything is equally important, accent nothing.

### 5.4 Color Usage in Overlays

The color decision in text overlays follows the background condition, not a stylistic preference.

**Standard dark background (dominant dark area, confirmed warm):**
- Anchor line: `--text-primary` `#F0EAD9`
- One accent word per anchor line: `--accent-gold` `#C9973A`
- Supporting line: `--text-soft` `#C8BBA8` or `--text-primary` at reduced opacity (85%)
- Attribution: `--text-soft` `#C8BBA8` in DM Sans Light Italic
- Slide number: `--text-soft` `#C8BBA8` in DM Sans Regular, small caps or all-caps, widely letter-spaced

**Background image with light zone in text area (avoid this — see sourcing rules):**
If production circumstances require text over a lighter area of an image that cannot be avoided by crop or position adjustment, flag to the Designer for a composition solution. Do not reduce the text color opacity. Do not add a text background fill unless escalation produces explicit approval. The correct solution is almost always a different background or a different crop.

### 5.5 Accent Word Rules

The gold accent (`#C9973A`) is the single most powerful typographic tool in this system. It is powerful because it is rare.

**Rules:**
- One gold word per slide, maximum. Not one per tier. One per slide total.
- The gold word must be the word that the viewer most needs to feel, not just understand. It is an emotional pointer, not a grammar pointer. Gold "rich" before you gold "you". Gold "now" before you gold "because".
- The gold word must be set in the same typeface, size, and weight as the surrounding anchor line text. It is not a separate element — it is a word within the anchor that has been lit.
- Do not gold attribution, slide numbers, or supporting lines.
- Do not gold an entire phrase. If a phrase needs emphasis, that is a copy issue.
- Do not use gold for decorative purposes when there is no semantic reason to emphasize a specific word.
- On slides where no word genuinely demands emphasis, use no gold. A slide without a gold accent is entirely appropriate and should be the majority outcome.

**Frequency guidance:** Across a 5–7 slide carousel, expect gold accents on 2–3 slides. If every slide has a gold accent, the system has broken down. Rarity is what makes the accent work.

### 5.6 The No-Background-Fill Rule

Text in this system sits directly on the image. No text boxes, no filled rectangles, no frosted glass panels, no semi-transparent color fills behind or around the text.

**Why this rule exists:** The visual language of Dark Earth is atmospheric and immersive. A text box breaks the immersion immediately. It signals that the designer did not trust the background to hold the text — and that distrust is visible. Background fills also communicate "template" and "generic," which are the two things this account most needs to avoid.

**The correct response to a legibility problem is a better background, not a fill.**

**The one exception:** A very fine 1px horizontal rule in `--accent-gold` or `--accent-copper` used as a typographic divider between tiers (not as a text background). This is a structural element, not a fill. It may be used no more than once per slide and no more than once every three slides across a carousel. When in doubt, omit it — the system does not require it.

---

## Section 6 — Carousel Architecture

### 6.1 Slide Count

**Standard range: 5–7 slides.**

5 slides: Appropriate for focused, single-thought content. Hook — two or three body development slides — closing thought or CTA.

7 slides: Appropriate for list-style content or multi-step ideas. Hook — expanded body — closing thought and CTA.

Do not exceed 7 slides. At 8 or more slides, carousel completion rates drop significantly. Every slide must earn its place. If a slide can be cut without losing meaning, cut it.

Do not go below 5 slides. A 3–4 slide carousel does not give the narrative enough room to breathe and does not hold the viewer long enough to build emotional connection.

### 6.2 Slide Roles

**Slide 1 — Hook.**
The scroll-stopper. Introduces the core premise or emotional hook. Composition rules in Section 5.3 apply. The viewer decides to continue based entirely on this slide.

**Slides 2–5 — Body (Development).**
Develop, expand, and deepen the hook. Each body slide should feel like a step forward — not repetition of the previous slide, not a new unrelated idea. The sequence should feel like a thought being walked to its natural conclusion. Body slides may introduce supporting evidence, a reframe, a complication, a deepening, or a consequence of the hook premise.

**Penultimate slide — Pivot or Deepening.**
The slide before the CTA. This is often the most emotionally resonant slide in the carousel — it is where the content lands its weight before asking anything of the viewer. Think of it as the exhale before the call.

**Final slide — Closing Thought or CTA.**
For non-promotional content (which is all content at launch), the final slide is a closing thought — a line that completes the emotional arc of the carousel. It may invite reflection or action, but it does not sell. As the account matures toward product offers, the CTA slide will evolve. The Designer produces the visual; the Content Writer defines the CTA copy.

### 6.3 Visual Continuity Across Slides

Visual continuity is what makes a carousel feel like a unified experience rather than a stack of separate images. In Dark Earth, continuity is maintained through:

**Color continuity:** All slides in a carousel use the same background color family — no single slide should look dramatically different in dominant tone from the others. If slides 1–4 use a pre-dawn horizon and slide 5 uses a bright interior, the carousel feels broken. The background should feel like the same world across all slides.

**Background variation within the family:** Within the color continuity rule, slides should not be identical. Variation in texture level, light source position, and depth create visual interest while maintaining unity. A carousel can use different images for each slide as long as they all share warm dark tone, at least one warm light source, and a similar level of visual complexity.

**Typography consistency:** Same typefaces, same weight rules, same color system across all slides. The only permitted size variation is the larger Slide 1 anchor (which is designed to be the boldest moment) — body slides normalize to a consistent size range.

**Mood arc:** The background images should follow the emotional arc of the content where possible. A lighter (warmer, more amber-visible) background can be used on the final slide to signal resolution or lift. The darkest, most atmospheric backgrounds work best for slides 2–4 where the content is developing tension. This is a guideline, not a hard rule — it requires judgment at production.

### 6.4 Transition Type

**Transition between carousel slides: Slow fade through black.**

- Fade out: 0.5 seconds (current slide fades to `--shadow-depth` `#0E0A07`)
- Pause: 0.1–0.2 seconds at black (brief but deliberate — like a breath between thoughts)
- Fade in: 0.5 seconds (next slide fades up from black)
- Total transition: approximately 1.1–1.2 seconds

This transition is intentional and important. It creates the rhythm of the carousel — a heartbeat pace that gives each slide its own moment. Faster transitions feel rushed and undermine the contemplative register. The fade through black is also technically useful: it gives the viewer a visual cue that a new slide has arrived without a jarring cut.

**Do not use:** Hard cuts between slides. Slide or wipe transitions. Zoom transitions. Cross-dissolves (where two slides overlap at the same time) — these create visual confusion when text overlays from two different slides are simultaneously visible.

---

## Section 7 — Motion and Animation Spec

### 7.1 Background Loop Behavior

Background video loops run continuously beneath the text and are the first visual element the viewer perceives. Their behavior is governed by the loop guidelines in Section 4.6. To restate the critical principle: the background should be felt before it is seen. It should never be distracting.

Loop start: The loop should start at a visually stable, dark, compositionally grounded frame — not at a bright or high-motion frame. The opening frame of any Reel is what appears in the feed thumbnail. A visually strong, dark, atmospheric opening frame is important for scroll-stopping.

Loop consistency: Across all slides in a carousel, background loops can be different files, but they must all have the same movement character — all slow, all organic, all breathing. A fast-moving loop on one slide in a slow-motion carousel breaks the rhythm immediately.

### 7.2 Slide Transition Spec

See Section 6.4. To expand on implementation:

- The fade-to-black transition is produced by applying a fade-out opacity keyframe on the outgoing slide and a fade-in opacity keyframe on the incoming slide, with the background held at `--shadow-depth` `#0E0A07` or the darkest value of the background image.
- The black point (full opacity of the black overlay) should hold for 0.1–0.2 seconds. Long enough to register as a deliberate moment; short enough not to feel like a loading pause.
- Transitions between all slides should be identical in duration. No variation. The rhythm is the brand.

### 7.3 Text Entrance and Exit Spec

**Text entrance:**
- Type: Fade in from zero opacity to full opacity
- Duration: 0.5–0.6 seconds
- Timing: Begins immediately as the slide fades in (text and background enter together, not sequentially)
- Easing: Ease-in-out (starts slow, accelerates slightly through the middle, lands soft)
- No motion component — text does not move, rise, drift, or scale during entrance. It simply materializes.

**Text on-screen hold:**
Text remains at full opacity for the duration of the slide minus the entrance and exit durations. For a 3-second slide: 0.5s entrance + 2.0s hold + 0.5s exit.

**Text exit:**
- Simultaneous with the background — text and background fade together into the black transition
- Duration: 0.5 seconds (mirrors the entrance)
- No separate text exit animation — the slide fades as one unified element

**Accent word (gold) treatment:**
The gold accent word does not animate independently. It enters and exits with the rest of the anchor text as a unified element.

### 7.4 What Is Forbidden

The following motion and animation approaches are permanently excluded from this visual system. They are not style choices — they are brand-level rejections.

- **Kinetic typography of any kind.** No letter-by-letter reveals. No word-by-word entrances. No scaling text. No rotating characters. Text arrives whole or not at all.
- **Bouncing, springing, or elastic text.** Any motion that gives text a physical weight or bounce behavior is rejected. The words have gravity; they do not play.
- **Snap cuts between slides.** No hard edits. Every transition is a fade.
- **Zoom animations.** No background zooming in or out. No Ken Burns effect. No slow push-in. The background is still (or barely breathing) — it does not advance toward the viewer.
- **Text drop shadows with visible hard edges.** If a drop shadow is used for legibility on a lighter area of a background image, it must be a very soft gaussian shadow (radius 8–12px, opacity 20–30%, no hard edge). A dark halo or hard-edged shadow makes the text look pasted, not integrated.
- **Any animation with a visible speed ramp faster than "slow."** If you can see the movement accelerating, it is too fast.
- **Emojis or decorative icon elements in overlays.** The visual language is pure typography and background. No emoji. No star symbols, no checkmarks, no decorative flourishes.

---

## Section 8 — Brand Application Rules

### 8.1 On-Brand vs. Off-Brand Quick Reference Checklist

Use this checklist before approving any asset for delivery to the Asset Manager.

**The asset is on-brand if:**

- [ ] Background dominant tone reads as warm dark (brown-black, not cool-black or blue-black)
- [ ] At least one warm light source is visible and nameable in the background
- [ ] Primary text is set in `--text-primary` `#F0EAD9` (warm ivory, not white)
- [ ] Anchor line is Cormorant Garamond at Medium (500) weight or heavier
- [ ] Supporting text is DM Sans Light — clearly smaller and lighter than the anchor
- [ ] Accent gold (`#C9973A`) appears on no more than one word per slide, on no more than approximately half the slides in the carousel
- [ ] Text is within all safe zone boundaries (80px edge inset, 250px bottom clearance, 150px top clearance for anchor text)
- [ ] No more than two typographic tiers on any single slide
- [ ] No text fill, text box, or background overlay behind any text element
- [ ] Slide transition is fade through black at correct timing
- [ ] No kinetic typography, no bouncing text, no zoom, no snap cuts
- [ ] No religious imagery anywhere in the frame
- [ ] No urban, tropical, or hyper-saturated imagery
- [ ] Color temperature of backgrounds verified as warm-dark, not cool-dark
- [ ] Overlay text matches the Content Brief exactly — no changes to wording

**The asset is off-brand if any of the following are true:**

- Background reads as cool, blue-toned, or neutral dark
- No warm light source is present
- Text color is pure white
- Anchor line is set at Regular (400) weight Cormorant Garamond
- Gold accent appears on more than one word per slide
- Text is placed within Instagram UI safe zones
- Any text fill or background overlay behind text
- Any kinetic or mechanical animation
- Snap cuts between slides
- Emoji or decorative icon elements in overlays
- Overlay text differs from the Content Brief in any way

### 8.2 The Warm Light Source Rule as a Production Gate

The warm light source rule is the first check at background approval. It precedes composition decisions, text placement decisions, and all other production steps. If a background does not have a warm light source, it does not enter the production pipeline.

This is not a design preference. It is structural. The warm light source is what keeps Dark Earth from becoming a generic dark aesthetic. Without it, the backgrounds collapse into the cool-dark territory that every other "serious" motivational account is also using. The warm light source is our point of visual differentiation at the most fundamental level.

**At the sourcing stage:** Every background candidate must be evaluated for a warm light source before it is saved to the asset library. The sourcing note in the asset library must name the light source explicitly (e.g., "pre-dawn horizon amber, lower third" or "raking warm sidelight from left, top half").

**At the production stage:** Before placing text on any background, confirm the warm light source is still visible in the intended crop. A background that has a warm light source in its full frame may lose it when cropped to 9:16. Re-check after crop.

**At the review stage:** The warm light source confirmation appears in the Asset Delivery Note under Background description. If it is absent from the delivery note, the asset should be returned to the Designer for clarification before the Asset Manager logs it.

### 8.3 Edge Cases

**A quote that feels tonally heavy or dark:**
If the Content Brief contains a quote whose content is heavier than usual (grief, loss, or very confrontational self-examination), the visual response should be to lean into the warmth of the background, not the darkness. A pre-dawn horizon background with more amber visible, or a warm lamp interior, gives the quote a container that says "this is safe to feel." Do not respond to a heavy quote with a darker, more atmospheric background. That would make the combination feel oppressive. Lighten the visual when the copy is at its heaviest.

**A background image that is ambiguous on warmth:**
If you cannot definitively say whether a background is warm-dark or cool-dark, it fails. The bar is not "probably warm enough." The bar is "clearly warm." If you are unsure, reject the background and source another. The cost of sourcing an additional background is far lower than the cost of a post that drifts off-brand.

**A content pillar that feels visually strained:**
All six content pillars — Manifestation, Confidence and Self-Worth, Gratitude, Personal Growth, Abundance Mindset, Business Growth — are expected to work within this visual system without strain. If a specific Content Brief for Business Growth or Confidence content feels like it is fighting the warmth of the aesthetic, this is a sign that the copy is pulling in a direction the visual cannot follow, or that the background selection is wrong for the content tone. The solution is to choose a background that feels more active and energized (raking sidelight across stone, a more dramatic pre-dawn horizon) rather than to change the visual system. The system covers all six pillars — execution choices within the system are what need to adapt.

**A quote where no word genuinely merits gold accent:**
Leave the gold out. Not every slide needs an accent word. A carousel where some slides have gold accents and some do not is correct — the gold is doing its job precisely because it does not appear everywhere.

### 8.4 Escalation Rules

**Proceed without escalation when:**
- The decision is within the established parameters of this document
- The choice requires judgment within defined options (e.g., which approved scene category to use for a given pillar)
- A background fails the warm-dark check — reject it and source another without escalation

**Escalate to the Content Writer when:**
- The Content Brief provides overlay text that cannot be laid out legibly as written (too many words for the slide, typographic collision between lines, anchor line that genuinely cannot be set within the 12-word size limit and still read at mobile scale)
- The overlay text cannot work in two tiers or fewer on a single slide

**Escalate to the Strategy Director when:**
- A Content Brief requires a visual approach that has no clear path within this Style Guide
- A new scene category is needed that has not been defined here
- A proposed change to the color palette, typefaces, or animation system is under consideration
- A piece of content appears to require a visual element that is ambiguous on the religious imagery prohibition
- The Brand Style Guide itself needs to be updated

---

## Section 9 — Asset Sourcing Brief

### 9.1 Where to Source Backgrounds

**Primary sources (recommended):**

- **Artgrid / Artlist (video):** High-quality cinematic footage. Search terms below. These platforms produce footage shot with a production mindset — cinematic frame rates, considered composition, authentic atmospheres. Preferred for video loops.
- **Storyblocks (video and still):** Broader library. Quality varies — apply strict quality and warmth standards. Useful for supplementary sourcing after Artgrid/Artlist have been checked first.
- **Unsplash (still images):** High-quality free stills. Good for prototyping and early production. Quality is inconsistent for the specific dark-warm requirement — use the search terms below and apply strict rejection criteria.
- **Pexels (still images and video):** Secondary free source. Same quality caveats as Unsplash.

**Search terms (adapt for each platform's search vocabulary):**

For pre-dawn / dawn horizon:
`pre-dawn landscape`, `before sunrise mountain`, `dark horizon amber glow`, `dawn twilight dark sky`, `pre-dawn desert`, `first light horizon silhouette`

For dark warm landscape:
`dark warm landscape`, `golden hour shadow`, `amber raking light earth`, `dark hillside warm light`, `dusk landscape silhouette warm`

For dark forest / canopy:
`dark forest golden light`, `forest backlight amber`, `canopy light rays warm`, `shadowed forest dawn`, `forest floor warm light`

For dark earth texture:
`dark volcanic stone warm light`, `dark soil texture warm`, `warm rock texture shadow`, `earth texture amber light`

For dark water:
`dark lake dawn reflection`, `dark water warm light reflection`, `pre-dawn river mist amber`, `dark ocean horizon glow`

**Terms to avoid in search (these tend toward off-brand results):**
`night photography` (skews blue), `moonlight` (cool), `urban night` (rejected category), `dramatic lighting` (skews over-exposed), `tropical`, `beach sunset` (too bright and saturated)

### 9.2 File Format and Resolution Requirements

**For Reels (video loops):**
- Format: MP4 (H.264 or H.265)
- Resolution: Minimum 1080x1920px (9:16). 4K (2160x3840) preferred for source files to allow crop flexibility.
- Frame rate: 23.976fps or 24fps. Do not use 60fps — it reads as hyper-real and loses the cinematic quality.
- Duration: 10–30 seconds of usable loop content minimum.
- Color space: Source files in a wide color space (Log or Rec.709 are both acceptable). Avoid heavily pre-graded footage with locked color that cannot be shifted warm if needed.

**For static images:**
- Format: JPEG or PNG
- Resolution: Minimum 1080x1350px. 2160x2700px or larger preferred for crop flexibility.
- Color mode: RGB

**Naming convention for approved backgrounds:**

`bg-[category]-[number]-[descriptor].[ext]`

Category codes:
- `pdh` = Pre-Dawn Horizon
- `snl` = Shadowed Natural Landscape
- `det` = Dark Earth Texture
- `dfc` = Deep Forest/Canopy
- `dwr` = Dark Water Reflected Light
- `diw` = Dark Interior Warm Light

Examples:
- `bg-pdh-001-mountain-amber.mp4`
- `bg-snl-001-hillside-raking.jpg`
- `bg-det-001-volcanic-stone.jpg`
- `bg-dfc-001-forest-backlight.mp4`
- `bg-dwr-001-lake-dawn.mp4`
- `bg-diw-001-lamp-dark.jpg`

If a background does not fit any defined category, hold it and flag to the Designer before adding to the library. Do not create ad hoc category codes.

### 9.3 Quality Standards

All backgrounds admitted to the asset library must meet these quality standards:

- **Technically clean:** No compression artifacts, no noise that reads as gritty or digital rather than film-grain textural. Visible sensor noise at the dark end of the exposure is acceptable and can add warmth — digital blockiness is not.
- **Well-exposed:** The dark zones must hold detail. Crushed blacks that have lost all tonal information are not acceptable. The shadow depth of the image should look like `#0E0A07` — very dark, but with visible tonal variation, not a void.
- **Compositionally considered:** The image must look like it was shot with intent. A landscape where the horizon line is level, the light is purposeful, and the composition has a clear sense of depth is appropriate. A casual snapshot that happens to be dark is not.
- **Text zone clear:** The central area of the frame — where the text overlay will live — must be relatively free of high-contrast or distracting elements. Before approving a background, place a simple test text overlay in the center and confirm the text is readable without any treatment.

### 9.4 Rejection Criteria

Reject any background that exhibits any of the following. These are individual disqualifiers — one is enough.

- **Cool dark dominant tone.** Blue-black, grey-black, or neutral-near-black backgrounds. Warm test fails.
- **No warm light source.** See Section 4.4 and 8.2. If you cannot name the warm light source, it does not exist.
- **Religious imagery.** Any cross, hands in prayer, halo, church, altar, scripture reference, or any visual element associated with organized religion or religious ritual. Absolute rejection. No exceptions.
- **Urban or architectural subjects.** City skylines, streets, office buildings, commercial spaces, industrial environments. The visual language is natural and organic, not built.
- **Tropical imagery.** Palm trees, bright tropical beaches, tropical foliage, bright aqua water. Tropical aesthetics are casual and bright — incompatible with Dark Earth.
- **Hyper-saturated color.** Any background where the color has been graded to exaggerated saturation — vivid orange skies, oversaturated red sunsets, heavily processed Instagram-filter aesthetics. The palette is warm but restrained. Saturated is not warm.
- **Human subjects.** No people, faces, hands, or body parts visible in the background. The account is faceless and the visual system is nature and environment, not human subjects.
- **Bright or high-key imagery.** Any background where the dominant tone is light or bright — golden hour with bright sky, midday landscapes, overexposed or high-key lit scenes. The background must read as predominantly dark.
- **Digital or artificial aesthetics.** CGI renders, digital gradients, lens-flare-heavy post-processing, obviously artificial bokeh, or any background that looks like it was made in software rather than captured in the world. Authenticity is structural to this aesthetic.
- **Text, logos, or watermarks.** No backgrounds with visible text, brand elements, or stock watermarks.
- **Visible human infrastructure in a distracting way.** A distant lamp post at the edge of a dark landscape is acceptable. A power line crossing the text zone, a car headlight, or any modern infrastructure element that calls attention to itself is not.

---

## Appendix A — Color Reference Card

| Token | Hex | RGB | Primary Use |
|---|---|---|---|
| Background Base | `#1C1612` | 28, 22, 18 | Primary background |
| Shadow Depth | `#0E0A07` | 14, 10, 7 | Deep background, vignette |
| Text Primary | `#F0EAD9` | 240, 234, 217 | All primary overlay text |
| Accent Gold | `#C9973A` | 201, 151, 58 | Single emphasis word |
| Accent Copper | `#8B5E3C` | 139, 94, 60 | Decorative dividers, sparingly |
| Text Soft | `#C8BBA8` | 200, 187, 168 | Supporting text, attribution, slide numbers |

---

## Appendix B — Typography Quick Reference

| Element | Typeface | Weight | Size (Reels 1080x1920) | Color |
|---|---|---|---|---|
| Anchor line | Cormorant Garamond | Medium 500 | 72–96px | `#F0EAD9` |
| Anchor accent word | Cormorant Garamond | Medium 500 | Same as anchor | `#C9973A` |
| Supporting line | DM Sans | Light 300 | 32–40px | `#C8BBA8` |
| Attribution | DM Sans or Cormorant Garamond | Light Italic | 28–32px | `#C8BBA8` |
| Slide number | DM Sans | Regular 400 | 22–26px | `#C8BBA8` |

---

## Appendix C — Scene Category Quick Reference

| Code | Category | Light Source | Movement |
|---|---|---|---|
| `pdh` | Pre-Dawn Horizon | Horizon amber glow | Slow ambient light shift or still |
| `snl` | Shadowed Natural Landscape | Raking low-angle sun | Slow drift or still |
| `det` | Dark Earth Texture | Sidelight revealing surface | Very subtle or still |
| `dfc` | Deep Forest / Canopy | Backlight through canopy | Gentle organic movement |
| `dwr` | Dark Water Reflected Light | Reflected dawn/warm light | Very slow water surface |
| `diw` | Dark Interior Warm Light | Lamp/candle/warm window | Very slow light breathe or still |

---

*Document version 1.0 — 2026-03-18. All changes to this document require Strategy Director approval. Submit proposed changes with rationale to the Strategy Director before implementing.*
