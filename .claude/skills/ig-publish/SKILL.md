---
name: ig-publish
description: Executes the Instagram publishing workflow for @exponentialgrowthformula_ via ig-mcp. Use whenever the Publisher agent is asked to publish a post, schedule a Reel, or execute the publish step for any format (A, B, or C). This skill enforces the correct sequence — GitHub commit → ig-mcp container → status poll → publish confirm → post-log entry — and enforces format-specific rules (audio bake-in vs. in-app audio, carousel vs. Reel). Do not attempt publishing without this skill.
---

# ig-publish Skill

## Purpose

Publishing via ig-mcp has a specific multi-step sequence with format-conditional rules. Missing a step or using the wrong parameter causes silent failures or incorrectly configured posts. This skill enforces the complete, correct workflow for every publish.

**Core rule:** Never publish without completing this skill's pre-publish checklist. A post that goes live incorrectly cannot be easily corrected.

---

## Account Context (Always Apply)

- **Account:** @exponentialgrowthformula_ (Instagram Creator account)
- **Instagram Account ID:** `17841479343890092`
- **Meta App ID:** `1710348726649294`
- **Access token:** Valid until **2026-06-13** — refresh before this date
- **GitHub repo (asset hosting):** `exponentialgrowthformula/kmc-motivational` (public, `master` branch)
- **ig-mcp location:** `C:/Users/kirst/github/ig-mcp/` (local, not published upstream)

---

## Pre-Publish Checklist

Run before every publish attempt. Do not proceed if any item fails.

- [ ] Asset package confirmed by Asset Manager (file exists in `assets/staging/production/`)
- [ ] Content Brief and Discoverability Brief are available (for caption and hashtags)
- [ ] Hashtag set confirmed — which P-set to use, no overlap with recent posts (check `seo/hashtag-rotation.md`)
- [ ] For video formats: file is committed to GitHub `exponentialgrowthformula/kmc-motivational` master branch
- [ ] Access token valid (expiry: 2026-06-13) — if within 2 weeks of expiry, flag to Strategy Director before publishing

---

## Step 1 — Commit asset to GitHub master (video formats only)

ig-mcp requires a publicly accessible URL. The file must be committed to the `exponentialgrowthformula/kmc-motivational` repo on master before calling ig-mcp.

**Run these Bash commands yourself — do not delegate:**

```bash
cd /c/Users/kirst/github/kmc-motivational
git add assets/staging/production/[filename].mp4 assets/staging/production/[filename]-cover.jpg
git commit -m "Add [content-piece] [format] production assets — [filename]"
git push origin master
```

Wait for the push to confirm before proceeding. Then construct the raw URL:

```
https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/[filename].mp4
```

**Important:** The GitHub org is `exponentialgrowthformula`, not `kirstiemc`. If the files were already committed in a prior step, skip the git commands and proceed directly to Step 2.

---

## Step 2 — Format-Specific Publishing Rules

### Format C — Stacked Reveal Video Reel (`sr-` files)
- Publish via ig-mcp `publish_media` with `video_url` (raw GitHub URL) and `caption` only
- **Audio is baked into the MP4 — do NOT add a second audio track in the Instagram app**
- Media type `REELS` is set automatically by ig-mcp for video URLs

### Format A — Slide-Style Video Reel (`cr-` files)
- Same as Format C above — `video_url` + `caption` via ig-mcp
- **Audio is baked into the MP4 — do NOT add a second audio track in the Instagram app**

### Format B — Audio Carousel Post (`cp-` files)
- Upload via Instagram app as a native carousel POST (not a Reel)
- Select slides in order: slide-01 through slide-06
- **Add music from the Instagram native audio library within the post creation flow**
- Audio is what grants Reels tab eligibility — do not skip this step
- Requires Creator account for full music library access (confirmed: this account is Creator)
- ig-mcp does not support carousel post creation — this format requires manual posting via app

---

## Step 3 — Caption Construction

Assemble the final caption before calling ig-mcp:

1. Take the caption from the Content Brief (plain text, no formatting)
2. Replace `[HASHTAGS]` placeholder with the assigned hashtag set from the Discoverability Brief
3. Confirm no em dashes in caption copy (AI tell — use short punchy sentences instead)
4. Confirm hashtag placement: hashtags go in the caption body (not first comment) for this account
5. Confirm the CTA is present at the end of the caption

---

## Step 4 — Execute Publish (Format A + C)

Call ig-mcp `publish_media` with:
```
video_url: [raw GitHub URL]
caption: [assembled caption with hashtags]
```

**Do not pass additional parameters.** The ig-mcp patched version handles `media_type=REELS` automatically for video URLs.

ig-mcp will:
1. Create a media container (POST to `{account_id}/media`)
2. Poll container status until `FINISHED` (polls every 10s, up to 30 attempts)
3. Publish the container (POST to `{account_id}/media_publish`)
4. Return a Media ID on success

**If the status poll loops indefinitely:** Check that ig-mcp's local patches are applied (see `reference/ig-api-notes.md`). `use_cache=False` on the status poll is required — without it the cache returns a stale `IN_PROGRESS` response on every iteration.

---

## Step 5 — Confirm Live

After ig-mcp returns a Media ID:
1. Note the Media ID (format: 18-digit number, e.g., `18077728049544507`)
2. Verify the post is live by checking the account in-app or via `get_media_posts`
3. Confirm the caption, hashtags, and cover frame look correct in-feed

---

## Step 6 — Post-Log Entry

Immediately after confirming live, write a post-log entry to `/publishing/post-log.md`:

```
## Post Log — [DATE]

Platform: Instagram
Format: [Format C — Stacked Reveal Reel / Format A — Slide-Style Reel / Format B — Audio Carousel]
Content Title: [From Content Brief]
Content Brief Reference: [File path]
Asset File(s): [Primary filename(s)]
Media ID: [18-digit Media ID from ig-mcp]
Scheduled Time: [Intended time]
Published Time: [Actual time]
Audio Track: [Track name — "baked in" for A/C, "added in-app: [track name]" for B]
Hashtag Set: [P-N — list hashtags]
Hashtag Placement: Caption
Cover Frame: Auto
Any Deviations: [None / Notes]
Status: Live
```

---

## Step 7 — Post-Publish Housekeeping

After the post-log entry is complete:

1. **Move asset files** — use `git mv` so the move is tracked in git. Move every file in the asset package (MP4 + cover JPEG for video formats; all 6 slides for Format B). Do not leave published files in staging.

   **Run these Bash commands yourself — do not delegate:**

   ```bash
   # Format A or C
   git mv assets/staging/production/[filename].mp4 assets/published/YYYY-MM/instagram/[filename].mp4
   git mv assets/staging/production/[filename]-cover.jpg assets/published/YYYY-MM/instagram/[filename]-cover.jpg

   # Format B (6 slides)
   for i in 01 02 03 04 05 06; do
     git mv "assets/staging/production/[filename]-slide-$i.jpg" "assets/published/YYYY-MM/instagram/[filename]-slide-$i.jpg"
   done
   ```

   If the `YYYY-MM` folder does not yet exist, create it first with `mkdir -p assets/published/YYYY-MM/instagram/`.

2. **Update asset-status-log** — in `assets/asset-status-log.md`, update the Location column from `/assets/staging/production/` to `/assets/published/YYYY-MM/instagram/` and confirm Status is `Published` for every moved file.

3. **Update hashtag rotation log** — mark the P-set as used in `seo/hashtag-rotation.md`

4. **Notify Analyst** — add a note in `/analytics/test-log.md` if this post is part of an active A/B test

5. **Update Upcoming Triggers** in `reference/session-start.md` — add 24h and 7-day Analyst read dates

6. **Commit all housekeeping changes to master** — run this yourself via Bash:

   ```bash
   cd /c/Users/kirst/github/kmc-motivational
   git add publishing/post-log.md seo/hashtag-rotation.md assets/asset-status-log.md reference/session-start.md
   git commit -m "Session [N] — publish [content-piece] [format], post-publish housekeeping"
   git push origin master
   ```

---

## ig-mcp Operational Notes

**Local patch status:** The ig-mcp install at `C:/Users/kirst/github/ig-mcp/` has two critical patches applied that are NOT in the upstream repo. If ig-mcp is reinstalled from scratch, these must be reapplied:

1. `media_type=REELS` on video container creation (line ~435 in `instagram_client.py`)
2. `use_cache=False` on container status poll (line ~454 in `instagram_client.py`)

See `reference/ig-api-notes.md` for the exact code changes required.

**Access token:** Long-lived token. Expires **2026-06-13**. Refresh via Meta App dashboard before this date. Flag to Strategy Director if within 2 weeks of expiry.

---

## What This Skill Does NOT Cover

- Building the video assets — that is the Build Engineer's responsibility
- Choosing hashtag sets — that comes from the SEO Agent's Discoverability Brief
- Content calendar decisions — those belong to the Publisher agent's core planning function
- Format B carousel posting — that is manual via the Instagram app (ig-mcp does not support carousel creation)
