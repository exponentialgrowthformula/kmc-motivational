# AI Prompt Library — @exponentialgrowthformula_
**Maintained by:** Designer
**Last updated:** 2026-04-07
**Status:** Active

This file is the versioned record of all AI generation prompts used to produce background assets for the library. Each prompt is assigned an ID in the format `[SCENE-CODE]-v[N]`. The asset-status-log.md references prompt IDs in its Source/Attribution column for all AI-generated assets.

When a prompt is refined, increment the version number and add a new entry. Do not overwrite or delete previous versions — they are the audit trail for what produced each approved asset.

---

## General Prompt Principles

Lessons learned across all category prompt development. Read before writing or refining any prompt.

### Text-to-Image (fresh generation)

- **Compositional logic beats exclusion language.** Telling the model what the scene structure IS (e.g., "camera at ground level, flat foreground terrain") eliminates failure modes more reliably than telling it what NOT to include. Exclusion lists alone are insufficient — the model needs a spatial structure that makes the unwanted element impossible, not just forbidden.
- **Autumn foliage is the reliable warm-dark fix for forest categories.** Autumn tones convert shadow areas to warm brown throughout. Summer/green foliage defaults to cool green-dark shadows — avoid unless the prompt explicitly overrides ambient shadow temperature.
- **Water and night sky default to cool-dark.** Any water scene requires explicit warm-dark sky language AND full-surface water warmth instruction. "Warm surroundings" alone is too abstract. Name the specific zone and its required colour temperature.
- **"Remote wilderness" is a reliable context signal.** Placing it early in the prompt steers the model away from populated, industrialised, or developed scenes without requiring an exhaustive exclusion list.
- **Exhaustive exclusion lists are needed for waterscapes.** Water scenes attract man-made light contamination (harbour lights, dock lights, industrial floodlighting) that structure-based exclusions miss. Name every artificial light type explicitly.
- **Mood language causes illustration drift.** Words like "mysterious," "ethereal," "dramatic," "magical" pull the model toward painterly/fantasy training data. Use physical descriptions instead (density, position, texture, light behaviour).

### img2img (variation from approved source)

- **Describe physical properties, not emotional qualities.** Edit prompts should describe what physically changes in the scene (density, position, texture, light direction). Mood language ("more mysterious," "more atmospheric") reliably causes illustration drift.
- **"Glowing" mist = illustration.** Real mist catches and diffuses light — it does not glow. Use "mist softly diffusing [light source]" instead of "mist glowing."
- **Keep edit prompts short.** You are nudging an existing image, not rebuilding a scene. 2–4 specific changes maximum. Long edit prompts override the source image rather than modifying it.
- **Image strength 0.5–0.6 for subtle variation.** Lower strength (0.3–0.4) gives the model more freedom and increases drift risk. For brand-safe variation that stays close to an approved image, use 0.5–0.6.
- **Generate 2–3 outputs before adjusting.** Run the same edit prompt multiple times at the same strength to see the natural range of variation before changing the prompt.
- **Add "photorealistic photograph" to anchor.** Including this at the end of any edit prompt counters illustration drift, especially when the modification involves atmospheric effects (mist, light, fog).
- **Fix the seed once you have an output you want to refine.** Note the seed of a near-approved output and fix it before making further prompt adjustments — this isolates what the prompt change does without randomness changing other elements.

---

## How to Reference in Asset Status Log

Format: `Leonardo.ai — [Model] / [Style Preset] — [Prompt ID]`

Example: `Leonardo.ai — Auto / Stock Photo — PDH-v3`

---

## PDH — Pre-Dawn Horizon

### PDH-v1
**Status:** Superseded by PDH-v2
**Produced:** 2026-04-06
**Result:** Two images generated. One discarded (city lights in valley floor). One approved (BGI-PDH-014 — deep amber-red pervasive sky). Approved image had limited template compatibility due to luminous mid-frame zone.

**Issues identified:**
- Glow radiated upward through entire sky, making mid-frame too luminous for body-heavy templates
- Elevated camera vantage point caused model to populate valley floor with city lights

```
cinematic pre-dawn landscape, warm amber-orange horizon glow radiating upward into dark sky, deep warm brown-black darkness occupying upper two-thirds of frame, no people, no man-made structures, layered mountain or hill silhouettes, text-safe dark zone in upper half, warm cinematic mood, photorealistic, 9:16 vertical
```

---

### PDH-v2
**Status:** Superseded by PDH-v3
**Produced:** 2026-04-06
**Result:** One image generated. Rejected — city lights still visible in valley floor. Mid-frame luminosity issue was fixed (glow correctly confined to lower quarter). City lights exclusion language alone was insufficient.

**Issues identified:**
- Explicit city/settlement lights exclusion language did not suppress the failure — the model's elevated vantage point training association overrode the instruction
- Root cause: "layered mountain silhouettes" implies elevated camera position overlooking a valley

```
cinematic pre-dawn landscape, warm amber-orange horizon glow confined to the lower quarter of the frame, horizon line visible as a bright amber-orange band just above mountain or hill silhouettes, sky above the horizon band darkening rapidly to deep warm brown-black, upper three-quarters of frame predominantly dark and texturally rich with warm brown-dark clouds, no people, no man-made structures, no city lights, no settlement lights, no artificial light sources of any kind except the natural horizon glow, remote wilderness, layered mountain or hill silhouettes in deep silhouette, flat near-black foreground, text-safe dark zone covering the upper sixty percent of frame, warm cinematic mood, photorealistic, 9:16 vertical
```

---

### PDH-v3
**Status:** Active — confirmed working
**Produced:** 2026-04-06
**Result:** One image generated. Approved as BGI-PDH-016. Strong warm-dark performance. Excellent text-safe zone in upper three-quarters. Ground-level camera position eliminated city lights failure mode. Full template compatibility.

**Key changes from PDH-v2:**
- Ground-level camera position specified explicitly — eliminates the elevated vantage/valley association
- "No valley below the camera" added as a direct constraint
- Foreground described as terrain at camera elevation (flat dark earth, rocky ground, low scrub) — removes the compositional space where city lights had been appearing
- "No glowing windows, no vehicle lights" added to close additional artificial light pathways
- "Remote wilderness" retained as scene context signal

**Confirmed working. Use this as the base for all future PDH AI generation.**

```
cinematic pre-dawn landscape, warm amber-orange horizon glow confined to the lower quarter of the frame, horizon line visible as a bright amber-orange band just above the near-horizon silhouette of a low hill or rolling terrain, sky above the horizon band darkening rapidly to deep warm brown-black, upper three-quarters of frame predominantly dark and texturally rich with warm brown-dark clouds, camera positioned at ground level or low hillside level looking toward the horizon, no elevated vantage point, no valley below the camera, terrain in foreground is flat dark earth, rocky ground, or low scrub at the same elevation as the camera, no people, no man-made structures, no roads, no fences, no utility poles, no buildings, no lights of any kind in the foreground or middle ground, no glowing windows, no vehicle lights, no settlement lights, no city lights, only the natural amber-orange horizon glow as a light source, remote wilderness, simple near-flat foreground in deep shadow, text-safe dark zone covering the upper sixty percent of frame, warm cinematic mood, photorealistic, 9:16 vertical
```

**Optional negative prompt (if Leonardo allows separate negative prompt field):**
```
city, town, village, settlement, lights, urban, suburban, valley, elevated view, aerial, bird's eye
```

---

## DFC — Deep Forest / Canopy

### DFC-v1
**Status:** Active — confirmed working
**Produced:** 2026-04-06
**Result:** One image generated. Approved as BGI-DFC-009. Strong warm-dark pass — zero green cast in shadow zones. Safe zone viable with text placed above the amber halo in the dark canopy mass. Full template compatibility.

**Known DFC failure modes this prompt avoids:**
- Green-dark shadows — addressed by specifying "dark warm brown-black shadows" and "autumn foliage with brown and gold tones"
- Centre-frame subject blocking text zone — addressed by "text-safe dark zone at centre-frame"

**Production note:** Place anchor text above the brightest point of the amber halo, in the dark canopy mass. Avoid anchoring directly over the light star-burst.

```
cinematic deep forest interior, warm amber backlight filtering through dark tree canopy, autumn foliage with brown and gold tones, dark warm brown-black shadows, volumetric light shafts in amber-orange, no people, text-safe dark zone at centre-frame, photorealistic, 9:16 vertical
```

---

### DFC-v2
**Status:** Active — confirmed working
**Based on:** DFC-v1 with subtle compositional and atmospheric variation
**Intent:** Introduce diagonal raking light from one side (vs. centred halo), ground mist for depth, and slightly elevated camera angle — producing a different compositional feel while holding full brand compliance.

**Key changes from DFC-v1:**
- Light rakes from camera-left rather than directly behind — creates diagonal shafts vs. symmetric halo
- Ground mist in lower third — adds atmospheric depth, differentiates floor treatment
- "Slightly elevated looking upward" — adds canopy presence without risking the blue-sky failure mode of full upward shots
- "Text-safe dark zone at upper-centre frame" — encourages darker upper portion for cleaner text placement
- "Deciduous tree trunks" — reinforces autumn-compatible species, steers away from green conifers

```
cinematic deep forest interior, warm amber and copper backlight raking from camera-left through dark deciduous tree trunks, autumn foliage with brown and gold tones, dark warm brown-black shadows throughout, subtle ground mist catching amber-orange light in lower third, volumetric light shafts in amber-orange diffusing through mist, camera angle slightly elevated looking upward through canopy, no people, text-safe dark zone at upper-centre frame, photorealistic, 9:16 vertical
```

**Result:** Approved as BGI-DFC-010, filed as bg-dfc-005-raking-light-forest.jpg. Diagonal raking light from camera-left successfully differentiates from DFC-v1's centred radial composition. Ground mist in lower third adds atmospheric depth. Full template compatibility. Strong warm-dark pass.

---

### DFC-v3
**Status:** Active — confirmed working
**Based on:** New compositional structure — vertical descending light shaft through conifer canopy gap
**Intent:** Introduce a third distinct light direction (vertical downward beam vs. centred radial in DFC-v1 and diagonal raking in DFC-v2). Uses conifer forest instead of deciduous to expand visual vocabulary while testing warm-dark compliance through bark/needle warmth rather than autumn foliage.

**Key differences from DFC-v1 and DFC-v2:**
- Single vertical descending light shaft — neither centred radial nor diagonal
- Conifer forest — no autumn foliage, relies on warm bark tones and shadow warmth
- No sun disc visible, no sky visible — light source is implied, prevents safe zone failure
- "Zero green tones in any shadow zone" included explicitly to counter the DFC green-dark failure mode in a non-autumn setting

```
cinematic dark conifer forest interior, single concentrated shaft of warm amber-orange light descending vertically from a narrow gap in the overhead canopy, column of amber light illuminating fine particles and mist in the air, dark brown-black tree trunks in foreground and middle-ground silhouetted against the warm light column, forest floor in deep warm shadow with fallen brown needles and bark, no autumn foliage, dark warm brown-black ambient forest tone throughout all shadow areas, zero green tones in any shadow zone, no sun disc visible, no sky visible, text-safe dark zone at upper-centre frame above the light shaft entry point, photorealistic, cinematic, 9:16 vertical, no people, no man-made structures
```

**Result:** Approved as BGI-DFC-011, filed as bg-dfc-006-vertical-shaft.jpg. Vertical descending shaft confirmed as a distinct third compositional type. Warm-dark test strong pass — zero green cast without autumn foliage reliance. The "zero green tones in any shadow zone" instruction confirmed effective for conifer/non-autumn settings. Full template compatibility. Note: source file is PNG — convert to JPG at 95+ quality before filing.

---

## SNL — Shadowed Natural Landscape

### SNL-v1
**Status:** Active — confirmed working
**Produced:** 2026-04-07
**Intent:** Open moorland with warm amber-orange sidelight raking from camera-right through a gap in a dark cloud mass. Primarily shadowed terrain with a single warm light stripe across the mid-ground heathland. First SNL category image.

**Key failure modes this prompt addresses:**
- Cool cloud mass — explicit "deep warm brown-dark cloud texture, strongly warm undertone, not cool grey, not blue-black" language
- Cool terrain shadows — "all shadow zones throughout the frame warm brown-dark with amber undertone" specified explicitly
- Man-made structures in highland landscape — fences, dry stone walls, utility poles, roads, paths all named in exclusions
- Elevated vantage / valley / settlement — "camera positioned at ground level, no elevated vantage, no valley below the camera"

```
cinematic open moorland, warm amber-orange sidelight raking from camera-right through a narrow gap in a low dark cloud mass, wide stripe of warm amber light falling across dark heathland terrain in the mid-ground, dark brown heather and amber-gold dry grass catching warm sidelight in the illuminated stripe, deep warm brown-dark shadow zones across the majority of the terrain outside the light stripe, dark cloud mass occupying upper two-thirds of frame — deep warm brown-dark cloud texture, strongly warm undertone, not cool grey, not blue-black, not neutral dark, all shadow zones throughout the frame warm brown-dark with amber undertone, camera positioned at ground level looking across open flat moorland, no elevated vantage, no valley below the camera, open flat terrain at camera elevation, no people, no man-made structures, no fences, no dry stone walls, no utility poles, no roads, no paths, no buildings, no lights of any kind, remote wilderness, text-safe dark zone in upper half of frame, photorealistic, 9:16 vertical
```

**Optional negative prompt:**
```
city, town, village, fence, wall, road, path, trail, power line, cool, blue, grey
```

**Result:** Approved as BGI-SNL-001, filed as bg-snl-001-moorland-sidelight.jpg. All 8 intake checks passed on first generation. Both highest-risk elements executed correctly: (1) cloud mass is warm brown-dark throughout — no cool grey or blue-black cast confirmed via desaturation assessment; (2) terrain shadow zones are warm brown-black with no cool tone. Man-made infrastructure clean pass — horizon line clear, no fences, no walls, no paths anywhere in the frame. Photorealism strong pass — cloud structure shows organic density variation, heathland terrain shows genuine surface micro-variation, sidelight falls with photographic selectivity. Full template suite viable. Text placement: keep all text within upper 50–52% of frame; illuminated stripe begins at approximately 55% vertical. Confirmed working. Use as the base for all future SNL AI generation.

---

### SNL-v2
**Status:** Active — confirmed working
**Produced:** 2026-04-07
**Result:** Approved as BGI-SNL-002, filed as bg-snl-002-highland-plateau.png. Diffuse overcast warmth held without a directional light source — the SNL-v2 design question answered positively on first generation. Cloud layer warm brown-dark throughout, no cool grey in any shadow zone. Full template suite compatible. Quieter/introspective compositional feel vs. SNL-v1's forward-momentum sidelight.
**Intent:** Different compositional type from SNL-v1. Rocky highland plateau under overcast diffuse light — no directional sidelight rake. Large dark boulders as foreground anchor, flat ambient warm-dark light washing the terrain, deep warm-dark cloud cover filling the upper frame. Tests whether the SNL warm-dark brand standard can be met without a defined directional light source.

**Key differences from SNL-v1:**
- Diffuse ambient overcast light vs. directional sidelight rake
- Boulders/flat stone as foreground anchor vs. heather/grass
- No defined light break or stripe — uniform warm-dark ambient throughout
- Sky is dominant upper element (deep overcast cloud layer) vs. cloud with visible gap

```
cinematic rocky highland plateau, large dark amber-brown boulders and flat stone in the foreground catching faint warm diffuse light, open highland terrain stretching toward a dark horizon, low overcast sky filling the upper half of the frame with deep warm brown-dark cloud layer — warm brown undertone throughout, not cool grey, not blue-black, diffuse warm amber light filtering through the cloud cover illuminating the stone terrain in a low flat wash, all terrain shadows warm brown-dark, no cool blue or grey tones in any shadow zone, camera positioned at ground level among the rocks looking across the plateau toward the horizon, no elevated vantage, no valley below camera, no people, no man-made structures, no fences, no walls, no roads, no paths, no buildings, no lights of any kind, remote wilderness highland, text-safe dark zone in upper two-thirds of frame, photorealistic, 9:16 vertical
```

**Optional negative prompt:**
```
city, town, village, fence, wall, road, path, cool, blue, grey, green
```


---

## DET — Dark Earth Texture

*Prompts to be developed when DET AI generation begins.*

---

## DWR — Dark Water Reflected Light

### DWR-v1
**Status:** Superseded by DWR-v2
**Produced:** 2026-04-06
**Result:** One image generated. Rejected (BGI-DWR-001) — warm-dark test failure. Cool near-black sky and cool blue-grey water occupied ~75% of frame area. The amber glow was strong and cinematic but confined to a narrow horizontal mid-frame strip. The prompt's "dark warm brown-black surroundings" instruction was too abstract to override the model's physically accurate cool-dark defaults for water and night sky.

**Root cause:** Water and night sky default to cool-dark in photorealistic generation. The DWR category requires actively fighting this with specific warm-dark sky and water instructions, not just a general warmth request.

```
cinematic dark water surface at dawn, warm amber-gold light reflecting across still water, dark warm brown-black surroundings, no people, no man-made structures, atmospheric mist, text-safe dark zone in upper half, photorealistic, 9:16 vertical
```

---

### DWR-v2
**Status:** Superseded by DWR-v3
**Produced:** 2026-04-06
**Result:** One image generated. Rejected (BGI-DWR-002). Warm-dark test PASSED — the sky fix worked. New failure: prominent row of industrial/harbour lights visible along the horizon glow zone, with full vertical reflections down the water surface. A building silhouette also visible on the far bank. Auto-reject on Check 6.

**What this solved:** Warm-dark failure from v1 fully corrected. Sky reads as deep warm brown-dark throughout upper half. Water surface carries warmth even away from the glow zone.

**New failure mode:** DWR scene type is high-risk for artificial light contamination on the far bank. The model draws on training data of real waterscapes, which includes industrialised harbours and working shorelines. Explicit structure exclusions (docks, bridges, boats) were present but artificial light sources at the horizon were not excluded.

**Key changes from DWR-v1:**
- "upper half of frame is deep warm brown-dark sky" — directly names the sky colour requirement
- Foreground reeds/vegetation at water's edge — adds compositional depth and a warm silhouette layer
- "long horizontal bands" — steers toward signature DWR reflection pattern
- Explicit infrastructure exclusions (docks, bridges, boats) added
- "remote wilderness" context signal

```
cinematic pre-dawn river or lake shoreline, warm amber-orange pre-dawn glow reflecting in long horizontal bands across a dark still water surface, warm amber light source off-frame at horizon, dark warm brown-black reeds or natural vegetation silhouetted in foreground at water's edge, atmospheric mist hovering low over water surface catching amber light, upper half of frame is deep warm brown-dark sky, text-safe dark zone in upper two-thirds of frame, no people, no man-made structures, no docks, no bridges, no boats, no buildings, no lights except the natural horizon glow reflected in water, remote wilderness, photorealistic, cinematic, 9:16 vertical
```

---

### DWR-v3
**Status:** Active — confirmed working
**Produced:** 2026-04-06
**Intent:** Retains DWR-v2's working warm-dark language. Closes the artificial-light-at-horizon gap with exhaustive light exclusion list and explicit far-bank description (natural treeline only, no structures or rooflines of any kind).

**Key additions over DWR-v2:**
- "remote wilderness location with no human habitation visible anywhere in the frame" — scene context set upfront
- "the ONLY light source in the scene is this natural pre-dawn glow" — asserts light source singularity explicitly
- Exhaustive artificial light exclusion: point-source lights, evenly-spaced clusters, industrial, harbour, dock, facility, settlement, city glow
- Far bank described explicitly: "low natural treeline or open wilderness horizon with no structures of any kind — no rooflines, no warehouse silhouettes, no dock buildings, no piers, no built forms of any shape"
- All DWR-v2 warm-dark language retained verbatim

**Result:** Approved as BGI-DWR-003, filed as bg-dwr-001-amber-mist-shore.jpg. Both prior failure modes fixed. Full template compatibility. Clean natural treeline on far bank, zero artificial lights.

```
cinematic pre-dawn river or lake shoreline, remote wilderness location with no human habitation visible anywhere in the frame, warm amber-orange pre-dawn glow reflecting in long horizontal bands across a dark still water surface, warm amber light source off-frame at horizon — the ONLY light source in the scene is this natural pre-dawn glow — no artificial lights of any kind anywhere in the frame, no point-source lights, no evenly-spaced light clusters, no industrial lighting, no harbour lights, no dock lights, no facility lights, no settlement lights, no distant city glow, no man-made light of any description, dark warm brown-black reeds or natural vegetation silhouetted in foreground at water's edge, atmospheric mist hovering low over water surface catching amber light, upper half of frame is deep warm brown-dark sky with strong amber-brown undertone — not blue-black, not grey-black, not cool — explicitly warm brown-dark, the far shoreline is a low natural treeline or open wilderness horizon with no structures of any kind — no rooflines, no warehouse silhouettes, no dock buildings, no piers, no built forms of any shape on the horizon, the entire opposite bank is natural undeveloped land, text-safe dark zone in upper two-thirds of frame, no people, no man-made structures, no docks, no bridges, no boats, no buildings, remote wilderness, photorealistic, cinematic, 9:16 vertical
```

---

### DWR-v4
**Status:** Active — confirmed working
**Produced:** 2026-04-07
**Intent:** Third compositional type for DWR — rocky/stone shoreline instead of reeds, camera at water level, wider open water expanse, visible solar disc at horizon. Differentiates from the reeds/mist compositions of DWR-v1 through DWR-v3.

**Key changes from DWR-v3:**
- Rocky/stone foreground instead of reeds or vegetation
- Camera positioned very low at water level — emphasises water expanse
- Open water mid-ground — no vegetation interrupting the reflection zone
- Visible solar disc at horizon rather than off-frame ambient glow
- Explicit sky warmth language ("deep amber-brown sky... explicitly deep warm amber-brown dark sky") — added to counter Flux's tendency to land at the cooler end of the warm-dark range

**Result:** Approved as BGI-DWR-006, filed as bg-dwr-003-rocky-shore-dawn.jpg. Full template compatibility. Rocky shoreline and open water expanse clearly differentiated from DWR-v3 composition. Strong warm-dark pass.

**Production note:** Solar disc sits at approximately 600–700px vertical on a 1920px canvas — favour upper-centre text placement (anchor line in 350–600px zone). Disc works as a visual anchor below the text block.

```
cinematic pre-dawn lake or river shoreline, remote wilderness location with no human habitation visible anywhere in the frame, camera positioned very low at water level looking across a wide open expanse of dark still water, warm amber-orange pre-dawn glow reflecting as a broad luminous column across the full centre of the water surface from horizon to foreground, deep amber-brown rocks and dark wet stone in the foreground at the water's edge catching faint warm reflected light, no reeds, no vegetation in the foreground, open rocky shoreline, upper half of frame is deep amber-brown sky with strong warm undertone — not blue-black, not grey-black, not neutral — explicitly deep warm amber-brown dark sky, the far shoreline is a low natural treeline or open wilderness horizon with no structures of any kind, no rooflines, no built forms of any shape, no artificial lights of any kind — no point-source lights, no harbour lights, no dock lights, no industrial lighting, no settlement lights, no distant city glow, the ONLY light source is the natural pre-dawn horizon glow, atmospheric mist hovering low over the water surface softly diffusing the amber light, text-safe dark zone in upper two-thirds of frame, no people, no man-made structures, no docks, no bridges, no boats, no buildings, remote wilderness, photorealistic, cinematic, 9:16 vertical
```

---

## DIW — Dark Interior Warm Light

*Prompts to be developed when DIW AI generation begins.*

---

## Kontext Editing (Flux)

Flux Kontext is a targeted image editing tool accessible directly via the Edit button on any Flux-generated image. It differs from Leonardo img2img in that it enforces targeted edit boundaries more precisely — structural elements outside the edit zone are faithfully preserved.

### How to Reference in Asset Status Log

Format: `Flux (bfl.ai) Kontext edit of [source filename] — [source prompt ID] base — Commercial use confirmed`

### Kontext Key Rules

- **Describe the specific targeted change only.** Kontext is editing one element of an existing image. Describe what physically changes in that element (e.g., "solar disc softened into a broader diffuse ambient glow spreading across the full sky width"). Do not re-describe the entire scene.
- **Structural elements outside the edit zone are preserved.** You do not need to instruct Kontext to keep the rocky shoreline, treeline, or water geometry — it will respect them. Only describe what changes.
- **Characteristic edit-zone smoothing.** Kontext slightly smooths the area it modifies. This is acceptable for atmospheric elements (sky, glow, mist, fog). Warrants closer scrutiny if the edit zone borders a high-texture foreground element (rocks, bark, close-up water surface).
- **End with "photorealistic photograph"** to counter any drift in the edit zone.
- **Editing can improve template compatibility.** Check whether the edit has beneficial side effects — e.g., removing a bright focal point can open text placement zones that were previously constrained.

### Confirmed Kontext Edit (DWR-v4 source)

**Edit:** Solar disc → broader diffuse pre-dawn ambient glow
**Source:** bg-dwr-003-rocky-shore-dawn.jpg (BGI-DWR-006, DWR-v4)
**Result:** Approved as BGI-DWR-007, filed as bg-dwr-004-rocky-shore-glow.jpg. Disc replaced cleanly. Photorealism held. Edit opened full upper two-thirds for text placement — improved template flexibility over source.

```
the bright solar disc at the horizon softened into a broader diffuse amber-orange glow, light spreading more widely across the sky and water surface in horizontal bands rather than a concentrated disc, rocky shoreline and water surface unchanged, deep warm brown-dark sky unchanged, photorealistic photograph
```

---

*Library initialized 2026-04-06. Add new prompt versions as they are developed and tested. Never delete or overwrite existing entries.*
