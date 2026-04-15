# Asset Library Map — @exponentialgrowthformula_
**Maintained by:** Asset Manager
**Last updated:** 2026-03-18
**Version:** 1.0
**Status:** Active

This document defines the complete folder structure of `/assets/` — what every subfolder contains, what naming convention applies, and what state assets must be in before they are stored there. A new operator can recreate the full folder structure from scratch using this document alone.

---

## Root: `/assets/`

The top-level container for all library assets. Nothing is stored directly at the root level — all files live in the subfolders defined below. Three operational documents live at the root:

| File | Purpose |
|---|---|
| `asset-status-log.md` | Living master log of every asset and its current status |
| `asset-intake-protocol.md` | Standing protocol governing how assets enter the library |
| `asset-library-map.md` | This document |

---

## `/assets/backgrounds/`

All background imagery (static and motion) sourced for use behind text overlays. No background file is stored here until it has passed Designer review and received `Approved` status in the asset status log.

### `/assets/backgrounds/images/`

Static background images only. Organized by scene category code in subfolders.

**Intake staging area:**
```
/assets/backgrounds/images/intake/
```
Files submitted by the Strategy Director are placed here first. They remain here during review. After approval, they are moved to the appropriate scene category subfolder. After rejection, they are moved to `/assets/backgrounds/rejected/`.

**Approved subfolders — one per scene category:**
```
/assets/backgrounds/images/pdh/     — Pre-Dawn Horizon
/assets/backgrounds/images/snl/     — Shadowed Natural Landscape
/assets/backgrounds/images/det/     — Dark Earth Texture
/assets/backgrounds/images/dfc/     — Deep Forest / Canopy
/assets/backgrounds/images/dwr/     — Dark Water Reflected Light
/assets/backgrounds/images/diw/     — Dark Interior Warm Light
```

**Naming convention:** `bg-[category-code]-[number]-[descriptor].[ext]`

- Category code: one of the six codes above
- Number: three-digit sequential per category, starting at `001` (files sort consecutively in folder)
- Descriptor: 2–4 word description, lowercase, hyphenated (e.g., `mountain-amber`, `hillside-raking`)
- Extension: `.jpg` or `.png`

**Examples:**
- `bg-pdh-001-mountain-amber.jpg`
- `bg-snl-001-hillside-raking.jpg`
- `bg-det-001-volcanic-stone.jpg`
- `bg-dfc-001-forest-backlight.jpg`
- `bg-dwr-001-lake-dawn.jpg`
- `bg-diw-001-lamp-dark.jpg`

**Required metadata (recorded in asset-status-log.md, not embedded in file name):**
- Named warm light source (mandatory — asset cannot be Approved without this)
- Template compatibility list
- Source and attribution
- Date added

---

### `/assets/backgrounds/video-loops/`

Background video loops only. Organized by scene category code in subfolders, mirroring the image structure.

**Intake staging area:**
```
/assets/backgrounds/video-loops/intake/
```
Same intake process as images. Files placed here during review, moved to scene category subfolder on approval.

**Approved subfolders — one per scene category:**
```
/assets/backgrounds/video-loops/pdh/     — Pre-Dawn Horizon
/assets/backgrounds/video-loops/snl/     — Shadowed Natural Landscape
/assets/backgrounds/video-loops/det/     — Dark Earth Texture
/assets/backgrounds/video-loops/dfc/     — Deep Forest / Canopy
/assets/backgrounds/video-loops/dwr/     — Dark Water Reflected Light
/assets/backgrounds/video-loops/diw/     — Dark Interior Warm Light
```

**Naming convention:** `bg-[category-code]-[number]-[descriptor].[ext]`

Same pattern as images. Extension is `.mp4` or `.mov`.

**Examples:**
- `bg-pdh-001-mountain-amber.mp4`
- `bg-dfc-001-forest-backlight.mp4`
- `bg-dwr-001-lake-dawn.mp4`

**Loop requirements (per Brand Style Guide and Platform Design Spec):**
- Minimum loop length: 6 seconds
- Ideal loop length: 12–20 seconds
- Loop point must not be visually obvious during single playthrough
- Motion types: slow ambient light shift, slow horizontal drift, gentle organic movement, very slow light breathe, very slow water surface — no camera shake, no rapid movement

---

### Category-level `rejected/` subfolders

Rejected background assets are stored in a `rejected/` subfolder within their scene category folder — not in a global rejected folder. This keeps all attempts for a given category together for easy reference.

**Image rejected paths:**
```
/assets/backgrounds/images/pdh/rejected/
/assets/backgrounds/images/snl/rejected/
/assets/backgrounds/images/det/rejected/
/assets/backgrounds/images/dfc/rejected/
/assets/backgrounds/images/dwr/rejected/
/assets/backgrounds/images/diw/rejected/
```

**Video loop rejected paths:**
```
/assets/backgrounds/video-loops/pdh/rejected/
/assets/backgrounds/video-loops/snl/rejected/
/assets/backgrounds/video-loops/det/rejected/
/assets/backgrounds/video-loops/dfc/rejected/
/assets/backgrounds/video-loops/dwr/rejected/
/assets/backgrounds/video-loops/diw/rejected/
```

**No naming change required on rejection** — the original file name is preserved. The rejection reason is recorded in the asset status log. Files stored here are never deleted.

---

## `/assets/templates/`

Approved, production-ready template files built by the Designer. Both native design files and flattened JPEG previews are stored here.

**Active template files:**

| Template ID | Template covers | File name pattern |
|---|---|---|
| T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER | Carousel Reel (all slide types) | `tpl-cr-v[N].[ext]` |
| T-SR-SINGLE | Standard Reel | `tpl-sr-v[N].[ext]` |
| T-SP-SINGLE, T-SP-CAROUSEL-SLIDE | Static Post and Carousel Post | `tpl-sp-v[N].[ext]` |
| T-ST-QUOTE, T-ST-ENGAGEMENT | Story (both types) | `tpl-st-v[N].[ext]` |

**Naming convention:** `tpl-[format-code]-v[version].[ext]`

Format codes: `cr` (Carousel Reel), `sr` (Standard Reel), `sp` (Static Post / Carousel Post), `st` (Story), `hl` (Highlight Cover)

Version: integer starting at 1, incremented on any significant structural change — `v1`, `v2`, `v3`

Extension: native design tool file extension (`.aep` for After Effects, `.psd` for Photoshop, `.fig` for Figma, `.cdr` for Canva export, etc.)

**Each template must be accompanied by a preview file:**
Naming: `tpl-[format-code]-v[version]-preview.jpg`
Example: `tpl-cr-v1-preview.jpg`

The preview is a flattened JPEG showing the template structure for quick reference without opening the design software.

**Archive subfolder:**
```
/assets/templates/archive/
```
Previous template versions are moved here when a new version is deployed. Naming in archive: `tpl-[format-code]-v[version]-archived-[YYYY-MM-DD].[ext]`

Example: `tpl-cr-v1-archived-2026-04-15.aep`

Do not delete archived templates. They are the reference record for what template was in use at any given time during the account's history.

---

## `/assets/published/`

Archive of all post assets after they have been published. Organized by year-month and platform. Files here are never deleted or overwritten.

**Folder structure:**
```
/assets/published/[YYYY-MM]/[platform]/
```

**Example:**
```
/assets/published/2026-03/instagram/
/assets/published/2026-04/instagram/
```

When cross-platform publishing is added (at the 90-day strategy review), additional platform folders are created under each month:
```
/assets/published/[YYYY-MM]/tiktok/
/assets/published/[YYYY-MM]/pinterest/
/assets/published/[YYYY-MM]/youtube-shorts/
```

**What is stored here:** The final exported post files as delivered to Instagram — the same files that were staged in `/assets/staging/` before publish. The staging copies are moved here after publish is confirmed. File names are unchanged from the production naming convention.

**When assets are moved here:** After Publishing confirms the post is live. The Asset Manager updates the asset's status to `Published` in the asset status log at the same time.

---

## `/assets/staging/`

Temporary holding area for assets that have been verified and are ready for an upcoming publish. This folder is always cleared after each publish cycle.

**What is stored here:** Verified, Approved post assets assembled for a specific scheduled post. The Publisher draws from here at publish time.

**Contents at any given time:** Only the assets for the next scheduled post (or the current active production batch). Assets from completed posts are moved to `/assets/published/` immediately after the post goes live.

**This folder is not an archive.** Do not use it for storage. Only assets actively queued for an imminent publish should be here.

---

## `/assets/brand/`

Brand governance files and supporting assets. Files here are reference-level — they define the system rather than feed directly into posts.

### `/assets/brand/fonts/`

All approved font files used in templates and production.

Required fonts for this account:

| File name | Typeface | Weight | Use |
|---|---|---|---|
| `CormorantGaramond-Medium.ttf` | Cormorant Garamond | Medium (500) | Anchor lines (primary) |
| `CormorantGaramond-SemiBold.ttf` | Cormorant Garamond | SemiBold (600) | Anchor lines (heavy weight option) |
| `CormorantGaramond-LightItalic.ttf` | Cormorant Garamond | Light Italic | Attribution lines |
| `DMSans-Light.ttf` | DM Sans | Light (300) | Supporting lines, attribution |
| `DMSans-Regular.ttf` | DM Sans | Regular (400) | Slide numbers |

Font files sourced from Google Fonts. Confirm exact file names against the downloaded font packages. The names above are indicative — adjust to match the actual downloaded file names if Google Fonts uses different naming.

Additional weights may be added if the Designer requires them. Add new entries to the asset status log and update this table.

### `/assets/brand/color-palette/`

Exported color swatch files and hex reference documents.

| File | Format | Contents |
|---|---|---|
| `color-palette-swatches.ase` | Adobe Swatch Exchange | All five palette tokens ready to load into Photoshop, Illustrator, or compatible design tools |
| `color-palette-hex-reference.md` | Markdown | Hex values, token names, and usage rules for all five palette colors |

The hex reference document is the quick-reference version of the color system defined in Brand Style Guide Section 2.

### `/assets/brand/brand-style-guide.md`

A copy of the active Brand Style Guide, mirrored from `/brand/brand-style-guide.md`. The Asset Manager maintains this copy in sync with the source. When the Designer updates the Brand Style Guide, the Asset Manager archives the previous version here and updates this copy.

Archive naming: `brand-style-guide-v[N]-archived-[YYYY-MM-DD].md`

### `/assets/brand/platform-design-spec.md`

A copy of the active Platform Design Specification, mirrored from `/brand/platform-design-spec.md`. Same versioning and archive process as the Brand Style Guide copy above.

Archive naming: `platform-design-spec-v[N]-archived-[YYYY-MM-DD].md`

### `/assets/brand/archive/`

Previous versions of Brand Style Guide and Platform Design Spec copies, named with version and archive date. Do not delete. The archive confirms which brand version governed production at any given time.

---

## Complete Folder Structure — Quick Reference

```
/assets/
  asset-status-log.md
  asset-intake-protocol.md
  asset-library-map.md

  /backgrounds/
    /images/
      /pdh/                — Approved: Pre-Dawn Horizon
        /intake/           — Files awaiting review
        /rejected/         — Failed intake, never deleted
      /snl/                — Approved: Shadowed Natural Landscape
        /intake/
        /rejected/
      /det/                — Approved: Dark Earth Texture
        /intake/
        /rejected/
      /dfc/                — Approved: Deep Forest / Canopy
        /intake/
        /rejected/
      /dwr/                — Approved: Dark Water Reflected Light
        /intake/
        /rejected/
      /diw/                — Approved: Dark Interior Warm Light
        /intake/
        /rejected/
    /video-loops/
      /pdh/
        /intake/
        /rejected/
      /snl/
        /intake/
        /rejected/
      /det/
        /intake/
        /rejected/
      /dfc/
        /intake/
        /rejected/
      /dwr/
        /intake/
        /rejected/
      /diw/
        /intake/
        /rejected/

  /templates/
    tpl-cr-v1.[ext]
    tpl-cr-v1-preview.jpg
    tpl-sr-v1.[ext]
    tpl-sr-v1-preview.jpg
    tpl-sp-v1.[ext]
    tpl-sp-v1-preview.jpg
    tpl-st-v1.[ext]
    tpl-st-v1-preview.jpg
    /archive/              — Previous template versions

  /published/
    /[YYYY-MM]/
      /instagram/
      /tiktok/             — Added when cross-platform begins
      /pinterest/
      /youtube-shorts/

  /staging/                — Active pre-publish queue only

  /brand/
    brand-style-guide.md   — Active copy (mirrored from /brand/)
    platform-design-spec.md
    /fonts/
      CormorantGaramond-Medium.ttf
      CormorantGaramond-SemiBold.ttf
      CormorantGaramond-LightItalic.ttf
      DMSans-Light.ttf
      DMSans-Regular.ttf
    /color-palette/
      color-palette-swatches.ase
      color-palette-hex-reference.md
    /archive/              — Previous brand doc versions
```

---

## Background Asset Production Targets

Target image counts per scene category, based on a 5 posts/week cadence and a ~10-week non-repeating rotation. Targets are weighted by content pillar demand — categories serving two primary pillars run deeper than categories used sparingly.

| Category | Image Target | Current (2026-04-08) | Gap | Usage weight | Primary pillars served |
|---|---|---|---|---|---|
| PDH — Pre-Dawn Horizon | 12 | 7 | 5 | High | Manifestation, Confidence & Self-Worth |
| DFC — Deep Forest / Canopy | 10 | 6 | 4 | High | Personal Growth, Manifestation |
| SNL — Shadowed Natural Landscape | 10 | 2 | 8 | Medium-high | Personal Growth, Abundance Mindset |
| DWR — Dark Water Reflected Light | 8 | 4 | 4 | Medium | Gratitude, Abundance Mindset |
| DET — Dark Earth Texture | 6 | 0 | 6 | Low-medium | Any pillar (texture accent) |
| DIW — Dark Interior Warm Light | 6 | 0 | 6 | Low | Gratitude, Personal Growth |
| **Total** | **52** | **19** | **33** | | |

**Video loop targets:** Not formally set yet — prioritise once image library reaches 30+ approved assets across categories.

*Targets set 2026-04-08. Review at 40 total approved images or at the 90-day strategy review, whichever comes first.*

---

## Naming Convention Summary

| Asset Type | Pattern | Example |
|---|---|---|
| Background image | `bg-[scene-code]-[NNN]-[descriptor].jpg` | `bg-pdh-001-mountain-amber.jpg` |
| Background video loop | `bg-[scene-code]-[NNN]-[descriptor].mp4` | `bg-dfc-001-forest-backlight.mp4` |
| Template (active) | `tpl-[format-code]-v[N].[ext]` | `tpl-cr-v1.aep` |
| Template preview | `tpl-[format-code]-v[N]-preview.jpg` | `tpl-cr-v1-preview.jpg` |
| Template (archived) | `tpl-[format-code]-v[N]-archived-[YYYY-MM-DD].[ext]` | `tpl-cr-v1-archived-2026-04-15.aep` |
| Font file | Standard Google Fonts naming | `CormorantGaramond-Medium.ttf` |
| Color swatch | `color-palette-swatches.ase` | — |
| Brand doc copy | Same as source file | `brand-style-guide.md` |
| Brand doc archive | `[doc-name]-v[N]-archived-[YYYY-MM-DD].md` | `brand-style-guide-v1-archived-2026-04-15.md` |
| Published post | Format naming convention from Platform Design Spec | `cr-pdh-mfst-001.mp4` |

---

*Map version 1.0 — 2026-03-18. Update this document whenever the folder structure changes. Changes require Strategy Director approval.*
