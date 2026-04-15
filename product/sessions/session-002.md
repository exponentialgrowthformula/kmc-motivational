# Session 002
**Date:** 2026-03-26 to 2026-04-01
**Phase coverage:** Phase 2 continuation — Tracks B and C (2B.1 through 2C.5 partial)
**Session type:** Brand build + asset sourcing

---

## Narrative Summary

This session completed all agent-deliverable work in Phase 2 and made significant progress on the final human task — asset sourcing.

The most consequential decision of the session was the visual aesthetic. Three options were presented by the Designer (Elevated Earth, Dark Clarity, Luminous Minimal), and the Researcher added competitive data showing that the two largest accounts in the niche both run dark cinematic aesthetics. Rather than choosing between warm and dark, the Designer proposed a fourth direction — "Dark Earth" — that synthesises the scroll-stop power of dark aesthetics with the emotional warmth of Option 1. Research supported it. The Strategy Director approved it. This decision is locked and shapes every downstream visual decision.

The brand infrastructure built in this session is substantial: a full Brand Style Guide (9 sections, including a precise background sourcing brief), Platform Design Spec with pixel-exact safe zones, a nine-template Template Suite, and a complete asset intake system. These documents are production-ready — the system can operate at scale from here without revisiting foundational questions.

The asset intake protocol received its first real-world stress test. The trial batch of six PDH images yielded zero approvals and three flags, which was a good outcome — it revealed gaps in the protocol (missing infrastructure check, no Flagged status, no formal tiebreaker for borderline warm-dark cases) rather than letting flawed assets into the library. Version 1.1 of the protocol addresses all of them. The standard Designer Review Prompt is now documented and ready to copy-paste for every future intake run.

Video review required a workaround: agents cannot render MP4 files. The solution — extracting one frame per second via ffmpeg and passing frames to the Designer — works well and is now the established method. The protocol will be updated to reflect this as a standard step.

By session end: 5 PDH images and 2 PDH video loops are approved and in the library. DFC sourcing has not yet begun. Phase 2 gate is not yet cleared — 2C.5 remains in progress.

---

## Structured Log

### Track B — SEO Foundation (Task 2B.1)

**Completed:** /seo/keyword-library.md, /seo/hashtag-sets.md, /seo/discoverability-framework.md

**Key decisions:**
- Instagram 3–5 hashtag limit (2026) incorporated into hashtag strategy — each hashtag slot must be deliberate
- Caption-first SEO is the primary discoverability mechanism under current Instagram algorithm behaviour
- December 2025 "Your Algorithm" update makes early topic-categorisation more important than ever for new accounts

---

### Track C — Brand Identity

#### 2C.1 — Aesthetic Selection and Brand Style Guide

**Method:** Designer presented 3 options → Researcher added competitive data → Designer proposed Dark Earth synthesis → Strategy Director approved

**The Dark Earth aesthetic:**
- Background base: `#1C1612` (deep warm charcoal, brown undertone — not cool near-black)
- Primary text: `#F0EAD9` (warm ivory)
- Accent: `#C9973A` (amber gold — Option 1's gold, warmer than Option 2's)
- Shadow depth: `#0E0A07`
- Typography: Cormorant Garamond or Playfair Display (primary serif, Medium 500 minimum weight); DM Sans (secondary)
- Every background must have a named warm light source — production gate
- Warm-dark test: desaturate and assess dark tones. Brown-grey = pass. Blue-grey or neutral grey = reject
- Brand Style Guide: /brand/brand-style-guide.md (Version 1.0, Strategy Director approved)

**Why Dark Earth won over A/B testing:**
- Top accounts in niche (@mindset.therapy 11M, @mental.aspect 4M) both run dark aesthetics
- High contrast scroll-stop data favours dark
- A/B aesthetic testing not endorsed in any creator strategy literature for new accounts
- @mindsetofgreatness runs both aesthetics without committing — "notably lower brand distinctiveness as a result"
- Blend resolves the core tension: scroll-stop power of dark + emotional warmth of Option 1

#### 2C.2 — Platform Design Spec
**Completed:** /brand/platform-design-spec.md
**Notable:** Feed crop problem for Reels documented (1080×1350 centre crop) — safe zones designed so text automatically falls within the feed crop zone. Template architecture pre-decided: 2 shared-base groups (9:16 vertical, 4:5 portrait) + 1 independent (1:1 square).

#### 2C.3 — Template Suite
**Completed:** /brand/template-suite.md
**Nine templates across four groups:** 4 Carousel Reel (HOOK, BODY, CTA, COVER), 1 Standard Reel, 2 Static Post, 2 Story. Layer naming convention, decision tree, variable element constraints, and version control all documented. Build-as-3-bases-not-9 instruction included for human operator.

#### 2C.4 — Asset Library Initialization
**Completed:** /assets/asset-status-log.md, /assets/asset-intake-protocol.md, /assets/asset-library-map.md
**Structure:** intake folders sit inside scene category subfolders (assets land adjacent to their destination). Six scene categories: pdh, snl, det, dfc, dwr, diw.

#### 2C.5 — Asset Sourcing (IN PROGRESS)

**File naming convention settled:** `bg-[category]-[number]-[descriptor].[ext]` — number before descriptor for consecutive folder sorting.

**Intake protocol updates (v1.1 — 2026-03-26):**
- intake-sources.md required with every batch (table format: file, platform, URL, license, preliminary warm light source)
- Man-made infrastructure added as explicit check item 6 (any built element = automatic rejection)
- Warm-dark desaturation test formalised as tiebreaker for borderline cases
- Flagged status added with full procedure (distinct from Approved and Rejected)
- Standard Designer Review Prompt documented at end of protocol
- Asset Manager: transcribe sourcing note to log then delete intake-sources.md

**Video review method established:**
- Agents cannot render MP4 files — extract frames via ffmpeg (`ffmpeg -i input.mp4 -vf fps=1 output_%02d.jpg`)
- One frame per second gives full visual coverage for Designer checklist
- Motion-specific checks (motion level, loop point) self-certified by Strategy Director
- Duration minimum lowered from 8s to 6s (updated in brand-style-guide.md, platform-design-spec.md, asset-library-map.md)

**Asset library status at session end:**

| Category | Images Approved | Video Loops Approved |
|---|---|---|
| pdh | 5 | 2 |
| dfc | 0 | 0 |
| snl | 0 | 0 |
| det | 0 | 0 |
| dwr | 0 | 0 |
| diw | 0 | 0 |

Approved PDH images: bg-pdh-001-horiz-amber-band, bg-pdh-003-bottom-orange, bg-pdh-005-cloud-peek, bg-pdh-007-double-glow, bg-pdh-008-mid-glowup
Approved PDH video loops: bg-pdh-002-cloud-peek.mp4, bg-pdh-001-sway-slow.mp4
All sourced from Unsplash — Free License.

**Sourcing observations:**
- Warm-dark test failure mode: blue/teal sky dominates — common in pre-dawn photography. Sky above horizon must also be warm, not just the horizon band.
- Free video stock (Pexels, Mixkit, Pixabay, Videvo, Coverr) is thin for warm-dark cinematic atmospherics. Paid options (Storyblocks, Artgrid) significantly better for volume.
- Canva: fine as production/design tool but not recommended as a sourcing platform for backgrounds (overused stock, limited warm-dark cinematic video).

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
| Background assets sourced | In progress — PDH only |

**Gate not yet cleared.** 2C.5 continues next session with DFC category and additional video sourcing.

---

## For the Product

**The aesthetic selection process is a replicable pattern.** Presenting 3 options, having a Researcher validate against competitive data, then synthesising a superior fourth option from the top two is a stronger process than asking the operator to pick from a list. The Dark Earth direction came from this process and is stronger than any of the original three options.

**The intake protocol stress-test was valuable.** Running a deliberately imperfect trial batch before committing the full sourcing effort caught 5 protocol gaps before they became recurring problems. Any replication of this system should include a planned trial batch at the start of 2C.5.

**Video requires frame extraction.** This is a constraint of the current agent toolchain, not a design choice. Document ffmpeg as a project dependency. The `fps=1` extraction approach is fast and sufficient for visual review.
