# Session 004
**Date:** 2026-04-07
**Phase coverage:** Phase 2 — 2C.5 continued (DWR category expansion; Flux tool evaluation; Kontext editing)
**Session type:** Asset sourcing continuation + tool evaluation + protocol improvements

---

## Narrative Summary

This session opened by closing the one loose end from session 3: the rejected DWR img2img file (BGI-DWR-004) was moved to the DWR rejected folder and the corrected img2img prompt was confirmed ready for a future run.

The main question entering the session was whether to test Flux (Black Forest Labs) as a parallel tool to Leonardo. A web search confirmed Flux as a 2026 top-tier photorealism contender with free commercial rights. Adobe Firefly was also evaluated — viable but the free tier produces watermarked images, requiring $5/month for clean commercial outputs. Flux was adopted immediately and tested with the existing confirmed DWR-v3 prompt.

The Flux DWR-v3 output (BGI-DWR-005) was approved on first attempt. The Designer's comparison noted Flux matched Leonardo on photorealism and marginally exceeded it on organic naturalistic detail — treeline irregularity, water surface micro-variation, mist volume. One characteristic to manage: Flux DWR outputs tend to land at the cooler end of the acceptable warm-dark range. Future Flux DWR prompts should include an explicit sky warmth push.

A new compositional type — DWR-v4, rocky shoreline with open water and a visible solar disc — was developed and tested to address the similarity between the first two approved DWR images. BGI-DWR-006 approved first attempt. Full compositional differentiation achieved. A production note was added to the status log: the solar disc constrains text placement to the upper band.

Flux Kontext editing was then discovered during this session. Flux's built-in Edit button on any generated image loads it into a Kontext-powered edit interface — no separate tool or technical setup required. An edit of BGI-DWR-006 targeting the solar disc (replace with diffuse ambient glow) produced BGI-DWR-007, approved first attempt. Kontext held photorealism with high source fidelity. Notably, the disc removal opened the full upper two-thirds for text, improving template compatibility over the source image.

A protocol improvement was also made: the "Rejection Reason" column in the asset status log was renamed to "Notes" — a general field covering rejection reasons for rejected assets and production guidance for approved ones. Production notes from prior Designer reviews that had not been formally documented were backfilled.

At session end: DWR library at 4 approved images across two distinct compositional types. Flux confirmed as a viable tool alongside Leonardo. Kontext confirmed for targeted atmospheric edits. Next session: begin sourcing for SNL, DET, or DIW categories.

---

## Structured Log

### Session Opening — Loose End from Session 3

**Action:** Filed BGI-DWR-004 (rejected Leonardo img2img) from DWR intake to `/assets/backgrounds/images/dwr/rejected/`.

**Corrected img2img prompt:** Documented and ready. Image strength 0.55, physical-property language only, "mist softly diffusing" not "glowing mist", "photorealistic photograph" anchor. See ai-prompt-library.md img2img section.

---

### AI Tool Evaluation — Flux

**Research method:** Web search — AI image generation tools with free tiers, 2026.

**Tools evaluated:**

| Tool | Decision | Reason |
|---|---|---|
| Flux (Black Forest Labs, bfl.ai) | Adopted | Top photorealism ranking 2026, free tier with commercial rights, FLUX.1 [schnell] is free commercial model |
| Adobe Firefly | Deferred | 25 free credits/month but watermarked — $5/month required for clean commercial outputs |
| Microsoft Designer | Not adopted | Commercial terms less explicit; 15 fast/day then unlimited slow |
| Leonardo.ai | Retained | Already in use, confirmed working |

**Commercial use confirmed:** Strategy Director confirmed Flux free-tier images cleared for social media use.

**Access:** [bfl.ai](https://bfl.ai) — official site. Text-to-image and Kontext editing available in-browser.

---

### DWR Expansion — BGI-DWR-005 (Flux DWR-v3)

**Prompt:** DWR-v3 (same as bg-dwr-001-amber-mist-shore.jpg)
**Tool:** Flux text-to-image
**Result:** Approved first attempt — filed as bg-dwr-002-dawn-mist-reeds.jpg

**Flux vs. Leonardo comparison (Designer review):**
- Flux matched Leonardo on photorealism; marginally better on organic naturalistic detail
- Flux sky saturation cooler than Leonardo — still passes warm-dark test but sits at the lower boundary
- Future Flux DWR prompts: add explicit sky warmth push ("deep amber-brown sky, strongly warm — not neutral dark")

---

### DWR Expansion — DWR-v4 Prompt + BGI-DWR-006

**Intent:** Third compositional type — differentiate from both existing reeds/mist compositions.

**Key changes from DWR-v3:**
- Rocky/stone foreground instead of reeds
- Camera at water level — emphasises open water expanse
- Visible solar disc at horizon (not off-frame ambient)
- Explicit sky warmth language added for Flux

**Tool:** Flux text-to-image
**Result:** Approved first attempt — filed as bg-dwr-003-rocky-shore-dawn.jpg. Full template compatibility with production note.

**Production note (logged in Notes column):** Solar disc at centre-frame (~600–700px vertical on 1920px canvas) — favour upper-centre text placement (350–600px zone). Disc becomes visual anchor below text.

**Prompt archived:** DWR-v4 in `/assets/ai-prompt-library.md`.

---

### DWR Expansion — Flux Kontext Edit + BGI-DWR-007

**Source:** bg-dwr-003-rocky-shore-dawn.jpg (BGI-DWR-006)
**Tool:** Flux Kontext — accessed via Edit button directly on the generated image in Flux. Loads source image into edit interface. No separate setup required.
**Edit intent:** Replace solar disc with broader diffuse ambient pre-dawn glow; preserve rocky shoreline and water geometry

**Edit prompt:**
```
the bright solar disc at the horizon softened into a broader diffuse amber-orange glow, light spreading more widely across the sky and water surface in horizontal bands rather than a concentrated disc, rocky shoreline and water surface unchanged, deep warm brown-dark sky unchanged, photorealistic photograph
```

**Result:** Approved first attempt — filed as bg-dwr-004-rocky-shore-glow.jpg.

**Kontext assessment (Designer review):**

| Characteristic | Finding |
|---|---|
| Photorealism | Held — structural elements preserved with high fidelity |
| Edit boundary precision | High — rocky shoreline, treeline, water geometry all undisturbed |
| Edit-zone smoothing | Present but acceptable for atmospheric edit area |
| Template compatibility | Improved over source — disc removal opened full upper two-thirds |

**Best use cases for Kontext:** Sky warmth tuning, glow character adjustments, mist density corrections, atmospheric zone modifications. Closer scrutiny warranted if edit zone borders high-texture foreground elements.

**Kontext vs. Leonardo img2img:** Kontext enforces targeted edit boundaries more precisely. Lower structural drift risk outside the edit zone. Smoothing artifact in edit zone is the known tradeoff. For atmospheric edits, Kontext is preferred.

---

### Protocol Improvement — Notes Column

**Change:** "Rejection Reason" column in `/assets/asset-status-log.md` renamed to "Notes".

**Scope:** General notes field for all assets. Rejection reasons for rejected assets; production guidance for approved assets.

**Production notes backfilled at session end:**

| Asset | Note added |
|---|---|
| BGI-DFC-009 (bg-dfc-004-amber-backlight-forest.jpg) | Place anchor text above amber halo starburst, in dark canopy mass — avoid anchoring directly over the light star-burst |
| BGI-DWR-005 (bg-dwr-002-dawn-mist-reeds.jpg) | Upper third of frame is preferred anchor line zone — dark featureless sky gives cleanest text placement |
| BGI-PDH-017 (bg-pdh-007-amber-sky-wide.jpg) | Luminous mid-frame zone limits template compatibility — body/cover templates not viable; hook, CTA, reel, quote templates only |
| BGI-DWR-006 (bg-dwr-003-rocky-shore-dawn.jpg) | Solar disc text placement constraint — added at time of review |

---

### Asset Library Status at Session End

| Category | Images Approved | Video Loops Approved | Notes |
|---|---|---|---|
| pdh | 7 | 2 | 5 stock + 2 AI (Leonardo) |
| dfc | 5 | 0 | 3 stock + 2 AI (Leonardo) |
| snl | 0 | 0 | Not yet sourced |
| det | 0 | 0 | Not yet sourced |
| dwr | 4 | 0 | 1 Leonardo + 2 Flux text-to-image + 1 Flux Kontext edit |
| diw | 0 | 0 | Not yet sourced |

---

## Open Items Entering Next Session

| Item | Owner | Context |
|---|---|---|
| SNL, DET, DIW sourcing | SD | No assets yet — priority for next session. Develop prompts and generate. |
| DFC-v3 prompt test | SD | Vertical descending light shaft, conifer forest — prompt written in ai-prompt-library.md, not yet tested |
| Leonardo DWR img2img corrected variation | SD | Optional — DWR library is adequate. Corrected prompt in ai-prompt-library.md if desired. |
| Phase 3 parallel start | Orchestrator | Phase 2 gate deferred; Phase 3 can begin while sourcing continues |

---

## For the Product

- **Test new tools with confirmed-working prompts before evaluating.** The Flux evaluation used DWR-v3 (confirmed working) rather than a new prompt. This isolates the tool variable — any pass/fail result is attributable to the tool, not an untested prompt. Always establish a baseline with a known-good prompt before drawing conclusions about a new tool.
- **Flux is a viable parallel tool to Leonardo.** For DWR text-to-image using the same prompt, Flux matched Leonardo on photorealism. Practical difference: Flux sky saturation is slightly cooler — correctable with an explicit sky warmth instruction in the prompt. Both tools produce approvable outputs for this brand aesthetic.
- **Flux Kontext editing is more precise than strength-slider img2img.** Structural elements outside the edit zone are faithfully preserved. The tradeoff is characteristic slight smoothing in the edit zone itself. For atmospheric edits (sky, glow, mist), Kontext is the preferred editing path over Leonardo img2img.
- **Editing an approved image can improve it.** The Kontext edit of bg-dwr-003 produced an output with better template compatibility than its source. Removing a bright focal point opened text placement zones that were previously constrained. When running edits, assess the full downstream impact — not just whether the edit intent was achieved.
- **Production notes belong in the asset log, not just the review transcript.** Designer review outputs contain specific usage guidance that downstream agents need when picking up a background for production. If these notes live only in the review conversation, they are lost. The Notes column captures them at the source of truth.
- **The built-in edit button in Flux is the fastest path to Kontext editing.** No separate URL or technical setup is needed — the Edit button on any Flux-generated image loads it directly into a Kontext edit interface. This makes Kontext accessible as a standard workflow step after any Flux text-to-image generation.
