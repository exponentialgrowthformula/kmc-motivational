# System Prerequisites
**Applies to:** Anyone setting up this multi-agent social media system from scratch
**Last updated:** 2026-04-01

This document covers every tool that must be installed on your machine before this system will run correctly. These are not optional — each one is load-bearing for a specific part of the pipeline.

---

## 1. Claude Code

The entire system runs inside Claude Code — Anthropic's CLI tool for working with Claude agents.

**Install:**
```
npm install -g @anthropic-ai/claude-code
```

Requires Node.js 18+. After install, run `claude` in your terminal to authenticate with your Anthropic account.

**Why it's required:** Claude Code is the runtime environment for all agents. Without it, no agent tasks can be run.

---

## 2. ffmpeg

ffmpeg is required for video asset intake. Agents cannot render MP4 files directly — ffmpeg extracts one still frame per second from each video clip, which the Designer agent then reviews visually using the standard intake checklist.

**Why it's required:** Without ffmpeg, video loops cannot be reviewed or approved into the asset library. The pipeline can run without video loops (static image backgrounds work for all templates), but adding video loops requires ffmpeg to be installed.

### Install on Windows

**Option A — winget (recommended, built into Windows 10/11):**
```
winget install ffmpeg
```

**Option B — Chocolatey:**
```
choco install ffmpeg
```

**Option C — Scoop:**
```
scoop install ffmpeg
```

**Option D — Manual install:**
1. Download the latest full build from [https://www.gyan.dev/ffmpeg/builds/](https://www.gyan.dev/ffmpeg/builds/) — choose `ffmpeg-release-full.7z`
2. Extract to a folder (e.g., `C:\ffmpeg\`)
3. Add `C:\ffmpeg\bin\` to your system PATH environment variable
4. Open a new terminal and verify: `ffmpeg -version`

### Install on macOS

**Homebrew (recommended):**
```
brew install ffmpeg
```

Verify: `ffmpeg -version`

### Install on Linux (Debian/Ubuntu)

```
sudo apt update && sudo apt install ffmpeg
```

Verify: `ffmpeg -version`

### Verify Installation

Run the following in your terminal. You should see version information, not an error:
```
ffmpeg -version
```

The system was built and tested with ffmpeg version 8.0.1. Any recent version (4.0+) will work for the frame extraction use case.

### How ffmpeg is used in this system

When video loops are submitted for intake review, run the following command to extract one frame per second:

```
ffmpeg -i path/to/video.mp4 -vf fps=1 path/to/frames/frame_%02d.jpg -y
```

This produces `frame_01.jpg`, `frame_02.jpg`, etc. — one per second of footage. These frames are then passed to the Designer agent for visual review. See `/assets/asset-intake-protocol.md` for the full video intake procedure.

---

## 3. Background Asset Sources

Background images and video loops are sourced externally and brought into the asset library through the intake protocol. You will need accounts on at least some of these platforms before you can begin asset sourcing (Task 2C.5).

### Free Image Sources

| Platform | URL | Notes |
|---|---|---|
| Unsplash | unsplash.com | High quality, free license. Best free option for still images. Quality is inconsistent for warm-dark cinematic — apply strict rejection criteria. |
| Pexels | pexels.com | Free images and video. Secondary option. Same quality caveats as Unsplash. |
| Pixabay | pixabay.com | Free images and video. Larger library than Mixkit, variable quality. |

### Free Video Sources

| Platform | URL | Notes |
|---|---|---|
| Pexels | pexels.com | Free video section. Best free option for video loops. Filter to video and use the scene category search terms. |
| Mixkit | mixkit.co | Smaller library but curated. Good for slow cinematic atmospherics when you find the right clip. |
| Pixabay | pixabay.com | Decent volume for video, hit or miss on quality. Worth checking after Pexels and Mixkit. |
| Videvo | videvo.net | Free tier available. Decent atmospheric footage. |
| Coverr | coverr.co | Smaller but curated. Some good slow cinematic loops under "nature" and "sky." |

### Paid Video Sources (recommended for volume)

Free video stock for warm-dark cinematic atmospherics is genuinely thin. If this account is a serious investment, a paid subscription pays for itself quickly once you are producing content at scale.

| Platform | URL | Notes |
|---|---|---|
| Storyblocks | storyblocks.com | Subscription model, large library. Best value for ongoing use. Quality varies — apply strict warm-dark criteria. |
| Artgrid | artgrid.io | Higher-end, cinematic quality. More expensive. Footage is shot with a production mindset — best source for the specific Dark Earth aesthetic. |

### Where Search Terms Are Documented

Search terms for each of the six scene categories (pdh, snl, det, dfc, dwr, diw) are in **Brand Style Guide Section 9.1** (`/brand/brand-style-guide.md`). Use those terms on all platforms above. The warm-dark test and rejection criteria are in Section 9 of the same document and in the intake protocol (`/assets/asset-intake-protocol.md`).

### Practical Notes from Production

- **Images are easier to source than video.** Unsplash and Pexels will cover your image library adequately. Video is where free sources fall short.
- **PDH (Pre-Dawn Horizon) video is particularly hard to find on free platforms.** DFC (Deep Forest) and DWR (Dark Water) have better free video coverage — start there if PDH video is scarce.
- **The most common rejection failure** is a warm horizon band sitting under a cool-dark sky. The sky above the horizon must also be warm, not just the horizon band itself.
- **DFC (Deep Forest/Canopy) is the most failure-prone category in early sourcing.** Two recurring problems: (1) Summer forest interiors produce green-black shadows — cool, not warm. Target autumn forest scenes where leaf litter, warm bark, and late-season amber light create warm-dark conditions throughout the frame. (2) Single-subject forest compositions (lit tree, sun disc between trunks, backlit plant) place the focal point at the compositional centre — directly in the text overlay zone. Target scenes where warm light fills the frame as atmosphere (volumetric shafts, broad ambient backlit glow) rather than spotlighting a single subject.
- **Canva** is a good tool for building and producing templates, but not recommended as a sourcing platform for backgrounds — the stock library is overused across many accounts and thin on warm-dark cinematic video.

---

## 4. Git (optional but recommended)

Git is not required for the pipeline to run, but is strongly recommended for version control of your project files.

**Install:** [https://git-scm.com/downloads](https://git-scm.com/downloads)

---

## 5. Dependency Summary

| Tool | Required | Used for | Install command |
|---|---|---|---|
| Claude Code | Yes — essential | Running all agents | `npm install -g @anthropic-ai/claude-code` |
| Node.js 18+ | Yes — Claude Code dependency | Claude Code runtime | [nodejs.org](https://nodejs.org) |
| ffmpeg | Yes — for video intake | Frame extraction from video loops | See Section 2 above |
| Git | Recommended | Version control | [git-scm.com](https://git-scm.com/downloads) |
