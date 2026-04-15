---
name: content-brief
description: Produces a fully structured Content Brief for the Exponential Growth Formula social media account (@exponentialgrowthformula_). Use this skill whenever the Content Writer agent is asked to produce, draft, write, or create a Content Brief — including single briefs, batches, and test variant briefs. Also trigger when given a Content Opportunity Brief and/or Discoverability Brief as inputs and asked to write content. This skill enforces the exact field structure, self-QA checklist, and handoff protocol required by the pipeline. Do not produce Content Briefs without this skill.
---

# Content Brief Skill

## Purpose

This skill ensures every Content Brief produced by the Content Writer agent is complete, correctly structured, brand-aligned, and ready to hand off to the Designer without revision. It enforces the pipeline rule: **the Designer receives fixed copy — no ambiguity, no missing fields, no copy that hasn't passed QA.**

---

## Account Context (Always Apply)

- **Account:** @exponentialgrowthformula_ (Instagram)
- **Niche:** Motivational quotes — personal growth, business growth, manifestation, gratitude, abundance mindset, confidence, self-worth
- **Format:** Faceless. Text overlays on background images or video loops. No on-camera presence.
- **Voice:** Warm, empowering, direct. Trusted mentor energy. Never hypey, hollow, or generic.
- **Platforms (launch):** Instagram — Posts, Reels, Stories, Carousels

---

## Inputs Required Before Starting

Do not begin writing until you have confirmed the following inputs are available. If any are missing, state what is needed before proceeding.

| Input | Source | Required? |
|---|---|---|
| Content Opportunity Brief | Researcher Agent (`/research/`) | Required |
| Discoverability Brief | SEO Agent (`/seo/`) | Required |
| Niche Knowledge Base | `/research/knowledge-base.md` | Required for validation |
| Analyst Insight Brief (Writer) | `/analytics/insight-brief-*-writer.md` | Required if one exists |
| Test Brief | `/analytics/test-brief-*.md` | Required if content is part of a test |

**If no Analyst insight brief exists yet** (early pipeline), proceed without it and note this in the brief.

---

## Step 1 — Pre-Write Review

Before writing a single word, complete these checks:

1. **Read the Content Opportunity Brief fully.** Identify: the core theme, the suggested angle, urgency, and any credibility references.
2. **Read the Discoverability Brief.** Note the primary keywords to weave naturally into the caption. Do not force them.
3. **Check the Knowledge Base** for any frameworks, thought leaders, or source material relevant to this theme. If the content makes a specific claim, it must be traceable to the knowledge base.
4. **Check the Analyst insight brief** (if available) for current hook format performance. Use the winning hook type as your default unless the Test Brief specifies otherwise.
5. **If a Test Brief is active for this content slot**, read it fully before writing. You are bound to its parameters.

---

## Step 2 — Write the Content

### Hook — Write This First

The hook is the most important creative decision. Write it before anything else.

**Hook rules:**
- Must work in 1–2 seconds as on-screen text or opening caption line
- Interrupt the scroll — create tension, curiosity, or instant recognition
- Never start with "I" on a faceless account
- Avoid clichés: "The secret to...", "Nobody talks about...", "This will change your life..."
- Match the emotional tone — a gratitude piece has a different hook energy than a confidence piece

**Hook formats to rotate (unless Analyst brief specifies otherwise):**
- Statement hook: Bold declarative truth ("You don't need more motivation. You need more identity.")
- Question hook: Creates immediate self-reflection ("What if the version of you that hesitates isn't protecting you — it's just afraid?")
- Reframe hook: Challenges a common belief ("Manifestation isn't wishful thinking. It's directed attention.")
- Permission hook: Gives the reader something they didn't know they needed ("You're allowed to want more.")

### Overlay Text — Hierarchy Matters

Structure overlay text in this order. Not all three levels are required for every piece — use judgment.

1. **Headline** — The primary quote or statement. This is what stops the scroll and carries the emotional weight. 10 words or fewer is ideal; never more than 20.
2. **Subtext** — A supporting line that deepens or contextualizes the headline. Optional. 1–2 lines maximum.
3. **On-screen CTA** — A brief prompt that appears on-screen (e.g., "Save this", "Share with someone who needs it"). Optional — use on Posts and Carousels, use sparingly on Reels.

**Copy rules for overlay text:**
- Every word must earn its place. Cut anything that doesn't add meaning.
- Write for someone reading on a phone in 3 seconds.
- Avoid filler words: "just", "really", "very", "so", "actually"
- The headline must be able to stand completely alone — assume the subtext won't be read

### Caption

- Open with the hook (same hook as overlay, or a variation that works in text form)
- Extend the emotional resonance — don't repeat the overlay, build on it
- 3–5 sentences for Posts and Carousels; 1–3 sentences for Reels
- End with the CTA (distinct from any on-screen CTA)
- Insert `[HASHTAGS]` placeholder at the end — never write hashtags directly
- Weave in 1–2 keywords from the Discoverability Brief naturally — they should not feel planted

### CTA

One CTA per post. Vary across the content calendar — do not repeat the same CTA type consecutively.

| CTA Type | Example |
|---|---|
| Save | "Save this for the next time doubt creeps in." |
| Comment | "Drop a 🙌 if this is exactly what you needed today." |
| Share | "Send this to someone who's been too hard on themselves lately." |
| Reflect | "What's one thing you'd do today if you actually believed this?" |

### Background Direction

Provide loose creative direction for the Designer. You are guiding mood and aesthetic — not specifying fonts, colors, or layout. 1–2 sentences maximum.

Examples:
- "Expansive natural landscape, warm golden tones, preferably with soft movement."
- "Minimal and clean — soft light, neutral tones, abstract texture acceptable."
- "Celestial or cosmic — deep, rich tones with a sense of infinite possibility."

---

## Step 3 — Self-QA Checklist

Run every completed brief through this checklist before finalizing. Do not issue the brief to the Designer if any item fails.

**Voice & Tone**
- [ ] Does the copy sound like a trusted mentor, not a hype account?
- [ ] Is the language direct and specific — no vague platitudes?
- [ ] Would the target audience feel seen, not lectured?

**Headline**
- [ ] Can the headline stand completely alone and still land?
- [ ] Is it 20 words or fewer?
- [ ] Does it avoid clichés and overused motivational phrases?

**Hook**
- [ ] Does the hook work in under 3 seconds?
- [ ] Does it create tension, curiosity, or immediate recognition?
- [ ] Is it distinct from the headline (not a repetition)?

**Caption**
- [ ] Does the caption build on the overlay rather than repeat it?
- [ ] Are keywords woven in naturally — not forced?
- [ ] Does the caption end with a clear, specific CTA?
- [ ] Is `[HASHTAGS]` placeholder present?

**Credibility**
- [ ] If any specific claim is made, is it traceable to the knowledge base?
- [ ] Does the content feel grounded in the niche — not generic inspiration?

**Test Compliance** (if applicable)
- [ ] Is the Test Brief ID noted in the brief?
- [ ] Does this content adhere strictly to the test parameters?
- [ ] Is the variant (A/B) clearly labeled?

**Completeness**
- [ ] All required fields in the Content Brief template are filled
- [ ] Discoverability Brief is attached
- [ ] Background direction is provided

---

## Step 4 — Complete the Content Brief Template

Fill every field. Do not leave fields blank or write "TBD". If a field is genuinely not applicable for this format, write "N/A — [reason]".

```
---
## Content Brief — [DESCRIPTIVE TITLE] — [DATE]

### Platform & Format
[e.g., Instagram Reel | Instagram Feed Post (Portrait) | Instagram Carousel]

### Content Opportunity Brief Reference
[File path: /research/content-opportunity-brief-XXX.md]

### Theme / Content Pillar
[e.g., Manifestation | Confidence & Self-Worth | Gratitude | Abundance Mindset | Personal Growth | Business Growth]

### Emotional Tone
[The specific feeling this content should evoke. Be precise — not just "positive". 
e.g., "Grounded confidence — the quiet certainty of someone who has stopped seeking 
external validation."]

---

### OVERLAY TEXT

**Headline:**
[Exact text — primary quote or statement]

**Subtext:**
[Supporting line — or N/A if not used]

**On-screen CTA:**
[On-screen prompt text — or N/A if not used]

---

### HOOK
[The scroll-stopping opening — for video formats this is the first-frame text or 
opening line; for static posts this is the opening line of the caption]

### CAPTION
[Full caption copy. Keywords woven in naturally. Ends with CTA. [HASHTAGS] placeholder at end.]

### CTA TYPE & COPY
Type: [Save | Comment | Share | Reflect]
Copy: [The exact CTA text as it will appear in the caption]

---

### BACKGROUND DIRECTION
[1–2 sentences of loose creative direction for the Designer — mood, aesthetic, 
color temperature, motion preference. Not fonts or layout.]

### CREDIBILITY REFERENCE
[Relevant framework, thought leader, book, or concept from the knowledge base 
this content draws from — or "N/A — original framing" if not applicable]

---

### TEST FLAG
[None | Test ID: XXX — Variant A | Test ID: XXX — Variant B]

### ANALYST BRIEF REFERENCED
[File path of Analyst insight brief used — or "None available yet"]

### QA STATUS
[Passed — all checklist items cleared | Failed — [list items that failed]]

---
[ATTACH DISCOVERABILITY BRIEF BELOW THIS LINE]
[Paste full contents of the relevant Discoverability Brief here]
---
```

---

## Step 5 — Save & Route

**Save location:** `/content-briefs/content-brief-[NNN].md`

Use sequential numbering (001, 002, 003...). Do not use dates as the primary identifier.

**After saving**, confirm:
- The file is complete and QA has passed
- The Discoverability Brief is embedded
- The brief is ready for the Designer — no follow-up from the Writer is needed

**Do not route to the Designer if QA has failed.** Fix the failing items first.

---

## Batch Briefs

When producing multiple briefs in one session:

1. Complete Steps 1–5 fully for Brief 001 before starting Brief 002
2. Vary the hook format, CTA type, and emotional tone across the batch — no two consecutive briefs should feel identical
3. Ensure the batch covers at least two different content pillars
4. After completing the batch, do a final cross-brief review: read all hooks together — do they feel like they come from the same voice but aren't repetitive?

---

## What This Skill Does NOT Cover

- Hashtag selection — that comes from the SEO Agent's Discoverability Brief
- Font, color, layout, or visual decisions — those belong to the Designer
- Test design — that belongs to the Analyst; this skill only handles test execution
- Publishing decisions — those belong to the Publishing agent
