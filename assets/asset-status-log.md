# Asset Status Log — @exponentialgrowthformula_
**Maintained by:** Asset Manager
**Last updated:** 2026-04-20

**Reference docs:** Status definitions → `asset-intake-protocol.md` | Scene category codes, asset type codes, content piece naming convention → `asset-library-map.md`

**Rejected and removed background assets:** archived in `assets/background-asset-archive.md`

**Status:** Active — content-001 A1/A2 (Format A) and content-002 C1/C2 (Format C) moved to `/assets/published/2026-04/instagram/` after publish confirmation. content-003 C1/C2 (Format C) moved to `/assets/published/2026-04/instagram/` after publish confirmation 2026-04-20. content-004 C1/C2 (Format C) moved to `/assets/published/2026-04/instagram/` after publish confirmation 2026-04-21. content-001 Format B (6 slides) and Format C remain in staging, scheduled for upcoming publish slots.

---

## Content Piece Assets

Assets produced for specific content pieces. Held in `/assets/staging/production/` until published, then archived to `/assets/published/[YYYY-MM]/[platform]/`.

| Asset ID | Content ID | Format | File Name | File Size | Status | Intake Date | Location | Notes |
|---|---|---|---|---|---|---|---|---|
| CPA-001-A1 | content-001 | Format A — Reel Video | `cr-pdh-grow-001.mp4` | 16MB | Published | 2026-04-09 | `/assets/published/2026-04/instagram/` | Published 2026-04-15. Media ID `18077728049544507`. Audio baked in: `calm-piano-indie-483190.mp3`. Background: BGV-PDH-004 (bg-pdh-001-sway-slow.mp4). Duration: 26.4s. |
| CPA-001-A2 | content-001 | Format A — Reel Cover | `cr-pdh-grow-001-cover.jpg` | 130KB | Published | 2026-04-09 | `/assets/published/2026-04/instagram/` | Published 2026-04-15 alongside CPA-001-A1. |
| CPA-001-B1 | content-001 | Format B — Carousel Slide 1 | `cp-pdh-grow-001-slide-01.jpg` | 130KB | Approved | 2026-04-09 | `/assets/staging/production/` | Hook slide: "Somewhere along the way, you decided you were behind." Upload as standard carousel POST (not Reel). Add music from Instagram library at posting for Reels tab eligibility. |
| CPA-001-B2 | content-001 | Format B — Carousel Slide 2 | `cp-pdh-grow-001-slide-02.jpg` | 133KB | Approved | 2026-04-09 | `/assets/staging/production/` | Friction anchor. |
| CPA-001-B3 | content-001 | Format B — Carousel Slide 3 | `cp-pdh-grow-001-slide-03.jpg` | 132KB | Approved | 2026-04-09 | `/assets/staging/production/` | Reframe 1 anchor + supporting. |
| CPA-001-B4 | content-001 | Format B — Carousel Slide 4 | `cp-pdh-grow-001-slide-04.jpg` | 139KB | Approved | 2026-04-09 | `/assets/staging/production/` | Reframe 2 anchor + supporting. |
| CPA-001-B5 | content-001 | Format B — Carousel Slide 5 | `cp-pdh-grow-001-slide-05.jpg` | 141KB | Approved | 2026-04-09 | `/assets/staging/production/` | Identity-Vote anchor. Gold accent on "built" confirmed. |
| CPA-001-B6 | content-001 | Format B — Carousel Slide 6 | `cp-pdh-grow-001-slide-06.jpg` | 120KB | Approved | 2026-04-09 | `/assets/staging/production/` | Close anchor + supporting + CTA ("Save this."). |
| CPA-001-C1 | content-001 | Format C — Stacked Reveal Video | `sr-pdh-grow-001.mp4` | 837KB | Approved | 2026-04-13 | `/assets/staging/production/` | No audio baked in — Publisher adds music in Instagram app at time of posting. Background: BGI-PDH-017 (bg-pdh-007-amber-sky-wide.jpg). Duration: 15.0s. 7 lines reveal at 1.9s intervals (1.1s hold + 0.8s fade per line); line 7 hold 2.3s. Typography: Cormorant Garamond 500, #F0EAD9, 1.5px dark outline (#0F0802) paint-order: stroke fill. Built with scripts/build-stacked-reveal.js. QC approved 2026-04-12 (8 frames extracted, all 7 lines clean, gold accent confirmed). Supersedes any prior v1 Format C entry referencing dark bg, no outline, or slow pacing. |
| CPA-001-C2 | content-001 | Format C — Stacked Reveal Cover | `sr-pdh-grow-001-cover.jpg` | 123KB | Approved | 2026-04-13 | `/assets/staging/production/` | Must be manually selected at upload. Background: BGI-PDH-017 (bg-pdh-007-amber-sky-wide.jpg). |
| CPA-002-C1 | content-002 | Format C — Stacked Reveal Video | `sr-dfc-worth-002.mp4` | — | Published | 2026-04-16 | `/assets/published/2026-04/instagram/` | Published 2026-04-16. Media ID `18093691952146858`. Audio baked in: `perky-piano-512261`. Background: BGI-DFC-001 (bg-dfc-001-glowing-tree.jpg). Duration: ~21s. 7 lines reveal; line 7 slow fade (2.3s). Typography: Cormorant Garamond 500, #F0EAD9, all lines same colour (no gold accent). Built with scripts/build-stacked-reveal-002.js. |
| CPA-002-C2 | content-002 | Format C — Stacked Reveal Cover | `sr-dfc-worth-002-cover.jpg` | — | Published | 2026-04-16 | `/assets/published/2026-04/instagram/` | Published 2026-04-16 alongside CPA-002-C1. Background: BGI-DFC-001 (bg-dfc-001-glowing-tree.jpg). |
| CPA-003-C1 | content-003 | Format C — Stacked Reveal Video | `sr-dfc-manif-003.mp4` | — | Published | 2026-04-20 | `/assets/published/2026-04/instagram/` | Published 2026-04-20. Media ID `17856363339650516`. Audio baked in: `perky-piano-512261`. Background: BGI-DFC-010 (bg-dfc-005-raking-light-forest.jpg). scrimOpacity 0.55, font-size 52px. Pillar: Manifestation. |
| CPA-003-C2 | content-003 | Format C — Stacked Reveal Cover | `sr-dfc-manif-003-cover.jpg` | — | Published | 2026-04-20 | `/assets/published/2026-04/instagram/` | Published 2026-04-20 alongside CPA-003-C1. Media ID `17856363339650516`. |
| CPA-004-C1 | content-004 | Format C — Stacked Reveal Video | `sr-dwr-grat-004.mp4` | — | Published | 2026-04-21 | `/assets/published/2026-04/instagram/` | Published 2026-04-21. Media ID `17905711623404988`. Audio baked in: `perky-piano-512261`. Background: BGI-DWR-007 (bg-dwr-004-rocky-shore-glow.jpg). scrimOpacity 0. Pillar: Gratitude. Hashtag set P-8. |
| CPA-004-C2 | content-004 | Format C — Stacked Reveal Cover | `sr-dwr-grat-004-cover.jpg` | — | Published | 2026-04-21 | `/assets/published/2026-04/instagram/` | Published 2026-04-21 alongside CPA-004-C1. Media ID `17905711623404988`. |

---

## Background Assets — Images

Approved assets only. Rejected and removed assets: see `assets/background-asset-archive.md`.

| Asset ID | File Name | Scene | Warm Light Source | Status | Notes | Template Compatibility | Use Count | Date Added | Source |
|---|---|---|---|---|---|---|---|---|---|
| BGI-PDH-007 | `bg-pdh-001-horiz-amber-band.jpg` | PDH | Horizon amber band, full frame width, lower-centre third | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-03-27 | Unsplash — Free License |
| BGI-PDH-009 | `bg-pdh-002-bottom-orange.jpg` | PDH | Off-frame horizon amber glow, lower edge, radiating upward into lower third | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-03-31 | Unsplash — Free License |
| BGI-PDH-011 | `bg-pdh-003-cloud-peek.jpg` | PDH | Horizon amber-gold light break, lower-middle third, with vertical light rays into dark cloud mass | Approved | — | T-CR-HOOK, T-CR-CTA, T-SR-SINGLE, T-ST-QUOTE | 0 | 2026-03-27 | Unsplash — Free License |
| BGI-PDH-013 | `bg-pdh-004-double-glow.jpg` | PDH | Dual amber-orange glow zones — primary horizon above treeline, secondary downward-radiating through cloud gap | Approved | — | T-CR-HOOK, T-CR-CTA, T-SR-SINGLE, T-ST-QUOTE | 0 | 2026-03-27 | Unsplash — Free License |
| BGI-PDH-014 | `bg-pdh-005-mid-glowup.jpg` | PDH | Concentrated amber-to-warm-white horizon glow, vertical centre, full frame width | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-03-27 | Unsplash — Free License |
| BGI-PDH-016 | `bg-pdh-006-rolling-hills-predawn.jpg` | PDH | Intense amber-orange horizon glow, full frame width, lower quarter, between two low hill silhouettes with warm red-orange sky | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-06 | Leonardo.ai — PDH-v3 — Commercial use confirmed |
| BGI-PDH-017 | `bg-pdh-007-amber-sky-wide.jpg` | PDH | Off-frame pre-dawn horizon glow below mountain silhouette, radiating amber-red through full sky | Approved | Luminous mid-frame zone — text placement limited to darker upper portion. Body-heavy and cover templates not viable. Used as background for content-001 Format C (CPA-001-C1/C2). | T-CR-HOOK, T-CR-CTA, T-SR-SINGLE, T-ST-QUOTE | 1 | 2026-04-06 | Leonardo.ai — PDH-v1 — Commercial use confirmed |
| BGI-DFC-001 | `bg-dfc-001-glowing-tree.jpg` | DFC | Warm amber backlight from off-frame low-angle sun, backlighting conifer/sapling at centre-frame | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-03 | Unsplash — Free License |
| BGI-DFC-004 | `bg-dfc-002-sun-beams.jpg` | DFC | Low-angle off-frame sun, camera-right, multiple wide amber-orange volumetric light shafts through mist and canopy | Approved | — | T-CR-HOOK, T-CR-CTA, T-SR-SINGLE, T-ST-QUOTE | 0 | 2026-04-01 | Unsplash — Free License |
| BGI-DFC-005 | `bg-dfc-003-shadows.jpg` | DFC | Low-angle off-frame warm sun, camera-right, raking amber light across forest floor and backlighting fine plant material | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-03 | Unsplash — Free License |
| BGI-DFC-009 | `bg-dfc-004-amber-backlight-forest.jpg` | DFC | Low-angle off-frame sun behind centre-frame tree trunks, producing amber-orange star-burst halo and volumetric backlight | Approved | Place anchor text above the brightest point of the amber halo, in the dark canopy mass. Avoid anchoring directly over the light star-burst. | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-06 | Leonardo.ai — DFC-v1 — Commercial use confirmed |
| BGI-DFC-010 | `bg-dfc-005-raking-light-forest.jpg` | DFC | Diagonal raking warm amber-orange light from camera-left, multiple volumetric light shafts through dark deciduous trunks with ground mist | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-06 | Leonardo.ai — DFC-v2 — Commercial use confirmed |
| BGI-DFC-011 | `bg-dfc-006-vertical-shaft.jpg` | DFC | Single vertical amber-orange light shaft from narrow canopy gap, centre-frame, pooling on forest floor | Approved | Place all text in dark canopy zone in upper portion, above shaft entry point. T-SP-SINGLE: verify upper zone after 4:5 crop. Convert source PNG to JPG at 95+ before filing. | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-07 | Flux (bfl.ai) — DFC-v3 — Commercial use confirmed |
| BGI-DWR-003 | `bg-dwr-001-amber-mist-shore.jpg` | DWR | Pre-dawn horizon amber-gold glow, full frame width, radiating into sky and across water; atmospheric mist diffusing warm ambient light | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-06 | Leonardo.ai — DWR-v3 — Commercial use confirmed |
| BGI-DWR-005 | `bg-dwr-002-dawn-mist-reeds.jpg` | DWR | Pre-dawn horizon amber-gold glow, full frame width, radiating downward in broad horizontal bands across water; low-lying mist above water | Approved | Upper third preferred anchor zone — dark featureless sky gives cleanest text placement. | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-07 | Flux (bfl.ai) — DWR-v3 prompt — Commercial use confirmed |
| BGI-DWR-006 | `bg-dwr-003-rocky-shore-dawn.jpg` | DWR | Solar disc at horizon, centre-frame, with amber-gold specular reflection column on water and warm sky halo | Approved | Favour upper-centre text placement (anchor line in 350–600px zone from top) — solar disc sits at approx. 600–700px vertical. | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-07 | Flux (bfl.ai) — DWR-v4 — Commercial use confirmed |
| BGI-DWR-007 | `bg-dwr-004-rocky-shore-glow.jpg` | DWR | Diffuse pre-dawn amber-orange horizon glow, full frame width, lower third, radiating upward; broad warm reflection across water | Approved | Full template suite viable — removal of solar disc opens entire upper sky as clean text field. More layout flexibility than BGI-DWR-006. | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-07 | Flux (bfl.ai) Kontext edit of bg-dwr-003 — DWR-v4 base — Commercial use confirmed |
| BGI-SNL-001 | `bg-snl-001-moorland-sidelight.jpg` | SNL | Warm amber-orange sidelight raking from camera-right through narrow gap in low dark cloud mass, illuminating broad mid-ground stripe of heathland | Approved | Keep all text within upper 50–52% of frame — illuminated stripe begins at ~55% vertical, not text-safe. Dark cloud mass above stripe is the text field. Source PNG — convert to JPG at 95+ before filing. | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-07 | Flux (bfl.ai) — SNL-v1 — Commercial use confirmed |
| BGI-SNL-002 | `bg-snl-002-highland-plateau.jpg` | SNL | Diffuse warm amber ambient light filtering through overcast cloud cover, washing entire stone terrain in a flat amber wash — no single directional source | Approved | Full template suite viable — deep warm-dark cloud zone covers entire upper half with no luminous interruption. Rock surface begins at ~50–55% vertical; keep anchor line above. Quieter mood — pairs well with introspective copy. Source PNG — convert to JPG at 95+ before filing. | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-SP-SINGLE, T-SP-CAROUSEL-SLIDE, T-ST-QUOTE, T-ST-ENGAGEMENT | 0 | 2026-04-07 | Flux (bfl.ai) — SNL-v2 — Commercial use confirmed |

---

## Background Assets — Video Loops

Approved assets only. Rejected and removed assets: see `assets/background-asset-archive.md`.

| Asset ID | File Name | Scene | Warm Light Source | Status | Notes | Template Compatibility | Use Count | Date Added | Source |
|---|---|---|---|---|---|---|---|---|---|
| BGV-PDH-002 | `bg-pdh-002-cloud-peek.mp4` | PDH | Off-frame horizon amber glow, lower-right quadrant, backlighting cloud formation from below with amber-orange rimlight | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-ST-QUOTE | 0 | 2026-03-31 | Unsplash — Free License |
| BGV-PDH-004 | `bg-pdh-001-sway-slow.mp4` | PDH | Solar disc, orange-red to warm yellow-white, at horizon left-of-centre, lower third; radiant amber-orange glow band full horizon width | Approved | — | T-CR-HOOK, T-CR-BODY, T-CR-CTA, T-CR-COVER, T-SR-SINGLE, T-ST-QUOTE | 0 | 2026-03-31 | Unsplash — Free License |

---

## Font Files

| Asset ID | File Name | Status | Use | Source |
|---|---|---|---|---|
| FNT-001 | `CormorantGaramond-Medium.ttf` | Pending Review | All templates (primary typeface) | Google Fonts |
| FNT-002 | `CormorantGaramond-SemiBold.ttf` | Pending Review | All templates (primary typeface heavy weight) | Google Fonts |
| FNT-003 | `CormorantGaramond-LightItalic.ttf` | Pending Review | All templates (attribution lines) | Google Fonts |
| FNT-004 | `DMSans-Light.ttf` | Pending Review | All templates (secondary typeface) | Google Fonts |
| FNT-005 | `DMSans-Regular.ttf` | Pending Review | All templates (slide numbers) | Google Fonts |

*Confirm exact file names against downloaded font packages before marking Approved.*
