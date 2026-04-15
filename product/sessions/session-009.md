# Session 009
**Date:** 2026-04-14
**Phase coverage:** Phase 3 — Publishing MCP Stack setup (continued)
**Session type:** Infrastructure setup — ig-mcp clone, Meta App additional permissions

---

## Narrative Summary

This session continued directly from session-008, picking up the ig-mcp install. The first task was cloning the ig-mcp repo (`github.com/jlbadano/ig-mcp`) to `c:\Users\kirst\github\ig-mcp\` — a separate location from the project repo since it's a third-party tool.

Before the clone, the operator added additional permissions to the existing Meta App. The ig-mcp README specifies a broader permission set than what was configured in session-008 (which covered the minimum for basic posting). The additional permissions added this session:

- `business_management`
- `instagram_basic`
- `instagram_manage_insights`
- `pages_show_list`
- `pages_read_engagement`
- `pages_manage_metadata`

One permission listed in ig-mcp's README — `pages_read_user_content` — **is not available as an option in the Meta developer app admin UI**. This permission appears to have been deprecated or renamed by Meta. It was not added because it cannot be added through the current UI.

The ig-mcp repo was cloned successfully. It is a Python-based MCP server requiring Python 3.10+, which in this environment means `uv run python` (Python is not installed standalone; `uv` manages the Python runtime).

Next steps remain: configure `.env`, add to `.mcp.json`, test with a draft post.

---

## Structured Log

### Meta App — Additional Permissions Added

**Context:** ig-mcp README specifies a larger permission set than the minimum configured in session-008. Operator manually added permissions via the Permissions and Features sidebar in the Meta developer portal.

**Full permission set on the Meta App as of this session:**

| Permission | When Added | Purpose |
|---|---|---|
| `instagram_business_basic` | Session 008 — default flow | Basic account access |
| `instagram_manage_comments` | Session 008 — default flow | Comment management |
| `instagram_business_manage_messages` | Session 008 — default flow | DM management (requires App Review for full access) |
| `instagram_content_publish` | Session 008 — manual (sidebar) | **Required for posting** |
| `business_management` | Session 009 — manual (sidebar) | Business portfolio access |
| `instagram_basic` | Session 009 — manual (sidebar) | Basic profile and media read access |
| `instagram_manage_insights` | Session 009 — manual (sidebar) | Post and account analytics |
| `pages_show_list` | Session 009 — manual (sidebar) | List Facebook Pages connected to the account |
| `pages_read_engagement` | Session 009 — manual (sidebar) | Read Page engagement data |
| `pages_manage_metadata` | Session 009 — manual (sidebar) | Read/write Page settings and metadata |

**Permission not added — `pages_read_user_content`:**
- Listed in ig-mcp README as a required permission
- **Not available in the Meta developer app admin UI** as of 2026-04-14
- Likely deprecated or renamed by Meta
- Proceed without it; surface as an issue only if API calls fail with a permission error referencing this scope

---

### Token Generation — Instagram Account Not Linked to Facebook Page

**Trigger:** During the Graph API Explorer token generation flow, the permission dialog asked which Instagram account to grant access to. The Exponential Growth Formula Instagram account did not appear — only an Instagram account linked to a different product.

**Root cause:** The @exponentialgrowthformula_ Instagram account had not been connected to the Exponential Growth Facebook Page. The Graph API can only see Instagram accounts that are explicitly linked to the Page selected in the token flow.

**Resolution:** Connected the Instagram account to the Facebook Page before proceeding:
- From the **Facebook Page**: Settings → Instagram → Link Account
- OR from **Instagram**: Settings → Account → Linked Accounts → Facebook → select the correct Page

Once the connection was made, the correct Instagram account appeared in the token generation dialog.

**Note:** This step is missing from the session-008 documentation of the setup flow. It must be completed before token generation — not after.

---

### ig-mcp — Cloned

**Repo:** github.com/jlbadano/ig-mcp
**Clone location:** `c:\Users\kirst\github\ig-mcp\` (separate from project repo — third-party tool, not checked into kmc-motivational)
**Language:** Python 3.10+
**Entry point:** `src/instagram_mcp_server.py`

**Project structure:**
```
ig-mcp/
  src/                  # MCP server source
  config/               # Configuration files
  scripts/              # Utility scripts
  tests/                # Test suite
  requirements.txt      # Python dependencies
  env.example           # Env var template
  AUTHENTICATION_GUIDE.md
  INSTAGRAM_DM_SETUP.md
```

**Required env vars (from env.example):**

| Variable | Value source |
|---|---|
| `INSTAGRAM_ACCESS_TOKEN` | Generated session 008 |
| `FACEBOOK_APP_ID` | `1710348726649294` |
| `FACEBOOK_APP_SECRET` | Secured by operator |
| `INSTAGRAM_BUSINESS_ACCOUNT_ID` | `17841479343890092` |

**Token verification and extension (complete after every token generation):**

1. Go to **developers.facebook.com/tools/debug/accesstoken/**
2. Paste the token — confirm scopes match what was selected in the Explorer
3. Click **Extend Access Token** — this converts the short-lived token (~1-2 hour expiry) to a long-lived token (60 days)
4. Copy the new extended token value shown in the debugger — this is the token that goes in `.env`, not the original
5. Note the expiry date — token must be refreshed before it expires or ig-mcp calls will fail

**Why the debugger, not somewhere else in the admin UI:** The Token Debugger is the only GUI in the Meta developer portal that offers token extension. There is no dedicated credentials management page. Alternative: make the exchange via direct API call —
```
GET https://graph.facebook.com/oauth/access_token
  ?grant_type=fb_exchange_token
  &client_id={app_id}
  &client_secret={app_secret}
  &fb_exchange_token={short_lived_token}
```

**Current token expiry:** 2026-06-13. Set a calendar reminder to refresh before this date.

**Token refresh process (every 60 days):** Return to Graph API Explorer → generate new short-lived token with same permissions → extend in debugger → update `.env` with new token value.

**Remaining install steps:**
1. Copy `env.example` → `.env`, fill in credentials
2. Add to project `.mcp.json`:
```json
{
  "instagram": {
    "command": "uv",
    "args": ["run", "python", "C:/Users/kirst/github/ig-mcp/src/instagram_mcp_server.py"],
    "env": {
      "INSTAGRAM_ACCESS_TOKEN": "...",
      "FACEBOOK_APP_ID": "1710348726649294",
      "FACEBOOK_APP_SECRET": "...",
      "INSTAGRAM_BUSINESS_ACCOUNT_ID": "17841479343890092"
    }
  }
}
```
3. Test with draft/private post to confirm end-to-end

**Note on command:** ig-mcp README uses `python`. Must use `uv run python` in this environment — Python is not installed standalone.

---

### ig-mcp — Credential Storage Decision

**Question raised:** Should ig-mcp be cloned inside the project folder since its credentials are project-specific?

**Decision:** No. ig-mcp stays at `c:\Users\kirst\github\ig-mcp\` (separate from the project repo). Reasons:
- ig-mcp has its own `.git` folder — cloning it inside kmc-motivational would create a nested git repo (submodule territory), which is messy
- The project-specific config already lives in the right place: the `env` block inside `.mcp.json` in the project folder
- ig-mcp itself should contain no project-specific state

**Credential storage pattern:** ig-mcp uses `pydantic_settings`, which reads environment variables first and falls back to `.env`. Since `.mcp.json` passes all four credentials as env vars directly to the server process, the `.env` file is redundant. The `.env` was deleted. `.mcp.json` is the single source of truth for credentials — it lives in the project folder, is project-specific, and should be `.gitignore`d.

**For the product:** Third-party MCP tools should be cloned outside the project repo to avoid nested git issues. Project-specific credentials belong in the project's `.mcp.json` env block, not in a `.env` file inside the tool's folder. If the tool supports `pydantic_settings` or similar env-var-first config, the `.env` file can be omitted entirely.

---

### Final State — ig-mcp Configured

- Cloned to: `c:\Users\kirst\github\ig-mcp\`
- `.env` deleted — credentials passed entirely via `.mcp.json` env block
- `.mcp.json` updated with all four credentials (token, app ID, app secret, account ID)
- Pending: restart Claude Code to activate the MCP server, then test with a live API call

---

## Open Items Entering Next Session

| Item | Owner | Context |
|---|---|---|
| Configure ig-mcp `.env` | SD + Claude | 4 required vars — all credentials in hand |
| Add ig-mcp to `.mcp.json` | Claude | Use `uv run python` not `python` as command |
| Test posting | SD + Claude | Draft/private post to confirm end-to-end flow |
| Token refresh strategy | TBD | Tokens expire every 60 days — need a reminder or auto-refresh |
| instagram-engagement-mcp setup | Claude | Analytics MCP — same Meta App credentials; defer until posting confirmed |
| Analyst A/B test brief | Analyst | Format A vs Format C — unblocked |
| Publisher schedule content-001 | Publisher | All 3 formats approved — unblocked pending ig-mcp working |

---

## For the Product

- **ig-mcp requires a broader permission set than the minimum for posting.** Session-008 documented only the permissions needed to get an access token. ig-mcp also needs `business_management`, `instagram_basic`, `instagram_manage_insights`, `pages_show_list`, `pages_read_engagement`, and `pages_manage_metadata`. All should be added before configuring ig-mcp — adding them after the fact requires regenerating or refreshing the access token.

- **`pages_read_user_content` is listed in ig-mcp's README but does not exist in the Meta developer portal UI.** This is likely a deprecated or renamed permission. Product setup guides should note that this permission can be skipped — it is not selectable and there is no functional replacement visible in the current admin UI. Monitor for API errors referencing it; if none appear, it is safe to omit.

- **The Instagram account must be linked to the Facebook Page before generating the access token.** This step is easy to miss because it's not called out in Meta's developer documentation or in ig-mcp's README. During token generation, the Graph API Explorer asks which Instagram account to grant access to — it only lists accounts that are already connected to the selected Facebook Page. If the account isn't linked, it won't appear in the dialog at all, and there's no error message explaining why. The fix is to link the account first (Facebook Page → Settings → Instagram, or Instagram → Settings → Account → Linked Accounts → Facebook), then return to the token generation flow. This should be an explicit step in the product setup guide, placed before the Graph API Explorer step.

- **Token generation is a two-step process: generate in Graph API Explorer, then extend in the Token Debugger.** The Graph API Explorer produces a short-lived token valid for ~1-2 hours. This is not the token you use in production. After generating, immediately go to the Token Debugger (developers.facebook.com/tools/debug/accesstoken/), paste the token, verify the scopes, and click "Extend Access Token." The extended token is valid for 60 days and is what goes into `.env`. The product setup guide should present these as sequential required steps — not optional.

- **Long-lived tokens expire every 60 days — build in a refresh reminder from day one.** The expiry date is shown in the debugger output. Set a calendar reminder before that date. Refresh process: Graph API Explorer → generate new short-lived token → extend in debugger → update `.env`. If the token expires while ig-mcp is active, all API calls will fail silently or with auth errors.

- **Permissions should be fully configured before generating the access token.** The access token captures the granted scopes at the time of generation. If permissions are added after the token is generated, the token must be refreshed or regenerated for the new permissions to take effect. The product setup guide should present the full permission list upfront, before the token generation step — not as an afterthought when wiring up ig-mcp.
