# Session 011
**Date:** 2026-04-14
**Phase coverage:** Phase 3 — A/B Test Brief + Publishing Architecture
**Session type:** Planning — A/B test brief issued, publishing workflow defined

---

## Narrative Summary

Session-011 picked up with content-001 fully approved across all three formats and ig-mcp confirmed operational. The immediate next action from session-010 was to issue the A/B test brief before scheduling. The Analyst produced and filed this brief at `analytics/ab-test-brief-001.md`.

The brief establishes Format A (slide-style, `cr-`, 26.4s) as Variant A (control) and Format C (stacked reveal, `sr-`, 15.0s) as Variant B (the primary bet). The core hypothesis is that Format C's single-screen structure with no cut points produces higher completion rates than Format A's 6-slide structure. Publishing sequence: Variant A on Day 0, Variant B on Day 5, Format B on Day 10. Evaluation on Day 12.

An important constraint was flagged in the brief: hashtag set P-3 is assigned to Variant A only. A replacement set must be confirmed with the SEO Agent before Day 5.

During the publishing planning discussion, a significant issue was identified with the original assumption that ig-mcp would handle post publishing. The `publish_media` tool publishes immediately — it has no draft creation step. But Instagram music must be added in draft mode, before publishing, for the algorithm to index the trending audio signal. This means ig-mcp cannot be the publish trigger for any of the three formats. It remains useful for analytics and post verification only.

The correct publishing tool is Postiz, which was identified in prior research but not yet installed. Postiz supports full post creation including audio selection, cover image, caption, and scheduled publishing. The target workflow: Claude constructs asset URLs, Postiz creates the scheduled post, operator approves, Postiz publishes at the scheduled time.

A second infrastructure question arose: how to make local video files accessible as public URLs for the Instagram API and Postiz. Google Drive was initially proposed, then replaced with a cleaner solution — a public GitHub repo with raw.githubusercontent.com URLs. No additional MCP or file hosting service needed.

---

## Structured Log

### A/B Test Brief — AB-001

**Filed at:** `analytics/ab-test-brief-001.md`

**Key parameters:**
- Variant A: Format A (`cr-pdh-grow-001.mp4`, 26.4s) — Day 0
- Variant B: Format C (`sr-pdh-grow-001.mp4`, 15.0s) — Day 5
- Format B companion: `cp-pdh-grow-001-slide-01..06.jpg` — Day 10
- Primary metric: completion rate (10pp advantage required to be decisive)
- Secondary metric: saves rate (tiebreaker if signals split)
- Evaluation date: Day 12

**Constraint flagged:** Hashtag set P-3 assigned to Variant A only. SEO Agent must confirm replacement set before Day 5.

---

### Publishing Architecture Decision

**Problem:** ig-mcp's `publish_media` publishes immediately. Instagram music must be added pre-publish in draft mode for the algorithm to index the trending audio signal. These are incompatible.

**Decision:** ig-mcp is demoted to analytics/verification role only. Postiz is the publishing tool. Postiz supports draft creation with audio selection, cover image, caption, and scheduled publishing.

**File hosting decision:** Initially proposed Google Drive MCP. Replaced with public GitHub repo — simpler, no additional MCP, raw URLs work as direct download links for the Instagram API.

**Final publishing workflow:**
1. Asset files committed to public GitHub repo
2. Claude constructs `raw.githubusercontent.com` URL from file path
3. Postiz creates scheduled post: video URL + caption + hashtags + cover + audio
4. Operator reviews and approves in Postiz (~2 min)
5. Postiz publishes at scheduled time

---

## Final State Entering Next Session

| Component | Status |
|---|---|
| A/B test brief AB-001 | **Filed** — `analytics/ab-test-brief-001.md` |
| ig-mcp | Operational — analytics/verification only (not publishing) |
| Postiz | Not yet installed — next priority |
| GitHub repo | Not yet created — next priority |
| Content-001 publishing | Blocked on Postiz + GitHub setup |

---

## Open Items Entering Next Session

| Item | Owner | Context |
|---|---|---|
| **GitHub repo setup** | Claude + SD | Initialize git, push to public repo for raw URL asset hosting |
| **Postiz setup** | Claude + SD | Install and configure as publishing MCP |
| **Publisher — schedule content-001** | Publisher + Postiz | Unblocked once GitHub + Postiz operational |
| **SEO Agent — replacement hashtag set** | SEO Agent | Must confirm before Day 5 (Variant B publish) |
| **Asset sourcing** | Researcher + Designer | DET + DIW prompts not developed; gaps toward 52-image target |
| **Token refresh** | SD | Access token expires 2026-06-13 |

---

## For the Product

- **ig-mcp cannot be used to publish Instagram posts for accounts that require pre-publish audio.** The Instagram Graph API's media publish endpoint publishes immediately — there is no draft creation flow. Music added after publishing may not receive the same trending audio indexing as music added during the draft creation flow. If your publishing strategy depends on Instagram's native audio library for distribution, use a scheduling tool (Postiz, Later, etc.) that wraps the draft creation flow, not the Graph API directly.

- **Raw GitHub URLs are the simplest asset hosting solution for small-scale media pipelines.** For video and image files under GitHub's 100MB limit, committing to a public repo and referencing `raw.githubusercontent.com/{owner}/{repo}/{branch}/{path}` requires no additional infrastructure, no MCP, and no authentication. Files are immediately accessible as direct download URLs suitable for the Instagram Graph API and any scheduling tool.
