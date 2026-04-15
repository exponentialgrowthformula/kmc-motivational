# Session 003
**Date:** 2026-04-06
**Phase coverage:** Phase 2 — 2C.5 continued (AI image generation: PDH, DFC, and DWR batches; img2img variation experiment)
**Session type:** AI generation evaluation + asset sourcing + protocol updates

---

## Narrative Summary

This session resolved the biggest friction point in the asset sourcing pipeline: manual stock photo hunting was slow, low-yield, and increasingly difficult to align with the Dark Earth aesthetic. The decision to evaluate AI image generation as an alternative was made early in the session and paid off quickly.

The strategic shift was targeted — AI generation for images, not yet for video. The tool selection landed on Leonardo.ai (free tier) as the test platform, with Midjourney deferred pending a subscription decision. Within a single session, AI generation produced two approved PDH backgrounds and one approved DFC background, with clear prompt-to-pass-rate improvement visible across rounds. The manual sourcing approach is not being abandoned, but AI generation is now an established part of the workflow.

The most instructive part of the session was the PDH prompt development cycle. Three rounds of iteration were needed before the prompt reliably suppressed the failure mode that had been causing rejections: city lights in the valley floor below an elevated camera position. The key insight was that exclusion language ("no city lights") is less effective than compositional logic ("camera at ground level, no valley below"). Telling the model what the scene IS eliminates failure modes better than telling it what NOT to include. This is a reusable principle for anyone working with image generation in a brand context.

The DFC prompt landed on the first attempt, avoiding both known DFC failure modes — green-dark shadows and centre-frame subjects. DFC-v2 (diagonal raking light variation) was also tested this session and approved, extending the DFC library with a distinct compositional feel.

The DWR category required three rounds of text-to-image iteration before producing an approved image. Each round isolated one failure mode: DWR-v1 revealed that water and night sky default to cool-dark regardless of general warmth instructions (fixed in v2 by explicitly naming the sky colour); DWR-v2 revealed that waterscapes attract artificial industrial lights at the horizon even with structural exclusions in place (fixed in v3 with exhaustive artificial light exclusion language and an explicit far-bank description). DWR-v3 produced a clean approved image on the first attempt. The DWR prompt development cycle reinforced and extended the general principle: name every failure mode explicitly in the scene structure, don't rely on generic "no [element]" exclusion language alone.

An img2img variation attempt was also made this session — an edit of the approved DWR image intended to introduce slightly denser mist. The result was rejected: the edit prompt's "glowing mist" language and low image strength (0.3–0.4) caused the output to drift from a photographic image to an AI illustration. This was the first img2img test in the project, and it produced a clear, documented set of rules: describe physical changes not emotional qualities, avoid volumetric/glow-emission atmospheric language, set image strength to 0.5–0.6, end every edit prompt with "photorealistic photograph". These rules are now in the prompt library.

Protocol work ran in parallel throughout the session. The intake-sources.md file was retired — source attribution now logs directly in the master log. The ai-prompt-library.md was created for versioned prompt storage. The category-level rejected subfolder structure was introduced so each category's rejected attempts stay alongside its approved assets. A filename cleanup closed the session: all approved PDH and DFC backgrounds renumbered consecutively across approved assets only, rejections not consuming numbers.

At session end: 7 PDH images approved (5 stock + 2 AI), 5 DFC images approved (3 stock + 2 AI), 1 DWR image approved (AI), 2 PDH video loops approved. Phase 2 gate decision deferred — Phase 3 can begin in parallel while 2C.5 continues.

---

## Structured Log

### 2C.5 — Asset Sourcing Continued

#### AI Generation — Tool Evaluation and Decision

**Context:** Stock photo sourcing for the Dark Earth aesthetic was producing low pass rates and requiring significant manual time. AI generation evaluated as an alternative.

**Tools evaluated:**

| Tool | Decision | Reason |
|---|---|---|
| Claude.ai | Ruled out | Text-only — does not generate images |
| Midjourney | Deferred | No active subscription; evaluate later |
| Flux / Leonardo.ai | Leonardo.ai selected | Free tier available; commercial use confirmed; sufficient quality for evaluation |

**Scope decision:** AI generation adopted for images. Video generation not yet evaluated — existing video sourcing approach continues.

---

#### PDH AI Generation — Prompt Development (PDH-v1 through PDH-v3)

**Starting point:** DFC-v1 prompt (developed in this session's conversation)

**Round 1 — PDH-v1:**
- Two images generated
- One rejected: city lights visible in valley floor below camera
- One approved: deep amber-red sky (assigned BGI-PDH-017 at intake; renumbered bg-pdh-006 after cleanup)
- Note: limited template compatibility due to luminous mid-frame zone

**Round 2 — PDH-v2:**
- Added explicit city lights exclusion language to prompt
- Both images rejected — model generated settlement lights despite the instruction
- Root cause identified: elevated camera angle creates a valley floor below the camera position; model defaults to populating this with lights
- Exclusion language insufficient to override compositional defaults

**Round 3 — PDH-v3:**
- Changed approach: compositional logic instead of exclusion language
- Ground-level camera position; no valley below; flat foreground terrain
- Result: approved (assigned BGI-PDH-016 at intake; renumbered bg-pdh-007 after cleanup)
- City lights failure mode eliminated
- Best warm-dark result in the full PDH batch

**SD override precedent established:**
Subtle, barely-noticeable peripheral lights in deep shadow zones do not trigger automatic rejection. These are flagged for Strategy Director judgment, not auto-rejected. This is the second SD override precedent in the system (after DFC batch precedents established earlier in the project).

**Prompt archive:** All PDH prompts (PDH-v1, PDH-v2, PDH-v3) stored in `/assets/ai-prompt-library.md` with version IDs, dates, and change notes.

---

#### DFC AI Generation — First Attempt

**Prompt used:** DFC-v1

**Known DFC failure modes and how they were addressed in the prompt:**

| Failure mode | Prompt instruction |
|---|---|
| Green-dark shadows | Explicit autumn foliage colour instruction |
| Centre-frame subject blocking text safe zone | Text-safe zone instruction specifying compositional placement |

**Result:** One approved image on first attempt (assigned BGI-DFC-009 at intake; renumbered bg-dfc-004 after cleanup)

**DFC-v2:** Variation prompt developed, tested, and approved this session. See section below.

---

#### DFC AI Generation — DFC-v2 Test (Diagonal Raking Light Variation)

**Prompt used:** DFC-v2

**Intent:** Introduce a second distinct light direction — diagonal raking from camera-left — to differentiate from DFC-v1's centred radial composition. Added ground mist and slightly elevated camera angle.

**Key changes from DFC-v1:**
- Light rakes from camera-left rather than directly behind
- Ground mist in lower third
- Slightly elevated camera looking upward through canopy
- "Deciduous tree trunks" reinforces autumn-compatible species, steers away from green conifers

**Result:** Approved on first attempt (assigned BGI-DFC-010; filed as bg-dfc-005-raking-light-forest.jpg). Diagonal raking light successfully differentiates from DFC-v1. Ground mist in lower third adds atmospheric depth. Full template compatibility.

---

#### DWR AI Generation — Prompt Development (DWR-v1 through DWR-v3)

**Context:** No DWR assets in library at start of session. Three text-to-image rounds required before first approval.

| Round | Prompt | Key failure | Root cause | Fix applied |
|---|---|---|---|---|
| DWR-v1 | Minimal warm-dark language | Warm-dark test failed — sky and water both cool near-black | Water and night sky default to cool-dark in photorealistic generation; "dark warm brown-black surroundings" too abstract | Explicitly name sky colour as warm brown-dark; extend warm light across full water surface |
| DWR-v2 | Explicit warm sky + full-surface water warmth | Man-made infrastructure check failed — prominent row of industrial lights with full reflections visible at horizon; built structure silhouette on far bank | DWR waterscapes attract harbour and industrial light contamination from training data; structural exclusions (no docks, no buildings) don't block light sources | Exhaustive artificial light exclusion list + explicit far-bank description (natural treeline, no structures of any shape) |
| DWR-v3 | DWR-v2 retained + exhaustive light exclusions + explicit far-bank description | — | — | Approved |

**BGI-DWR-001 (DWR-v1):** Rejected — warm-dark test failed. Cool near-black sky and water dominate ~75% of frame.

**BGI-DWR-002 (DWR-v2):** Rejected — man-made infrastructure check failed. Warm-dark fix from v2 confirmed working — retained verbatim in v3.

**BGI-DWR-003 (DWR-v3):** Approved — filed as bg-dwr-001-amber-mist-shore.jpg. First approved DWR asset. Full template compatibility.

**Key DWR learnings:**
- "Remote wilderness" early in the prompt steers away from human habitation without requiring a full exclusion list — but it is not sufficient alone for waterscapes
- Exhaustive artificial light exclusions are required: name each type (harbour, dock, industrial, facility, settlement, city glow) — generic "no artificial lights" is insufficient
- Water and night sky always require explicit warm colour naming — abstract warmth instructions do not override photorealistic defaults

---

#### DWR img2img Variation Experiment

**Source image:** bg-dwr-001-amber-mist-shore.jpg (first approved DWR image)

**Intent:** Introduce slightly denser mist without regenerating from scratch — img2img variation at low image strength.

**Edit prompt (failed version):** Added "thicker glowing mist hovering over the water surface" and "softer more diffused horizon glow" alongside base DWR-v3 language. Image strength: 0.3–0.4.

**Result (BGI-DWR-004):** Rejected — photorealism / cinematic quality check failed. Image reads as a digital illustration, not a photograph. Six of seven checks pass (strong warm-dark pass, clean infrastructure pass, safe zones workable). Sole failure is photorealism.

**Illustrative drift diagnosis:**

| Prompt element | Effect |
|---|---|
| "glowing mist" | Pushed model toward painted/AI rendering of mist rather than real atmospheric diffusion |
| "softer more diffused horizon glow" | Smoothed out spectral complexity that makes photographic pre-dawn light legible as real |
| Image strength 0.3–0.4 | Too much generative latitude — model rebuilt atmospheric elements rather than modifying them |

**img2img rules extracted and documented:**

| Rule | Confirmed |
|---|---|
| Physical property language only ("mist settling") — no emotional language ("mysterious") | Yes |
| "Glowing mist" = illustration drift — use "mist softly diffusing [light source]" | Yes |
| Image strength 0.5–0.6 for brand-safe variation; 0.3–0.4 increases drift risk | Yes |
| End edit prompts with "photorealistic photograph" | Yes |
| Maximum 2–4 changes per edit prompt | Yes |

Rules logged in `/assets/ai-prompt-library.md` (img2img section) and memory.

**Corrected img2img prompt ready to run (DWR-v3 edit):**
```
cinematic pre-dawn river or lake shoreline, slightly denser low mist settling over the water surface and softly diffusing the amber-orange light across the lower third of the frame, the water surface carrying the same warm amber-orange reflection in horizontal bands, deep warm brown-dark sky unchanged, remote wilderness, no people, no man-made structures, photorealistic photograph, 9:16 vertical
```
Image strength: 0.55. Run 2–3 outputs before adjusting.

---

#### Category-Level Rejected Subfolder Restructure

**Change:** Rejected assets for each category now stored in a `rejected/` subfolder within that category's folder (e.g., `/assets/backgrounds/images/dwr/rejected/`) rather than a global `/assets/backgrounds/rejected/` folder.

**Reason:** Keeps all attempts for a given category — both approved and rejected — in one place for easy reference when iterating on prompts.

**Folders created:** `/pdh/rejected/`, `/dfc/rejected/`, `/dwr/rejected/` (and equivalents for other categories).

**Asset library map and intake protocol updated** to reflect new structure.

---

### Protocol Updates (Asset Intake Protocol v1.2)

#### intake-sources.md Retired

**Change:** The per-batch intake-sources.md file is no longer required.

**Reason:** Source attribution data was being duplicated — once in intake-sources.md and once in asset-status-log.md. The transient file added a step without adding information. Source is now logged directly in the Source/Attribution column of asset-status-log.md at intake time.

**Effect on asset-intake-protocol.md:** Instruction to create intake-sources.md removed. Instruction to transcribe and delete it removed. Protocol is shorter and simpler.

#### New File: /assets/ai-prompt-library.md

**Purpose:** Permanent versioned library for all AI generation prompts used in the project.

**Format:** Each entry carries a version ID (e.g., PDH-v3, DFC-v1), a date, the full prompt text, a change note (what changed from the previous version and why), and the result.

**Usage:** Version IDs are referenced in the Source/Attribution column of asset-status-log.md for AI-generated assets. The full prompt text lives in the library — the log stays readable.

#### Man-Made Infrastructure Rule Updated

| Rule | Previous | Updated |
|---|---|---|
| Man-made infrastructure | Any built element = automatic rejection | Prominent = automatic rejection; subtle peripheral lights in deep shadow = flag for SD judgment |

**Basis:** PDH-v3 approved image (bg-pdh-007) established the precedent this session.

#### File Index Updated

`/assets/ai-prompt-library.md` added to `/reference/file-index.md` with owner (Asset Manager), status (living), and read-by agents noted.

---

### File and Naming Cleanup (End of Session)

**Action:** All approved PDH and DFC backgrounds moved from intake subfolders to their scene category folders. All filenames renumbered consecutively across the approved set for each category.

**Numbering logic:** Numbers track approved-asset-within-category order. Rejected assets do not affect the sequence — they are not in the library and do not create gaps.

**PDH approved — 7 files (bg-pdh-001 through bg-pdh-007):**
- bg-pdh-001 through bg-pdh-005: stock images (carried over from session 002)
- bg-pdh-006: AI-generated (PDH-v1, amber-red sky)
- bg-pdh-007: AI-generated (PDH-v3, ground-level warm dark — best warm-dark result in the PDH batch)

PDH video loops: bg-pdh-001-sway-slow.mp4, bg-pdh-002-cloud-peek.mp4 — filenames unchanged.

**DFC approved — 4 files (bg-dfc-001 through bg-dfc-004):**
- bg-dfc-001 through bg-dfc-003: stock images (carried over from previous work)
- bg-dfc-004: AI-generated (DFC-v1)

**Asset status log:** Filenames updated to match new numbering across all affected rows.

---

### Asset Library Status at Session End

| Category | Images Approved | Video Loops Approved | Notes |
|---|---|---|---|
| pdh | 7 | 2 | 5 stock + 2 AI |
| dfc | 5 | 0 | 3 stock + 2 AI |
| snl | 0 | 0 | Not yet sourced |
| det | 0 | 0 | Not yet sourced |
| dwr | 1 | 0 | 1 AI (bg-dwr-001-amber-mist-shore.jpg) |
| diw | 0 | 0 | Not yet sourced |

**Commercial use confirmation:** Leonardo.ai confirmed commercial use rights for AI-generated assets on free tier.

---

## Phase 2 Gate Status

| Check | Status |
|---|---|
| Monitored accounts list | ✓ |
| Trend Report 001 | ✓ |
| Knowledge Base started | ✓ |
| Instagram keyword + hashtag library | ✓ |
| Brand Style Guide approved | ✓ |
| Platform Design Spec | ✓ |
| Template suite | ✓ |
| Background assets sourced | In progress — PDH and DFC partial; SNL, DET, DWR, DIW not started |

**Gate decision deferred.** Library is growing. Phase 3 can begin in parallel with continued 2C.5 sourcing.

---

## Open Items Entering Next Session

| Item | Owner | Context |
|---|---|---|
| DWR img2img corrected variation | SD | Corrected prompt ready (image strength 0.55, physical-property language only, "photorealistic photograph" anchor). Run against bg-dwr-001-amber-mist-shore.jpg. |
| DFC-v3 prompt test | SD | Vertical descending light shaft through conifer canopy gap — prompt written, not yet tested |
| SNL, DET, DIW sourcing | Asset Manager / SD | No assets yet for these three categories |
| Phase 3 parallel start | Orchestrator | Phase 2 gate deferred; Phase 3 can begin while sourcing continues |
| Video loop sourcing (DFC and other categories) | SD | No video loops approved outside PDH yet |

---

## For the Product

- **AI generation outperforms stock for brand-specific requirements.** When a visual aesthetic is precisely defined (Dark Earth: warm light source required, warm-dark desaturation test, no cool tones, no man-made infrastructure), AI generation can be tuned to hit those requirements directly. Stock sourcing is a manual filter process with a low pass rate. AI generation is an iterative refinement process with a higher ceiling once prompts converge.
- **Compositional logic beats exclusion language in prompts.** When a model keeps generating an unwanted element, the fix is usually to change the scene structure so the element has no place to appear — not to add "no [element]" to the prompt. Ground-level camera position eliminated city lights because there was no valley floor for them to sit in. This principle applies across image generation tools.
- **Expect 2–3 prompt rounds before convergence.** The first prompt establishes the aesthetic direction. The second round reveals the primary failure mode. The third round addresses it structurally. Building this expectation into the workflow prevents frustration and keeps evaluation systematic.
- **Source attribution belongs in the master log, not a separate file.** Any field that must be kept in sync between a transient file and a master log will eventually diverge. Collapsing the data into one location eliminates the sync problem and reduces intake steps.
- **Approved-asset numbering should be independent of intake order.** Intake batches include rejections. If asset numbers track intake order, gaps appear wherever assets are rejected. Numbering the approved set consecutively means the library always has a clean sequence — and the number tells you where the asset sits in the approved library, which is the number that matters.
- **Water and night sky are always cool-dark by default in photorealistic generation.** Warm surroundings instructions do not override this. For any waterscape or night sky, you must explicitly name the sky colour ("deep warm brown-dark with amber undertone — not blue-black") and extend warm light across the full water surface ("reflecting across the full surface, not just the bright zone"). Generic warmth language fails reliably.
- **Waterscapes require exhaustive artificial light exclusion.** Even with structural exclusions (no docks, no boats, no buildings), the model draws on harbour and industrial waterfront training data and introduces light contamination. Every artificial light type must be listed explicitly: harbour lights, dock lights, industrial lighting, facility lights, settlement lights, point-source lights, evenly-spaced light clusters, city glow. "No artificial lights" alone is insufficient.
- **img2img is not free variation.** A low image strength (0.3–0.4) does not produce a minor variation — it gives the model significant latitude to rebuild elements, especially atmospheric ones. For brand-safe variation that stays close to an approved image, use image strength 0.5–0.6. Treat img2img as an edit of a specific physical property, not a mood or atmosphere dial.
- **"Glowing mist" is an illustration instruction.** Real mist diffuses and softens a light source — it does not glow. Any language that describes mist, fog, or haze as emitting light will pull the model toward painted/illustrated output. The physical-properties-only rule that applies to the main prompt applies equally to img2img edits.
- **Keep rejected assets for all categories together, not in a global folder.** When iterating on prompts for a specific category, having that category's rejected attempts in the same folder as the approved ones gives instant visual context for what has been tried. A global rejected folder loses that context.
