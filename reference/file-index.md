# File Index — @exponentialgrowthformula_ Agent System
**Maintained by:** Strategy Director
**Last updated:** 2026-04-12

This is the master map of all operational documents in the agent system. Every agent should consult this index when looking for input files. File paths, owners, and statuses are kept current here.

**Important — Exists column:** The index includes both files that currently exist and files that are anticipated but not yet created. Always check the `Exists` column before attempting to read a file. If a file shows `No` and it is your responsibility to create it, follow the naming convention exactly as shown and update the `Exists` column to `Yes` once created.

**Status key:**
- `Static` — Set once, changes only on a major strategic decision (Strategy Director approval required)
- `Living` — Updated on a recurring cadence by the owning agent
- `Series` — New file created each cycle; old files are never deleted (numbered 001, 002...)
- `Transient` — Replaced each cycle; only the most recent version is active

**Exists key:**
- `Yes` — File exists and is ready to read
- `Yes (series started)` — At least one file in this series exists; follow the same naming pattern for new entries
- `No` — Not yet created; follow naming convention exactly on first creation

---

## /research — Owned by: Researcher & Strategy Director

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `strategy-brief.md` | Strategy Director | Static | Yes | All agents | Foundational strategy document. Changes require Strategy Director approval. |
| `visual-direction-brief.md` | Strategy Director | Transitioning → Static | Yes | Designer, Researcher | Pending visual direction decision after initial research. Becomes static once brand is finalized. |
| `knowledge-base.md` | Researcher | Living | Yes | Content Writer, Researcher | Appended each research cycle. Never overwritten. |
| `monitored-accounts.md` | Researcher | Living | Yes | Researcher | Reviewed monthly. Account additions/removals require Strategy Director approval. |
| `trend-report-[NNN].md` | Researcher | Series | Yes (series started) | Content Writer, SEO Agent, Publishing, Strategy Director | New file each weekly cycle. e.g. `trend-report-001.md`. Publishing reads the Trending Audio section to inform manual audio selection at publish time. |
| `raw-hashtag-observations-[NNN].md` | Researcher | Series | Yes (series started) | SEO Agent | Handoff document from Researcher to SEO Agent. New file each cycle. |
| `content-opportunity-brief-[NNN].md` | Researcher | Series | No | Content Writer, SEO Agent | Produced per content opportunity identified. |

---

## /seo — Owned by: SEO Agent

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `keyword-library.md` | SEO Agent | Living | Yes | Content Writer, SEO Agent | Master keyword library organized by content pillar. Search intent, competition rating, and recommended use (caption / overlay / hashtag) per term. Updated monthly. |
| `hashtag-sets.md` | SEO Agent | Living | Yes | Content Writer, SEO Agent, Publishing | Tiered hashtag sets by content pillar. Ready-to-use sets of 3–5 tags per post. Includes rotation strategy, banned tag list, and saturation flags. Updated monthly. |
| `discoverability-framework.md` | SEO Agent | Living | Yes | Content Writer, Publishing | Standing SEO framework for this account. Caption structure rules, keyword placement, overlay text strategy, hashtag placement, hook optimization, seasonal patterns, and monthly audit protocol. Updated when platform behavior changes materially. |
| `discoverability-brief-[NNN].md` | SEO Agent | Series | No | Content Writer, Designer (via Content Brief), Publishing | One per content piece. Travels with Content Brief through the pipeline. |

---

## /content-briefs — Owned by: Content Writer & Designer

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `content-brief-[NNN].md` | Content Writer | Series | No | Designer, Asset Manager | Master handoff document. Text fields are fixed once issued. |
| `asset-delivery-note-[NNN].md` | Designer | Series | No | Asset Manager | Accompanies completed visual assets from Designer to Asset Manager. |
| `response-templates.md` | Content Writer | Living | No | Content Writer | Community engagement starting points. Updated as new interaction types emerge. |
| `community-sentiment-report-[cycle].md` | Content Writer | Series | No | Researcher, Analyst | Weekly. e.g. `community-sentiment-report-week01.md` |

---

## /brand — Owned by: Designer

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `aesthetic-options.md` | Designer | Living | Yes | Strategy Director, Designer | Visual direction options for Strategy Director selection. Updated if direction needs revision before Brand Style Guide is finalized. |
| `brand-style-guide.md` | Designer | Semi-static | Yes | Content Writer, Designer, Asset Manager, Publisher, SEO Specialist | Requires Strategy Director approval before first publish and on all major updates. Versioned by Asset Manager. Version 1.0 produced 2026-03-18. |
| `platform-design-spec.md` | Designer | Living | Yes | Designer, Asset Manager, Publisher | Platform-specific technical specifications for all active Instagram formats. Updated when platform specs change. Strategy Director approves major updates. Version 1.0 produced 2026-03-18. |
| `template-suite.md` | Designer | Living | Yes | Designer, Asset Manager, Content Writer | Master reference for all reusable templates. Defines every template in text form — structure, fixed vs. variable elements, layer naming, usage rules. Version 1.0 produced 2026-03-18. Updates require Strategy Director approval. |

---

## /assets — Owned by: Asset Manager (organization); Designer (creation)

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `asset-status-log.md` | Asset Manager | Living | Yes | Asset Manager, Publishing, Strategy Director | Living master log of all assets through pipeline stages. Updated every time an asset changes status. Initialized 2026-03-18. |
| `asset-intake-protocol.md` | Asset Manager | Static | Yes | Asset Manager, Designer, Strategy Director | Standing protocol governing how assets enter the library — submission, review checklist, approval/rejection recording, version control. Changes require Strategy Director approval. Version 1.2 — 2026-04-06. |
| `asset-library-map.md` | Asset Manager | Static | Yes | Asset Manager, Designer, Strategy Director | Structural map of the /assets/ folder hierarchy — all subfolders, naming conventions, and what is stored where. Changes require Strategy Director approval. Initialized 2026-03-18. |
| `ai-prompt-library.md` | Designer | Living | Yes | Designer, Strategy Director | Versioned record of all AI generation prompts used to produce background assets. Prompts are referenced by ID (e.g., PDH-v3) in the asset status log Source/Attribution column. |
| `brand/brand-style-guide.md` | Designer | Semi-static | Yes | Content Writer, Designer, Asset Manager, Publisher, SEO Specialist | Requires Strategy Director approval before first publish and on all major updates. Versioned by Asset Manager. Version 1.0 produced 2026-03-18. |
| `brand/platform-design-spec.md` | Designer | Living | Yes | Designer, Asset Manager, Publisher | See `/brand/platform-design-spec.md` — same file. Updated when platform specs change. Strategy Director approves major updates. |
| `templates/template-suite-v1.md` | Designer | Versioned | No | Designer, Asset Manager | Incremented on significant updates (v1, v2...). Previous versions archived by Asset Manager. |
| `background-sourcing-brief.md` | Asset Manager | Static | No | Strategy Director | Reference document for sourcing background images and video loops. |
| `backgrounds/images/` | Strategy Director / Asset Manager | Living | No | Designer, Asset Manager | Background images tagged by scene category, warm light source, and template compatibility. Organized by scene category code subfolders per asset-library-map.md. |
| `backgrounds/video-loops/` | Strategy Director / Asset Manager | Living | No | Designer, Asset Manager | Video loop backgrounds. Same tagging and subfolder convention as images. |
| `staging/` | Asset Manager | Transient | No | Publishing | Verified assets staged for upcoming publishing. Cleared after publication. |
| `published/[YYYY-MM]/[platform]/` | Asset Manager | Living | No | Asset Manager | Archive of all published post assets. Never deleted. |

---

## /analytics — Owned by: Analyst

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `kpi-framework.md` | Analyst | Semi-static | No | Analyst, Strategy Director | Defines KPIs and benchmarks for the account's launch phase. Revisited at 90-day mark. |
| `kpi-dashboard.md` | Analyst | Living | No | Analyst, Strategy Director | Updated after each weekly reporting cycle. |
| `test-log.md` | Analyst | Living | No | Analyst | Tracks all active and completed A/B tests. |
| `test-brief-[NNN].md` | Analyst | Series | No | Content Writer | One per test cycle. e.g. `test-brief-001.md` |
| `insight-brief-[cycle]-[agent].md` | Analyst | Series | No | Respective agent | e.g. `insight-brief-week01-researcher.md`. Delivered weekly to each agent. |

---

## /publishing — Owned by: Publishing Agent

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `content-calendar.md` | Publishing | Living | No | Publishing, Strategy Director, Asset Manager | Master schedule. Updated continuously. |
| `post-log.md` | Publishing | Living | No | Analyst | Post-publication metadata log. Appended after every publish. |
| `publishing-checklist.md` | Publishing | Static | No | Publishing | Pre-publish verification checklist. Changes require Strategy Director approval. |
| `cross-posting-plan.md` | Publishing | Living | No | Publishing, Strategy Director | Cross-platform sequencing strategy. Reviewed monthly. |
| `platform-guides/instagram.md` | Publishing | Living | No | Publishing, Designer | Current Instagram publishing best practices. Updated when platform changes. |

---

## /product — Product documentation (parallel to pipeline, not part of it)

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `README.md` | Strategy Director | Living | Yes | Strategy Director | Approach overview, workflow, and session log index. |
| `sessions/session-[NNN].md` | Strategy Director | Series | Yes (series started) | Strategy Director | End-of-session logs in hybrid format. e.g. `session-001.md` |
| `playbook/[chapter].md` | Strategy Director | Series | No | Strategy Director | Synthesized audience-facing chapters. Built from session logs every 3–4 sessions. |
| `agent-templates/` | Strategy Director | Living | No | Strategy Director | Exportable, generalized agent system files for the product package. Built in Phase 4+. |

---

## /reference — System documentation (not operational content)

| File | Owner | Status | Exists | Read By | Notes |
|---|---|---|---|---|---|
| `system-overview.md` | Strategy Director | Static | Yes | All agents | Full pipeline documentation, protocols, escalation rules. |
| `kickoff-plan.md` | Strategy Director | Static | Yes | Strategy Director | One-time launch plan. Not updated after kickoff. |
| `file-index.md` | Strategy Director | Living | Yes | All agents | This document. Updated whenever new operational files are added to the system. |
| `agent-task-schedule.md` | Strategy Director | Living | Yes | Strategy Director, Claude (orchestrator) | Full recurring task map — cadence, inputs, outputs, dependencies, approval gates. Not required reading for individual agents. |

---

## Naming Conventions

- **Series files:** Use zero-padded three-digit numbering — `001`, `002`, `003` — so files sort correctly at scale.
- **Cycle-based files:** Use `week01`, `week02` or `YYYY-MM` date format depending on the default document type.
- **Versioned documents:** Use `v1`, `v2` suffix — e.g., `template-suite-v2.md`.
- **Platform-specific files:** Use platform name as suffix — e.g., `keywords-instagram.md`, `hashtags-manifestation-instagram.md`.

---

## Updating This Index

When a new operational file type is introduced to the system:
1. Add it to the relevant section of this index before or immediately after first creation.
2. Include owner, status, exists status, read-by agents, and any relevant notes.
3. Update the "Last updated" date at the top of this file.

When an anticipated file is created for the first time:
1. Update its `Exists` column from `No` to `Yes` (or `Yes (series started)` for series files).
2. Update the "Last updated" date at the top of this file.
