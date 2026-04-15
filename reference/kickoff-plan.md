# Project Kickoff Plan — Exponential Growth Formula
**Account:** @exponentialgrowthformula_ (Instagram)
**Status:** Account created. No research, documents, or assets exist.
**Objective:** Build the full agent system from zero to first published content.

---

## How to Read This Plan

Tasks are organized into **four phases**. Each phase has a gate — nothing in the next phase starts until the gate is cleared. Every task is assigned to either you (Strategy Director) or a specific agent. Agent tasks are the prompts you will run in your Claude Code project.

**Owner codes:**
- `[YOU]` — Must be completed by you. Cannot be delegated.
- `[RESEARCHER]` — Run via the Researcher agent
- `[SEO]` — Run via the SEO & Discoverability agent
- `[WRITER]` — Run via the Content Writer agent
- `[DESIGNER]` — Run via the Designer agent
- `[ASSET MGR]` — Run via the Asset Manager agent
- `[PUBLISHING]` — Run via the Publishing agent
- `[ANALYST]` — Run via the Analyst agent

---

## Phase 1 — Foundation
**Goal:** Establish the strategic decisions only you can make, and give agents the inputs they need to begin work.
**Gate:** All `[YOU]` tasks in this phase must be complete before any agent work begins.

---

### 1.1 — Define Account Strategy `[YOU]`

This is the most important input in the entire project. Every agent will reference these decisions. Write a short Strategy Brief (1–2 pages, can be a simple markdown file) that answers the following:

- **Mission statement:** What is this account here to do for its audience? (One sentence.)
- **Content pillars:** Which of the six themes are primary, which are secondary? Suggested starting pillars: Manifestation, Abundance Mindset, Confidence & Self-Worth, Gratitude, Personal Growth, Business Growth.
- **Target audience:** Who specifically is this for? (e.g., women 25–40 building businesses, people early in a self-development journey, etc.)
- **Tone guardrails:** 3–5 words that describe the voice. 3–5 words that describe what it should never sound like.
- **Posting cadence intention:** How many posts per week are you targeting to start? (Recommended starting point: 1 Reel + 1 static post + 1 carousel per week on Instagram.)
- **Accounts you admire:** 3–5 Instagram accounts in or adjacent to this niche whose aesthetic or voice resonates with you. These become the Researcher's starting competitor list.

**Save as:** `/research/strategy-brief.md`

---

### 1.2 — Define Visual Direction `[YOU]`

Before the Designer can build the brand, you need to give them a starting aesthetic direction. This does not need to be detailed — the Designer will develop it fully. You just need to answer:

- **3 words that describe how you want the feed to feel visually.** (e.g., "warm, elevated, expansive" or "clean, bold, minimal")
- **Light or dark aesthetic preference?** (or open to the Designer's recommendation?)
- **Any visual references?** Pinterest board link, screenshot, or account example of a visual style you like.
- **Any hard no's?** Colors, styles, or aesthetics you specifically don't want.

**Save as:** `/assets/visual-direction-brief.md`

---

### 1.3 — Confirm Platform Priority `[YOU]`

You currently have Instagram. Before the SEO agent builds keyword libraries for four platforms, confirm:

- Is Instagram the sole focus for launch, or are you launching on multiple platforms simultaneously?
- **Recommended approach:** Start with Instagram only. Prove the content system works, build the asset library, then expand to TikTok and Pinterest in Phase 3 or 4.

Document your decision in the Strategy Brief (1.1) or as a separate note. This gates the scope of the SEO Agent's initial work.

---

### 1.4 — Set Up Project Folder Structure `[YOU]`

Create the following folder structure in your Claude Code project before running any agents:

```
/research/
/seo/
/content-briefs/
/assets/
  /backgrounds/
    /images/
    /video-loops/
  /templates/
  /published/
  /brand/
    /fonts/
/analytics/
/publishing/
  /platform-guides/
```

This structure is referenced by all agent instruction files. Agents will fail to organize outputs correctly if it doesn't exist.

---

**PHASE 1 GATE:** Strategy Brief written ✓ | Visual Direction Brief written ✓ | Platform decision made ✓ | Folder structure created ✓

---

## Phase 2 — Research & Brand Building
**Goal:** Run the Researcher, SEO, and Designer agents in parallel to build the intelligence and brand foundation before any content is written.
**Gate:** All three tracks must complete before Phase 3 begins.

These three tracks can run simultaneously — they don't depend on each other.

---

### Track A — External Research

#### 2A.1 — Initial Competitor & Niche Research `[RESEARCHER]`

**Prompt:**
```
You are the Researcher agent. Reference your instructions in 01_agent_researcher.md.

Your first task is the initial research sprint for a new account: @exponentialgrowthformula_ on Instagram.

Inputs available to you:
- Strategy Brief: /research/strategy-brief.md
- Visual Direction Brief: /assets/visual-direction-brief.md

Your deliverables for this sprint:

1. Build the initial monitored accounts list — identify 10–15 Instagram accounts in the motivational quote / manifestation / abundance / self-growth niche that will serve as ongoing competitive references. Include a mix of large accounts (1M+), mid-tier (100K–1M), and emerging (10K–100K). Save as: /research/monitored-accounts.md

2. Deliver the first Trend Report covering: what content formats are currently gaining traction in this niche, viral content patterns you observe, trending audio relevant to the aesthetic, and 3–5 content opportunity briefs for initial post concepts. Save as: /research/trend-report-001.md

3. Begin the Niche Knowledge Base — compile a reference list of the most credible frameworks, thought leaders, books, and established concepts within the account's six themes. Save as: /research/knowledge-base.md
```

---

#### 2A.2 — Initial Raw Hashtag Observations `[RESEARCHER]`

**Prompt:**
```
You are the Researcher agent. Reference 01_agent_researcher.md.

Based on your initial research in 2A.1, compile your raw hashtag observations for the SEO agent. Do not build a hashtag strategy — observe and document.

For Instagram, note:
- Which hashtags are appearing on high-performing posts in this niche
- Which hashtags seem oversaturated vs. actively engaged
- Any hashtag clusters that seem to travel together on top-performing posts

Save as: /research/raw-hashtag-observations.md
Deliver to: SEO Agent (input for Task 2B.1)
```

---

### Track B — SEO & Discoverability Foundation

*Wait for 2A.2 to complete before starting 2B.1.*

#### 2B.1 — Build Initial Keyword & Hashtag System `[SEO]`

**Prompt:**
```
You are the SEO & Discoverability agent. Reference 02_agent_seo.md.

Inputs:
- Strategy Brief: /research/strategy-brief.md
- Raw Hashtag Observations from Researcher: /research/raw-hashtag-observations.md

Platform scope for launch: Instagram only (per Strategy Director decision).

Your deliverables:

1. Instagram Keyword Library — core keywords by content pillar (Manifestation, Abundance, Confidence, Gratitude, Personal Growth, Business Growth). Save as: /seo/keywords-instagram.md

2. Instagram Hashtag Sets — build tiered hashtag sets (broad / niche / micro) for each content pillar. Each set should contain 20–30 hashtags, ready to be used or trimmed per post. Save as: /seo/hashtags-instagram.md

3. Initial Instagram Discoverability Guide — a brief reference document covering current Instagram search behavior, hashtag placement best practices (caption vs. first comment), alt text usage, and keyword placement in captions. Save as: /seo/instagram-discoverability-guide.md
```

---

### Track C — Brand Identity

#### 2C.1 — Brand Style Guide & Visual Identity `[DESIGNER]`

**Prompt:**
```
You are the Designer agent. Reference 04_agent_designer.md.

Your first task is to establish the visual identity for @exponentialgrowthformula_ — a faceless motivational quote account on Instagram. All content will use text overlays on background images and video loops. No on-camera presence.

Inputs:
- Strategy Brief: /research/strategy-brief.md
- Visual Direction Brief: /assets/visual-direction-brief.md

Deliverable: Brand Style Guide covering:
- Color palette (primary, secondary, accent — with hex codes and usage rules)
- Font system (primary display font for quotes, secondary font for subtext/captions, accent font if applicable — with sizing scale)
- Background aesthetic guidelines (what types of imagery align with the brand: nature, abstract, celestial, architectural, etc.)
- Motion principles (what kind of animation or movement feels on-brand)
- Composition principles (how text should relate to the background — centered, offset, layered, etc.)
- Do's and don'ts

This Style Guide requires Strategy Director approval before any assets are produced. Flag it for review when complete.

Save as: /assets/brand/brand-style-guide.md
```

**After 2C.1:** Review the Brand Style Guide. Approve or provide revision notes. This is a `[YOU]` gate before 2C.2 can proceed.

---

#### 2C.2 — Platform Design Specification `[DESIGNER]`

**Prompt:**
```
You are the Designer agent. Reference 04_agent_designer.md.

The Brand Style Guide has been approved. Now build the Platform Design Specification for Instagram (launch platform).

Cover all active Instagram formats:
- Feed Post (square and portrait)
- Reel (9:16)
- Story (9:16)
- Carousel (frame dimensions, cover frame rules)

For each format document:
- Exact pixel dimensions
- Safe zones for text placement (accounting for UI overlays — likes, captions, profile info)
- Font size minimums for legibility on mobile
- Animation constraints or recommendations
- Any platform-specific design gotchas to avoid

Save as: /assets/brand/platform-design-spec.md
```

---

#### 2C.3 — Initial Template Suite `[DESIGNER]`

**Prompt:**
```
You are the Designer agent. Reference 04_agent_designer.md.

With the Brand Style Guide and Platform Design Specification complete, create the initial template suite for Instagram launch content.

Produce design specifications (layouts, not final production files) for:
1. Single quote post — portrait format (feed)
2. Single quote Reel — 9:16, with text entrance animation spec
3. Carousel template — cover frame + interior frame design
4. Story template — quote + CTA layout

For each template, document:
- Layout structure and grid
- Text placement zones (headline, subtext, CTA)
- Background treatment
- Font sizes per the Style Guide scale
- Any animation or motion spec

These specifications will be used to produce actual assets once content briefs are issued.

Save as: /assets/templates/template-suite-v1.md
```

---

#### 2C.4 — Asset Library Initialization `[ASSET MGR]`

**Prompt:**
```
You are the Asset Manager agent. Reference 05_agent_asset_manager.md.

The brand foundation documents are now in place. Your task is to initialize the asset library and tracking system.

1. Confirm the folder structure exists as specified in the System Overview (/assets/ hierarchy).

2. Create the Asset Status Log — an ongoing tracking file for all assets moving through the pipeline. Set it up with headers and the status categories defined in your instructions (In Production, Delivered, Approved, Published, Retired). Start with entries for the brand documents now in place.

3. Create a Background Sourcing Brief — a reference document the Strategy Director can use to source initial background images and video loops. Based on the Brand Style Guide aesthetic, specify: what types of imagery to look for, recommended free sources (Unsplash, Pexels, Pixabay, Mixkit for video), search terms to use, and what to avoid.

Save status log as: /assets/asset-status-log.md
Save sourcing brief as: /assets/background-sourcing-brief.md
```

---

#### 2C.5 — Source Initial Background Assets `[YOU]`

Using the Background Sourcing Brief produced in 2C.4, source an initial library of background assets:

- **Target:** 20–30 background images and 10–15 video loops
- **Sources:** Unsplash, Pexels (images) and Mixkit, Pexels Video (loops)
- **Organization:** Save into `/assets/backgrounds/images/` and `/assets/backgrounds/video-loops/` with descriptive filenames (e.g., `nature-golden-field-warm.jpg`, `abstract-light-particles-loop.mp4`)

This is a `[YOU]` task because it requires browsing, downloading, and curating — judgment calls about what fits the brand that the Asset Manager will later help maintain.

---

**PHASE 2 GATE:** Monitored accounts list ✓ | Trend Report 001 ✓ | Knowledge Base started ✓ | Instagram keyword + hashtag library ✓ | Brand Style Guide approved ✓ | Platform Design Spec ✓ | Template suite ✓ | Background assets sourced ✓

---

## Phase 3 — First Content Production Run
**Goal:** Produce the first batch of 9 posts (3 weeks of content at the recommended cadence) through the full pipeline.
**Note:** Run posts through the pipeline one at a time for the first batch — this will expose any gaps in the handoff documents before you scale.

---

### 3.1 — Content Opportunity Briefs `[RESEARCHER]`

**Prompt:**
```
You are the Researcher agent. Reference 01_agent_researcher.md and the latest Trend Report at /research/trend-report-001.md.

Select the 3 strongest content opportunities from the Trend Report for the first production batch. For each one, produce a full Content Opportunity Brief using the template in your instructions.

Prioritize: one per primary content pillar (e.g., one Manifestation, one Confidence, one Gratitude) to test which resonates earliest with the audience.

Save as:
/research/content-opportunity-brief-001.md
/research/content-opportunity-brief-002.md
/research/content-opportunity-brief-003.md
```

---

### 3.2 — Discoverability Briefs `[SEO]`

**Prompt:**
```
You are the SEO & Discoverability agent. Reference 02_agent_seo.md.

Inputs: Content Opportunity Briefs 001, 002, 003 from /research/

Produce a Discoverability Brief for each of the three content pieces. Use the template in your instructions. Pull hashtag sets from /seo/hashtags-instagram.md and keywords from /seo/keywords-instagram.md.

Save as:
/seo/discoverability-brief-001.md
/seo/discoverability-brief-002.md
/seo/discoverability-brief-003.md
```

---

### 3.3 — Content Briefs `[WRITER]`

**Prompt:**
```
You are the Content Writer agent. Reference 03_agent_content_writer.md.

Inputs:
- Content Opportunity Briefs: /research/content-opportunity-brief-001.md through 003.md
- Discoverability Briefs: /seo/discoverability-brief-001.md through 003.md
- Niche Knowledge Base: /research/knowledge-base.md
- Brand Style Guide (for voice reference): /assets/brand/brand-style-guide.md

Produce Content Briefs for all three content pieces. For this first batch, produce one of each format:
- Brief 001: Instagram Feed Post (portrait)
- Brief 002: Instagram Reel
- Brief 003: Instagram Carousel (3–5 frames)

Use the Content Brief template from your instructions. Complete all text fields. Attach the relevant Discoverability Brief to each. Perform your self-QA before finalizing.

Save as:
/content-briefs/content-brief-001.md
/content-briefs/content-brief-002.md
/content-briefs/content-brief-003.md
```

**After 3.3:** Review all three Content Briefs. `[YOU]` — Read them as the Strategy Director. Do the words feel right? Does the voice match your intention? This is your creative checkpoint before anything goes to the Designer. Approve or provide revision notes.

---

### 3.4 — Visual Asset Production `[DESIGNER]`

**Prompt:**
```
You are the Designer agent. Reference 04_agent_designer.md.

Inputs:
- Content Briefs 001, 002, 003: /content-briefs/
- Brand Style Guide: /assets/brand/brand-style-guide.md
- Platform Design Specification: /assets/brand/platform-design-spec.md
- Template Suite: /assets/templates/template-suite-v1.md
- Available background assets: /assets/backgrounds/

For each Content Brief, produce:
1. Complete text overlay layout specification (font, size, weight, color, placement — exact values per the Style Guide)
2. Background selection from the approved library, with rationale
3. Animation spec if applicable (Reel only)
4. Asset Delivery Note using the template in your instructions

These are specification documents — the actual production files will be created from these specs. Ensure every asset complies with the Platform Design Specification for its format.

Save delivery notes as:
/content-briefs/asset-delivery-note-001.md
/content-briefs/asset-delivery-note-002.md
/content-briefs/asset-delivery-note-003.md
```

---

### 3.5 — Asset Intake & Verification `[ASSET MGR]`

**Prompt:**
```
You are the Asset Manager agent. Reference 05_agent_asset_manager.md.

Receive and verify the asset delivery notes from the Designer for Content Briefs 001–003.

For each delivery:
1. Verify the delivery note is complete against your intake checklist
2. Confirm the background asset referenced exists in the library
3. Update the Asset Status Log with each asset's status (mark as Approved if verified, flag any issues)
4. Prepare the asset package summary for Publishing — a clean list of what is ready, with filenames and relevant notes from the delivery note

Save asset package summaries as:
/assets/published/ (pending) — create a staging subfolder: /assets/staging/
/assets/asset-status-log.md (update)
```

---

### 3.6 — Content Calendar & Initial Schedule `[PUBLISHING]`

**Prompt:**
```
You are the Publishing agent. Reference 06_agent_publishing.md.

Inputs:
- Asset packages from Asset Manager: /assets/staging/
- Discoverability Briefs (for hashtag placement): /seo/discoverability-brief-001.md through 003.md
- Strategy Brief (for cadence): /research/strategy-brief.md

Tasks:
1. Build the initial content calendar for the first 3 weeks of posting. One post per week to start — stagger formats (Post Week 1, Reel Week 2, Carousel Week 3). Recommend specific days and times based on general Instagram best practices for this niche (the Analyst will refine timing once we have our own data). Save as: /publishing/content-calendar.md

2. Create the Instagram Platform Optimization Guide covering: current best practices for feed posts, Reels, and Carousels — cover frame selection, caption structure, hashtag placement (caption vs. first comment), alt text, and any current algorithm considerations. Save as: /publishing/platform-guides/instagram.md

3. Produce the publishing checklist for each post — a step-by-step pre-publish verification list you will use for every post going forward. Save as: /publishing/publishing-checklist.md
```

**After 3.6:** Review the content calendar. `[YOU]` — Approve the posting schedule. Confirm dates and times work for you operationally.

---

### 3.7 — Analytics Baseline Setup `[ANALYST]`

**Prompt:**
```
You are the Analyst agent. Reference 07_agent_analyst.md.

Before the first post goes live, set up the analytics infrastructure so tracking begins from day one.

Tasks:
1. Define the KPI tracking framework for this account's launch phase. Given we are starting from zero, focus on: reach per post, engagement rate, saves rate, follower growth, and profile visits. Document what each metric means in context of this niche and what benchmarks to aim for in the first 90 days. Save as: /analytics/kpi-framework.md

2. Create the KPI Dashboard template — an empty tracking sheet structured to receive data after each post goes live. Save as: /analytics/kpi-dashboard.md

3. Identify the first A/B test to run once we have at least 6 posts published. Write the Test Brief for this test. Recommended first test: hook structure (question hook vs. statement hook). Save as: /analytics/test-brief-001.md
```

---

**PHASE 3 GATE:** All three Content Briefs approved by Strategy Director ✓ | Asset delivery notes complete ✓ | Content calendar approved ✓ | Analytics infrastructure in place ✓

---

## Phase 4 — Launch & First Intelligence Cycle
**Goal:** Publish the first posts, begin the intelligence loop, and run the first weekly Analyst cycle.

---

### 4.1 — Publish Posts `[YOU]`

Using the Publishing Checklist from 3.6, publish each post on its scheduled date. For the first batch, you are executing the publishing steps manually (or via your scheduling tool of choice). The Publishing agent's role here is to have prepared everything — you are the hands.

For each post after it goes live:
- Log it in `/publishing/post-log.md`
- Note the actual publish time
- Send the post log entry to the Analyst (run Analyst task 4.2)

---

### 4.2 — Post-Publication Intake `[ANALYST]`

**Prompt (run after each post goes live):**
```
You are the Analyst agent. Reference 07_agent_analyst.md.

Post [number] has been published. Here is the post log entry: [paste entry from post-log.md]

Begin tracking this post in the KPI Dashboard. Set a reminder flag to pull performance data at 24 hours, 48 hours, and 7 days post-publish.

Update /analytics/kpi-dashboard.md with the new entry.
```

---

### 4.3 — First Weekly Intelligence Cycle `[ANALYST]`

**Run after the first post has been live for 7 days.**

**Prompt:**
```
You are the Analyst agent. Reference 07_agent_analyst.md.

It is time for the first weekly intelligence cycle. We have [number] posts live.

Available data: [paste KPI dashboard data]
Community Sentiment Report: [paste or reference if available]

Tasks:
1. Produce the first round of Weekly Agent Insight Briefs for all agents. Given limited data, be transparent about what the data shows vs. what is too early to conclude. Focus briefs on setup and readiness rather than optimization at this stage.
2. Update the KPI Dashboard with current data.
3. Flag any early signals — positive or negative — worth noting for the Strategy Director.

Save insight briefs as:
/analytics/insight-brief-week01-researcher.md
/analytics/insight-brief-week01-seo.md
/analytics/insight-brief-week01-writer.md
/analytics/insight-brief-week01-designer.md
/analytics/insight-brief-week01-publishing.md
```

---

### 4.4 — Community Monitoring Begins `[WRITER]`

**Prompt (run 24 hours after first post goes live):**
```
You are the Content Writer agent. Reference 03_agent_content_writer.md.

The first post is live. Begin your community monitoring schedule.

Tasks:
1. Check comments and DMs on @exponentialgrowthformula_ on Instagram.
2. Respond to any comments or DMs in brand voice.
3. Create the initial Response Templates document — draft 5–8 template responses for the most common interaction types in this niche (gratitude responses, "this is me" responses, requests for more content, personal story shares). These are starting points, not scripts. Save as: /content-briefs/response-templates.md
4. After the first week, produce the first Community Sentiment Report. Save as: /content-briefs/community-sentiment-report-week01.md
```

---

## Summary: Your Personal Task List

These are all tasks assigned to you across all phases, in order:

| # | Task | Phase | Blocks |
|---|---|---|---|
| 1 | Write Strategy Brief | 1.1 | Everything |
| 2 | Write Visual Direction Brief | 1.2 | Designer work |
| 3 | Confirm platform priority | 1.3 | SEO scope |
| 4 | Create folder structure | 1.4 | All agent outputs |
| 5 | Approve Brand Style Guide | After 2C.1 | Templates, assets |
| 6 | Source background assets | 2C.5 | Asset library |
| 7 | Review & approve Content Briefs | After 3.3 | Designer work |
| 8 | Approve content calendar | After 3.6 | Publishing |
| 9 | Publish posts | 4.1 | Analytics |
| 10 | Ongoing: Review weekly Analyst reports | Phase 4+ | Strategic direction |

---

## Recommended Timeline

| Week | Focus |
|---|---|
| Week 1 | Phase 1 complete — Strategy Brief, Visual Direction, folder structure |
| Week 2 | Phase 2 — Research, SEO foundation, Brand Style Guide (your approval mid-week) |
| Week 3 | Phase 2 continued — Templates, asset sourcing, Asset Manager setup |
| Week 4 | Phase 3 — First content production run through full pipeline |
| Week 5 | Phase 3 complete — Calendar approved, analytics set up |
| Week 6 | First post live. Phase 4 begins. Intelligence loop starts. |
| Week 7–8 | Posts 2 and 3 live. First weekly Analyst cycle. System running. |

---

## A Note on Running This in Claude Code

Each agent prompt in this plan is written to be dropped directly into Claude Code with the relevant agent's instruction file loaded as context. For best results:

1. Always reference the agent's instruction file in the prompt (e.g., "Reference 03_agent_content_writer.md")
2. Always specify exact file paths for inputs and outputs
3. After each task, verify the output file exists and review it before moving to the next task
4. When a task says `[YOU]` approval is required — do not skip it. These gates exist because agent output at a foundational stage (especially brand identity and content voice) shapes everything downstream.
