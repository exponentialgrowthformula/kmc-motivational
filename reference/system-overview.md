# Social Media Agent System — Overview & Operations Guide

## Purpose

This document describes the full multi-agent system for managing a faceless motivational quote account across social media platforms. The account theme centers on personal and business growth, manifestation, gratitude, abundance mindset, confidence, and self-worth. All content is faceless, relying on text overlays with inspirational background images and videos.

This document covers agent roles, the content pipeline, the intelligence loop, handoff protocols, collaboration rules, and escalation paths.

---

## Account Theme & Voice

**Niche:** Motivational quotes — personal growth, business growth, manifestation, gratitude, abundance mindset, confidence, self-worth.

**Format:** Faceless. All content uses text overlays on background images or video loops. No on-camera presence.

**Platforms:** Instagram (Posts, Reels, Stories, Carousels), TikTok, YouTube Shorts, Pinterest.

**Three production formats are in active use for this account:**

---

**Format A — Slide-Style Video Reel** (`cr-` prefix)
A single MP4 uploaded as an Instagram Reel. Text slides fade in, hold, and fade out sequentially over a continuously looping background video. There are no pagination dots, no slide counter, and no user swipe interaction — the viewer watches passively at a fixed pace. This is **not** a native Instagram Carousel. Chosen because Reels receive significantly broader algorithmic distribution (Explore, interest graph, non-follower reach) compared to native Carousels.

File naming: `cr-[scene-code]-[pillar-code]-[NNN].mp4` + `cr-[scene-code]-[pillar-code]-[NNN]-cover.jpg`

---

**Format B — Audio Carousel Post** (`cp-` prefix)
Six static JPEG slides uploaded as a native Instagram Carousel POST (not a Reel). Audio is added natively in the Instagram app at the point of posting. Adding music to an image carousel makes it eligible to appear in the Reels tab, expanding reach beyond the standard carousel audience. This is a confirmed Instagram platform behaviour. Requires a Creator account for full music library access.

File naming: `cp-[scene-code]-[pillar-code]-[NNN]-slide-[NN].jpg`

---

**Format C — Stacked Reveal Video Reel** (`sr-` prefix)
A single MP4 uploaded as an Instagram Reel. Text lines appear progressively on screen — each line builds below the previous at timed intervals (~1–1.5 seconds per reveal) until the full message is simultaneously visible. The viewer watches all text accumulate on a single continuous frame. No slide transitions. The background runs uninterrupted. This is the primary format for new content going forward.

Content must be written specifically for this format: individual lines of 5–8 words maximum, 4–8 lines total, that form a coherent and resonant whole when read together simultaneously.

File naming: `sr-[scene-code]-[pillar-code]-[NNN].mp4` + `sr-[scene-code]-[pillar-code]-[NNN]-cover.jpg`

---

**Format selection guidance:**
- New content: produce Format C (stacked reveal) as primary, Format B (audio carousel) as companion
- Format A (slide-style video) remains in the library as an A/B test asset and legacy format
- All three formats share the same background assets, audio routing, and caption/hashtag set

**Voice:** Warm, empowering, direct. Feels like a trusted mentor, not a hype account. Rooted in credible frameworks and respected thought leaders within the niche.

---

## Agent Roster

| Agent | Primary Function |
|---|---|
| Researcher | External intelligence — trends, competitors, viral patterns, niche knowledge base |
| SEO & Discoverability | Platform search optimization, keyword strategy, hashtag systems |
| Content Writer | All written content — overlays, captions, hooks, CTAs, community engagement |
| Designer | All visual output — layouts, backgrounds, templates, animations, brand identity |
| Asset Manager | Asset library organization, version control, template management |
| Publishing | Scheduling, platform optimization, cross-posting strategy |
| Analyst | Internal performance tracking, A/B testing design, agent insight briefs |

**Strategy & Creative Director:** Human (you). All escalations route here. Final approval on brand decisions, strategic pivots, and new content directions.

---

## Core Content Pipeline

This is the sequential flow every piece of content follows from ideation to publication.

```
Researcher → SEO Agent → Content Writer → Designer → Asset Manager → Publishing
```

### Stage Details

**1. Researcher**
Monitors external landscape. Delivers Trend Reports and Content Opportunity Briefs on a defined cadence. Flags trending audio, viral patterns, competitor strategies, and niche thought leadership. Outputs feed into the SEO Agent and Content Writer.

**2. SEO & Discoverability Agent**
Takes Researcher inputs and develops platform-specific keyword libraries and hashtag sets. Delivers Discoverability Briefs that accompany every piece of content into the Writer stage.

**3. Content Writer**
Receives the Content Opportunity Brief (from Researcher) and Discoverability Brief (from SEO Agent). Produces the **Content Brief** — the master handoff document to the Designer. Also monitors and responds to comments and DMs, and delivers a weekly Community Sentiment Report.

**4. Designer**
Receives the Content Brief as a fixed input. Produces all visual assets — backgrounds, layouts, animations, text placement specifications. Delivers completed assets to the Asset Manager. Never alters the written content in the Content Brief without Writer approval.

**5. Asset Manager**
Receives completed assets from the Designer. Organizes, versions, and stores all files in the master asset library. Confirms assets are ready and properly labeled before Publishing retrieves them.

**6. Publishing**
Retrieves approved assets from the Asset Manager. Executes the content calendar, optimizes for platform-specific features, and manages the cross-posting strategy. Delivers post-publication confirmation back to the Analyst.

---

## Intelligence Loop

The Intelligence Loop runs in parallel to the Content Pipeline on a recurring weekly cadence. It continuously recalibrates the pipeline based on internal performance data.

```
Analyst → Weekly Agent Insight Briefs → Researcher, SEO, Writer, Designer, Publishing
        → Monthly Performance Reports → Strategy Director (you)
```

### Carousel Reel Metrics — What Applies to This Format

Because the primary content format is a Reel video (not a native Instagram Carousel), the following metrics apply. Agents must not reference or attempt to track carousel-specific metrics that do not exist for Reel uploads.

**Algorithmic signal hierarchy for Reels (in order of weight):**
1. **Watch time / completion rate** — the primary ranking factor. 70%+ completion is the threshold that triggers significantly wider distribution.
2. **DM shares (sends per reach)** — the strongest signal for non-follower reach. For a new account where every viewer is a non-follower, shareability is the highest-leverage secondary signal. Optimize content for "would someone forward this in a DM?"
3. **Saves** — a meaningful secondary signal, roughly 3x the weight of a like, but lower priority than DM shares for distribution to new audiences.
4. **Likes, comments** — positive signals but lower weight than the above.

**Track these:**
- Watch time (average and total)
- Completion rate (% of viewers who watch to the end)
- Sends / DM shares
- Saves
- Shares (public)
- Reach (total and non-follower %)
- Profile visits from Reel
- Follows attributed to Reel

**Do not track / do not exist for this format:**
- Swipe-through rate (no user swipe in a Reel)
- Per-slide drop-off rate (no per-slide analytics in a Reel)
- Carousel reach vs. Reel reach (this format is always a Reel)

---

### Video Animation Format Reference

See the three-format definitions under Account Theme & Voice above. The following are production standards that apply across all video formats.

**Format C (Stacked Reveal) — production rules:**
- 1–1.5 seconds per line reveal; each line 5–8 words maximum
- Sync each reveal to a beat point in the audio track (standard practice)
- Once all text is fully revealed, hold no more than 2–3 seconds before closing
- Total Reel target length: 15–30 seconds
- Content must be written specifically for this format — see Content Writer format guidance

**Format A (Slide-Style) — production rules:**
- Fade in / hold / fade out per slide (0.5s / variable / 0.5s)
- Per-slide hold durations based on word count at ~3.5 words/second passive read rate
- Background runs continuously across all slides without restarting
- Total Reel target length: 20–35 seconds

**Not produced: Dynamic placement**
Text appearing in different screen positions per slide. Not used for this account — adds search friction without measurable engagement benefit for text-forward content.

**Background motion standard (all video formats):**
- Slow drift or zoom (10–15% total movement across clip duration)
- Organic natural footage preferred (fire, water, fog, light through trees) — aligns with Dark Earth aesthetic
- Slow motion footage is ideal: communicates intentionality and elevates aesthetic register
- Parallax layering (background drifts, text stays visually anchored) is the highest-production option
- Hard rule: background motion speed must not exceed the pace at which the text is meant to be read

---

### Analyst Deliverables

- **Weekly Agent Insight Briefs** — targeted, role-specific memos delivered to each agent containing only actionable findings relevant to their function. Examples:
  - To Researcher: "Gratitude content is outperforming confidence content 3:1 — prioritize gratitude-adjacent trends this cycle."
  - To Writer: "Second-line hooks are outperforming question hooks — shift default hook format."
  - To Designer: "Video loop backgrounds are outperforming static images — reduce static output."
  - To SEO: "Pinterest keyword 'morning affirmations' is spiking — increase targeting this week."
  - To Publishing: "Tuesday 7am and Thursday 6pm are highest-engagement windows — consolidate posting times."

- **Monthly Performance Reports** — comprehensive KPI summaries delivered to the Strategy Director for big-picture strategic decisions.

---

## The Content Brief — Master Handoff Document

The Content Brief is the most critical document in the pipeline. It is produced by the Content Writer and received by the Designer. It contains:

| Field | Owner | Description |
|---|---|---|
| Content Theme | Writer | The core message or quote |
| Overlay Text | Writer | Exact words to appear on screen, in hierarchy order (Headline → Subtext → CTA) |
| Emotional Tone | Writer | The intended feeling the content should evoke |
| Caption | Writer | Full caption with hashtag placeholders |
| Hook | Writer | The opening line/hook for video formats |
| CTA | Writer | Call-to-action (comment prompt, save prompt, etc.) |
| Platform Targets | Writer | Which platforms and formats this asset is for |
| SEO Tags | SEO Agent | Hashtag set and keywords to embed |
| Background Direction | Writer | Loose creative direction (e.g., "soft nature, warm tones, movement preferred") |
| Design Notes | — | Completed by Designer upon delivery |
| Test Flag | Analyst | Marks if this content is part of an active A/B test |

**Rule:** The Designer never changes overlay text without Content Writer approval. The Writer never specifies fonts, colors, or placement — those belong to the Designer.

---

## A/B Testing Protocol

Testing is **Analyst-designed, Writer-executed.**

1. Analyst identifies a test hypothesis (e.g., "question hooks outperform statement hooks for confidence content").
2. Analyst produces a **Test Brief** — defines variants, success metrics, duration, and which content slots to use.
3. Test Brief is delivered to the Content Writer.
4. Writer produces content variants exactly per the brief. No deviation from test parameters.
5. Publishing schedules variants per the brief's timing requirements.
6. Analyst evaluates results and delivers findings to the relevant agents via the weekly Insight Brief.

### Format A/B Testing (Video Animation)

Testing video animation formats (e.g., stacked reveal vs. slide-style) follows the same Analyst-designed protocol with additional constraints:

**Rule: One variable at a time.** When testing format, all other variables must be identical — same quote text, same background footage, same audio track, different animation format only.

**New account testing method — Manual Rotation:**
Instagram's native Trial Reels feature withholds test content from followers to isolate non-follower response. For a new account where every viewer is already a non-follower, Trial Reels provides no meaningful isolation benefit. Use manual rotation instead:
- Publish Format A and Format B as regular Reels in alternating slots
- Compare performance at 48–72 hours after posting
- Evaluate on: completion rate, sends/DM shares, saves

**Trial Reels (activate once follower base is established):**
Once the account has a meaningful follower base, migrate format testing to Instagram's native Trial Reels. Compare Trial results only against other Trial results — not against regular Reels, which receive more reach due to the follower engagement signal.

**Priority test:** Format C (stacked reveal) vs. Format A (slide-style video). This is the first format test the Analyst should design once a posting cadence is established. Content-001 "You Are Not Behind" has Format A and Format B assets already produced. Format C for the same content piece is pending production — making content-001 the natural first A/B test candidate.

---

## Platform Design Specifications

The Designer maintains a living **Platform Design Specification** document covering:

- Optimal dimensions and aspect ratios per format
- Safe zones for text placement
- Animation and transition guidelines per platform
- Format-specific best practices (Post, Reel, Story, Carousel, TikTok, YouTube Short, Pinterest Pin)

This document is updated whenever platform specifications change. Publishing references it for scheduling context but has no authority to override design decisions. The Strategy Director approves major updates.

---

## Escalation Rules

Every agent has a defined escalation path. The following decisions are **never made autonomously** — they always route to the Strategy Director:

- Changes to brand voice or content pillars
- New platform expansion
- Major shifts in content format or theme
- Approval of the initial Brand Style Guide and Platform Design Specification
- Any content that feels outside the niche boundaries
- Responses to sensitive or negative community interactions beyond standard templates
- A/B test results that suggest a strategic pivot

---

## Agent Collaboration Quick Reference

| From | To | Document / Trigger |
|---|---|---|
| Researcher | Content Writer | Trend Report, Content Opportunity Brief |
| Researcher | SEO Agent | Raw trend and hashtag observations |
| SEO Agent | Content Writer | Discoverability Brief |
| Content Writer | Designer | Content Brief |
| Content Writer | Analyst | Community Sentiment Report (weekly) |
| Designer | Asset Manager | Completed visual assets |
| Asset Manager | Publishing | Approved, organized asset package |
| Publishing | Analyst | Post-publication confirmation and metadata |
| Analyst | All Agents | Weekly Agent Insight Briefs |
| Analyst | Strategy Director | Monthly Performance Report |
| Any Agent | Strategy Director | Escalation (see Escalation Rules above) |

---

## File & Folder Conventions

All agents should reference and store files using the following structure:

```
/research/          — Trend reports, competitor analysis, niche knowledge base
/seo/               — Keyword libraries, hashtag sets, discoverability briefs
/content-briefs/    — All Content Briefs, organized by date and platform
/assets/            — Master asset library (managed by Asset Manager)
  /templates/       — Reusable design templates
  /backgrounds/     — Approved background images and video loops
  /published/       — Archive of all published post assets
/analytics/         — KPI dashboards, test briefs, insight briefs, performance reports
/publishing/        — Content calendar, scheduling queue, platform guides
```

---

## Guiding Principles

1. **The Content Brief is law.** No agent modifies another agent's designated fields without explicit approval.
2. **External intel stays with the Researcher. Internal data stays with the Analyst.** These functions do not overlap.
3. **Testing is designed by the Analyst, executed by the Writer.** The Writer does not initiate tests.
4. **The Designer owns how it looks. The Writer owns what it says.** Always.
5. **The Intelligence Loop feeds the Pipeline.** Analyst insight briefs are not optional reading — agents act on them.
6. **Escalate before deviating.** When in doubt, route to the Strategy Director rather than making an autonomous judgment call.
