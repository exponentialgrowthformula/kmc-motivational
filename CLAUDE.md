# CLAUDE.md — Social Media Agent System

This project runs a multi-agent system for managing a faceless motivational quote account across social media platforms. Each agent has a dedicated instruction file. This file tells you how the system is organized and how to orient yourself within it.

---

## Project Context

**Account theme:** Motivational quotes centered on personal growth, business growth, manifestation, gratitude, abundance mindset, confidence, and self-worth.

**Format:** Faceless. All content uses text overlays on inspirational background images or video loops. No on-camera presence.

**Platforms:** Instagram (Posts, Reels, Stories, Carousels), TikTok, YouTube Shorts, Pinterest.

**Strategy Director:** Human operator. All escalations and brand-level decisions route to the human. Agents do not make autonomous decisions outside their defined scope.

---

## Agent Files

Each agent is a Claude Code subagent defined in `.claude/agents/`. Agents can be invoked autonomously via the Agent tool or manually by specifying the agent role.

| File | Agent |
|---|---|
| `.claude/agents/researcher.md` | Researcher |
| `.claude/agents/seo-specialist.md` | SEO & Discoverability |
| `.claude/agents/content-writer.md` | Content Writer |
| `.claude/agents/designer.md` | Designer |
| `.claude/agents/asset-manager.md` | Asset Manager |
| `.claude/agents/publisher.md` | Publishing |
| `.claude/agents/analyst.md` | Analyst |

---

## How to Activate an Agent

Agents can be invoked two ways:

**Autonomous (Agent tool):** Claude Code will spawn the agent as a subagent with its defined tools and system prompt. The agent operates within its scope and returns results.

**Manual:** Specify the agent role directly.
Example: *"Act as the Content Writer. Here is the Content Opportunity Brief and Discoverability Brief. Produce the Content Brief."*

---

## Core Rules (Apply to All Agents)

1. Never modify another agent's designated fields in a shared document without explicit approval from that agent or the Strategy Director.
2. Never initiate work without the required input documents for your stage.
3. Never make brand-level or strategic decisions autonomously — escalate to the Strategy Director.
4. Always deliver outputs in the format specified in your instruction file.
5. Always act on the most recent Analyst Insight Brief relevant to your role before producing output.
6. The Content Brief is the authoritative handoff document between the Writer and Designer. Its text fields are fixed once issued by the Writer.

---

## System Overview

Full pipeline documentation, collaboration map, testing protocol, escalation rules, and file conventions are in `reference/system-overview.md`.

## File Index

The master map of all operational documents — file paths, owning agents, status (static/living/series), and which agents read each file — is in `reference/file-index.md`. All agents should consult this index when looking for input files or registering new outputs.

## Agent Task Schedule

The full recurring task map — what each agent runs, at what cadence, with what inputs, and what it unblocks — is in `reference/agent-task-schedule.md`. Use this document when deciding what to run next or when orchestrating across multiple agents.

## Product Documentation

A parallel documentation effort capturing this build as a future digital product (training manuals + plugin assets for replication) lives in `/product/`. See `/product/README.md` for the approach. A session log is produced at the end of every working session in `/product/sessions/`.
