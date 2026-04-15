# Asset Intake Protocol — @exponentialgrowthformula_
**Maintained by:** Asset Manager
**Last updated:** 2026-04-06
**Version:** 1.2
**Status:** Active

This protocol governs how every new asset enters the library. No asset is available to Publishing until it has completed every step of this process and its status in `/assets/asset-status-log.md` reads `Approved`. There are no exceptions.

---

## Who Submits Assets

Two parties submit assets for intake:

**Strategy Director** — Sources and submits raw background assets (images and video loops). The Strategy Director does not approve their own submissions. All Strategy Director submissions go through Designer review before the Asset Manager logs them as Approved.

**Designer** — Delivers completed production assets: built templates, brand elements (color swatches, exported references), and any other creative files produced during the design phase. Designer submissions come with an Asset Delivery Note.

The Asset Manager receives submissions from both parties and is the sole gatekeeper of `Approved` status.

---

## Step 1 — Submission by the Strategy Director (Background Assets)

### File Naming

Before placing files in the intake folder, the Strategy Director must name every file using the approved background naming convention from Brand Style Guide Section 9:

```
bg-[category-code]-[number]-[descriptor].[ext]
```

**Category codes:**
- `pdh` = Pre-Dawn Horizon
- `snl` = Shadowed Natural Landscape
- `det` = Dark Earth Texture
- `dfc` = Deep Forest / Canopy
- `dwr` = Dark Water Reflected Light
- `diw` = Dark Interior Warm Light

**Number:** Three-digit sequential number per category, starting at `001`. This number tracks approved assets only — rejected assets do not consume a number. The next number is always the count of currently approved assets in that category plus one. Files sort consecutively within each category folder with no gaps.

**Descriptor:** 2–4 word description of the specific image, hyphenated, lowercase. Examples: `mountain-amber`, `hillside-raking`, `forest-backlight`, `lake-dawn`, `lamp-dark`.

**Extension:** `.jpg` or `.png` for static images; `.mp4` or `.mov` for video loops.

**Full examples:**
- `bg-pdh-001-mountain-amber.jpg`
- `bg-snl-001-hillside-raking.jpg`
- `bg-dfc-001-forest-backlight.mp4`
- `bg-dwr-001-lake-dawn.mp4`
- `bg-diw-001-lamp-dark.jpg`

If a background does not clearly fit any defined category code, do not invent a new code. Hold the file and flag to the Designer before submission. The Designer determines the correct category or escalates to the Strategy Director if a new category is needed.

### Folder Placement

Place submitted background files in the intake staging area:

- Static images: `/assets/backgrounds/images/intake/`
- Video loops: `/assets/backgrounds/video-loops/intake/`

Do not place files directly into the approved subfolders. Files move to approved subfolders only after passing Designer review.

### Sourcing Information

No separate sourcing file is required. Source and attribution are logged directly in the `Source / Attribution` column of `/assets/asset-status-log.md` at the time of approval.

**For stock-sourced assets (Unsplash, Pexels, etc.):**
Log the platform and license. Example: `Unsplash — Free License`

**For AI-generated assets:**
Log the tool, model, style preset, and prompt version ID from `/assets/ai-prompt-library.md`. Example: `Leonardo.ai — Auto / Stock Photo — PDH-v3`

The warm light source is identified by the Designer during review and logged in the asset status log at that time. If the Strategy Director cannot identify any warm light source when examining an image prior to submission, do not submit it — the warm light source rule applies at the sourcing stage (Brand Style Guide Section 8.2 and 9).

---

## Step 2 — Submission by the Designer (Production Assets)

### What the Designer Delivers

The Designer delivers production assets after completing a content piece. These assets include:

- Completed post files (Carousel Reel exports, Static Post JPEGs, Story files, etc.)
- Built template files (new templates or updated versions)
- Brand elements (color swatches, exported reference files)

### Asset Delivery Note Requirement

Every Designer submission must be accompanied by a completed Asset Delivery Note (`asset-delivery-note-[NNN].md` from `/content-briefs/`). The Asset Manager does not begin intake on any Designer delivery that lacks an Asset Delivery Note. Return the package to the Designer and request the note before proceeding.

The Asset Delivery Note must include:
- Content Brief number the assets correspond to
- Complete list of files delivered (file names, formats, dimensions)
- Background used (file name, scene category, and named warm light source)
- Confirmation that all visual checks were completed (warm-dark test, safe zones, text colors, etc.)

### Folder Placement

The Designer places completed assets in:

- Post assets: `/assets/staging/` (the live staging folder — cleared after publish)
- Template files: `/assets/templates/` (with version suffix)
- Brand elements: `/assets/brand/` (appropriate subfolder)

---

## Step 3 — Asset Manager Intake Verification

Upon receiving a submission, the Asset Manager verifies the following before assigning any status beyond `Pending Review`.

### 3.1 Background Asset Review Checklist (Designer performs; Asset Manager confirms)

The Designer reviews all background assets against this checklist before approving them for the library. The Asset Manager confirms the checklist has been completed before logging `Approved`.

**1. Warm light source — mandatory gate**
Confirm that a warm light source is present and can be named specifically. "Warm tones" or "warm lighting" is not sufficient. The name must identify the type and location of the source: e.g., "pre-dawn horizon amber, lower third of frame" or "raking warm sidelight from left, occupying upper half." If the light source cannot be named this specifically, the background fails this check regardless of its other qualities.

**2. Warm-dark test**
The dominant tone of the background must fall in the brown-black to warm charcoal range (`--background-base` #1C1612 territory). Cool near-blacks, blue-blacks, or any background where the dominant cool-dark tone occupies more than 50% of the frame are rejected. Verify by eye. For borderline cases, apply the desaturation test: mentally desaturate the image and assess the dark tones in isolation. If they read as brown-grey, the image passes. If they read as blue-grey or neutral grey, reject. The desaturation test is the formal tiebreaker — do not approve a borderline case without applying it.

**3. Religious imagery check**
The background must contain no religious iconography, symbols, architecture specifically associated with a religious tradition, or imagery that could be read as devotional. This is a hard brand constraint — no judgment call, no context evaluation. If religious imagery is present in any form, reject.

**4. Safe zone compatibility**
The center third of the frame — the primary text placement zone — must be sufficiently low-detail and dark to hold text legibly. High-contrast visual elements, sharp foreground subjects, or bright patches directly in the text zone make the background incompatible with the template system. Assess against the 9:16 crop for Reel/Story templates and the 4:5 crop for Post templates separately, as a background may work in one crop and fail in the other.

**5. Compression quality**
Images must be free of visible compression artifacts (blocking, banding, pixelation). Video loops must be smooth without encoding artifacts. If the source file shows significant compression degradation, reject and request a higher-quality source.

**6. No man-made infrastructure**
The background must contain no clearly visible man-made structures, built elements, or urban infrastructure — no utility poles, wires, towers, domes, buildings, roads, fences, or architectural features of any kind. The brand aesthetic requires images that read as purely natural and cinematic.

Compositionally prominent man-made elements are an automatic rejection. Subtle, peripheral, or barely-noticeable elements (e.g., faint distant light scatter in a deep shadow zone that a casual viewer would not register on a phone screen) should be flagged for Strategy Director judgment rather than auto-rejected. The Strategy Director retains final visual authority on ambiguous cases. When in doubt, flag — do not auto-reject elements that require deliberate scrutiny to notice.

**7. Scene category fit**
Confirm the file name's category code matches the actual content. If the Strategy Director has miscategorized, correct the file name before storing and note the correction in the asset log.

### 3.2 Post Asset Verification (from Designer)

When verifying Designer-delivered post assets:

- Check that the file count in the delivery matches the Asset Delivery Note
- Check that file names follow the naming convention for the format (`cr-`, `sr-`, `sp-`, `cp-`, `st-` prefix, scene code, pillar code, sequential number)
- Check that dimensions are correct per the Platform Design Spec for each format
- Check that export format is correct (JPEG/PNG for static; MP4 for video)
- Confirm the Asset Delivery Note is attached and complete
- Confirm the warm light source is named in the Asset Delivery Note under Background description — if absent, return to the Designer before proceeding

### 3.3 Template Verification

When a new or updated template file is delivered:

- Confirm file naming follows `tpl-[format-code]-v[version].[ext]`
- Confirm a flattened JPEG preview file accompanies the native template file
- If this is an updated version, archive the previous version before storing the new one (see Section 6 — Version Control)
- Confirm the update was approved by the Strategy Director before accepting it into the active library

---

## Step 4 — Recording the Decision

### Approval

When an asset passes all applicable checks:

1. Assign the next consecutive approved-asset filename for that category (e.g., if 4 PDH images are already approved, the new file becomes `bg-pdh-005-[descriptor].jpg`).
2. Rename the file to its approved filename immediately.
3. Move the renamed file from the intake folder to its permanent approved location (see `/assets/asset-library-map.md` for folder paths). Do not leave approved files in the intake folder.
4. Update its row in `/assets/asset-status-log.md`:
   - Set `Approval Status` to `Approved`
   - Record the new approved filename
   - Fill in the named warm light source (for background assets)
   - Set `Date Added` to today's date
   - Confirm `Source / Attribution` is complete
5. Update the `Last updated` date at the top of the status log

### Rejection

When an asset fails any check:

1. Move the file immediately to the category-level rejected subfolder (e.g., `/assets/backgrounds/images/pdh/rejected/` for a PDH image, `/assets/backgrounds/images/dwr/rejected/` for a DWR image). Do not leave rejected files in the intake folder. Do not delete — rejected files are kept as a reference record.
2. Update its row in `/assets/asset-status-log.md`:
   - Set `Approval Status` to `Rejected`
   - Fill in `Rejection Reason` with a specific description of which check failed and why
3. Notify the source (Strategy Director or Designer) of the rejection with the specific reason. Use the same language entered in the log.
4. Do not block new submissions — the source may submit a replacement.

### Flagged for Strategy Director

When an asset passes some checks but contains an ambiguity that cannot be resolved by rule alone — a borderline warm-dark case, a man-made element that may or may not be disqualifying, a category assignment that is genuinely unclear — the Designer flags it for Strategy Director review rather than approving or rejecting.

1. Update the asset's row in `/assets/asset-status-log.md`:
   - Set `Approval Status` to `Flagged — Pending Strategy Director`
   - Fill in `Rejection Reason` with a precise description of the ambiguity and the specific question requiring human judgment
2. Leave the file in the intake folder — do not move it to approved or rejected until the Strategy Director decides
3. Notify the Strategy Director of the flag with the same description entered in the log
4. Turnaround expectation: the Strategy Director resolves flagged items before the next production batch begins. Flagged assets do not block other assets in the same batch from being approved or rejected.

Once the Strategy Director decides, update the log status to `Approved` or `Rejected` accordingly and process as per those sections above.

### Resubmission

A rejected asset may be resubmitted only if the rejection reason has been addressed. A new file name is not required if the content is the same asset (e.g., a re-exported version at higher quality). If the asset has been materially changed (different crop, different source image), treat it as a new submission with a new asset ID and file name.

---

## Step 5 — Turnaround Expectation

Background asset review (warm light source check, warm-dark test, religious imagery check, safe zone compatibility, compression quality): completed within the same working session in which assets are received. There is no queue for background review — this is a blocking gate for production.

Post asset verification (from Designer): completed within the same working session as delivery. Post assets should not sit in `Pending Review` while a scheduled publish approaches.

Template verification: completed within the same working session as delivery.

If the Asset Manager cannot complete review in the same session due to volume (e.g., a large batch submission in task 2C.5), flag the delay to the Strategy Director immediately with an estimated completion time.

---

## Step 6 — Version Control for Templates and Brand Documents

When the Designer delivers an updated template or brand document (Brand Style Guide, Platform Design Spec, Template Suite):

1. Locate the current active file in the library.
2. Rename it by appending the version number and date: e.g., `tpl-cr-v1-archived-2026-03-18.[ext]`
3. Move the renamed file to `/assets/templates/archive/` (for templates) or `/assets/brand/archive/` (for brand documents).
4. Store the new version file in the active location under its standard name.
5. Update the relevant rows in the asset status log.
6. Notify Publishing that a template update has been deployed so they reference the new version on all future posts.

Do not deploy template updates if they have not been approved by the Strategy Director. If a Designer delivers an updated template without evidence of Strategy Director approval, hold the file in the intake area and escalate to the Strategy Director before proceeding.

---

## Escalation Triggers

Route the following directly to the Strategy Director before proceeding:

- A background asset received from the Strategy Director that fails the religious imagery check — confirm rejection before returning the file
- A Designer-delivered asset that does not match the Content Brief's specifications — do not log it as Approved; hold it and escalate
- Any request from Publishing to release an asset that has not completed intake
- A template or Brand Style Guide update delivered by the Designer without documented Strategy Director approval
- Any asset that may violate Instagram platform policies (explicit content, copyright red flags, etc.)
- A submitted background that does not fit any defined scene category code — do not create new codes without Strategy Director and Designer approval

---

---

## Standard Designer Review Prompt

Use the following prompt verbatim when running the Designer agent to review a background asset intake batch. Update the file paths to match the actual batch contents.

```
You are running a background asset intake review. [N] images/videos have been submitted to the [category] intake folder and need your visual review before they can be approved into the asset library.

Read first:
- /brand/brand-style-guide.md — particularly Section 2 (Color System), Section 4 (Background System), and Section 9 (Asset Sourcing Brief)
- /assets/asset-intake-protocol.md — the full intake protocol and your review checklist

Images/videos to review (read each one visually):
- [list full file paths]

For each asset, apply the full Designer review checklist:
1. Warm light source — Is there an identifiable warm light source? Name it specifically (e.g., "horizon glow centre-left", "backlit canopy upper-right"). If no warm light source is present, reject.
2. Warm-dark test — Are the shadow/dark areas brown-black (pass) or grey/blue-black (fail)? For borderline cases, apply the desaturation test: assess the dark tones in isolation. Brown-grey = pass. Blue-grey or neutral grey = reject.
3. Religious imagery check — Any religious symbols, iconography, or imagery? If yes, reject.
4. No man-made infrastructure — Any clearly visible structures, utility poles, wires, buildings, domes, or built elements? Prominent man-made elements are an automatic rejection. Subtle, peripheral, or barely-noticeable elements should be flagged for Strategy Director judgment rather than auto-rejected.
5. Safe zone text viability — Is there a clean enough area within the safe zones (150px top, 250px bottom, 100px sides on a 1080×1920 canvas) where text can sit without competing with high-contrast or distracting elements?
6. Compression/quality — Is the asset sharp and free of visible compression artefacts?
7. Scene category fit — Does the category code in the file name match the actual content? If not, flag the correct category.

Deliver your results as a written review with a clear verdict for each asset:
- APPROVED — passes all checks. Name the warm light source explicitly.
- REJECTED — fails one or more checks. State the specific check that failed and why.
- FLAGGED FOR STRATEGY DIRECTOR — passes most checks but contains a genuine ambiguity that requires human judgment. Describe the ambiguity precisely so the Strategy Director can make an informed call without needing additional context.

After your review, update /assets/asset-status-log.md to record each asset with its verdict, warm light source (if approved or flagged), and rejection reason (if rejected). For approved assets, log the source in the Source/Attribution column — the caller will provide sourcing details (platform, license, and prompt ID if AI-generated).

Note any gaps or ambiguities in the protocol itself at the end of your report.
```

---

*Protocol version 1.1 — 2026-03-26. Changes to this protocol require Strategy Director approval.*
