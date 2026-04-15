# Session 008
**Date:** 2026-04-14
**Phase coverage:** Phase 3 — Publishing MCP Stack setup (pre-Stage 6)
**Session type:** Infrastructure setup — Instagram Graph API, Meta App configuration, access token generation

---

## Narrative Summary

This session began with the intent of configuring the Instagram MCPs needed for Stage 6 (Publisher) and Stage 7 (Analyst). What emerged was a much longer journey through the Meta developer ecosystem — full of friction, account type decisions, and a multi-step authentication flow that required navigating several non-obvious pitfalls.

The first decision was account type. The initial plan assumed an Instagram Business account was required for API access. This was corrected early: Business accounts lose access to Instagram's full licensed music library (restricted to royalty-free only), which is a critical capability for a Reels-based account using trending audio. Creator accounts retain full music access AND can access the Instagram Graph API. The correct path is Creator — no functionality is lost, and music access is preserved.

The Facebook Page requirement surfaced next. The operator didn't want anything tied to Facebook, and especially didn't want to create a page they'd never use. The explanation: a Facebook Page is a technical gate for Graph API access, not a content publishing target. You create it, link it, and never touch it again. The Page has no public footprint because nothing is ever posted to it.

The operator tried creating a dedicated Facebook account to keep things separate from their personal identity. That account hit Meta's new-account restrictions — couldn't create pages, couldn't access the developer portal. The solution was to use the personal Facebook account, with the clarification that a Page and a Meta App are completely invisible on a personal Facebook profile — friends don't see them, they don't appear in the timeline.

The Meta App creation process had changed since the last documentation of this flow. The UI no longer offers "Other" as a use case — the correct selection is "Manage messaging and content on Instagram." The app was created successfully with App ID `1710348726649294`.

Permissions were then configured. The dashboard's built-in flow adds three: `instagram_business_basic`, `instagram_manage_comments`, `instagram_business_manage_messages`. A fourth — `instagram_content_publish` — had to be added manually via the Permissions and features sidebar. This one is critical; without it the posting API calls will fail.

Connecting the Instagram account to generate an access token required the account to have the Instagram Tester role. This is a distinct role from the generic "Tester" role — an easy mistake to make, as both appear in the same role assignment dialog. Generic Tester doesn't generate an Instagram invitation. Instagram Tester does.

Once the Instagram Tester role was assigned, the invitation appeared neither in the Instagram mobile app nor in the developer portal notifications. The correct acceptance path: log into instagram.com in a web browser, go to Edit Profile → Apps and Websites → Tester Invites tab. The mobile app does not surface this invitation.

With the invitation accepted, the access token was generated successfully. All three required credentials are now in the operator's possession:
- **App ID:** `1710348726649294`
- **App Secret:** (stored securely by operator)
- **Access Token:** (stored securely by operator)
- **Instagram Business Account ID:** `17841479343890092`

The session closed with a plan for the next session: clone ig-mcp to `c:\Users\kirst\github\ig-mcp\`, configure the `.env` file with the four credentials, update `.mcp.json` to add the server, and test with a draft post.

One broader question was raised and resolved: could session-based auth tools (like instagrapi) be used instead, avoiding the Meta App setup entirely? The honest answer: yes, they exist and are easier to set up, but they violate Instagram's ToS and carry real account ban risk. For an account being built as a real presence, the official Graph API path is the only safe choice. The 30-minute Meta setup friction is a one-time cost.

---

## Structured Log

### Decision — Creator Account, Not Business

**Trigger:** Initial plan assumed Business account was required for API access.

**Finding:** Instagram Graph API supports both Business and Creator professional accounts. Creator accounts retain full access to Instagram's licensed music library for Reels. Business accounts are restricted to royalty-free/commercial audio only.

**Decision:** Stay on Creator account. The Facebook Page linkage (required for API access regardless of account type) does not require posting to Facebook — the Page is a technical authentication gate only.

---

### Decision — Official Graph API vs Session-Based Auth

**Options considered:**

| Approach | Setup | ToS Compliant | Account Risk | Music Access |
|---|---|---|---|---|
| Instagram Graph API (official) | High — Meta App + FB Page | Yes | None | Unrelated |
| Session-based (e.g. instagrapi) | Low — just login credentials | No | Real — account ban possible | Unrelated |

**Decision:** Official Graph API. Account safety on a real, growing account outweighs setup convenience.

---

### Meta App Creation

**Portal:** developers.facebook.com (logged in with personal Facebook account)

**App name:** Exponential Growth Formula-IG
**App ID:** `1710348726649294`
**Use case selected:** Manage messaging and content on Instagram
**Business portfolio:** Skipped ("I don't want to connect a business portfolio yet")

**Note on UI change:** The app creation flow no longer offers "Other" as a use case. "Manage messaging and content on Instagram" is the correct current selection for content publishing.

---

### Permissions Configured

| Permission | How Added | Purpose |
|---|---|---|
| `instagram_business_basic` | "Add all required permissions" button | Basic account access |
| `instagram_manage_comments` | "Add all required permissions" button | Comment management |
| `instagram_business_manage_messages` | "Add all required permissions" button | DM management (requires App Review for full access) |
| `instagram_content_publish` | Permissions and features sidebar (manual) | **Required for posting** — not included in default flow |

---

### Instagram Tester Role — Pitfalls Documented

**Step:** Assign Instagram Tester role so the Instagram account can generate an access token.

**Critical distinction:** There are two visually similar roles in the App Roles dialog:
- **Tester** — a Facebook/Meta app role. Does NOT generate an Instagram tester invitation. Wrong choice.
- **Instagram Tester** — appears under "Additional roles for this app" in the same dialog. Generates the Instagram invitation. Correct choice.

**Invitation acceptance path:**
- NOT in Instagram mobile app
- NOT in Meta developer portal notifications
- **Correct path:** instagram.com in a web browser → Profile → Edit Profile → Apps and Websites → Tester Invites tab → Accept

---

### Access Token Generated

**Instagram Business Account ID:** `17841479343890092`
**Token type:** Short-lived (generated from dashboard; operator to exchange for long-lived token if needed)
**Expiry:** Tokens expire every 60 days — refresh strategy TBD

**Credentials held by operator:**
- App ID: `1710348726649294`
- App Secret: secured
- Access Token: secured
- Instagram Account ID: `17841479343890092`

---

### ig-mcp — Research Completed, Install Deferred

**Repo:** github.com/jlbadano/ig-mcp
**Language:** Python (requires Python 3.10+ via `uv run` in this environment)
**Entry point:** `src/instagram_mcp_server.py`

**Required env vars:**

| Variable | Value source |
|---|---|
| `INSTAGRAM_ACCESS_TOKEN` | Generated this session |
| `FACEBOOK_APP_ID` | `1710348726649294` |
| `FACEBOOK_APP_SECRET` | Secured by operator |
| `INSTAGRAM_BUSINESS_ACCOUNT_ID` | `17841479343890092` |

**Install plan (next session):**
- Clone to: `c:\Users\kirst\github\ig-mcp\` (separate from project repo — third-party tool)
- Configure `.env` from `.env.example`
- Add entry to `.mcp.json`:
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

**Note on `command`:** ig-mcp uses `python` in its README. Must be replaced with `uv run python` for this environment (Python not installed standalone; `uv` manages Python).

---

## Open Items Entering Next Session

| Item | Owner | Context |
|---|---|---|
| Clone ig-mcp | SD + Claude | `c:\Users\kirst\github\ig-mcp\` — do not install inside kmc-motivational |
| Configure ig-mcp `.env` | SD + Claude | 4 required vars — all credentials now in hand |
| Add ig-mcp to `.mcp.json` | Claude | Use `uv run python` not `python` as command |
| Test posting | SD + Claude | Draft/private post to confirm end-to-end flow |
| Token refresh strategy | TBD | Tokens expire every 60 days — need a reminder or auto-refresh |
| instagram-engagement-mcp setup | Claude | Analytics MCP — same Meta App credentials; defer until posting confirmed working |
| Asset Manager intake (Format C) | Asset Manager | `sr-pdh-grow-001.mp4` + cover waiting for intake |
| Analyst A/B test brief | Analyst | Format A vs Format C — unblocked |
| Publisher schedule content-001 | Publisher | All 3 formats approved — unblocked pending publishing MCP |

---

## For the Product

- **Instagram Creator, not Business, is the correct account type for a content-first social media account.** Business accounts trade away music library access for minor API features that aren't relevant to a content pipeline. The official documentation and most setup guides default to "Business" — this is misleading for accounts where trending audio is part of the strategy. The product should clearly document this distinction.

- **The Facebook Page is a technical requirement, not a content commitment.** The most common objection to the Graph API path is "I don't want a Facebook presence." The correct response: you're not getting one. The Page is an authentication artifact. Create it, link it, leave it empty. This should be stated plainly in the product's setup guide to avoid the detour that happened in this session.

- **Meta's developer portal UI changes frequently.** The use case options, the role assignment dialog, the invitation acceptance path — none of these matched existing documentation exactly. Any product documentation covering this flow should be written with explicit "UI may differ" callouts and focus on the logic of each step rather than exact button labels.

- **The Instagram Tester role distinction is a real gotcha.** Two roles look nearly identical in the UI. One works; one doesn't. The invitation acceptance path (instagram.com web only, not mobile) is not documented anywhere obvious. These two facts together mean that a developer who sets this up without knowing them will spend 30+ minutes confused. Both should be called out explicitly in the setup guide.

- **Credential security matters from day one.** Four values (App ID, App Secret, Access Token, Account ID) are now in the operator's hands. Before ig-mcp is configured, a decision should be made about how these are stored — not in the repo, not in plaintext in `.mcp.json` if avoidable. The product should have an opinionated answer on credential storage for this setup.
