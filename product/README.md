# Product Documentation — Social Media Multi-Agent System
**Account:** @exponentialgrowthformula_
**Product concept:** A reusable system package — training manuals and plugin assets — for launching and running a faceless social media account using a Claude Code multi-agent system.

---

## What This Folder Is

This folder documents the build of @exponentialgrowthformula_ as it happens, with the explicit goal of turning the experience into a sellable product for others who want to replicate this approach.

The product this documentation will eventually become:
- **A training manual** — a step-by-step guide for anyone starting a new social media account with a multi-agent Claude Code system, written from real experience rather than theory
- **Plugin assets** — the agent instruction files, folder structure, CLAUDE.md pattern, reference documents, and templates that someone can drop into their own Claude Code project and adapt

This folder is not part of the live pipeline. It runs in parallel to the account build and captures what the pipeline cannot: the reasoning, the decisions, the wrong turns, and the things that only become clear in retrospect.

---

## The Two-Layer Approach

### Layer 1 — Session Logs (`/sessions/`)

A session log is produced at the end of every working session. It captures:

- **Narrative summary** — a brief, first-person account of what happened and why it matters, written as if explaining the session to a future reader of the product
- **Structured log** — a detailed, scannable record of every decision made, every step taken, and every document produced, with enough context to reconstruct the reasoning

Session logs are the raw material. They are written quickly, in the moment, while context is fresh. They do not need to be polished — they need to be complete.

**Naming convention:** `session-001.md`, `session-002.md` — numbered chronologically.

### Layer 2 — Playbook (`/playbook/`)

Playbook chapters are synthesized from session logs periodically (every 3–4 sessions, or when a natural chapter emerges). They are written for an external audience — someone starting from scratch who wants to understand not just what to do, but why.

Playbook chapters are where the product voice emerges. Session logs are the source of truth; playbook chapters are the translation.

**Structure (to be developed):** Likely organized by phase (Foundation, Research & Brand, Content Production, Intelligence Loop) mirroring the kickoff plan.

### Layer 3 — Agent Templates (`/agent-templates/`)

The exportable system itself — the files someone would copy into their own project to get started. This includes:

- Agent instruction files (`.claude/agents/`) — generalized and stripped of account-specific details
- CLAUDE.md template
- Folder structure scaffold
- Reference document templates (system-overview, file-index, agent-task-schedule patterns)
- Kickoff plan template

This layer is built last, once the system has been proven through real use.

---

## Workflow

**End of every session:**
1. Produce a session log (`/sessions/session-NNN.md`) before closing the conversation
2. Use the hybrid format: narrative summary first, structured log below
3. Update the session log index in this README (see below)

**Every 3–4 sessions (or at natural phase completions):**
1. Review the session logs from that block
2. Synthesize into a playbook chapter in `/playbook/`
3. Note in the session logs which entries have been synthesized

**When the system is proven (Phase 4+ complete):**
1. Build the agent template package in `/agent-templates/`
2. Generalize account-specific content into fill-in-the-blank formats

---

## Folder Structure

```
/product/
  README.md                    — This file. Approach overview and session index.
  prerequisites.md             — Required tools and installation instructions
  /sessions/                   — Raw session logs, one per working session
  /playbook/                   — Synthesized, audience-facing chapters
  /agent-templates/            — Exportable agent system files (built later)
```

---

## Session Log Index

| Session | Date | Phase Coverage | Key Decisions |
|---|---|---|---|
| [session-001.md](sessions/session-001.md) | 2026-03-15 to 2026-03-18 | Phase 1 complete; Phase 2 partial (2A.1, 2A.2) | Strategy brief, audience, tone, cadence (5/week), Carousel Reels primary, file system architecture |
| [session-002.md](sessions/session-002.md) | 2026-03-26 to 2026-04-01 | Phase 2 Tracks B and C (2B.1 through 2C.5 partial) | Dark Earth aesthetic selected, full brand infrastructure built, intake protocol v1.1, ffmpeg video review method, 5 PDH images + 2 PDH video loops approved |
| [session-003.md](sessions/session-003.md) | 2026-04-06 | Phase 2 — 2C.5 continued (PDH, DFC, DWR AI generation; img2img learnings) | AI generation adopted (Leonardo.ai), PDH prompt iterated to v3 (compositional logic over exclusion language), 2 AI PDH + 2 AI DFC + 1 AI DWR approved, img2img illustrative drift diagnosed and rules documented, intake-sources.md retired, ai-prompt-library.md created, assets renumbered consecutively, category-level rejected subfolders introduced |
| [session-004.md](sessions/session-004.md) | 2026-04-07 | Phase 2 — 2C.5 continued (DWR expansion; Flux evaluation; Kontext editing) | Flux adopted as parallel tool to Leonardo, DWR-v4 prompt developed (rocky shoreline variation), 3 new DWR images approved, Flux Kontext editing confirmed for atmospheric edits, Notes column added to status log |
| [session-005.md](sessions/session-005.md) | 2026-04-07 | Phase 3 — Content Pipeline Stages 1–5 (first content piece) | Content piece 001 "You Are Not Behind" through pipeline — Researcher, SEO, Writer, Designer, Asset Manager complete; two content tone standards captured in memory; pipeline paused pending operator asset production |
| [session-006.md](sessions/session-006.md) | 2026-04-07 | Phase 3 — Asset production automation architecture | Operator elected to automate physical asset production rather than produce manually; Playwright MCP + FFmpeg selected over Remotion and FFmpeg-only; Node.js v24 + FFmpeg v8 confirmed; Playwright MCP installed (.mcp.json); publishing MCP stack identified (ig-mcp, Postiz, instagram-engagement-mcp) |
| [session-007.md](sessions/session-007.md) | 2026-04-13 | Phase 3 — Format C iteration and approval | Three Format C variants built and compared (background, text outline, pacing); paint-order stroke fix documented; v3 approved (amber sky, 1.9s pacing, 15s total); "Save this." CTA removed; build script updated to approved spec; variants archived |
| [session-008.md](sessions/session-008.md) | 2026-04-14 | Phase 3 — Instagram Graph API + Meta App configuration | Creator account confirmed (not Business — music library); Meta App created (ID: 1710348726649294); 4 permissions configured; Instagram Tester role gotcha documented; access token generated; ig-mcp install plan confirmed for next session |
| [session-009.md](sessions/session-009.md) | 2026-04-14 | Phase 3 — ig-mcp clone + Meta App additional permissions | Additional permissions added (business_management, instagram_basic, insights, pages_*); Instagram account linked to Facebook Page (required before token generation); ig-mcp cloned to C:/Users/kirst/github/ig-mcp/; .env deleted — credentials via .mcp.json env block only |
| [session-010.md](sessions/session-010.md) | 2026-04-14 | Phase 3 — ig-mcp activation + live API test | Dependencies installed via pyproject.toml + uv sync; .mcp.json fixed to use uv run --directory + -m module syntax; silent crash failure mode documented; live get_profile_info confirmed operational |
