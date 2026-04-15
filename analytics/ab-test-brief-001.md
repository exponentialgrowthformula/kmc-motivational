## Test Brief — AB-001 — 2026-04-14

**Analyst:** @exponentialgrowthformula_ Analyst Agent
**Content piece:** content-001 — "You Are Not Behind"
**Status:** Ready for execution — all assets approved and staged

---

### Hypothesis

Format C (Stacked Reveal, `sr-pdh-grow-001.mp4`) will outperform Format A (Slide-Style Reel, `cr-pdh-grow-001.mp4`) on completion rate and saves for this quote style.

Rationale: The stacked reveal structure — seven short lines building one at a time on a single static frame — is structurally optimized for the signal hierarchy this account uses (watch time/completion rate first). Each line arrival extends watch time organically: the viewer must stay on screen to receive the next line. There is no slide cut to trigger an early exit. Format A's slide-style transitions give the algorithm a series of cut points where viewers may drop off. Format C eliminates those cut points. Additionally, Format C at 15.0 seconds is meaningfully shorter than Format A at 26.4 seconds — a shorter video has a structurally higher ceiling for completion rate, all else equal. Format C is the primary bet on this account for these reasons. This test confirms or challenges that directional assumption with real data from the first content piece.

---

### Variants

**Variant A — Control:** Format A — Slide-Style Reel (`cr-pdh-grow-001.mp4`)
- 26.4 seconds
- 6-slide structure with cuts between slides
- Video loop background (`bg-pdh-001-sway-slow.mp4`, BGV-PDH-004)
- Posts first — establishes baseline

**Variant B — Test:** Format C — Stacked Reveal Reel (`sr-pdh-grow-001.mp4`)
- 15.0 seconds
- 7 lines, single-screen stacked reveal, no cuts
- Static amber sky background (`bg-pdh-007-amber-sky-wide.jpg`, BGI-PDH-017)
- Posts second — the format being validated as primary

---

### Variable Being Tested

Visual format treatment — slide-style multi-cut Reel (Format A) vs. single-screen stacked reveal (Format C). Both carry the same quote content, same caption, same hashtag set, and same audio selection logic. The visual execution is the only variable.

Note: The background asset differs between formats (video loop vs. static image). This is an acknowledged confound — it cannot be isolated in this test because each background is native to its format. The formats are being tested as complete treatments, not as isolated background vs. motion variables. Future tests can isolate background type if the results warrant it.

---

### Success Metric

**Primary:** Video completion rate (watch time to end / total plays). Winner must show a minimum 10 percentage point advantage in completion rate to be considered decisive.

**Secondary:** Saves rate (saves / reach). This is the primary engagement signal for this account's motivational content. A clear save rate advantage for either variant, even without a completion rate advantage, is meaningful.

**Tertiary:** Reach (total accounts reached). If one format receives substantially more algorithmic distribution, note this as a factor — it may indicate the algorithm is treating one format more favorably independent of audience behavior.

**Tiebreaker rule:** If completion rate and saves rate point in opposite directions, saves rate wins the tiebreaker. Saves represent intent to return — they are the most durable signal of content value.

---

### Publishing Sequence

**Day 0:** Publish Variant A (Format A — Slide-Style Reel, `cr-pdh-grow-001.mp4`)

**Day 5:** Publish Variant B (Format C — Stacked Reveal Reel, `sr-pdh-grow-001.mp4`)

**Rationale for 5-day gap:**
- Each post needs a clean initial performance window before the next post competes for the same audience's attention. Five days is enough to capture the primary distribution surge (first 24–48 hours are heaviest) and begin the plateau phase, without letting the first post go fully cold before the second appears.
- Publishing Format A first makes Format A the control. It is the format that informed the content brief and represents the slide-by-slide structure originally designed for this piece. Format C was added as the primary bet — testing it against the established structure is the correct directional test.
- Do not publish both formats on the same day or back-to-back days. Instagram's algorithm treats each post as a separate distribution event. Stacking them compresses the measurement window and introduces cannibalization risk where each format reduces the other's reach.

**Caption and hashtag handling:**
Both posts use the same caption body. Hashtag set P-3 (#identityshift #personalgrowthjourney #mindsetshift) is already assigned to this content piece. Apply P-3 to Variant A (Format A, posting first). For Variant B (Format C, posting on Day 5), the hashtag set P-3 must not be reused per the rotation rule established in the content brief and staging package. Publisher must assign a fresh hashtag set for Variant B and log the rotation accordingly. Flag this to the SEO Agent before Day 5 scheduling — the SEO Agent should confirm the replacement set.

---

### Format B — Audio Carousel (`cp-pdh-grow-001-slide-01..06.jpg`)

Format B is not part of this A/B test. It is a companion format and serves a different function: image-only carousel post with music added to gain Reels tab eligibility. It tests a separate distribution mechanic, not a visual treatment.

**Recommended timing:** Publish Format B on Day 10 — five days after Variant B goes live.

Rationale:
- Day 10 allows both test variants to complete their primary measurement windows before Format B appears in the feed. Format B will not interfere with test data.
- Publishing Format B after the test window is useful: if either test variant shows strong early saves or reach, Format B acts as a reinforcing touchpoint — a second exposure to the same content piece for followers who engaged with either Reel. The carousel format encourages slower, per-slide dwell behavior compared to a Reel, which can deepen engagement with audiences who have already seen the content.
- Do not publish Format B during the A/B test window (Days 0–9). Its presence during the test would make it impossible to attribute performance shifts cleanly to the Reel format variable.

---

### Measurement Window

**Per variant:** Read results at 24 hours, 48 hours, and 7 days post-publish.

- **24-hour read:** Early completion rate and initial saves signal. Flag to Strategy Director if either variant shows an unusually strong or weak opening (e.g., completion rate below 20% or above 60% at 24h is worth flagging immediately).
- **48-hour read:** Primary data pull. The first 48 hours capture the majority of algorithmic distribution for a zero-follower account. This is the most reliable snapshot for comparison.
- **7-day read:** Final read. Use this to confirm or adjust the 48-hour picture. Check whether either variant continued accumulating saves beyond the initial distribution window — late saves are a strong quality signal.

**Evaluation date:** 7 days after Variant B goes live (Day 12). Both variants will have a minimum 7-day performance window by this date.

Full evaluation timeline:
- Day 0: Variant A publishes
- Day 5: Variant B publishes
- Day 7: Variant A 7-day read
- Day 12: Variant B 7-day read — evaluation begins
- Day 12–14: Analyst delivers evaluation findings via Weekly Insight Brief

---

### Decision Rules

**If Format C (Variant B) wins on completion rate AND saves rate:**
Format C locks as the primary production format for content-002 onward. Format A is demoted to occasional secondary use or retired from the core rotation pending further evidence. Brief the Designer to treat Format C as the default template for all new content pieces until further notice.

**If Format A (Variant A) wins on completion rate AND saves rate:**
Format A reclaims primary status. Format C is demoted to test candidate. Brief the Designer to review the stacked reveal timing and line rhythm — the reveal interval or total duration may need recalibration before Format C is retested. Do not retire Format C on one loss — the sample size is too small. Retest at content-003 with design adjustments if the Designer identifies a clear correctable issue.

**If the result is split (e.g., Format C wins completion rate, Format A wins saves):**
No format lock occurs. Flag the split result to the Strategy Director as an ambiguous signal. Continue producing both formats in parallel through content-003 and re-evaluate with a larger combined sample. A split result at content-001 is informative but not decisive — the account has zero historical baseline to contextualize it.

**If reach is substantially different between formats (>40% gap):**
Note this in the evaluation regardless of which format has higher reach. A large reach discrepancy suggests the algorithm is responding differently to the two format structures, which is a distribution-layer finding independent of audience engagement quality. Escalate to Strategy Director if the reach gap is large enough that the completion rate and saves comparisons are not apples-to-apples.

**What this test does not decide:**
This test is not a test of the quote, caption, hook, or hashtag strategy. It is a test of visual format treatment only. Any performance finding here does not carry over to conclusions about content theme or copy. Those variables require separate test design.

---

### Execution Notes for Publisher

- Variant A publishes Day 0. Variant B publishes Day 5. Format B publishes Day 10.
- Hashtag set P-3 applies to Variant A only. A replacement hashtag set must be confirmed for Variant B before Day 5. Contact SEO Agent.
- Both Reel formats require manual audio attachment at publish time in the Instagram app — no audio is baked into either file. Apply the audio routing instructions in the staging package brief (`assets/staging/content-001-package-brief.md`).
- Log each post in `/publishing/post-log.md` with the format label (Format A / Format C), publish timestamp, and audio track used.
- Notify Analyst immediately at each publish event — post-publication intake begins at the moment each format goes live.

---

### Test Log Reference

This test is to be registered in `/analytics/test-log.md` under ID AB-001 upon publication of Variant A. Status transitions: Pending → Active (Day 0) → Evaluation (Day 12) → Complete (after findings are issued in the Weekly Insight Brief).
