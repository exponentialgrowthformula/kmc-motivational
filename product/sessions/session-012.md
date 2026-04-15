# Session 012
**Date:** 2026-04-14
**Phase coverage:** Phase 3 — GitHub repo initialization
**Session type:** Infrastructure — public GitHub repo created, asset hosting operational

---

## Narrative Summary

Session-012 was a short infrastructure session with one goal: create the public GitHub repo so raw asset URLs are operational before Postiz is set up.

Before committing, a credential check caught `.mcp.json` containing four live secrets: the Instagram access token, Facebook App ID, Facebook App Secret, and Instagram Business Account ID. A `.gitignore` was created to exclude `.mcp.json` before the initial commit. This is a critical step — committing credentials to a public repo would expose them immediately.

The GitHub CLI was already installed but authenticated under `kirstie-imajin`, which is a separate personal account. The operator wanted to use the new `exponentialgrowthformula` account created for this product. The existing account was logged out and the new account logged in via `gh auth login` with browser-based OAuth.

The repo was created as public under `exponentialgrowthformula/kmc-motivational` and the initial commit pushed. All 163 files committed including the full asset library, brand system, agent configs, scripts, content briefs, and research. The `.mcp.json` credential file and `node_modules` are excluded via `.gitignore`.

Raw asset URLs are now operational. Example:
`https://raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/assets/staging/production/cr-pdh-grow-001.mp4`

---

## Structured Log

### Credential Check Before First Commit

**Files checked for secrets:** `.env*`, `*secret*`, `*credential*`, `*token*`, `*.mcp.json`

**Finding:** `.mcp.json` at project root contains:
- `INSTAGRAM_ACCESS_TOKEN` — live long-lived token (valid until 2026-06-13)
- `FACEBOOK_APP_ID`
- `FACEBOOK_APP_SECRET`
- `INSTAGRAM_BUSINESS_ACCOUNT_ID`

**Action:** Added `.mcp.json` to `.gitignore` before any commit. File never touched by git.

**For the product:** Always run a credential scan before the first commit on any project with MCP configs. The `.mcp.json` file is a natural home for credentials because MCPs require them at runtime — but it must never be committed to a public (or private, ideally) repo. Add it to `.gitignore` as the very first step before `git init`.

---

### GitHub Account Switch

**Situation:** `gh` CLI was authenticated as `kirstie-imajin` (personal account). Operator wanted to publish under `exponentialgrowthformula` (product account).

**Steps:**
1. `gh auth logout --hostname github.com` — logged out `kirstie-imajin`
2. `gh auth login` — browser-based OAuth to `exponentialgrowthformula`
3. Verified: `gh auth status` confirmed `exponentialgrowthformula` as active account

---

### Repo Creation

**Command:** `gh repo create kmc-motivational --public --source=. --remote=origin --push`

**Result:** https://github.com/exponentialgrowthformula/kmc-motivational

163 files committed. `.gitignore` excludes:
- `.mcp.json` — credentials
- `scripts/node_modules/` — build dependencies
- `scripts/_qc/`, `scripts/archive/`, `scripts/slides/`, `scripts/stacked/` — build artifacts

---

## Final State Entering Next Session

| Component | Status |
|---|---|
| GitHub repo | **Operational** — https://github.com/exponentialgrowthformula/kmc-motivational |
| Raw asset URLs | **Operational** — `raw.githubusercontent.com/exponentialgrowthformula/kmc-motivational/master/{path}` |
| `.mcp.json` credentials | Secured — excluded from git via `.gitignore` |
| Postiz | **Not yet installed** — next session |

---

## Open Items Entering Next Session

| Item | Owner | Context |
|---|---|---|
| **Postiz setup** | Claude + SD | Install and configure as publishing MCP — only remaining blocker for content-001 scheduling |
| **Publisher — schedule content-001** | Publisher + Postiz | Unblocked once Postiz operational |
| **SEO Agent — replacement hashtag set** | SEO Agent | Must confirm before Day 5 (Variant B publish) |
| **Asset sourcing** | Researcher + Designer | DET + DIW prompts not developed; gaps toward 52-image target |
| **Token refresh** | SD | Access token expires 2026-06-13 |

---

## For the Product

- **Add `.mcp.json` to `.gitignore` before `git init`.** MCP configs are a common credential exposure point. The file contains live API tokens and app secrets by design — it must be excluded from version control as the first step, not as an afterthought. Create the `.gitignore` before the first `git add`.

- **The GitHub CLI `gh repo create --public --source=. --remote=origin --push` command does everything in one step.** It creates the remote repo, sets it as `origin`, and pushes the current branch. No need to manually create the repo on GitHub, add the remote, and push separately.

- **Raw GitHub URLs require a public repo.** `raw.githubusercontent.com` URLs for files in private repos return a 404 to unauthenticated requests. If the repo is private, the Instagram API (and any scheduling tool) cannot fetch the asset. For this use case — serving media files to external APIs — the repo must be public, or files must be hosted elsewhere.
