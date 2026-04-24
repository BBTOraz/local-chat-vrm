# Frontend Verification

Date: 2026-04-24
Status: proposal-only fallback package

## Decision

The frontend verification track was intentionally downgraded to a proposal-only package in this session.

Reasons:

- Session priority was explicitly `backend instrumentation -> monitoring stack -> minimal frontend verification`.
- The backend and monitoring tracks produced direct dissertation evidence and consumed the available timebox.
- No existing Playwright or Cypress scaffold was present in the repository at the time of preflight.
- The Docker daemon is currently not running, so re-validating the full local stack would add environment noise instead of clean evidence.

## Confirmed frontend testability baseline

- No frontend e2e tool is currently installed.
- The frontend still resolves its backend target from [`src/utils/config.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/utils/config.ts:1) with default API base `http://localhost:8181`.
- The high-value verification scope remains:
  - conversation list reachability
  - simple mode response
  - agent mode SSE first event or controlled failure

## Recommended tool

Preferred tool: `@playwright/test`

Recommended setup commands:

```powershell
Push-Location C:\Users\Tao\Desktop\Project\local-chat-vrm
npm install -D @playwright/test
npx playwright install chromium
Pop-Location
```

## Proposed smoke scenarios

| ID | Scenario | Scope | Expected evidence |
| --- | --- | --- | --- |
| FE-SMOKE-01 | Open app and confirm conversation list area renders | UI reachability | screenshot plus passing Playwright step |
| FE-SMOKE-02 | Submit a simple-mode message and confirm non-empty assistant response | frontend + backend integration | screenshot, network trace, backend log reference |
| FE-SMOKE-03 | Submit an agent-mode message and confirm first SSE event or controlled error rendering | SSE integration | screenshot, console/network trace, backend structured event or controlled error evidence |

## Runnable command skeleton

```powershell
Push-Location C:\Users\Tao\Desktop\Project\local-chat-vrm
npx playwright test tests/e2e/chat-smoke.spec.ts
Pop-Location
```

## What can be claimed now

- The frontend verification scope is defined and bounded.
- The backend target used by the frontend is confirmed.
- A manual QA matrix exists and can be executed immediately.

## What cannot be claimed yet

- No Playwright dependency has been installed in this session.
- No automated frontend smoke run has been executed in this session.
- No browser screenshots or trace files from frontend smoke automation exist yet.
