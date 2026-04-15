# Platform Design Specification — @exponentialgrowthformula_
**Visual Direction:** Dark Earth ("Before Dawn")
**Produced by:** Designer
**Date:** 2026-03-18
**Version:** 1.0
**Status:** Active

---

## How to Use This Document

This document translates the Brand Style Guide into production-ready technical specifications for every Instagram format the account publishes on. It is the definitive reference for canvas size, safe zones, export settings, naming conventions, and platform compliance.

Every Designer or template builder producing assets for this account works from this document. You do not need to consult any other document for technical specifications — they are contained here. You do need to consult the Brand Style Guide for visual and typographic rules. These two documents work together.

**This document does not override the Brand Style Guide.** Where they address the same territory, the Brand Style Guide governs the visual and aesthetic decisions; this document governs the technical and format decisions.

**Agents who reference this document:** Designer, Asset Manager, Publisher.

**Changes to this document** require Strategy Director approval. Platform specification changes (e.g., Instagram updating its safe zone dimensions) should be flagged to the Designer immediately and updated here before the next production cycle.

---

## Platform Context — Instagram Only (Launch Phase)

As defined in the Strategy Brief, this account launches on Instagram exclusively. Cross-platform expansion to TikTok, Pinterest, and YouTube Shorts will be evaluated at the 90-day mark based on Analyst performance data. This document covers Instagram formats only.

**Active Instagram formats for this account:**
1. Carousel Reel (primary format)
2. Standard Reel (single video)
3. Static Post (single image)
4. Carousel Post (static slides, non-Reel)
5. Story

When cross-platform formats are added, this document will be updated with their specifications under a new section. The Publisher must reference the current version of this document when scheduling — do not rely on cached format knowledge.

---

## Format 1 — Carousel Reel (Primary Format)

This is the account's primary and highest-priority format. All production resources, template development, and format optimization effort should default to this format first.

### Canvas and Resolution

| Property | Value |
|---|---|
| Dimensions | 1080 x 1920 px |
| Aspect ratio | 9:16 |
| Color mode | RGB |
| Color profile | sRGB IEC61966-2.1 |
| Resolution (export) | 72 ppi (screen-optimized) |
| Bit depth | 8-bit |

### Safe Zones

Safe zones define where text and critical visual elements must be confined. All measurements are in pixels from the respective edge of the 1080x1920px canvas.

**Absolute edge inset (all four sides):**
No text or critical visual element may be placed within 80px of any canvas edge. This is the Brand Style Guide minimum margin and applies universally.

**Instagram UI — Bottom:**
The bottom 250px of the frame are reserved for Instagram's Reels UI (like, comment, share, audio, and following buttons). Text must not be placed below y=1670px (measured from the top of the canvas). The practical bottom boundary for any text element is y=1670px.

**Instagram UI — Top:**
The top 150px can carry Instagram profile overlays (account name, follow tag). Anchor text must not appear above y=150px. Navigation elements (slide number) may appear from y=150px downward, but anchor or supporting copy must not begin until y=250px to provide adequate clearance.

**Left and right:**
80px from each side edge is the hard inset. Text should not run closer than 80px to the left or right canvas edge. For centered text blocks, the effective text column runs from x=80px to x=1000px (900px usable column width).

**Safe zone summary table:**

| Boundary | Pixel Position | Notes |
|---|---|---|
| Top — UI clearance | y = 0 to 150px | No text. Instagram profile overlay zone. |
| Top — anchor clearance | y = 150 to 250px | Navigation elements (slide numbers) only. No copy. |
| Left inset | x = 80px | No text to the left of this line. |
| Right inset | x = 1000px | No text to the right of this line (80px from 1080px edge). |
| Bottom — text boundary | y = 1670px | No text below this line (250px Instagram UI clearance). |
| Bottom — visual edge | y = 1840px | No critical visual element below this line (80px from bottom). |

### Text Placement Zones

All measurements from top of 1080x1920px canvas.

| Zone | Vertical Range | Purpose |
|---|---|---|
| Upper accent zone | y = 150 to 350px | Slide number, rare top supporting text. Infrequent use. |
| Upper content zone | y = 350 to 600px | Context or opening supporting lines when anchor is centered. |
| Center zone (default) | y = 600 to 1150px | Primary anchor line placement. Default composition target. |
| Lower content zone | y = 1150 to 1500px | Supporting lines, secondary content, attribution. |
| Lower accent zone | y = 1500 to 1670px | Attribution, slide number if bottom-positioned. Infrequent. |

**Effective text column width:** x=80px to x=1000px (900px wide).

**Default anchor placement:** Vertically centered within the center zone (y=600 to y=1150). The visual midpoint of the anchor text block should target approximately y=875px. Adjust for visual weight of the specific background — pre-dawn horizon backgrounds carry visual weight low; adjust anchor upward slightly (toward y=750px) if needed.

### Slide Count

- Minimum: 5 slides
- Maximum: 7 slides
- Standard: 5–7 slides as specified in the Content Brief

Do not deviate from the slide count specified in the Content Brief without flagging to the Content Writer.

### Typography — Carousel Reel

Transcribed from Brand Style Guide Section 3.2 for production reference. For full typographic rules, see Brand Style Guide Sections 3 and 5.

| Element | Typeface | Weight | Size Range | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
| Anchor line (slide 1) | Cormorant Garamond | Medium 500 | 88–96px | 1.15 | 0 to -0.5px | #F0EAD9 |
| Anchor line (slides 2–7) | Cormorant Garamond | Medium 500 | 72–88px | 1.15 | 0 to -0.5px | #F0EAD9 |
| Anchor accent word | Cormorant Garamond | Medium 500 | Same as anchor | 1.15 | Same as anchor | #C9973A |
| Supporting line | DM Sans | Light 300 | 32–40px | 1.5 | +0.5px | #C8BBA8 |
| Attribution | DM Sans or Cormorant Garamond | Light Italic | 28–32px | 1.5 | +1px | #C8BBA8 |
| Slide number | DM Sans | Regular 400 | 22–26px | — | +1.5px | #C8BBA8 |

Minimum gap between anchor last line and supporting first line: 40px.
Minimum gap between supporting last line and attribution: 30px.

### Transition Timing

| Transition element | Duration |
|---|---|
| Fade out (current slide to black) | 0.5 seconds |
| Hold at black (#0E0A07) | 0.1–0.2 seconds |
| Fade in (black to next slide) | 0.5 seconds |
| Total transition | ~1.1–1.2 seconds |

Text enters and exits with the background as a unified element. No independent text animation. Text entrance: fade from zero opacity, 0.5–0.6 seconds, ease-in-out, begins simultaneously with slide fade-in.

### Background Loop — Carousel Reel

- Loop duration: 12–20 seconds (ideal). Minimum 6 seconds.
- Movement: Imperceptible at normal playback speed. See Brand Style Guide Section 4.6 for approved loop types.
- Loop must start on a compositionally stable, dark frame — this frame appears as the feed thumbnail.
- Background runs continuously across all slides. Each slide may use a different background file provided all files share the same movement character (all slow, all warm-dark, all organic).

### Audio — Carousel Reel

- Music is required on Carousel Reels for algorithmic distribution on the Reels tab.
- Use only tracks sourced from Instagram's native audio library (licensed tracks) OR tracks from Artlist/Artgrid with a social media license that explicitly covers Instagram Reels.
- Do not use tracks downloaded from YouTube, SoundCloud, or any unverified source.
- Track selection is a production decision that may be made by the Designer or Publisher. The Designer selects the track when it materially affects the pacing of the reel (e.g., a track with a tempo that drives the transition timing). The Publisher may substitute an equally appropriate track if the Designer's selection becomes unavailable on the platform.
- Tempo guidance: Select ambient, instrumental, or lo-fi tracks with low BPM (50–90 BPM range). The track should never feel like it is pulling the viewer forward faster than the content intends. The audio experience mirrors the visual: slow, warm, considered.
- Volume: Set the background music to low. The track should be felt as atmosphere, not heard as a dominant element. If the track has lyrics, do not use it — instrumental only.
- Audio fade: Apply a 1-second audio fade-in at the start and a 1-second audio fade-out at the end of the reel.

### Export Settings — Carousel Reel

| Property | Value |
|---|---|
| Output format | MP4 |
| Video codec | H.264 |
| Resolution | 1080 x 1920px |
| Frame rate | 23.976fps or 24fps |
| Bitrate | 3,500–8,000 kbps (target 6,000 kbps for quality/size balance) |
| Audio codec | AAC |
| Audio bitrate | 128 kbps minimum |
| Color space | sRGB |
| File size | Under 650 MB (Instagram hard limit is 650 MB for Reels) |

### File Format for Delivery to Asset Manager

Deliver as: MP4 file + companion JPEG thumbnail (the intended cover frame, 1080x1920px).

The JPEG thumbnail should be the first frame of the reel as it is designed to appear in the feed grid. It must be produced separately and clearly labeled as the cover frame.

### Naming Convention — Carousel Reel

Format: `cr-[scene-code]-[pillar-code]-[NNN].mp4`

Scene codes (from Brand Style Guide Appendix C):
- `pdh` = Pre-Dawn Horizon
- `snl` = Shadowed Natural Landscape
- `det` = Dark Earth Texture
- `dfc` = Deep Forest/Canopy
- `dwr` = Dark Water Reflected Light
- `diw` = Dark Interior Warm Light

Pillar codes:
- `mfst` = Manifestation
- `conf` = Confidence and Self-Worth
- `grat` = Gratitude
- `grow` = Personal Growth
- `abnd` = Abundance Mindset
- `biz` = Business Growth

Examples:
- `cr-pdh-mfst-001.mp4` — Carousel Reel, Pre-Dawn Horizon, Manifestation, first in series
- `cr-dfc-grow-001.mp4` — Carousel Reel, Deep Forest/Canopy, Personal Growth, first in series
- `cr-pdh-mfst-001-cover.jpg` — Cover frame JPEG for the above reel

Number sequentially per format+scene+pillar combination. If a new content brief produces a second Pre-Dawn Horizon Manifestation reel, it becomes `cr-pdh-mfst-002.mp4`.

### Platform Quirks — Carousel Reel (as of 2026)

- Instagram may compress Reels on upload. Source at the highest quality bitrate your workflow allows — compression will bring it down, not up.
- Cover frame selection: Instagram allows a custom cover frame on upload. Always select the designed cover frame (the companion JPEG). Do not allow Instagram to auto-select a frame from within the video — the auto-selected frame is unpredictable.
- Captions (auto-generated): Instagram may offer to auto-add captions. The account does not use on-screen auto-captions — the text overlay in the visual is the copy. Disable auto-captions at upload.
- Reels now appear in both the Reels tab and the main feed. The 1080x1920 9:16 format is optimized for the Reels tab full-screen experience. In the main feed, Reels are displayed at a cropped 4:5 ratio — see the Profile Grid section for how to manage this.
- Feed crop in Reels: When a Reel is displayed in the main feed scroll, it is cropped to 4:5 (1080x1350px), centered on the canvas. The center 1350px vertically (y=285px to y=1635px on the 1920px canvas) is what appears in the feed. Ensure that the most critical text on every slide — particularly the anchor line — falls within this range. The current safe zones already accommodate this: the practical anchor placement (y=600 to y=1150) is entirely within the feed crop zone.

---

## Format 2 — Standard Reel (Single Video)

A single continuous video without carousel-style slide transitions. Used for content that benefits from a single sustained visual and message — an opening hook slide held for the full duration, or a brief motion-only visual.

### Canvas and Resolution

| Property | Value |
|---|---|
| Dimensions | 1080 x 1920 px |
| Aspect ratio | 9:16 |
| Color mode | RGB |
| Color profile | sRGB IEC61966-2.1 |
| Resolution (export) | 72 ppi |
| Bit depth | 8-bit |

### Safe Zones

Identical to Carousel Reel safe zones.

| Boundary | Pixel Position |
|---|---|
| Top — UI clearance | y = 0 to 150px |
| Top — anchor clearance | y = 150 to 250px |
| Left inset | x = 80px |
| Right inset | x = 1000px |
| Bottom — text boundary | y = 1670px |
| Bottom — visual edge | y = 1840px |

### Duration

- Optimal range: 7–30 seconds for this account's content type.
- Under 7 seconds: Insufficient to land the content with emotional weight. Avoid.
- Over 30 seconds: At launch, the Analyst has not yet provided data on longer-form Reel performance for this account. Default to 7–30 seconds. Reassess at 90-day review.
- Most Standard Reels for this account will be single quote cards held with background motion: target 10–20 seconds.

### Loop Point Guidance

For seamless background loops in a Standard Reel:

- Design the background loop so the loop point (where the video returns to its start) occurs at a visually neutral moment — a dark frame or a very similar compositional state to the opening.
- Apply a 3-frame cross-dissolve at the loop point in the video editor to smooth any jump in a loop that is not perfectly seamless.
- The viewer should not be able to identify the loop point during a single 10–20 second viewing. If the loop is shorter than the reel duration, plan for at least one full playthrough before the loop repeats.
- Ideal loop length for a 15-second reel: a 12–15 second background loop that completes once with no visible repeat, or a shorter 8-second loop that repeats once (the second playthrough should not be obviously recognizable as a repeat within a 15-second window — test by watching the reel from the viewer's perspective).

### Typography — Standard Reel

Same typographic rules as Carousel Reel apply. Standard Reels for this account typically carry a single slide of text (one anchor line, optionally one supporting line). Apply Slide 1 composition rules from Brand Style Guide Section 5.3: use the upper end of the anchor size range (88–96px), anchor line only or anchor + one short supporting line, no attribution.

### Audio — Standard Reel

Same music sourcing rules as Carousel Reel. Because Standard Reels are a single continuous visual, the track selection has slightly more influence on pacing — choose accordingly. The track should carry the viewer through the full duration without creating a sense that the music wants to go somewhere the visual does not.

### Export Settings — Standard Reel

| Property | Value |
|---|---|
| Output format | MP4 |
| Video codec | H.264 |
| Resolution | 1080 x 1920px |
| Frame rate | 23.976fps or 24fps |
| Bitrate | 3,500–8,000 kbps |
| Audio codec | AAC |
| Audio bitrate | 128 kbps minimum |
| Color space | sRGB |
| File size | Under 650 MB |

### File Format for Delivery to Asset Manager

Deliver as: MP4 file + companion JPEG cover frame.

### Naming Convention — Standard Reel

Format: `sr-[scene-code]-[pillar-code]-[NNN].mp4`

Examples:
- `sr-pdh-conf-001.mp4` — Standard Reel, Pre-Dawn Horizon, Confidence
- `sr-dwr-abnd-001.mp4` — Standard Reel, Dark Water, Abundance Mindset
- `sr-pdh-conf-001-cover.jpg` — Cover frame for the above

### Platform Quirks — Standard Reel

- Same feed crop consideration as Carousel Reel: critical text must fall within y=285px to y=1635px for feed display.
- Standard Reels loop automatically on the Reels tab. A Standard Reel with a well-designed background loop will play continuously and seamlessly — this is an advantage over Carousel Reels for ambient, meditative content.
- Cover frame: Select manually at upload. Same rule as Carousel Reel.

---

## Format 3 — Static Post (Single Image)

A single still image published to the main feed. No motion.

### Canvas and Resolution

**Portrait (preferred):**

| Property | Value |
|---|---|
| Dimensions | 1080 x 1350 px |
| Aspect ratio | 4:5 |
| Color mode | RGB |
| Color profile | sRGB IEC61966-2.1 |
| Resolution (export) | 72 ppi |
| Bit depth | 8-bit |

**Square (secondary option):**

| Property | Value |
|---|---|
| Dimensions | 1080 x 1080 px |
| Aspect ratio | 1:1 |
| Color mode | RGB |
| Color profile | sRGB IEC61966-2.1 |
| Resolution (export) | 72 ppi |
| Bit depth | 8-bit |

**Aspect ratio decision rule:** Default to portrait (4:5 / 1080x1350px). Portrait format takes up more vertical space in the feed, increasing dwell time and visual impact. Use square (1:1 / 1080x1080px) only when the background image's composition does not work in portrait — for example, a wide panoramic landscape where the horizontal expanse is essential to the emotional reading of the image.

### Safe Zones — Static Post (Portrait 1080x1350px)

| Boundary | Pixel Position | Notes |
|---|---|---|
| Top inset | y = 80px | No text above this line. |
| Top recommended | y = 200px | Preferred top of any text element. |
| Left inset | x = 80px | No text left of this line. |
| Right inset | x = 1000px | No text right of this line. |
| Bottom inset | y = 1270px | No text below this line (80px from 1350px bottom). |
| Bottom recommended | y = 1200px | Preferred bottom of any text element. |

No Instagram UI overlay concerns on Static Posts in the same way as Reels — the UI sits around the post, not over it. The 80px edge inset is sufficient. However, when the post appears in a feed scroll, the caption and engagement icons appear below the image, not over it.

**Effective text column:** x=80px to x=1000px (900px wide). Vertically, primary content zone: y=200px to y=1200px (1000px tall).

### Safe Zones — Static Post (Square 1080x1080px)

| Boundary | Pixel Position |
|---|---|
| All edges | 80px inset |
| Effective text column | x=80px to x=1000px, y=80px to y=1000px |

### Typography — Static Post

Same typeface and color system as Carousel Reel. Size adjustment for portrait format:

| Element | Typeface | Weight | Size Range | Color |
|---|---|---|---|---|
| Anchor line | Cormorant Garamond | Medium 500 | 72–88px | #F0EAD9 |
| Anchor accent word | Cormorant Garamond | Medium 500 | Same as anchor | #C9973A |
| Supporting line | DM Sans | Light 300 | 30–38px | #C8BBA8 |
| Attribution | DM Sans or Cormorant Garamond | Light Italic | 26–30px | #C8BBA8 |

Static posts do not have slide numbers.

### When to Use Static Post vs. Carousel Reel

Use a Static Post when:
- The Content Brief contains a single, complete thought that does not need expansion across multiple slides
- The content is being used to fill cadence between Carousel Reels
- A quotation from a named source works best as a single attributed card (the quote + attribution structure)
- The Analyst brief flags that a static post is appropriate for the week's test objectives

Do not use a Static Post as a substitute for a Carousel Reel when the content warrants a carousel. Static posts have lower native reach and algorithmic distribution on Instagram compared to Reels. The account's growth strategy is Reel-first.

### Export Settings — Static Post

| Property | Value |
|---|---|
| Output format | JPEG (primary) |
| JPEG quality | 85–95 (high quality, minimize compression artifacts) |
| Alternate format | PNG (for images with fine text detail where JPEG artifacts are visible at text edges) |
| Color space | sRGB |
| Resolution | 72 ppi |

### File Format for Delivery to Asset Manager

Deliver as: JPEG or PNG file.

### Naming Convention — Static Post

Format: `sp-[scene-code]-[pillar-code]-[NNN].[ext]`

Examples:
- `sp-pdh-grow-001.jpg` — Static Post, Pre-Dawn Horizon, Personal Growth
- `sp-diw-grat-001.jpg` — Static Post, Dark Interior, Gratitude

### Platform Quirks — Static Post (as of 2026)

- Static posts receive lower algorithmic reach than Reels. Do not rely on Static Posts as the account's primary growth driver.
- In the profile grid, portrait posts (4:5) are cropped to a square thumbnail. The center 1080x1080px of the portrait canvas is what displays in the grid. Ensure the most visually important element (typically the anchor text block) is centered within the 1080x1080px crop zone.
- Alt text: Instagram allows alt text for accessibility. Write a brief, accurate description of the image and the overlay text. This is the Publisher's responsibility at upload.

---

## Format 4 — Carousel Post (Static Slides, Non-Reel)

A multi-frame static image post (not a Reel). Viewed in the feed as a single post; viewer swipes through frames. Does not appear in the Reels tab. Does not require audio.

### Canvas and Resolution

| Property | Value |
|---|---|
| Dimensions | 1080 x 1350 px (portrait, preferred) |
| Aspect ratio | 4:5 |
| Color mode | RGB |
| Color profile | sRGB IEC61966-2.1 |
| Resolution (export) | 72 ppi |
| Bit depth | 8-bit |

Square (1080x1080px) is also technically valid. Apply the same aspect ratio decision rule as Static Post. Default to portrait.

### Safe Zones — Carousel Post

Same as Static Post portrait (1080x1350px):

| Boundary | Pixel Position |
|---|---|
| All edges — hard inset | 80px |
| Recommended top of text | y = 200px |
| Recommended bottom of text | y = 1200px |
| Left inset | x = 80px |
| Right inset | x = 1000px |

### Slide Count

- Minimum: 2 slides
- Maximum: 10 slides (Instagram platform limit)
- Recommended for this account: 4–7 slides
- Follow the same 5–7 slide narrative logic as Carousel Reels where possible

### Swipe-Prompt Convention — Slide 1

Slide 1 of a Carousel Post must include a visual cue indicating that more slides follow. This is not required on Carousel Reels (the Reel format itself communicates continuation). On a Carousel Post in the feed, a viewer cannot tell from the cover image alone that it is multi-frame — the swipe prompt is essential for completion rate.

**Approved swipe-prompt treatment:**
- Position: Lower content zone, below the main anchor line, above the bottom inset
- Content: A short DM Sans Light line reading "Swipe to continue" or "Keep reading" or a right-pointing arrow indicator
- Size: 22–26px DM Sans Light 300
- Color: `#C8BBA8` (--text-soft) — it should feel like a quiet navigation cue, not a design element
- Do not use animated arrows or GIFs — this is a static post format

The swipe prompt is the only slide-1-specific element that appears on Carousel Posts but not Carousel Reels. It may be omitted only if Instagram's UI clearly indicates multiple frames (Instagram currently shows a dot indicator in the lower-right corner of the cover image, but this is small — include the text prompt regardless).

### When to Use Carousel Post vs. Carousel Reel

Use a Carousel Post when:
- The content is text-heavy list content (e.g., "5 things that changed how I think about money") that reads better as static slides than as animated frames
- The Analyst brief or Strategy Director direction specifically calls for a Carousel Post format test
- Background video loops are not available or appropriate for the content tone
- The content needs to be saved and re-read (static carousels have higher save rates in some content categories — the Analyst will flag if this applies)

Default to Carousel Reel over Carousel Post whenever the content can work in either format. The Reel format has native algorithmic distribution advantages on Instagram that the static Carousel Post does not.

### Typography — Carousel Post

Same typeface and color system as Static Post. Slide numbers are appropriate on Carousel Posts and help the viewer track position within the sequence.

| Element | Size Range |
|---|---|
| Anchor line | 72–88px |
| Supporting line | 30–38px |
| Attribution | 26–30px |
| Slide number | 22–26px |

### Export Settings — Carousel Post

Each slide delivered as a separate file.

| Property | Value |
|---|---|
| Output format | JPEG (primary) or PNG |
| JPEG quality | 85–95 |
| Color space | sRGB |
| Resolution | 72 ppi |
| Delivery order | Files named and numbered in slide sequence order |

### File Format for Delivery to Asset Manager

Deliver as: Individual JPEG or PNG files per slide, numbered sequentially.

### Naming Convention — Carousel Post

Format: `cp-[scene-code]-[pillar-code]-[NNN]-s[slide].jpg`

Examples:
- `cp-snl-mfst-001-s1.jpg` — Carousel Post, Shadowed Natural Landscape, Manifestation, post 001, slide 1
- `cp-snl-mfst-001-s2.jpg` — same post, slide 2
- `cp-snl-mfst-001-s3.jpg` — same post, slide 3

### Platform Quirks — Carousel Post (as of 2026)

- Instagram allows up to 10 frames per Carousel Post.
- All frames must be the same aspect ratio. Do not mix portrait and square within a single Carousel Post.
- In the profile grid, only the first slide (cover frame) is visible. The cover frame must work as a standalone image.
- Instagram shows a small "multiple images" stack icon on the cover image in the grid — this is the platform's native indicator. Still include the swipe prompt on slide 1 for feed-scroll viewers.

---

## Format 5 — Story

Vertical format, 24-hour lifespan (unless saved to Highlights). Viewed full-screen. Tap-navigated (left to tap back, right to tap forward or dismiss).

### Canvas and Resolution

| Property | Value |
|---|---|
| Dimensions | 1080 x 1920 px |
| Aspect ratio | 9:16 |
| Color mode | RGB |
| Color profile | sRGB IEC61966-2.1 |
| Resolution (export) | 72 ppi |
| Bit depth | 8-bit |

Same dimensions as Reels. Do not produce Stories at a different size.

### Safe Zones — Story

Stories carry a significantly larger UI footprint than Reels. The top and bottom margins must be more generous.

| Boundary | Pixel Position | Notes |
|---|---|---|
| Top — tap zone + UI | y = 0 to 250px | No text. Progress bar, account name, close button occupy this zone. |
| Top — clearance buffer | y = 250 to 350px | Avoid anchor text here. Supporting or navigation elements only. |
| Left inset | x = 80px | Hard inset. No text left of this line. |
| Right inset | x = 1000px | Hard inset. No text right of this line. |
| Bottom — tap zone | y = 1520 to 1920px | Do not place any text or interactive elements in this zone. Instagram's tap-to-go-forward zone occupies the bottom ~400px. |
| Bottom — text boundary | y = 1500px | Hard limit. No text below y=1500px. |
| Bottom — link sticker zone | y = 1300 to 1500px | Reserved for link sticker placement (see below). Do not overlap text here if a link sticker will be placed. |

**Effective Story text zone:** y=350px to y=1300px (950px tall), x=80px to x=1000px (900px wide).

This is a significantly taller safe zone than the feed and Reels formats — Stories have a substantially smaller usable vertical area when UI and tap zones are excluded. Design accordingly. Do not carry over Reel text placements directly to Story without adjustment.

### Tap Zone Note

The top ~80px and bottom ~400px of a Story are navigation tap zones. A viewer tapping the bottom half of the screen will advance to the next story. Placing interactive elements or text in the bottom tap zone creates confusion — the viewer goes to tap the text and accidentally advances. All meaningful content must be above y=1300px on Stories.

### Link Sticker Placement Zone

- When a link sticker is used (e.g., linking to a pinned post, product page, or external resource), place it in the y=1300px to y=1500px band, centered horizontally or offset as needed for the composition.
- Keep the link sticker out of the main text composition area (above y=1300px). It is a functional element, not a design element.
- Do not use the link sticker on every Story — reserve it for Story frames that are explicitly directing the viewer to take an action (e.g., "see the full post" links during account-building, later "link in bio" Story frames during product launch).
- Link sticker is a Publisher decision, not a Design decision. The Designer delivers the Story frame without the sticker; the Publisher applies it at upload. The Designer should leave the y=1300–1500px zone clear on any Story frame where a link sticker is likely to be used.

### Duration

- **Video Stories:** 1–60 seconds per frame. For background-loop video Stories used as atmosphere frames, target 10–15 seconds. Instagram auto-advances Stories after the video ends.
- **Static image Stories:** Instagram displays static Story frames for 7 seconds before auto-advancing. The Designer should design the composition to be readable in under 5 seconds.
- **Story sequences:** If publishing a sequence of Story frames on the same day (e.g., a 3-frame quote Story or a behind-the-scenes sequence), brief the Publisher on the intended viewing order. File naming must reflect the intended sequence.

### When to Use Stories in This Account's Strategy

Stories serve a different function than feed posts for this account. They are relationship and retention tools, not growth tools. Story views come primarily from existing followers. At launch (zero followers), Stories have limited reach and should be a secondary priority.

**Appropriate Story uses for this account:**
- Sharing a new feed post to Stories immediately after publishing (driving existing followers to the new post)
- Brief quote cards that extend or complement a feed post theme
- Engagement Story frames (polls, questions) to build audience feedback data — the Analyst can use this data
- Highlight covers (pinned as Highlights for ongoing profile value)

**Story posting cadence:** Stories are not part of the core 5-posts-per-week production schedule. They are supplementary. When a feed post goes live, a companion Story share is appropriate. Standalone Story content is lower priority than feed content during the account-building phase.

### Typography — Story

Same typeface and color system. Adjustment for the tighter effective text zone (950px tall):

| Element | Size Range | Notes |
|---|---|---|
| Anchor line | 72–88px | May need to use lower end if the quote is more than 6 words |
| Supporting line | 28–36px | — |
| Attribution | 24–28px | — |

Do not use slide numbers on Stories — Stories are not navigated by number.

### Export Settings — Story (Static)

| Property | Value |
|---|---|
| Output format | JPEG or PNG |
| JPEG quality | 85–95 |
| Color space | sRGB |

### Export Settings — Story (Video)

| Property | Value |
|---|---|
| Output format | MP4 |
| Video codec | H.264 |
| Resolution | 1080 x 1920px |
| Frame rate | 23.976fps or 24fps |
| File size | Under 250 MB (Instagram Story limit) |
| Color space | sRGB |

### File Format for Delivery to Asset Manager

Deliver as: JPEG/PNG for static Stories. MP4 for video Stories.

If delivering a Story sequence (multiple frames), deliver all frames together with a delivery note specifying the intended display order.

### Naming Convention — Story

Static: `st-[scene-code]-[pillar-code]-[NNN].jpg`
Video: `st-[scene-code]-[pillar-code]-[NNN].mp4`
Sequence: `st-[scene-code]-[pillar-code]-[NNN]-f[frame number].jpg`

Examples:
- `st-pdh-grow-001.jpg` — Story, Pre-Dawn Horizon, Personal Growth
- `st-dfc-mfst-001-f1.jpg` — Story sequence, frame 1
- `st-dfc-mfst-001-f2.jpg` — Story sequence, frame 2

### Platform Quirks — Story (as of 2026)

- Story images are displayed for exactly 7 seconds then auto-advance. Design for a 4-second read time at maximum.
- Instagram may compress Story video more aggressively than Reel video. Source background video at high bitrate; the platform compression is unavoidable.
- Stories with link stickers get a "swipe up" or "tap here" affordance added by Instagram automatically when a link is attached. The Designer does not need to design this element — it appears on top of the Story frame at upload.
- Story Highlights: If a Story is saved to a Highlight, it is visible on the profile indefinitely. Highlight cover design is a separate deliverable from the Story itself. See Profile Grid section below for Highlight cover guidance.

---

## Format 6 — Profile Grid Thumbnail Consideration

The profile grid is the first visual impression a new visitor has of the account. It is not a format to design for independently — it is a consequence of the formats above. But design decisions made at the format level directly affect how the grid reads.

### How Each Format Appears at Grid Thumbnail Size

Instagram profile grids display all posts as square thumbnails. Regardless of the original format, every post is cropped to a 1:1 square centered on the canvas.

**Grid thumbnail size (display):** Approximately 293 x 293px on a standard mobile display (this is a display size, not a production size — thumbnails are served at higher resolution by Instagram and displayed at this pixel density).

**Crop behavior by format:**

| Format | Original Size | Grid Crop (center square) | Pixel Range Shown |
|---|---|---|---|
| Carousel Reel | 1080 x 1920px | Center 1080 x 1080px | y=420px to y=1500px |
| Standard Reel | 1080 x 1920px | Center 1080 x 1080px | y=420px to y=1500px |
| Static Post (portrait) | 1080 x 1350px | Center 1080 x 1080px | y=135px to y=1215px |
| Carousel Post (portrait) | 1080 x 1350px | Center 1080 x 1080px | y=135px to y=1215px |
| Story | Not shown in main grid — only visible in Highlights row |

For Reels (1080x1920px): The grid thumbnail shows the center vertical slice from y=420px to y=1500px. This falls squarely within the safe text zone — anchor lines placed in the center zone (y=600 to y=1150) will appear in the grid thumbnail.

For portrait posts (1080x1350px): The grid thumbnail shows y=135px to y=1215px — nearly the full canvas except the very top and bottom edges.

**Design implication:** Anchor text placed in the center zone per the specifications above will always be visible in the grid thumbnail. This is by design — do not attempt to "design for the grid" separately. If the placement rules in this document are followed, the grid takes care of itself.

### The Dark Earth Warm Light Source Rule Applied to Grid Coherence

The profile grid must read as a unified visual identity at a glance. For this account, grid coherence is achieved through palette consistency, not compositional tricks.

**Grid coherence requirements:**
- Every post background must pass the Dark Earth warm-dark test (see Brand Style Guide Section 4.3). A single cool-dark or bright post will visually break the grid.
- The dominant background tone across all grid thumbnails must read as warm dark. At thumbnail size, background details collapse — what remains is the dominant color temperature. This is the Dark Earth system's primary grid advantage: the warm charcoal-brown palette creates a cohesive, immediately recognizable grid without requiring coordinated compositional planning.
- The warm light source present in each background will read as a warm accent (amber, gold) in the dark thumbnail. This creates organic visual interest across the grid without pattern-planning.

**What this is not:** This account does not use a "grid plan" where posts are designed to form a pattern or mosaic when viewed together. The coherence is entirely through the consistent aesthetic, not through compositional coordination. This is intentional — it allows content to be published in any order without grid planning overhead.

**Grid audit cadence:** The Publisher should review the grid appearance after every 9 posts (3 rows) to confirm coherence. If a post looks out of place in the grid, flag to the Designer. The Asset Manager should flag any background that is visually distinct from the established grid tone before it reaches the publishing stage.

### Cover Frame Selection Guidance for Reels

Reels appear in the grid as their selected cover frame, not as a random video still. Cover frame selection is a design decision and must be made intentionally.

**Cover frame requirements:**
- Must be a visually compelling still frame — dark, warm-toned, with the anchor text legible at thumbnail size
- Must contain the anchor line (or a visually dominant portion of it) — the anchor line is the primary visual element in the thumbnail
- Should represent the dominant background of the reel (not a transition frame or a black fade frame)
- Must maintain grid coherence: warm dark tone, warm light source visible or implied

**Cover frame production:**
The Designer produces a separate JPEG cover frame at 1080x1920px for every Reel (Carousel and Standard). This is delivered to the Asset Manager alongside the MP4. The Publisher uploads this JPEG as the cover frame at the time of posting.

Do not allow Instagram to auto-select a cover frame. The auto-selection pulls an arbitrary video frame and is frequently the black fade between slides on a Carousel Reel — this produces a black square in the profile grid.

### Highlight Covers

Highlight covers are circular thumbnails on the profile page. They are a separate visual deliverable from Stories.

| Property | Value |
|---|---|
| Production canvas | 1080 x 1920px (same as Story) |
| Circular display crop | Center circle, approximately 200px diameter in display |
| Critical zone | Center 300x300px of the 1080x1920px canvas |

Highlight cover design guidelines:
- Background: Flat `#1C1612` (Background Base) or a very simple dark earth texture — not a complex landscape (landscape detail collapses to illegibility at circular thumbnail size)
- Center element: A simple label (pillar name, or a minimal icon) in DM Sans Light or Cormorant Garamond, sized to read clearly within a 200px circle
- Text color: `#F0EAD9` (Text Primary) or `#C9973A` (Accent Gold) for emphasis
- Naming: `hl-[highlight-name].jpg` (e.g., `hl-gratitude.jpg`, `hl-growth.jpg`)

Highlight covers are a lower-priority deliverable during the account-building phase. Produce them after the core feed post templates are established (task 2C.3).

---

## Section 7 — Cross-Format Consistency Rules

A viewer who encounters this account's Story and then scrolls to a feed post must immediately recognize both as the same account. The following rules enforce that recognition across formats.

### The Four Consistency Anchors

**1. Color temperature is the primary recognition signal.**
Every format, at every size, must read as warm dark with amber or gold accents. This is what makes the account recognizable before the viewer reads a word. The moment a single post drifts cool or bright, the recognition signal breaks. There are no exceptions.

**2. Typography is the secondary recognition signal.**
Cormorant Garamond for anchor lines. DM Sans for supporting text. These two typefaces together are unusual in the motivational content space — their pairing is a fingerprint. Any substitution (even a "similar" serif) erodes the recognition signal.

**3. Scale relationship is consistent across formats.**
The size ratio between the anchor line and the supporting line is roughly 2:1 across all formats (anchor at 72–96px, supporting at 30–40px on a 1080-wide canvas). A viewer accustomed to the hierarchy on a Reel will recognize the same hierarchy at a glance on a Story or a static post.

**4. Absence of clutter is a brand signal.**
This account's visual signature is what is not there: no text boxes, no fill layers, no crowded multi-element compositions. The empty warm-dark space around the text is itself a brand element. An asset with a different visual density — more elements, more graphic decoration, more complexity — reads as a different account even if the colors and typefaces are correct.

### Cross-Format Application Checklist

Before delivering any asset, confirm:

- [ ] Background passes the warm-dark test (brown-black to warm charcoal range, warm light source present and nameable)
- [ ] Primary text is `#F0EAD9`, not white (`#FFFFFF`)
- [ ] Anchor line is Cormorant Garamond Medium 500 or heavier
- [ ] Supporting text is DM Sans Light, clearly smaller than anchor
- [ ] No text boxes, fills, or background overlays behind text
- [ ] Text is within the safe zones specified for this format
- [ ] Only one gold accent word per slide/frame, on no more than half the slides
- [ ] No emojis, icons, or decorative flourishes
- [ ] Motion (if present) is slow, organic, barely perceptible

---

## Section 8 — Template Architecture Notes

These notes are written for the Designer beginning work on task 2C.3 (Template Suite production). They define the template relationship structure before individual templates are built.

### Format Groupings — Shared Base vs. Independent Build

**Group A — 9:16 Vertical (shared base):**
Carousel Reel, Standard Reel, and Story all share the same 1080x1920px canvas dimensions. They should share a base layer structure. The differences between them are:
- Carousel Reel: Text layers are per-slide; background is a video layer; Reel-specific timing
- Standard Reel: Single set of text layers; background is a video layer
- Story: Tighter effective text zone (y=350px to y=1300px max); link sticker zone reserved at bottom

Approach: Build one master 9:16 vertical template with clearly labeled safe zone guide layers. Duplicate this master template for each format variant. The safe zone guides for each format variant are different — label them unmistakably so no variant is confused with another.

**Group B — 4:5 Portrait (shared base):**
Static Post and Carousel Post (portrait) share the same 1080x1350px canvas dimensions. Their text zones are identical. They should share a base template.
- Static Post: Single slide; no slide number layer; no swipe prompt layer
- Carousel Post: Multiple slides; slide number layer active; swipe prompt layer active on slide 1

Approach: Build one master 4:5 portrait template. The Carousel Post variant activates the slide number and swipe prompt layers. The Static Post variant hides them.

**Group C — 1:1 Square (independent if needed):**
Square format is a secondary option used infrequently. If square Static Posts or Carousel Posts are produced, build the square template independently. Do not derive from the portrait base — the compositional logic is different enough to warrant a separate starting point.

### Template Layer Naming Convention

Every template file must use the following layer naming conventions for consistent handoff between the Designer and Asset Manager. Layer names must be identical across all templates where the layer serves the same function.

| Layer Name | Content |
|---|---|
| `[FORMAT] SAFE ZONE GUIDE` | Non-printing guide showing safe zone boundaries for this format. Lock this layer — it should never be moved. Color: red at 30% opacity. |
| `[FORMAT] TEXT ZONE GUIDE` | Non-printing guide showing recommended text placement zones. Lock this layer. Color: blue at 30% opacity. |
| `BG VIDEO` or `BG IMAGE` | Background media layer. Sits at the bottom of the stack. |
| `VIGNETTE` | Optional dark edge vignette layer if needed for background depth. Sits above BG layer, below text. |
| `ANCHOR LINE` | Primary anchor text layer. Cormorant Garamond, positioned in center zone. |
| `ANCHOR ACCENT` | The gold accent word layer if produced as a separate text element (some production workflows set the accent word in a separate layer for color control). |
| `SUPPORTING LINE` | Secondary text layer. DM Sans Light. Positioned below anchor. |
| `ATTRIBUTION` | Attribution line layer. Positioned in lower content or lower accent zone. |
| `SLIDE NUMBER` | Slide number layer. Positioned in upper accent zone or lower accent zone per design. |
| `SWIPE PROMPT` | Swipe-to-continue text layer. Carousel Post slide 1 only. Hide on all other slides. |
| `DIVIDER RULE` | Optional 1px horizontal rule in #C9973A. Use no more than once per slide. |
| `LINK STICKER ZONE` | Non-printing guide layer indicating the reserved link sticker zone on Story templates. Lock this layer. |

Layer order from bottom to top:
1. BG VIDEO or BG IMAGE
2. VIGNETTE (if used)
3. DIVIDER RULE (if used)
4. ATTRIBUTION
5. SLIDE NUMBER
6. SWIPE PROMPT
7. SUPPORTING LINE
8. ANCHOR ACCENT
9. ANCHOR LINE
10. [FORMAT] TEXT ZONE GUIDE (guide layer, non-printing)
11. [FORMAT] SAFE ZONE GUIDE (guide layer, non-printing)

### File Format for Templates

Templates should be delivered in the production software's native format (e.g., .aep for After Effects, .psd for Photoshop, .fig for Figma). The Asset Manager stores the native file. A flattened JPEG preview of the template structure should accompany each native file for quick reference without opening the software.

Template files are stored at: `/assets/templates/`
Template naming: `tpl-[format-code]-[version].ext`

Format codes for templates:
- `cr` = Carousel Reel
- `sr` = Standard Reel
- `cp` = Carousel Post
- `sp` = Static Post
- `st` = Story
- `hl` = Highlight Cover

Examples:
- `tpl-cr-v1.aep` — Carousel Reel template, version 1, After Effects
- `tpl-sp-v1.psd` — Static Post template, version 1, Photoshop
- `tpl-st-v1.psd` — Story template, version 1, Photoshop

---

## Section 9 — Platform Compliance Checklist

A quick-reference list of Instagram's current technical requirements and community guidelines relevant to this account type. As of 2026.

### Technical Requirements

| Requirement | Specification |
|---|---|
| Reel maximum file size | 650 MB |
| Reel maximum duration | 3 minutes |
| Reel minimum duration | 3 seconds |
| Reel video codec | H.264 or H.265 (H.264 preferred for compatibility) |
| Reel frame rate | Up to 60fps (this account uses 23.976fps for cinematic quality — compliant) |
| Feed post maximum file size (video) | 650 MB |
| Feed post maximum file size (image) | 8 MB per image |
| Carousel Post maximum slides | 10 |
| Story maximum file size (video) | 250 MB |
| Story maximum duration (video) | 60 seconds per frame |
| Story display duration (static) | 7 seconds (platform-controlled) |
| Minimum video resolution | 720p (this account produces at 1080p minimum — compliant) |
| Aspect ratios accepted | 1:1, 4:5, 16:9, 9:16 (this account uses 4:5 and 9:16 — compliant) |
| Supported video formats | MP4, MOV (this account uses MP4 — compliant) |
| Audio formats | AAC, MP3 (this account uses AAC — compliant) |
| Color space | sRGB (this account uses sRGB — compliant) |

### Community Guidelines — Relevant to This Account

| Guideline | This Account's Status |
|---|---|
| No copyrighted music without license | Compliant — account uses Instagram native audio library or licensed tracks (Artlist/Artgrid) only |
| No misleading health claims | Not applicable — account does not make health claims |
| No financial advice or guaranteed returns | Risk area — Business Growth and Abundance Mindset content must not imply guaranteed financial results. Copy is the Writer's responsibility; the Designer should flag any overlay text that reads as a financial guarantee before production |
| No content promoting self-harm | Not applicable — account content is growth-oriented and affirming |
| No impersonation | Not applicable |
| No religious discrimination | Relevant — the account's hard constraint (no religious imagery) ensures compliance. The Designer enforces this at the background sourcing stage |
| No sensitive political content | Not applicable — account content does not engage with political topics |
| Text overlay volume | Instagram does not penalize text-heavy static images, but video content (Reels) with excessive static text coverage may receive reduced reach in some contexts. The Dark Earth system — with sparse, centered text on a dark background — is naturally compliant. Text coverage per frame is well under any threshold |

### Music Licensing Notes

- Instagram's native audio library: Safe to use on all formats without additional licensing. Access through the Instagram app or Creator Studio.
- Artlist license (Social Media plan or equivalent): Covers Instagram Reels, Stories, and feed video posts. Verify the license includes "social media" use — some Artlist tiers are for film/commercial only.
- Artgrid license: Same as Artlist — verify social media coverage.
- Epidemic Sound: Safe if the account holds an active subscription that covers social media monetization-ready use.
- YouTube Audio Library: Tracks marked "free to use" are NOT automatically cleared for Instagram. Do not use YouTube Audio Library tracks without verifying Instagram-specific licensing.
- Any track not from an approved source above must be cleared before use. The Publisher flags licensing questions to the Strategy Director before upload.

### Known Platform Behavior Notes (as of 2026)

- Instagram continues to heavily prioritize Reel content in algorithmic distribution. Static posts reach primarily existing followers. The account's Reel-first strategy is aligned with platform behavior.
- Carousel Reels (video with multiple frames + music) are currently among the highest-reach formats for accounts under 10K followers. This account's primary format is well-positioned.
- Instagram's compression on upload degrades video quality — particularly in dark areas of footage, where blockiness and banding can appear. Export at high bitrate and accept platform compression as a final step. Do not attempt to pre-compensate for compression by artificially brightening dark areas of the video — this will throw off the Dark Earth palette.
- Alt text for accessibility is supported on feed images and should be applied by the Publisher at upload.
- Instagram Reels can be cross-shared to Facebook automatically. The account does not currently cross-post, but if this feature is enabled, verify that the visual format translates cleanly to Facebook's feed.

---

## Document Control

| Property | Value |
|---|---|
| Document owner | Designer |
| Version | 1.0 |
| Date produced | 2026-03-18 |
| Last updated | 2026-03-18 |
| Status | Living — update when platform specs change |
| Approval required for updates | Strategy Director approval for major changes; Designer may update platform quirk notes and known behavior notes without approval when Instagram makes changes |

*All changes to this document must include an updated "Last updated" date and a brief note in the Document Control section describing what changed.*
