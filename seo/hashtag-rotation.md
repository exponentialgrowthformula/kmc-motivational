# Hashtag Rotation Tracker
**Owned by:** SEO Agent
**Last updated:** 2026-04-21

This document tracks all assigned hashtag sets (P-sets) across all published and scheduled content. Its purpose is to prevent hashtag overlap on content published within the same 7-day window, and to maintain a clear assignment record as the P-set library grows.

Refer to `seo/hashtag-sets.md` for the full tiered hashtag library. This document tracks assignment status only.

---

## Rotation Rules

1. **No overlap within 7 days.** If two posts are published within 7 days of each other, they must use different P-sets. Instagram's algorithm penalizes repeated hashtag use across rapid-fire posts from the same account.
2. **P-sets rotate in sequence.** Once a P-set is used, it goes to the back of the rotation queue. Do not reuse a set until all other available sets have been used — unless the account has fewer posts per week than available sets, in which case skip-rotation is acceptable.
3. **Same-content multi-format exception.** When Format A, B, and C for the same content piece are published at different slots (per the three-format strategy), they may share a P-set only if published more than 7 days apart. If published within 7 days, assign different P-sets.
4. **Assign before publish.** The SEO Agent assigns a P-set before the publish slot is filled. Do not assign at publish time — confirm it's in the Discoverability Brief.

---

## Active P-Set Assignment Log

| P-Set | Hashtags | Assigned To | Content Piece | Publish Date | Status |
|---|---|---|---|---|---|
| P-1 | (retired/used in early testing) | — | — | — | Retired |
| P-2 | (retired/used in early testing) | — | — | — | Retired |
| P-3 | `#personalgrowth #mindsetshift #selfdevelopment` | content-001 Format A | cr-pdh-grow-001 | 2026-04-15 | Used |
| P-4 | `#growthmindset #selfgrowth #becomingbetter` | content-001 Format C (AB-001 Variant B) | sr-pdh-grow-001 | 2026-04-23 | Scheduled |
| P-5 | `#personalgrowth #selfworth #innerwork #ownyourvalue` | content-002 Format C | sr-dfc-worth-002 | 2026-04-16 | Used |
| P-6 | TBD — to be assigned by SEO Agent | content-001 Format B | cp-pdh-grow-001 | 2026-04-20 | **Pending assignment** |
| P-7 | `#manifestation #abundancemindset #manifestationjournal` | content-003 Format C | sr-dfc-manif-003 | 2026-04-20 | Used |
| P-8 | `#gratitude #gratitudepractice #positivemindset` | content-004 Format C | sr-dwr-grat-004 | 2026-04-21 | Used |

---

## Next Available P-Set

**Next to assign:** P-9 (to be created by SEO Agent for next scheduled piece)

When creating a new P-set:
1. Add it to `seo/hashtag-sets.md` (tiered construction: broad + niche + micro)
2. Add a row to this table with status `Pending assignment`
3. Assign it to a content piece and update the row to `Scheduled`
4. After publish, update status to `Used` and log the publish date

---

## 7-Day Overlap Check

Before finalizing any P-set assignment, confirm no overlap in the 7-day window around the planned publish date:

| Publish Date | Active Content | P-Set Used |
|---|---|---|
| 2026-04-15 | content-001 Format A | P-3 |
| 2026-04-16 | content-002 Format C | P-5 |
| 2026-04-20 | content-001 Format B | P-6 (TBD) |
| 2026-04-20 | content-003 Format C | P-7 |
| 2026-04-21 | content-002 Format A | TBD |
| 2026-04-21 | content-004 Format C | P-8 |
| 2026-04-23 | content-001 Format C | P-4 |

Update this table whenever a new post is scheduled. The 7-day window runs from 7 days before to 7 days after each publish date.

---

## P-Set Status Definitions

| Status | Meaning |
|---|---|
| Pending assignment | P-set created, not yet assigned to a content piece |
| Scheduled | Assigned to a content piece with a confirmed publish date |
| Used | Post is live. P-set enters back of rotation queue |
| Retired | P-set is no longer in rotation (underperformed, too broad, or superseded) |
