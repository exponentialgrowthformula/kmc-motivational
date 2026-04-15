---
name: analyst-brief
description: Produces Weekly Agent Insight Briefs and Monthly Performance Reports for the Exponential Growth Formula social media account. Use this skill whenever the Analyst agent is asked to produce, write, deliver, or generate an insight brief, weekly brief, agent brief, performance report, or monthly report. Also trigger when the Analyst is given KPI data, post performance data, or dashboard data and asked to summarize, analyze, or report on it. This skill enforces the rule that every finding must include a specific recommended action — briefs without actionable recommendations are incomplete and must not be issued.
---

# Analyst Brief Skill

## Purpose

This skill ensures every brief and report the Analyst produces is precise, role-relevant, and **actionable**. The intelligence loop only works if agents act on what the Analyst delivers. A finding without a recommended action is not analysis — it's noise.

**Core rule, non-negotiable:** Every single finding in every brief must include a `Recommended Action`. If you cannot identify a specific action for a finding, the finding is not ready to publish — either refine it until an action is clear, or hold it for the next cycle when more data is available.

---

## Account Context (Always Apply)

- **Account:** @exponentialgrowthformula_ (Instagram)
- **Niche:** Motivational quotes — personal growth, business growth, manifestation, gratitude, abundance mindset, confidence, self-worth
- **Format:** Faceless. Text overlays on background images or video loops.
- **Analyst scope:** Internal performance data only. External trends and competitor data belong to the Researcher.

---

## Two Deliverable Types

This skill covers two distinct deliverables. Read the request carefully and confirm which type is being produced before starting.

| Type | Trigger | Recipient | Cadence |
|---|---|---|---|
| Weekly Agent Insight Brief | Weekly performance cycle | Individual agents | Weekly |
| Monthly Performance Report | End of month | Strategy Director (human) | Monthly |

---

## DELIVERABLE TYPE 1: Weekly Agent Insight Brief

### When to Produce

Once per week, after reviewing the latest platform analytics. Produce one brief per agent — five briefs total per cycle (Researcher, SEO, Writer, Designer, Publishing). Each brief is targeted and role-specific. Do not send an agent information that is irrelevant to their function.

### Inputs Required

| Input | Source | Required? |
|---|---|---|
| KPI Dashboard (latest) | `/analytics/kpi-dashboard.md` | Required |
| Post-publication log | `/publishing/post-log.md` | Required |
| Community Sentiment Report | `/content-briefs/community-sentiment-report-*.md` | Required if available |
| Active test status | `/analytics/test-log.md` | Required if tests are running |
| Previous week's briefs | `/analytics/insight-brief-*` | Recommended — track what you've already flagged |

**If data is too limited to draw reliable conclusions** (e.g., fewer than 6 posts published), be explicit about this in every brief. Do not fabricate trends from small samples. State clearly: "With [N] posts live, this is an early signal, not a confirmed pattern." Then still provide the best available recommendation given current data.

---

### What Each Agent Needs to Hear

Different agents need different lenses on the same data. Focus each brief tightly.

**Researcher Brief**
- Which content themes/pillars are over- or underperforming internally
- Whether community sentiment (from Writer's report) suggests emerging topic interest
- Whether any external research priorities should shift based on what the data shows
- Goal: Help the Researcher prioritize what to research externally this week

**SEO Agent Brief**
- Hashtag performance signals — which hashtag tiers are driving reach vs. which aren't
- Any keyword performance observations from caption engagement or saves patterns
- Whether posting format changes warrant updated SEO optimization
- Goal: Help the SEO Agent retire, rotate, or double down on specific hashtags/keywords

**Content Writer Brief**
- Hook format performance — which hook types are driving saves, shares, or comments
- Caption length and CTA type effectiveness
- Community sentiment themes worth integrating into upcoming content
- Active test status relevant to the Writer's current execution
- Goal: Help the Writer make better creative decisions in the next content batch

**Designer Brief**
- Visual format performance — video loop vs. static background, carousel vs. single image
- Any correlation between visual aesthetic patterns and engagement
- Format-level performance (Reel vs. Post vs. Carousel)
- Goal: Help the Designer allocate effort toward higher-performing visual formats

**Publishing Brief**
- Optimal posting windows based on this account's own engagement patterns
- Platform-level performance comparisons (Instagram only at launch)
- Whether current posting cadence is working or needs adjustment
- Goal: Help Publishing schedule more effectively based on actual account behavior

---

### Step 1 — Analyze Before Writing

Before drafting any brief, complete this analysis pass:

1. Pull the KPI dashboard. Identify the top 3 and bottom 3 performing posts this week by primary metric (engagement rate for early-stage; save rate once you have enough data).
2. Look for patterns — not just individual post performance. Does format correlate with performance? Does posting time? Does content theme?
3. Check active tests. Are any tests accumulating enough data to draw a directional signal (not a final conclusion — a directional signal)?
4. Read the Community Sentiment Report. Are there recurring themes, questions, or emotional responses that have implications for content strategy?
5. For each agent, identify 2–3 findings that are genuinely relevant to their function. If you cannot identify 2 relevant findings for an agent, produce 1 strong one. Do not pad with weak observations.

### Step 2 — Draft Each Brief

Use this template for every agent brief. No variations — consistency matters so agents know exactly where to look for what.

```
---
## Analyst Insight Brief — [AGENT NAME] — Week of [DATE]

### Data Basis
Posts analyzed: [N]
Date range: [START] to [END]
Data maturity note: [e.g., "Strong basis — 14 posts" | "Early signal — 4 posts, treat findings as directional"]

---

### Finding 1 — [SHORT TITLE]
**Observation:** [What the data shows. Be specific — cite the metric, the magnitude, the pattern. 
Not "engagement was good" but "Posts with question hooks averaged 4.2% engagement rate vs. 
2.8% for statement hooks across 6 posts this week."]

**Recommended Action:** [Exactly what this agent should do differently or continue doing as 
a result of this finding. One specific behavior change or confirmation. Not "consider adjusting 
your approach" — be direct: "Prioritize question hooks for the next 3 posts in the current batch."]

---

### Finding 2 — [SHORT TITLE]
**Observation:** [Specific, metric-grounded observation]

**Recommended Action:** [Specific, role-relevant action]

---

### Finding 3 — [SHORT TITLE] (include only if genuinely warranted)
**Observation:** [Specific, metric-grounded observation]

**Recommended Action:** [Specific, role-relevant action]

---

### Active Tests
[List any tests currently running that are relevant to this agent, with current status 
and remaining duration — or "No active tests" if none apply to this agent]

### Hold — Watching
[1–2 observations that are too early to act on but worth monitoring next cycle — 
or omit this section entirely if nothing warrants it]

---
Analyst — [DATE]
```

### Step 3 — Quality Check Before Issuing

Before saving and routing any brief, verify:

- [ ] Every finding has a `Recommended Action` — no exceptions
- [ ] Observations cite specific metrics or patterns — no vague qualifiers
- [ ] The brief contains only findings relevant to this agent's function
- [ ] Data maturity is noted accurately — no overstating confidence from small samples
- [ ] Active tests relevant to this agent are listed
- [ ] The brief is concise — if a finding takes more than 4 sentences to explain, it needs to be sharper

**If any finding lacks a Recommended Action**, do not issue the brief. Either sharpen the finding until an action becomes clear, or move it to the `Hold — Watching` section until more data supports it.

### Step 4 — Save and Route

Save each brief with this naming convention:
`/analytics/insight-brief-week[NN]-[agent-name].md`

Example: `/analytics/insight-brief-week03-writer.md`

Produce all five agent briefs in the same session. Do not issue partial sets.

---

## DELIVERABLE TYPE 2: Monthly Performance Report

### When to Produce

At the end of each calendar month, after the final weekly brief cycle of that month is complete. Delivered to the Strategy Director (human operator) — this is a strategic document, not an operational one. Write it for someone making decisions about direction and investment, not for someone executing tasks.

### Inputs Required

All weekly KPI dashboard data for the month, all post-publication logs, all Community Sentiment Reports, all test outcomes from the month, and the previous month's report (if one exists).

### Structure

```
---
## Monthly Performance Report — [MONTH YEAR]

### Executive Summary
[3–5 sentences. What is the overall health of the account this month? 
What was the single most important thing that happened — positive or negative? 
What is the one strategic implication the Director should carry forward?]

---

### Account Health — Key Metrics

| Metric | This Month | Last Month | Trend |
|---|---|---|---|
| Total Posts Published | | | |
| Average Engagement Rate | | | ↑ / ↓ / → |
| Average Save Rate | | | ↑ / ↓ / → |
| Follower Growth (net) | | | ↑ / ↓ / → |
| Average Reach per Post | | | ↑ / ↓ / → |
| Profile Visits | | | ↑ / ↓ / → |

*For Month 1, "Last Month" column shows N/A — baseline being established.*

---

### Top Performers
[Top 3 posts by primary metric. For each: post title/theme, format, 
key metric, and 2–3 sentences on why it likely performed well.]

### Underperformers
[Bottom 3 posts. For each: post title/theme, format, key metric, 
and 2–3 sentences on contributing factors — not blame, just pattern recognition.]

---

### Test Outcomes
[Summary of any A/B or multivariate tests completed this month. 
For each: hypothesis, result, confidence level, and whether the finding 
has been incorporated into the pipeline.]

[If no tests completed: "No tests concluded this month. [Test ID: XXX] is 
ongoing — expected completion [date]."]

---

### Content Pillar Performance
[Which themes drove the most engagement/saves this month? 
Which underperformed? Any surprise performers?]

---

### Emerging Patterns
[2–3 observations that aren't yet confirmed findings but are worth 
the Director's awareness. Frame as "watching" — not conclusions.]

---

### Strategic Recommendations
[2–4 specific, actionable recommendations for the Strategy Director. 
These should be decisions only the Director can make — not operational 
adjustments (those go in agent briefs). 

Format each as:
**Recommendation:** [What to do]
**Rationale:** [What the data shows that supports this]
**Tradeoff:** [What is given up or risked by doing this]]

---
Analyst — [DATE]
```

### Tone for the Monthly Report

The Monthly Report is for the human operator, not agents. Write it like a trusted advisor, not a dashboard dump:
- Lead with the most important thing, not the most recent thing
- Be direct about what's working and what isn't — no hedging
- Separate confirmed findings from emerging signals clearly
- Every recommendation must have a rationale and a tradeoff — no recommendations without both

---

## What This Skill Does NOT Cover

- Designing A/B tests — that is a separate Analyst responsibility covered in the agent instructions, not this skill
- Tracking raw KPI data — that belongs in the KPI dashboard, not the briefs
- External competitor or niche analysis — that belongs to the Researcher
- Content creation of any kind
