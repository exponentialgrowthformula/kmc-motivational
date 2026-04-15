# Session 010
**Date:** 2026-04-14
**Phase coverage:** Phase 3 — Publishing MCP Stack setup (ig-mcp activation)
**Session type:** Infrastructure debugging — ig-mcp dependency installation, pyproject.toml setup, live API test

---

## Narrative Summary

Session-009 ended with ig-mcp cloned and credentials wired into `.mcp.json`, but not yet tested. This session picked up at the test step. The MCP server wasn't connecting — after restarting Claude Code, the instagram tools simply didn't appear. Investigating why revealed a cascading set of issues, each one resolvable, and each one worth documenting for the product.

The first issue was that ig-mcp's Python dependencies had never been installed. The repo has a `requirements.txt` but no `pyproject.toml`, and the `.mcp.json` config used `uv run python` as the command. `uv run` without a `pyproject.toml` doesn't know which environment to use — it just launches bare Python, which was missing `structlog` and every other dependency. The server was silently crashing before Claude Code could connect to it.

The initial fix was to create a `.venv` and install requirements with `uv pip install`, then point `.mcp.json` directly at `.venv/Scripts/python.exe`. That worked — the crash went away — but it's a fragile approach. A hardcoded path to a venv breaks if the repo is cloned elsewhere, if the venv is deleted, or if someone else replicates the setup. The right fix is to give `uv run` the information it needs to find the environment itself.

The proper fix was to add a `pyproject.toml` to the ig-mcp repo. This tells `uv` that the directory is a managed project with known dependencies. Once the pyproject.toml was in place, `.mcp.json` was updated to use `uv run --directory C:/Users/kirst/github/ig-mcp python -m src.instagram_mcp_server`. The `--directory` flag changes `uv`'s working directory before running, so it finds the pyproject.toml regardless of where Claude Code is launched from. The `-m` flag runs the server as a Python module rather than a script, which is required because the server uses relative imports (`from .config import ...`).

After those changes, `uv sync` was run in the ig-mcp directory to recreate the environment from `pyproject.toml`. The server started cleanly — no import errors, no missing modules. The only output on startup (when run without env vars from the terminal) is a pydantic validation error for the missing credentials, which confirms the configuration layer is working. When Claude Code spawns the server, it passes all four credentials via the `env` block in `.mcp.json`, so that error never appears in real use.

Restarting Claude Code with the corrected config brought the instagram tools online. A live `get_profile_info` call confirmed end-to-end connectivity: account ID `17841479343890092`, username `@exponentialgrowthformula_`, 2 followers, 1 post, correct bio text. ig-mcp is operational.

---

## Structured Log

### Issue 1 — ig-mcp Python Dependencies Not Installed

**Symptom:** After restarting Claude Code, instagram MCP tools did not appear. The server was silently failing to start.

**Diagnosis:** Running the server manually revealed the crash:
```
ModuleNotFoundError: No module named 'structlog'
```

**Root cause:** ig-mcp's dependencies had never been installed. The repo has a `requirements.txt` listing all dependencies, but no `pyproject.toml`. The `.mcp.json` config used `uv run python` as the launch command. When `uv run` is invoked without a `pyproject.toml` in the working directory, it has no project context and runs bare Python from the system — not from any managed environment. The dependencies in `requirements.txt` were never seen.

**Why this isn't obvious at setup time:** `uv run` doesn't error when there's no project — it silently launches Python without the dependencies. The server process starts, crashes immediately, and there's no user-visible error in Claude Code when an MCP server fails to connect. The tools simply don't appear.

---

### Issue 2 — Wrong Fix First (Hardcoded Venv Path)

**Initial fix applied:** Created a venv with `uv venv`, installed with `uv pip install -r requirements.txt`, then changed `.mcp.json` to point directly at the venv's Python binary:

```json
"command": "C:/Users/kirst/github/ig-mcp/.venv/Scripts/python.exe",
"args": ["C:/Users/kirst/github/ig-mcp/src/instagram_mcp_server.py"]
```

**Why this is not the right approach:**
- The path is machine-specific. It breaks if ig-mcp is cloned to a different location.
- If the venv is deleted and recreated (e.g. after a Python version change), the config silently breaks — the file at that path disappears.
- It bypasses `uv`'s environment management entirely, which is the tool this project uses for all Python execution.

**For the product:** This approach works in a pinch but should not be the documented solution. It is the kind of shortcut that causes silent failures weeks later when the environment is modified. The correct fix is documented in the next section.

---

### Proper Fix — pyproject.toml + uv run --directory

**What was done:**

1. Added `pyproject.toml` to the ig-mcp repo (`C:/Users/kirst/github/ig-mcp/pyproject.toml`)
2. Updated `.mcp.json` to use `uv run --directory` and `-m` module syntax

**pyproject.toml created:**

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "instagram-mcp-server"
version = "1.0.0"
description = "A Model Context Protocol server for Instagram API integration"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "mcp>=1.0.0",
    "fastmcp>=0.1.0",
    "httpx>=0.25.0",
    "requests>=2.31.0",
    "python-dotenv>=1.0.0",
    "pydantic>=2.5.0",
    "pydantic-settings>=2.1.0",
    "asyncio-throttle>=1.0.2",
    "aiofiles>=23.2.1",
    "nest-asyncio>=1.5.0",
    "python-multipart>=0.0.6",
    "pillow>=10.0.0",
    "structlog>=23.2.0",
    "rich>=13.7.0",
    "python-dateutil>=2.8.2",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.4.0",
    "pytest-asyncio>=0.21.0",
    "pytest-cov>=4.1.0",
    "pytest-mock>=3.12.0",
    "black>=23.0.0",
    "isort>=5.12.0",
    "flake8>=6.0.0",
    "mypy>=1.7.0",
]

[project.scripts]
instagram-mcp-server = "src.instagram_mcp_server:main"

[tool.hatch.build.targets.wheel]
packages = ["src"]
```

**Key decisions in the pyproject.toml:**
- Runtime deps only in `[project].dependencies`. Dev tools (pytest, black, mypy) moved to `[project.optional-dependencies].dev`. The original `requirements.txt` mixed all of these together as runtime deps — that's incorrect; test tools don't belong in the production dependency set.
- `redis`, `sqlalchemy`, `alembic` removed entirely. These were in `requirements.txt` under an "Optional: For advanced features" comment but were included unconditionally. They're excluded from pyproject.toml as they're not used by the server in this setup.
- `hatchling` used as the build backend — this is uv's preferred modern build backend and doesn't require a legacy `setup.py`.

**Updated `.mcp.json` command:**

```json
"instagram": {
  "command": "uv",
  "args": ["run", "--directory", "C:/Users/kirst/github/ig-mcp", "python", "-m", "src.instagram_mcp_server"],
  "env": { ... }
}
```

**Why `--directory`:** Tells `uv` to treat `C:/Users/kirst/github/ig-mcp` as the working directory before resolving the project. This means `uv` finds the `pyproject.toml` there, uses the correct `.venv`, and runs with the right dependencies — regardless of what directory Claude Code was launched from.

**Why `-m src.instagram_mcp_server` instead of `src/instagram_mcp_server.py`:** The server uses relative imports at the top of the file (`from .config import get_settings`, `from .instagram_client import ...`). Relative imports require the file to be run as part of a package (`-m` flag), not as a standalone script. Running it as a script with a path argument causes `ImportError: attempted relative import with no known parent package`.

**Environment sync:** After adding pyproject.toml, run `uv sync` from the ig-mcp directory to create/update the `.venv`:
```bash
cd C:/Users/kirst/github/ig-mcp
uv sync
```

---

### Live Test — get_profile_info

**Test performed:** `mcp__instagram__get_profile_info` called with no arguments (uses the configured account ID).

**Result:**
```json
{
  "success": true,
  "data": {
    "id": "17841479343890092",
    "username": "exponentialgrowthformula_",
    "name": "Exponential Growth Formula",
    "biography": "Life changing insights to build better habits ...",
    "followers_count": 2,
    "follows_count": 14,
    "media_count": 1,
    "profile_picture_url": "..."
  }
}
```

**Status: CONFIRMED OPERATIONAL.** All credentials valid. API connection live.

**Tools available via ig-mcp:**

| Tool | Purpose |
|---|---|
| `get_profile_info` | Account info — followers, bio, counts |
| `get_media_posts` | List recent posts |
| `get_account_insights` | Account-level analytics |
| `get_media_insights` | Per-post analytics |
| `get_account_pages` | Linked Facebook Pages |
| `get_conversations` | DM threads |
| `get_conversation_messages` | Messages within a thread |
| `publish_media` | Post to Instagram |
| `send_dm` | Send a direct message |
| `validate_access_token` | Token validity check |

---

## Final State Entering Next Session

| Component | Status |
|---|---|
| ig-mcp server | **Operational** — live API call confirmed |
| `.mcp.json` | Correct — `uv run --directory`, `-m` module syntax |
| `pyproject.toml` | Added to ig-mcp repo |
| Access token | Valid until 2026-06-13 |

---

## Open Items Entering Next Session

| Item | Owner | Context |
|---|---|---|
| **Publisher — schedule content-001** | Publisher | All 3 formats approved. ig-mcp now operational. Unblocked. |
| **Analyst — A/B test brief** | Analyst | Format A vs Format C — unblocked |
| **Token refresh reminder** | SD | Token expires 2026-06-13 — set calendar reminder |
| **instagram-engagement-mcp setup** | Claude | Analytics MCP — same credentials; defer until posting confirmed |
| **Asset sourcing** | Researcher + Designer | DET + DIW prompts not developed; SNL/PDH/DFC/DWR gaps toward 52-image target |

---

## For the Product

- **`uv run` without a `pyproject.toml` silently uses bare Python.** If an MCP server's repo only has a `requirements.txt`, `uv run python script.py` will launch Python without any installed packages — no error, no warning. The fix is to add a `pyproject.toml` so `uv` knows the project's dependencies. Every third-party MCP tool that uses Python should have a `pyproject.toml` added before wiring it into `.mcp.json`.

- **MCP server startup failures are silent in Claude Code.** When an MCP server crashes on startup, the tools simply don't appear — there's no error message shown to the user. Always test the server independently from the terminal (`uv run python -m src.server_module`) before concluding it worked. If the tools are missing after a restart, the server crashed.

- **The correct `.mcp.json` pattern for a Python MCP tool using `uv`:**
  ```json
  {
    "command": "uv",
    "args": ["run", "--directory", "/absolute/path/to/tool", "python", "-m", "src.module_name"],
    "env": { ... }
  }
  ```
  The `--directory` flag makes the command portable (not dependent on Claude Code's working directory). The `-m` flag is required for servers that use relative imports.

- **Distinguish script-style vs module-style Python entry points.** If a Python file contains `from .something import ...` (relative import), it must be run with `python -m package.module`, not `python path/to/file.py`. Running it as a script path produces `ImportError: attempted relative import with no known parent package`. Check for relative imports at the top of the entry point file before deciding how to invoke it.

- **Separate runtime and dev dependencies in `pyproject.toml`.** The original `requirements.txt` included pytest, black, mypy, and optional extras (redis, sqlalchemy) alongside the actual runtime dependencies. This means anyone running `uv sync` in production would install test tools. When creating `pyproject.toml`, put only what the server needs to run in `[project].dependencies`. Put test and lint tools in `[project.optional-dependencies].dev`. Exclude "optional" extras (redis, sqlalchemy) unless the specific features they enable are in use.
