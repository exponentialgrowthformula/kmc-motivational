# Instagram Graph API — Operational Notes
**Account:** @exponentialgrowthformula_
**Last updated:** 2026-04-19

This document is the single source of truth for all known Instagram Graph API behavior, ig-mcp configuration, and operational gotchas for this account. When API behavior changes or a new constraint is discovered, update this document first.

---

## Account Identifiers

| Item | Value |
|---|---|
| Instagram Account ID | `17841479343890092` |
| Meta App ID | `1710348726649294` |
| Account type | Creator (not Business — preserves music library access) |
| ig-mcp location | `C:/Users/kirst/github/ig-mcp/` |
| Access token expiry | **2026-06-13** — refresh before this date |
| GitHub repo for asset hosting | `exponentialgrowthformula/kmc-motivational` (public, master branch) |

---

## ig-mcp Local Patches

**Status: APPLIED** — Both patches are currently live in `C:/Users/kirst/github/ig-mcp/src/instagram_client.py`.

These patches are NOT committed to the upstream ig-mcp repository. If ig-mcp is reinstalled or cloned fresh, they must be reapplied manually.

### Patch 1 — `media_type=REELS` on video container creation

**Location:** `publish_media()` method, inside the video URL branch of the container creation block (~line 435)

**What it does:** Sets `media_type=REELS` when creating a container for video uploads. Without this, video uploads are not recognized as Reels by the Instagram API and may fail or publish incorrectly.

**Current state in file:**
```python
elif request.video_url:
    container_data["video_url"] = str(request.video_url)
    container_data["media_type"] = "REELS"   # ← this line
```

**If missing, add this line** immediately after the `video_url` assignment.

---

### Patch 2 — `use_cache=False` on container status poll

**Location:** `publish_media()` method, inside the video status polling loop (~line 454)

**What it does:** Disables response caching on the container status poll request. Without this, the cache returns a stale `IN_PROGRESS` response on every iteration and the polling loop never terminates — the publish hangs indefinitely.

**Current state in file:**
```python
status_response = await self._make_request(
    "GET", container_id, params={"fields": "status_code"}, use_cache=False
    # ↑ use_cache=False is required here
)
```

**If missing, add `use_cache=False`** as a keyword argument to the `_make_request()` call inside the polling loop.

---

## Reels Metrics — What Works in API v22.0+

As of Instagram Graph API v22.0 (confirmed 2026-04-19), the following changes apply to Reels metrics.

### Removed metrics (do not request — returns error #100)
- `plays` — removed from API v22.0+. Requesting it returns: `{"error": {"code": 100, ...}}`
- `video_views` — does not work for Reels

### Operative Reels metrics
| Metric | Description |
|---|---|
| `ig_reels_avg_watch_time` | Average watch time in **milliseconds** |
| `ig_reels_video_view_total_time` | Total watch time across all views in **milliseconds** |
| `reach` | Unique accounts reached |
| `likes` | Like count |
| `comments` | Comment count |
| `shares` | Share count |
| `saved` | Save count |

### Derived metrics (calculate from API data)

**Implied plays:**
```
implied_plays = ig_reels_video_view_total_time ÷ ig_reels_avg_watch_time
```
Both values are in milliseconds. Result is the implied total view count.

**Completion rate:**
```
completion_rate = ig_reels_avg_watch_time (ms) ÷ video_duration (ms)
```

**Known video durations for this account:**
| Asset | Duration (ms) |
|---|---|
| `cr-pdh-grow-001.mp4` (Format A, content-001) | 26,400ms (26.4s) |
| `sr-pdh-grow-001.mp4` (Format C, content-001) | 16,800ms (16.8s) |
| `sr-dfc-worth-002.mp4` (Format C, content-002) | 19,076ms (19.076s) |

Update this table as new assets are published.

---

## Carousel Publishing (Format B)

**Status: BLOCKED — API deprecated** (confirmed 2026-04-22).

### Root cause (confirmed via direct API testing 2026-04-22)

Instagram Graph API **does not support carousel album creation** via `media_type=CAROUSEL_ALBUM` — in any API version tested (v19.0, v22.0). The API returns error 100/2207023 with message:

> `"The media type 'CAROUSEL_ALBUM' is unknown."`

This is NOT an aspect ratio issue. Child container creation (Step 1) succeeds — each `POST /{account_id}/media` with `image_url` + `is_carousel_item=true` returns a valid container ID. The failure occurs at Step 2 (carousel album container creation), which is now unsupported.

**Session history note:** The original blocker in earlier sessions (attributed to 9:16 aspect ratio, error 100/2207023) was in fact this same API deprecation. The aspect ratio constraint (4:5 required) may also be real, but is moot since carousel container creation itself fails regardless of image dimensions.

### What DOES work

- Child container creation: `POST /{account_id}/media` with `image_url` + `is_carousel_item=true` — returns container ID successfully
- Carousel container creation: `POST /{account_id}/media` with `media_type=CAROUSEL_ALBUM` — **FAILS, API deprecated**
- Manual in-app carousel posting: fully functional — Instagram app supports carousel creation even though the API does not

### Publishing Format B

**The only viable path for Format B carousel posts is manual posting via the Instagram app:**
1. Open Instagram app
2. Create new post → select Carousel
3. Upload all 6 slides in order
4. Add caption and hashtags from the Content Brief
5. Add music from Instagram's library (Reels tab eligibility)
6. Publish

**ig-mcp `publish_carousel` tool:** Not viable for this account. The tool exists in ig-mcp but cannot complete carousel container creation due to the API deprecation. Do not attempt API carousel publishing — it will always fail at Step 2.

---

## Publishing via ig-mcp

### Video URL format (required for ig-mcp)
```
https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/[filename].mp4
```

The GitHub org is `exponentialgrowthformula`, not `kirstiemc`. The file must be committed to the master branch and publicly accessible before calling `publish_media`.

### ig-mcp call parameters
Pass `video_url` and `caption` only. Do not pass `media_type` — the patched ig-mcp sets it automatically.

### Container processing time
Video containers typically take 60–120 seconds to process. The polling loop runs every 10 seconds for up to 30 attempts (5 minutes). If it times out, check the container status manually via the Graph API Explorer.

---

## Account Type Notes

This account is a **Creator** account, not a Business account. Key implications:

- Full music library access for Reels (Business accounts have restricted music)
- Format B Audio Carousel requires a Creator account to access trending music natively in the app
- Some business-specific API fields may return empty for Creator accounts

Do not convert this account to Business — it would restrict music library access and break Format B publishing.

---

## Access Token Refresh

The long-lived access token expires **2026-06-13**. Refresh process:
1. Go to Meta App Dashboard → App ID `1710348726649294`
2. Generate a new long-lived token via the Graph API Explorer
3. Update the token in `C:/Users/kirst/github/ig-mcp/.mcp.json` (the `INSTAGRAM_ACCESS_TOKEN` env var)
4. Verify with `validate_access_token` via ig-mcp
5. Update the expiry date in this document and in `reference/session-start.md`

Set a reminder 2–4 weeks before expiry. Do not let the token expire with a publish pending.
