# Carousel Best Practices Brief — 001
**Produced by:** Researcher Agent
**Date:** 2026-04-08
**Account:** @exponentialgrowthformula_
**Status:** Active — Delivered to Designer and Strategy Director

---

## Purpose

This brief investigates two specific design decisions in the current Carousel Reel template system. Both questions were raised in the context of the Designer's spec and the platform-design-spec.md safe zone framework. Research was conducted against external sources including platform documentation, creator strategy publications, and safe zone technical guides.

This brief does not recommend changes to the template suite. That decision belongs to the Designer and Strategy Director. The brief provides findings and a recommendation only.

---

## Question 1 — Slide Numbering on the First Slide: Show or Hide?

### Current Spec Decision

The template suite (T-CR-HOOK) hides the slide number on Slide 1. The `SLIDE NUMBER` layer is present in the template but set to hidden. Slide numbers appear from Slide 2 onward in the Upper Accent Zone (y=150–350px). The Designer's rationale is that the number introduces visual friction before the hook lands.

### What Top Accounts in the Niche Do

No definitive public observation data exists on which specific accounts in the motivational/personal growth niche display or suppress slide numbers on their hook slides. Accounts in this niche — including those in the monitored roster such as @mental.aspect, @mindset.therapy, and @mindsetofgreatness — do not discuss their template decisions publicly, and their content is not accessible to machine-readable research at the individual-slide level.

However, the broader creator strategy literature converges on a consistent principle: the hook slide should contain the minimum necessary elements to earn the swipe. The dominant advice across Hootsuite, PostNitro, Resont, and Social Habit Marketing is that first-slide design is governed by one rule — remove anything that competes with the hook for attention.

Directional swipe cues (arrows, "swipe" text overlays) are widely recommended as an addition to hook slides. Numbered progression indicators like "01" or "1 of 6" are mentioned in some tactical guides (including the ReelBase carousel Reels guide) as a useful way to set content expectations and signal multi-part value. However, the placement of such indicators is consistently described as a secondary element — never as a headline-level visual.

### Data and Research Findings

No controlled study was found isolating the variable of slide number visibility on Slide 1 against swipe-through rate. This question has not been formally tested in publicly available creator research as of April 2026.

What the literature does confirm:

- Instagram's native carousel indicators (dots or the slide counter in the top-right corner of the viewer) are system-rendered and always present. Users are not dependent on designer-placed numbers to know there are more slides.
- The first slide carries approximately 80% of the swipe decision weight. Swipe-through is driven by hook quality, not UI affordance.
- Only 5% of carousels include an explicit "swipe left" prompt, and adding one increases engagement from 1.83% to 2.00% — a modest but real lift. This applies to a CTA prompt, not a slide number.
- The trymypost.com 2026 carousel algorithm guide cites a 65%+ swipe-through rate as the target benchmark, and ties that metric entirely to first-slide hook clarity — not to presence or absence of numbering.
- The reelbase.io guide recommends using numbered progression indicators (e.g., "1/7") on individual slides to communicate content scope. It does not specify whether this should appear on Slide 1 or be suppressed.

### Assessment

The Designer's current decision — suppress the slide number on Slide 1 — is consistent with the dominant principle in creator strategy literature: minimize visual friction on the hook. Instagram's native UI already provides the carousel signal. An explicit "01" adds no unique information the viewer does not already receive from the platform.

The counterargument — that showing "01" sets expectations and increases perceived content depth — is plausible as a hypothesis but is not supported by documented data. There is no published creator research showing that displaying a slide number on Slide 1 meaningfully increases swipe-through rate in this niche.

### Recommendation

**Maintain the current spec.** Hide the slide number on Slide 1. Instagram's native indicator dots and the top-right counter already perform the expectation-setting function. The hook slide should contain the anchor line and nothing else competing for the viewer's first read. If the account runs structured A/B testing on this variable in the future, this is a low-risk test to run — but there is no current evidence suggesting a change would improve performance.

If a swipe-through CTA is ever added to the hook slide, the recommended form (per existing creator data) is a brief directional text prompt ("Swipe for more" or a simple arrow), not a slide number. These are different affordances serving different functions.

---

## Question 2 — Vertical Text Placement: Upper Frame vs. Center Frame

### Current Spec Decision

The current platform-design-spec.md defines the following:

- **Slide 1 (Hook):** Default anchor placement targets approximately y=875px (visual midpoint within the Center Zone, y=600–1150px). For pre-dawn horizon backgrounds where visual weight concentrates low, the spec allows the anchor to be adjusted upward toward y=750px. On a 1920px canvas, y=875px represents 45.6% from the top — center-weighted.
- **Slides 2–N (Body):** Same Center Zone default (y=600–1150px), visual midpoint approximately y=800–875px — consistent with 42–46% from the top as described in the brief prompt.

The question raises whether placing text higher in the frame — upper 35–40% — would perform better, particularly given Instagram's UI chrome at the bottom.

### Instagram UI Chrome — What the Research Confirms

Multiple safe zone guides converge on the following measurements for a 1080x1920px Reel/Carousel Reel canvas:

- **Bottom danger zone:** The bottom 250–320px are occupied by Instagram's UI — engagement buttons (like, comment, share, save), the audio attribution bar, and the caption. The most consistently cited figure is 250–280px of hard UI coverage. The platform-design-spec.md reserves the bottom 250px (no text below y=1670px), which is consistent with the high end of published guidance.
- **Top hazard zone:** The top 150px carries the account name overlay and follow tag. The platform-design-spec.md reserves this zone identically (no text above y=150px).
- **Right-side hazard:** Engagement icon buttons (like, comment, share, save) are stacked on the right side. Published guidance recommends a 90–100px buffer from the right edge. The spec's 80px right inset is within the acceptable range.

The net usable vertical space on a 1920px canvas, after deducting top (150px) and bottom (250px) UI chrome, is approximately 1520px — running from y=150px to y=1670px.

The center of this usable zone is approximately y=910px (150 + 760), or 47.4% from the top of the canvas. The spec's default anchor at y=875px is very close to this geometric center of the usable zone.

### Does Upper Placement Improve Engagement?

The research did not surface a controlled study directly comparing upper vs. center text placement for engagement or completion rate in the Reel/carousel format. This specific variable has not been isolated in publicly available creator research.

What the research does confirm:

- The trymypost.com safe zone guide recommends positioning primary hook text "between 200px and 600px from the top edge" for text overlays intended to function as captions or on-screen graphics — framing this as the "universally safe" zone across device notches and dynamic islands. This guidance appears to be written for single-frame Reel overlays (e.g., subtitle text), not for large-format anchor lines that occupy the visual center of the frame.
- The zeely.ai and kreatli.com safe zone guides recommend keeping critical content in the "central 70–80% of the frame" — which, on a 1920px canvas, runs from approximately y=192px to y=1728px. The spec's center zone falls comfortably within this band.
- The usevisuals.com Reels best practices guide advises creators to "frame your subjects in the upper two-thirds of the screen where they remain visible before viewers tap to see captions." This guidance is specific to on-camera or subject-forward Reels where a visible subject competes with the caption area — not to text-on-background formats.
- The verve creative studio guide flags the bottom 250–320px as the highest-risk zone and recommends text be kept above y=1600px (in their framing). The spec already complies.
- One metric surfaced: Reel videos with text positioned outside safe zones suffer a "22% lower completion rate" (trymypost.com). This finding supports the case for zone compliance — not for upper vs. center placement within the compliant zone.

The principle that upper placement avoids caption-area competition is valid but not decisive for this format. For a text-dominant faceless account where the anchor line is the primary visual event, the question is not whether text is obscured by UI chrome at the bottom — it is whether the composition feels intentional and readable. The spec's center zone already clears the bottom UI by a substantial margin (y=1150px for the bottom of the Center Zone vs. y=1670px for the UI boundary — a 520px buffer).

### The Hook Slide's Current Position in Context

The prompt notes the hook slide's current visual midpoint at approximately y=680px (35% from the top). This appears to reflect a specific background-adjusted placement — the spec allows the anchor to be moved upward toward y=750px for pre-dawn horizon backgrounds. At y=680px, the anchor sits in the upper portion of the Center Zone, not in the center-of-center. This is already a design-informed upward adjustment, not a default.

If the question is whether y=680px on the hook slide is defensible, the research supports it: the zeely.ai guide specifically recommends "200px to 600px from the top" for primary hook text. At y=680px, the visual midpoint of a multi-line anchor block would have its top edge somewhere around y=580–620px — which aligns with the upper boundary of the recommended zone.

### Assessment

The current spec is well-calibrated to the platform. The bottom UI chrome concern is already addressed — the spec's 250px bottom clearance matches the strictest published guidance. The center zone default (y=600–1150px, visual midpoint y=875px) places the anchor in the geometric center of the usable frame, which is consistent with where the viewer's eye rests when no subject draws it elsewhere.

The argument for aggressive upper placement (upper 35–40%) applies most strongly to formats where:
1. A subject or visual element competes for vertical space
2. The caption area is likely to be visible (i.e., the viewer has not tapped to full-screen)
3. Subtitle-style text needs to clear UI chrome

For a faceless text-on-background format where the anchor is the primary event and the account's aesthetic is defined by considered, deliberate composition, center placement is not a liability. It is a stylistic signal — the quote occupies the visual center of the frame intentionally, not defensively.

The existing upward adjustment allowance (toward y=750px for pre-dawn horizon backgrounds) is the correct mechanism for managing visual weight on specific backgrounds. This is a per-composition decision, not a structural argument for repositioning the entire default.

### Recommendation

**Maintain the current spec for the center-zone default (y=600–1150px, visual midpoint approximately y=875px).** The spec already accounts for background-specific upward adjustment when needed. The bottom UI chrome is sufficiently cleared.

One refinement worth the Designer's consideration: the spec's existing language — "adjust anchor upward toward y=750px" for pre-dawn horizon backgrounds — could be extended to explicitly cover any background where visual mass concentrates in the lower half of the frame. The current language implies this but does not state it. This is a clarification to the rule, not a change to the default.

If the account later conducts structured A/B testing on text placement, the most productive comparison would be center-zone default (y=875px midpoint) vs. upper-content zone (y=350–600px range). This would generate actual performance data for the specific format and audience. Route any decision to run that test to the Analyst and Strategy Director.

---

## Summary Table

| Question | Current Spec | Evidence Supports Current Decision | Recommendation |
|---|---|---|---|
| Slide number on Slide 1 | Hidden | Yes — no evidence that showing a number improves swipe-through; native Instagram UI already signals carousel | Maintain current spec. Hide slide number on Slide 1. |
| Vertical text placement — hook and body slides | Center Zone default (y=600–1150px, midpoint ~y=875px); hook allows upward adjustment to ~y=750px | Yes — center zone clears UI chrome with adequate margin; center placement is appropriate for text-dominant faceless format | Maintain current spec. Consider clarifying the upward-adjustment rule to cover all heavy-bottom-weight backgrounds, not only pre-dawn horizon. |

---

## Research Gaps

The following questions could not be answered from available public data and may warrant formal A/B testing via the Analyst:

1. Does displaying "01" on the first carousel slide improve swipe-through rate for quote/text-format motivational carousels specifically? No published data exists.
2. Does upper-zone anchor placement (y=350–600px) outperform center-zone placement (y=600–1150px) for this account's specific format and aesthetic? No format-matched data exists.
3. What swipe-through rate does the current template system actually produce? This is an Analyst question, not a Researcher question. Once the account has post history, the Analyst should be asked to isolate swipe-through rate by slide format variation.

---

## Sources Consulted

- Hootsuite — Instagram Carousel Guide 2025 (blog.hootsuite.com)
- TryMyPost — Instagram Reels Safe Zones and Text Placement 2026 (trymypost.com)
- ReelBase — Instagram Carousel Reels Complete Guide (reelbase.io)
- Verve Creative Studio — Instagram Reels Safe Zones and Tips (vervecreative.studio)
- Kreatli — Instagram Reels Safe Zone Guide 2026 (kreatli.com)
- Zeely.ai — Master Instagram Safe Zones (zeely.ai)
- PostNitro — 15 Strategies for Viral Instagram Carousels 2025 (postnitro.ai)
- TrueFuture Media — Instagram Carousel Strategy 2026 (truefuturemedia.com)
- Social Habit Marketing — Ultimate Guide to Designing a Perfect Instagram Carousel 2026 (socialhabitmarketing.com)
- UseVisuals — 17+ Proven Instagram Reels Best Practices 2025 (usevisuals.com)
- Marketing Agent Blog — Mastering Instagram Carousel Strategy 2026 (marketingagent.blog)
- Resont — Best Hooks for Instagram Carousel (resont.com)
- Pano — Best Practices for First-Slide Carousel Hooks (panocollages.com)
