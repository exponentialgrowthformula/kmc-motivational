# Agent Task Schedule — @exponentialgrowthformula_
**Maintained by:** Strategy Director
**Last updated:** 2026-04-12

This document maps every recurring task across all agents — what runs, when, what it needs, what it produces, and what it unblocks. It is the operational calendar for the pipeline.

This document is for the Strategy Director and Claude (as orchestrator). Individual agents do not need to read it — their instruction files in `.claude/agents/` contain their full operating detail.

---

## How to Use This Document

There are two recurring rhythms running in parallel:

1. **The Content Pipeline** — triggered per content piece, runs sequentially through the pipeline
2. **The Intelligence Loop** — runs weekly regardless of content production, recalibrates all agents

Both rhythms are documented below. Start here when deciding what to run next.

---

## The Weekly Rhythm (High-Level)

```
WEEKLY INTELLIGENCE LOOP (runs every week)
─────────────────────────────────────────
Publishing → post-log → Analyst
Content Writer → community-sentiment-report → Analyst
Analyst → processes data → Weekly Agent Insight Briefs → all agents
Researcher → reads brief → Trend Report + Raw Hashtag Observations
SEO Agent → reads brief → Discoverability library updates

CONTENT PIPELINE (runs per content piece, sequentially)
────────────────────────────────────────────────────────
Researcher (Content Opportunity Brief)
  ↓
SEO Agent (Discoverability Brief)          ← waits for: Content Opportunity Brief
  ↓
Content Writer (Content Brief)             ← waits for: Content Opportunity Brief + Discoverability Brief
  ↓  [Strategy Director approval gate]
Designer (Visual assets + Delivery Note)   ← waits for: approved Content Brief
  ↓
Asset Manager (Intake + verification)      ← waits for: Asset Delivery Note
  ↓
Publishing (Schedule + publish)            ← waits for: approved asset package
  ↓
Analyst (Post-publication intake)          ← triggered by: post going live
```

---

## Tasks by Cadence

### Weekly — Intelligence Loop

These tasks run every week on a fixed cadence. They are not triggered by content production — they run regardless.

---

#### ANALYST — Weekly Agent Insight Briefs
**Trigger:** Every 7 days after the first post goes live
**Runs after:** Post-publication log received from Publishing + Community Sentiment Report received from Content Writer
**Inputs:**
- `/publishing/post-log.md`
- `/content-briefs/community-sentiment-report-[cycle].md`
- `/analytics/kpi-dashboard.md`
- `/analytics/test-log.md` (if tests are active)

**Outputs:**
- `/analytics/insight-brief-[cycle]-researcher.md`
- `/analytics/insight-brief-[cycle]-seo.md`
- `/analytics/insight-brief-[cycle]-writer.md`
- `/analytics/insight-brief-[cycle]-designer.md`
- `/analytics/insight-brief-[cycle]-publishing.md`
- `/analytics/kpi-dashboard.md` (updated)

**Unblocks:** All agents — no agent should begin a new cycle's work without reading their latest brief
**Skill:** `analyst-brief` (required)

---

#### RESEARCHER — Weekly Trend Report
**Trigger:** Weekly, after reading the Analyst's Researcher-specific insight brief
**Runs after:** Analyst Insight Brief (Researcher) is delivered
**Inputs:**
- `/analytics/insight-brief-[cycle]-researcher.md`
- `/research/monitored-accounts.md`
- `/research/knowledge-base.md`

**Outputs:**
- `/research/trend-report-[NNN].md` (new file each cycle)
- `/research/raw-hashtag-observations-[NNN].md` (new file each cycle)
- `/research/knowledge-base.md` (updated with new sources if found)

**Unblocks:** SEO Agent (2B), Content Writer (next content batch)

---

#### SEO AGENT — Hashtag & Keyword Library Maintenance
**Trigger:** Weekly, after reading the Analyst's SEO-specific insight brief and receiving new Researcher observations
**Runs after:** Analyst Insight Brief (SEO) + Researcher's Raw Hashtag Observations
**Inputs:**
- `/analytics/insight-brief-[cycle]-seo.md`
- `/research/raw-hashtag-observations-[NNN].md`
- `/seo/hashtags-instagram.md`
- `/seo/keywords-instagram.md`

**Outputs:**
- `/seo/hashtags-instagram.md` (updated — retire underperformers, add new)
- `/seo/keywords-instagram.md` (updated if warranted)

**Unblocks:** Content Writer (next content batch)

---

#### CONTENT WRITER — Community Sentiment Report
**Trigger:** Weekly, after monitoring comments and DMs for the week
**Runs after:** At least one post has been live for 7 days
**Inputs:**
- Community comments and DMs (direct from platform — human-retrieved)
- `/content-briefs/response-templates.md`

**Outputs:**
- `/content-briefs/community-sentiment-report-[cycle].md`

**Unblocks:** Analyst (feeds into weekly brief), Researcher (sentiment flags may surface new content opportunities)

---

### Per Content Piece — Content Pipeline

These tasks run once per content piece, in sequence. Each stage waits for the previous stage's output.

---

#### STAGE 1 — RESEARCHER: Content Opportunity Brief
**Trigger:** New content piece needed (per content calendar)
**Runs after:** Latest Trend Report exists + Analyst Insight Brief (Researcher) has been read
**Inputs:**
- `/research/trend-report-[NNN].md` (most recent)
- `/research/knowledge-base.md`
- `/research/strategy-brief.md`
- `/analytics/insight-brief-[cycle]-researcher.md`

**Outputs:**
- `/research/content-opportunity-brief-[NNN].md`

**Unblocks:** SEO Agent (Stage 2)

---

#### STAGE 2 — SEO AGENT: Discoverability Brief
**Trigger:** Content Opportunity Brief delivered by Researcher
**Runs after:** Stage 1 complete
**Inputs:**
- `/research/content-opportunity-brief-[NNN].md`
- `/seo/hashtags-instagram.md`
- `/seo/keywords-instagram.md`
- `/seo/instagram-discoverability-guide.md`
- `/analytics/insight-brief-[cycle]-seo.md`

**Outputs:**
- `/seo/discoverability-brief-[NNN].md`

**Unblocks:** Content Writer (Stage 3)

---

#### STAGE 3 — CONTENT WRITER: Content Brief
**Trigger:** Content Opportunity Brief + Discoverability Brief both available
**Runs after:** Stage 1 and Stage 2 complete
**Inputs:**
- `/research/content-opportunity-brief-[NNN].md`
- `/seo/discoverability-brief-[NNN].md`
- `/research/knowledge-base.md`
- `/assets/brand/brand-style-guide.md` (voice reference)
- `/analytics/insight-brief-[cycle]-writer.md`

**Outputs:**
- `/content-briefs/content-brief-[NNN].md` (with Discoverability Brief attached)

**Gate:** Strategy Director reviews and approves Content Brief before it moves to Designer
**Skill:** `content-brief` (required)
**Unblocks:** Designer (Stage 4) — only after Strategy Director approval

---

#### STAGE 4 — DESIGNER: Visual Assets + Delivery Note
**Trigger:** Approved Content Brief received
**Runs after:** Stage 3 complete + Strategy Director approval
**Inputs:**
- `/content-briefs/content-brief-[NNN].md`
- `/assets/brand/brand-style-guide.md`
- `/assets/brand/platform-design-spec.md`
- `/assets/templates/template-suite-v1.md`
- `/assets/backgrounds/` (images and video-loops)
- `/analytics/insight-brief-[cycle]-designer.md`

**Outputs:**
- Visual asset files → delivered to Asset Manager
- `/content-briefs/asset-delivery-note-[NNN].md`

**Skill:** `canvas-design` (required)
**Unblocks:** Asset Manager (Stage 5)

---

#### STAGE 5 — ASSET MANAGER: Intake & Verification
**Trigger:** Asset Delivery Note received from Designer
**Runs after:** Stage 4 complete
**Inputs:**
- `/content-briefs/asset-delivery-note-[NNN].md`
- `/content-briefs/content-brief-[NNN].md` (for verification)
- `/assets/brand/platform-design-spec.md` (compliance check)

**Outputs:**
- `/assets/staging/` (verified asset package ready for Publishing)
- `/assets/asset-status-log.md` (updated)

**Unblocks:** Publishing (Stage 6)

---

#### STAGE 6 — PUBLISHING: Schedule & Publish
**Trigger:** Approved asset package confirmed by Asset Manager
**Runs after:** Stage 5 complete + Strategy Director approval of content calendar slot
**Inputs:**
- `/assets/staging/` (asset package)
- `/seo/discoverability-brief-[NNN].md` (hashtag placement)
- `/publishing/content-calendar.md`
- `/publishing/publishing-checklist.md`
- `/publishing/platform-guides/instagram.md`
- `/analytics/insight-brief-[cycle]-publishing.md`
- `/research/trend-report-[NNN].md` (most recent — Trending Audio section)

**Outputs:**
- Published post (live on platform)
- `/publishing/post-log.md` (updated with new entry — include audio track used)
- `/publishing/content-calendar.md` (updated)
- Assets moved: `/assets/staging/` → `/assets/published/[YYYY-MM]/instagram/`

**Audio attachment — manual step (all 3 formats):**
Instagram's API blocks licensed/trending music from API-based publishing. Audio must be attached manually at publish time via the Instagram app. Workflow:
1. Upload video/carousel via API (automated)
2. At publish time, open Instagram app
3. Reference the Trending Audio shortlist in the most recent Trend Report
4. Select the most appropriate track from the shortlist, cross-checked against what Instagram's in-app audio browser is currently showing as trending
5. Attach audio and publish (~30 seconds)
6. Log the track used in the post-log entry

**Unblocks:** Analyst (Stage 7)

---

#### STAGE 7 — ANALYST: Post-Publication Intake
**Trigger:** Post goes live (post-log entry received from Publishing)
**Runs after:** Stage 6 complete
**Inputs:**
- `/publishing/post-log.md` (new entry)

**Outputs:**
- `/analytics/kpi-dashboard.md` (new post entry added)

**Follow-up:** Pull performance data at 24h, 48h, and 7 days post-publish. Feed into next weekly brief.

---

### Monthly Tasks

---

#### ANALYST — Monthly Performance Report
**Trigger:** First week of each calendar month
**Inputs:**
- `/analytics/kpi-dashboard.md`
- `/analytics/test-log.md`
- All weekly insight briefs from the prior month

**Outputs:**
- Monthly Performance Report → Strategy Director (format per analyst.md)

**Gate:** Delivered to Strategy Director for review. Strategic recommendations route to a decision before the next month's content direction is set.
**Skills:** `analyst-brief` + `internal-comms` (both required)

---

#### SEO AGENT — Full Keyword & Hashtag Audit
**Trigger:** Monthly, aligned with Analyst's Monthly Performance Report
**Inputs:**
- `/analytics/kpi-dashboard.md` (monthly data)
- `/seo/hashtags-instagram.md`
- `/seo/keywords-instagram.md`

**Outputs:**
- `/seo/hashtags-instagram.md` (full audit update)
- `/seo/keywords-instagram.md` (full audit update)
- Discoverability Audit Report → Analyst

---

#### RESEARCHER — Monitored Accounts Review
**Trigger:** Monthly
**Inputs:**
- `/research/monitored-accounts.md`
- Current account activity (web research)

**Outputs:**
- `/research/monitored-accounts.md` (updated follower counts, new observations)
- Escalation to Strategy Director if any account additions/removals are recommended

---

## Strategy Director Approval Gates

These are the points in the pipeline where work stops until you review and approve:

| Gate | Triggered By | Blocks |
|---|---|---|
| Brand Style Guide approval | Designer completes first draft | All asset production (Stage 4+) |
| Content Brief approval | Content Writer delivers brief | Designer (Stage 4) |
| Content calendar approval | Publishing builds initial calendar | All scheduling |
| Monthly Performance Report review | Analyst delivers report | Next month's strategic direction |
| Monitored accounts changes | Researcher flags additions/removals | Competitor research accuracy |

---

## A/B Testing — Task Overlay

When an active test is running, it overlays the content pipeline without replacing it:

| Task | Owner | Trigger | Notes |
|---|---|---|---|
| Design test hypothesis | Analyst | After 6+ posts published; pattern observed | |
| Deliver Test Brief | Analyst → Content Writer | Per test cycle | File: `/analytics/test-brief-[NNN].md` |
| Produce test variants | Content Writer | Test Brief received | Label variants with test ID in Content Brief |
| Schedule variants | Publishing | Per test brief timing | Both variants must publish within test window |
| Evaluate results | Analyst | After test window closes | Findings delivered via next Weekly Insight Brief |
| Update test log | Analyst | After evaluation | File: `/analytics/test-log.md` |
