# Session 006
**Date:** 2026-04-07
**Phase coverage:** Phase 3 — Asset Production Automation (pre-Stage 6)
**Session type:** Architecture decision + tooling setup — physical asset production pipeline

---

## Narrative Summary

This session started with a status review of where the pipeline stood. Content piece 001 ("You Are Not Behind") had completed Stages 1–5. The pipeline was paused at Stage 5 waiting on the operator to manually produce two physical files: `cr-pdh-grow-001.mp4` and `cr-pdh-grow-001-cover.jpg` using the Designer's Asset Delivery Note spec.

The operator's response changed the direction of the session entirely: rather than produce those files manually, they wanted to automate the production. This is a reasonable and significant decision — if asset production can be fully automated from an Asset Delivery Note, the pipeline becomes end-to-end autonomous. Every content piece from the Writer's spec to the Publisher's scheduled post would require zero manual production work.

The session became an architecture decision: what tools and MCPs can automate this?

The core challenge is typography precision. The ADN spec is extremely precise — pixel-level y-coordinates, specific letter spacing values (-0.5px, +0.5px, +1px, +1.5px), exact font weights (Medium 500, Light 300, Regular 400), forced line breaks at specific words. This rules out FFmpeg's drawtext filter (no letter-spacing, limited font weight control) and any API-based design generation tool (Canva's MCP generates designs from prompts — can't guarantee pixel-level spec fidelity). The solution is to render slides as HTML/CSS first (browser-native typography is perfect), screenshot them at 1080x1920, then use FFmpeg to composite with the background video and add transitions.

Three options were evaluated:
1. **Remotion** — React/Node.js video framework; best overall quality and animation precision; larger setup footprint
2. **Playwright MCP + FFmpeg** — headless browser screenshots each CSS-rendered slide; FFmpeg assembles the video; simpler setup, slightly less frame-perfect on text entrance animations
3. **Python + html2image/Playwright + FFmpeg via uv run** — same as Option 2 but Python-driven; no new tools if Node.js unavailable

Node.js (v24.13.1) and npm (v11.8.0) were confirmed available. FFmpeg (v8.0.1) was confirmed available. This made all three options viable, but the operator preferred Option 2 as the faster first test.

A reference document from another project (`kmc-swiftsavory/marketing/automation/automation-mcp-analysis.md`) was reviewed. This analysis was a comprehensive MCP landscape survey covering Canva, CapCut/VectCutAPI, ig-mcp, Postiz, Tailwind, reddit-mcp-server, and others. Key takeaways for this project:

- **Canva MCP (Official)** exists and works with a free account. However, it cannot use local file assets (URL required), and design generation via prompts cannot guarantee pixel-level typography fidelity. Not the right tool for production-quality output from the ADN spec. Could be considered for lighter content later.
- **ig-mcp** (jlbadano) covers Instagram posting via Meta Graph API — directly relevant for Stage 6.
- **Postiz** (self-hostable, free) handles multi-platform scheduling — relevant for Stage 6.
- **instagram-engagement-mcp** covers analytics — relevant for Stage 7.
- **Windows/VSCode note:** Canva MCP OAuth authentication may not open a browser tab in the VSCode extension (Electron sandbox issue). Authenticate from the standalone `claude` CLI instead, then return to VSCode — the token is shared.

The Playwright MCP (`@playwright/mcp@latest`) was installed by creating `.mcp.json` at the project root. The user's global settings already had `enableAllProjectMcpServers: true`, so no additional settings change was needed. The MCP requires a session restart to be recognized — this session closed to allow that.

The immediate next session will build the slide renderer: Claude writes HTML/CSS templates for each of the 6 slides from the ADN spec, Playwright screenshots them at 1080x1920, FFmpeg composites over the background video with transitions, and produces the final MP4 and cover JPEG.

---

## Structured Log

### Architecture Decision — Asset Production Automation

**Trigger:** Operator declined to produce physical assets manually. Requested full automation from ADN spec.

**Requirements identified:**
- Render 6 slides with pixel-precise typography (Cormorant Garamond, DM Sans, exact sizes/weights/letter-spacing/positioning)
- Composite text over continuous video background (bg-pdh-001-sway-slow.mp4)
- Slide transitions: 0.5s fade to `#0E0A07` / 0.15s hold / 0.5s fade in
- Text entrance: fade 0.5–0.6s ease-in-out, simultaneous with slide fade-in
- Export: H.264, 1080x1920px, 23.976fps, 6,000 kbps, sRGB
- Cover JPEG: static render of Slide 1

**Options evaluated:**

| Option | Typography | Animation | Setup | Selected |
|---|---|---|---|---|
| FFmpeg drawtext only | Poor — no letter-spacing, limited weight | Via filters | Minimal | No |
| Remotion (React/Node.js) | Perfect — CSS-based | Native, frame-accurate | Node project + ~300MB deps | No (later) |
| Playwright MCP + FFmpeg | Perfect — browser CSS | Approximated via FFmpeg fade filter | Playwright MCP + FFmpeg | Yes |
| Python + Playwright + FFmpeg | Perfect — browser CSS | Approximated | uv run | No (fallback only) |

**Decision:** Playwright MCP + FFmpeg. Faster to set up than Remotion, better typography than FFmpeg-only. Text entrance animations will be approximated (FFmpeg fade) rather than CSS-animated — functionally indistinguishable in the final video.

**Rationale for deferring Remotion:** Playwright approach is a valid production path. If output quality is acceptable, there is no reason to build a full Remotion project. Remotion remains the preferred long-term option if the pipeline needs frame-accurate animation or iterative composition editing.

---

### Environment Verification

| Tool | Version | Status |
|---|---|---|
| Node.js | v24.13.1 | Confirmed |
| npm | v11.8.0 | Confirmed |
| FFmpeg | v8.0.1-full_build | Confirmed |
| Playwright MCP | v0.0.70 (via npx) | Confirmed available |

---

### MCP Stack — Installed This Session

**File created:** `.mcp.json` (project root)

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

**Activation:** Requires session restart. `enableAllProjectMcpServers: true` already set in global `~/.claude/settings.json` — no additional settings change needed.

---

### MCP Stack — Identified for Future Sessions (Publishing)

From the kmc-swiftsavory automation analysis, the following MCPs are relevant to Stage 6 and 7 of this pipeline:

| Stage | Tool | Source | Notes |
|---|---|---|---|
| Stage 6 — Instagram posting | ig-mcp (jlbadano) | github.com/jlbadano/ig-mcp | Meta Graph API; Business account + Meta App required |
| Stage 6 — Scheduling | Postiz | postiz.com | Self-hostable (free via Docker); 18+ platforms |
| Stage 7 — Analytics | instagram-engagement-mcp (Bob-lance) | github.com/Bob-lance/instagram-engagement-mcp | Meta Graph API; free |

**Prerequisite for all three:** Instagram Business account + Meta App with `instagram_basic`, `instagram_content_publish`, `pages_show_list` permissions. Needs to be confirmed before Stage 6 is built.

---

### Reference Document Reviewed

**File:** `C:\Users\kirst\github\kmc-swiftsavory\marketing\automation\automation-mcp-analysis.md`

A comprehensive MCP landscape survey from the kmc-swiftsavory project (February 2026). Covered: Canva MCP, CapCut/VectCutAPI, ig-mcp, Postiz, Tailwind MCP, reddit-mcp-server, pinterest MCP options, Amazon review monitoring, stock media MCPs, AI image generation MCPs, ElevenLabs TTS.

Key decisions informed by this document:
- Canva MCP ruled out for production-quality ADN spec rendering (local file limitation + prompt-based design generation)
- ig-mcp + Postiz confirmed as the Stage 6 publishing path
- Windows/VSCode Canva OAuth caveat noted for future reference

---

## Open Items Entering Next Session

| Item | Owner | Context |
|---|---|---|
| Build slide renderer | Claude | Write HTML/CSS templates for 6 slides from ADN spec; Playwright screenshots at 1080x1920; FFmpeg assembles MP4 + cover JPEG |
| Confirm Instagram Business account status | SD | Required before ig-mcp and Postiz can be set up for Stage 6 |
| Continue Phase 2 asset sourcing (SNL, DET, DIW) | SD | Zero assets in all three — running in parallel with Phase 3 |
| DFC-v3 prompt test | SD | Vertical descending light shaft — prompt written, not yet tested |

---

## For the Product

- **Manual asset production is a pipeline bottleneck that can be eliminated.** The ADN spec is machine-readable — every value (font size, y-coordinate, letter spacing, color hex, line break instruction) is explicitly stated. An operator who receives a well-formed ADN spec should not have to open a design tool. The automation pipeline (Playwright + FFmpeg) is the answer to this bottleneck, and once built it should be documented as a reusable component in the agent template package.

- **Typography precision rules out most design generation APIs.** Tools like Canva's MCP generate designs from natural language prompts. They are excellent for creating content quickly but cannot guarantee pixel-level spec fidelity. The architecture decision here — render HTML/CSS in a headless browser, screenshot, then composite with FFmpeg — is the correct solution for any pipeline that requires exact visual specifications. This pattern is worth documenting explicitly in the product's technical chapter.

- **The cross-project MCP analysis from kmc-swiftsavory was immediately useful.** Prior research from another project saved significant time — rather than re-researching the MCP landscape from scratch, the existing analysis gave a curated, verified snapshot of what exists and what the real limitations are. This is an argument for maintaining a shared MCP reference library across projects. Consider documenting this pattern in the product.

- **"What MCPs do we need?" is a question that should be answered at pipeline design time, not when a bottleneck appears.** The publishing stack (ig-mcp, Postiz, analytics MCP) was identified in this session but is not yet set up. It should be set up before Stage 6 is needed so there is no pause at the publishing stage comparable to the pause at asset production. Build the tooling layer ahead of the work, not in response to being blocked.
