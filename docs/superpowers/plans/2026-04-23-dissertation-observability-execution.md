# Dissertation Observability Package Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a verified chapter-3 engineering package with confirmed system mapping, a minimal backend observability baseline, a minimal monitoring baseline, and a capped frontend verification baseline or proposal-only fallback.

**Architecture:** Work in four gated tracks. First produce the confirmed system map and prioritized backlog in `local-chat-vrm`. Then implement the backend observability baseline in `orchestra`. Only after backend verification passes, add the monitoring baseline in `orchestra/observability/`. Frontend verification is capped to three smoke scenarios and may be downgraded to a proposal-only package if time or runtime verification blocks execution.

**Tech Stack:** Spring Boot 3.4.5, WebFlux, Spring AI, Micrometer, Actuator, Prometheus, Grafana, React 19, TypeScript, Vite, Playwright (only if frontend verification is implemented), Markdown evidence docs.

---

### Task 1: Verify Preconditions And Create The Confirmed System Map

**Files:**
- Create: `docs/dissertation/chapter3/confirmed-system-map.md`
- Create: `docs/dissertation/chapter3/session-status-and-evidence.md`
- Modify: `docs/superpowers/specs/2026-04-23-dissertation-observability-design.md` only if execution reality forces a spec clarification

- [ ] **Step 1: Verify branch safety in both repositories**

Run:

```powershell
git branch --show-current
git rev-parse --abbrev-ref HEAD
git -C C:\Users\Tao\Desktop\Project\orchestra branch --show-current
git -C C:\Users\Tao\Desktop\Project\orchestra rev-parse --abbrev-ref HEAD
```

Expected:
- `local-chat-vrm` is not `main` or `master`
- `local-chat-vrm` is not detached HEAD
- `orchestra` is not `main` or `master`
- `orchestra` is not detached HEAD

If `local-chat-vrm` is on `main`, `master`, or detached HEAD, record the blocker in `session-status-and-evidence.md` and do not edit `local-chat-vrm` files until the repo is on a safe working branch.
If `orchestra` is on `main` or detached HEAD, record the blocker in `session-status-and-evidence.md` and do not edit backend files until a working branch exists.

- [ ] **Step 2: Verify runtime preconditions without changing code**

Run:

```powershell
Get-ChildItem C:\Users\Tao\Desktop\Project\orchestra
Get-Content -Raw C:\Users\Tao\Desktop\Project\orchestra\src\main\resources\application.properties
Get-Content -Raw C:\Users\Tao\Desktop\Project\local-chat-vrm\src\utils\config.ts
docker --version
```

Expected:
- backend repo is readable
- frontend API target is confirmable
- Docker is available or explicitly unavailable

- [ ] **Step 3: Write the confirmed system map**

Document:
- confirmed backend controllers and services
- confirmed frontend integration flow
- confirmed current observability baseline
- confirmed current testability baseline
- explicit gaps

Required code references to inspect while writing:
- `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\controller\AgentChatController.java`
- `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\controller\ChatController.java`
- `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\controller\ConversationController.java`
- `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\service\AIService.java`
- `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\service\ConversationService.java`
- `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\conf\AgentChatClientsConfig.java`
- `C:\Users\Tao\Desktop\Project\local-chat-vrm\src\hooks\useChatActions.ts`
- `C:\Users\Tao\Desktop\Project\local-chat-vrm\src\utils\sse.ts`

- [ ] **Step 4: Initialize the session status table**

Add rows for:
- confirmed now
- implemented in this session
- proposed but not yet implemented

Required columns:
- status label
- evidence source
- claim sentence
- dissertation artifact enabled

Seed the table with the current branch blocker status for `orchestra` if still present.

- [ ] **Step 5: Commit the documentation checkpoint**

Run:

```powershell
git add docs/dissertation/chapter3/confirmed-system-map.md docs/dissertation/chapter3/session-status-and-evidence.md
git commit -m "docs: add confirmed system map baseline"
```

Expected:
- one docs-only commit in `local-chat-vrm`

### Task 2: Write The Prioritized Backlog And Evidence Targets

**Files:**
- Create: `docs/dissertation/chapter3/implementation-backlog.md`
- Modify: `docs/dissertation/chapter3/session-status-and-evidence.md`

- [ ] **Step 1: Write the backlog table**

Include columns:
- priority
- status label
- item
- repo
- files
- implementation cost
- evidence source
- claim sentence
- dissertation artifact enabled

- [ ] **Step 2: Populate the implement-now items**

At minimum include:
- backend Prometheus export
- backend custom metrics
- backend structured logs
- monitoring baseline in `orchestra/observability/`

- [ ] **Step 3: Populate the downgrade-capable items**

At minimum include:
- frontend Playwright scaffold
- frontend smoke scenarios
- dashboard copy/export docs

- [ ] **Step 4: Commit the backlog checkpoint**

Run:

```powershell
git add docs/dissertation/chapter3/implementation-backlog.md docs/dissertation/chapter3/session-status-and-evidence.md
git commit -m "docs: add dissertation implementation backlog"
```

Expected:
- one docs-only commit in `local-chat-vrm`

### Task 3: Enforce The Backend Branch Gate Before Any Backend Edit

**Files:**
- Modify: `docs/dissertation/chapter3/session-status-and-evidence.md`

- [ ] **Step 1: Verify current backend branch again**

Run:

```powershell
git -C C:\Users\Tao\Desktop\Project\orchestra branch --show-current
git -C C:\Users\Tao\Desktop\Project\orchestra rev-parse --abbrev-ref HEAD
```

Expected:
- if branch is already non-`main` and non-detached, continue
- otherwise stop backend-repo writes and wait for user direction

- [ ] **Step 2: Record the branch-gate result**

Update `docs/dissertation/chapter3/session-status-and-evidence.md` with:
- the backend branch value
- the detached/non-detached status
- whether backend writes are allowed or blocked
- the exact next-step command if blocked, for example:

```text
git -C C:\Users\Tao\Desktop\Project\orchestra switch -c chore/dissertation-observability-baseline
```

Expected:
- if backend is unsafe, backend tasks are downgraded to proposal-only until the user provides direction
- if backend is safe, continue to Task 4

### Task 4: Enable Prometheus Export In Backend

**Files:**
- Modify: `C:\Users\Tao\Desktop\Project\orchestra\pom.xml`
- Modify: `C:\Users\Tao\Desktop\Project\orchestra\src\main\resources\application.properties`
- Test: `C:\Users\Tao\Desktop\Project\orchestra\src\test\java\bbt\tao\orchestra\OrchestraApplicationTests.java`
- Modify: `docs/dissertation/chapter3/session-status-and-evidence.md` only in a separate orchestrator follow-up step after backend edits are complete

- [ ] **Step 1: Write the failing verification expectation**

Document in the test or checkpoint notes that `/actuator/prometheus` must be exposed.

- [ ] **Step 2: Add the Prometheus registry dependency**

Add:

```xml
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
```

- [ ] **Step 3: Expose the Prometheus actuator endpoint**

Add or update properties so the backend exposes:

```properties
management.endpoints.web.exposure.include=health,metrics,prometheus
management.prometheus.metrics.export.enabled=true
```

- [ ] **Step 4: Run a focused backend test pass**

Run:

```powershell
Push-Location C:\Users\Tao\Desktop\Project\orchestra
.\mvnw.cmd -Dtest=OrchestraApplicationTests test
Pop-Location
```

Expected:
- test task completes successfully

- [ ] **Step 5: Decide implementation vs downgrade for Checkpoint C**

If backend writes are blocked or runtime verification cannot proceed, downgrade this task to proposal-only and record:
- blocking reason
- evidence collected so far
- exact next-step command

- [ ] **Step 6: Start the backend and verify the metrics endpoint**

Run:

```powershell
Push-Location C:\Users\Tao\Desktop\Project\orchestra
$backend = Start-Process -FilePath .\mvnw.cmd -ArgumentList 'spring-boot:run' -PassThru
try {
  Start-Sleep -Seconds 20
  curl http://localhost:8181/actuator/prometheus
} finally {
  Stop-Process -Id $backend.Id -Force
  Pop-Location
}
```

Expected:
- endpoint responds with Prometheus-format metrics
- default HTTP server metrics are present, for example `http_server_requests`

- [ ] **Step 7: Commit the Prometheus export change**

Run:

```powershell
git -C C:\Users\Tao\Desktop\Project\orchestra add pom.xml src/main/resources/application.properties src/test/java/bbt/tao/orchestra/OrchestraApplicationTests.java
git -C C:\Users\Tao\Desktop\Project\orchestra commit -m "feat: expose prometheus metrics"
```

Expected:
- one small logical backend instrumentation commit

### Task 5: Add Minimal Backend Custom Metrics And Structured Logs

**Files:**
- Create: `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\observability\OrchestraTelemetry.java`
- Create: `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\observability\StructuredLogFields.java`
- Modify: `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\controller\AgentChatController.java`
- Modify: `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\controller\ConversationController.java`
- Modify: `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\service\ConversationService.java`
- Modify: `C:\Users\Tao\Desktop\Project\orchestra\src\main\java\bbt\tao\orchestra\conf\AgentChatClientsConfig.java`
- Create: `C:\Users\Tao\Desktop\Project\orchestra\src\test\java\bbt\tao\orchestra\AgentChatObservabilityTest.java`
- Create: `C:\Users\Tao\Desktop\Project\orchestra\src\test\java\bbt\tao\orchestra\OrchestraTelemetryTest.java`
- Test: `C:\Users\Tao\Desktop\Project\orchestra\src\test\java\bbt\tao\orchestra\ConversationServiceTest.java`
- Modify: `docs/dissertation/chapter3/session-status-and-evidence.md` only in a separate orchestrator follow-up step after backend edits are complete

- [ ] **Step 1: Write failing tests for the smallest custom telemetry surface**

At minimum verify:
- SSE session counters change on open/complete/error
- title-generation timer or counter is recorded
- provider-call timer/counter is recorded
- `application_error` structured log is emitted on a controlled error path

Suggested test harnesses:
- `OrchestraTelemetryTest.java`: unit test around `SimpleMeterRegistry`
- `AgentChatObservabilityTest.java`: `@SpringBootTest(webEnvironment = RANDOM_PORT)` with `WebTestClient` and mocked `AgentOrchestrator`

- [ ] **Step 2: Create the telemetry wrapper**

Implement the wrapper around `MeterRegistry` with fixed metric names only:

```java
orchestra_sse_sessions_total
orchestra_provider_calls_total
orchestra_provider_latency_seconds
orchestra_conversation_title_generation_seconds
```

Allowed tags only:

```text
status, provider, operation, mode
```

Forbidden metric tags:

```text
conversationId, user text, exception message, dynamic path parameters, generated IDs, timestamps
```

- [ ] **Step 3: Instrument the SSE controller**

In `AgentChatController.java`:
- increment `opened` on accepted stream start
- increment `completed` on normal completion
- increment `failed` on error
- write structured log `conversation_message_submitted` with fields `conversationId`, `mode`, `messageLength`
- write structured log `sse_stream_closed` with fields `conversationId`, `status`, `durationMs`
- write structured log `application_error` with fields `errorClass`, `context`, `conversationId?` on controlled stream error paths

- [ ] **Step 4: Instrument title generation**

In `ConversationController.java` and/or `ConversationService.java`:
- record title-generation duration or count
- record failure path

- [ ] **Step 5: Instrument provider calls**

In `AgentChatClientsConfig.java`:
- wrap the existing `RestClient` interceptor and `WebClient` filter timing
- record `provider`, `operation`, `status`
- write structured log `provider_call_completed` with fields `provider`, `operation`, `status`, `latencyMs`
- keep external provider calls out of tests by unit-testing the telemetry wrapper and mocking controller dependencies

- [ ] **Step 6: Decide implementation vs downgrade for the rest of Checkpoint C**

If runtime verification is blocked, downgrade this task to proposal-only and record:
- blocking reason
- evidence collected so far
- exact next-step command

- [ ] **Step 7: Run focused backend tests**

Run:

```powershell
Push-Location C:\Users\Tao\Desktop\Project\orchestra
.\mvnw.cmd -Dtest=ConversationServiceTest,OrchestraTelemetryTest,AgentChatObservabilityTest test
Pop-Location
```

Expected:
- focused tests pass

- [ ] **Step 8: Trigger deterministic telemetry evidence**

Run:

```powershell
curl http://localhost:8181/api/conversations
curl -X POST http://localhost:8181/api/conversations/test-conv/generate-title -H "Content-Type: application/json" -d "{\"message\":\"Тестовый первый вопрос\"}"
curl http://localhost:8181/api/chat/simple-json/test-conv/%D0%A7%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%20%D0%95%D0%9D%D0%A3%3F
curl -N -X POST http://localhost:8181/api/agent/chat/test-conv -H "Content-Type: application/json" -H "Accept: text/event-stream" -d "{\"message\":\"Расскажи про ЕНУ\",\"mode\":\"stream\",\"visibility\":\"trace\"}"
curl http://localhost:8181/actuator/prometheus
```

Expected effects:
- request metrics increment
- title-generation metric increments
- provider-call metrics increment
- SSE opened/completed or opened/failed increments

Expected metrics to find:
- `http_server_requests`
- `orchestra_sse_sessions_total`
- `orchestra_provider_calls_total`
- `orchestra_provider_latency_seconds`
- `orchestra_conversation_title_generation_seconds`

Also capture at least one sample line for:
- `conversation_message_submitted`
- `provider_call_completed`
- `sse_stream_closed`
- `application_error` if a controlled failure path is exercised

If provider availability blocks runtime provider-call evidence, downgrade only the provider-call evidence row to proposal-only and record:
- blocking reason
- metrics/logs already verified
- exact next-step command to re-run once provider access is restored

- [ ] **Step 9: Commit the custom telemetry change**

Run:

```powershell
git -C C:\Users\Tao\Desktop\Project\orchestra add src/main/java/bbt/tao/orchestra/observability src/main/java/bbt/tao/orchestra/controller/AgentChatController.java src/main/java/bbt/tao/orchestra/controller/ConversationController.java src/main/java/bbt/tao/orchestra/service/ConversationService.java src/main/java/bbt/tao/orchestra/conf/AgentChatClientsConfig.java src/test/java/bbt/tao/orchestra/ConversationServiceTest.java src/test/java/bbt/tao/orchestra/AgentChatObservabilityTest.java
git -C C:\Users\Tao\Desktop\Project\orchestra commit -m "feat: add dissertation telemetry baseline"
```

Expected:
- one small logical backend instrumentation commit

### Task 6: Add The Monitoring Baseline In `orchestra/observability/`

**Files:**
- Create: `C:\Users\Tao\Desktop\Project\orchestra\observability\docker-compose.yml`
- Create: `C:\Users\Tao\Desktop\Project\orchestra\observability\prometheus\prometheus.yml`
- Create: `C:\Users\Tao\Desktop\Project\orchestra\observability\grafana\provisioning\datasources\datasource.yml`
- Create: `C:\Users\Tao\Desktop\Project\orchestra\observability\grafana\provisioning\dashboards\dashboards.yml`
- Create: `C:\Users\Tao\Desktop\Project\orchestra\observability\grafana\dashboards\01-api-overview-dashboard.json`
- Create: `C:\Users\Tao\Desktop\Project\orchestra\observability\grafana\dashboards\02-agent-flow-dashboard.json`

- [ ] **Step 1: Write the monitoring configuration**

Prometheus must scrape:

```yaml
targets: ['host.docker.internal:8181']
metrics_path: /actuator/prometheus
```

Grafana must provision Prometheus automatically.

- [ ] **Step 2: Add Dashboard 1**

Dashboard 1 panels:
- HTTP request latency
- endpoint throughput
- error rate
- health status

- [ ] **Step 3: Add Dashboard 2**

Dashboard 2 panels:
- SSE sessions by status
- provider latency
- provider failures
- title-generation events

- [ ] **Step 4: Decide implementation vs downgrade for Checkpoint D**

If monitoring cannot be verified, downgrade this task to proposal-only and record:
- blocking reason
- evidence collected so far
- exact next-step command

- [ ] **Step 5: Start the monitoring stack**

Run:

```powershell
Push-Location C:\Users\Tao\Desktop\Project\orchestra\observability
docker compose up -d
Pop-Location
```

Expected:
- Prometheus and Grafana containers start

- [ ] **Step 6: Verify scrape and dashboard provisioning**

Check:
- Prometheus target is up
- Grafana sees the datasource
- dashboard JSON files load

- [ ] **Step 7: Commit the monitoring baseline**

Run:

```powershell
git -C C:\Users\Tao\Desktop\Project\orchestra add observability
git -C C:\Users\Tao\Desktop\Project\orchestra commit -m "feat: add monitoring baseline"
```

Expected:
- one small logical monitoring commit

### Task 7: Record Monitoring Evidence And Export Dashboard Copies

**Files:**
- Create: `docs/dissertation/chapter3/artifacts/dashboards/01-api-overview-dashboard.json`
- Create: `docs/dissertation/chapter3/artifacts/dashboards/02-agent-flow-dashboard.json`
- Modify: `docs/dissertation/chapter3/session-status-and-evidence.md`

- [ ] **Step 1: Copy the canonical dashboard JSON files into the dissertation artifacts path**

Source:
- `C:\Users\Tao\Desktop\Project\orchestra\observability\grafana\dashboards\01-api-overview-dashboard.json`
- `C:\Users\Tao\Desktop\Project\orchestra\observability\grafana\dashboards\02-agent-flow-dashboard.json`

Destination:
- `docs/dissertation/chapter3/artifacts/dashboards/01-api-overview-dashboard.json`
- `docs/dissertation/chapter3/artifacts/dashboards/02-agent-flow-dashboard.json`

- [ ] **Step 2: Record monitoring evidence in the session status table**

Add:
- scrape target
- metrics path
- dashboard file names
- screenshot targets to capture later

- [ ] **Step 3: Commit the monitoring evidence docs**

Run:

```powershell
git add docs/dissertation/chapter3/artifacts/dashboards docs/dissertation/chapter3/session-status-and-evidence.md
git commit -m "docs: capture monitoring evidence paths"
```

Expected:
- one docs-only commit in `local-chat-vrm`

### Task 8: Add Minimal Frontend Verification Or Produce A Proposal-Only Fallback

**Files:**
- Create: `docs/dissertation/chapter3/frontend-verification.md`
- Create: `docs/dissertation/chapter3/manual-qa-matrix.md`
- Optional Create: `playwright.config.ts`
- Optional Create: `tests/e2e/chat-smoke.spec.ts`
- Optional Modify: `package.json`

- [ ] **Step 1: Decide implementation vs fallback**

Use the timebox rule:
- if backend and monitoring are verified with time left, implement the capped frontend verification
- otherwise produce the fallback package only

- [ ] **Step 2A: Run frontend verification preflight**

Run:

```powershell
rg -n "playwright|cypress|vitest|jest|@playwright/test" C:\Users\Tao\Desktop\Project\local-chat-vrm --glob "!node_modules/**" --glob "!localchatvrm/**"
Get-Content -Raw C:\Users\Tao\Desktop\Project\local-chat-vrm\src\utils\config.ts
```

Expected:
- confirm whether an e2e tool already exists
- confirm the resolved backend base URL from current frontend config

- [ ] **Step 2B: If implementing, add the smallest official tool setup**

Preferred commands:

```powershell
Push-Location C:\Users\Tao\Desktop\Project\local-chat-vrm
npm install -D @playwright/test
npx playwright install chromium
Pop-Location
```

Create scenarios only for:
- conversation list reachability
- simple mode response
- agent mode SSE first event or controlled failure

- [ ] **Step 2C: If downgrading, write the fallback package**

Document:
- scenario matrix
- chosen tool
- runnable command skeleton
- QA matrix draft
- evidence plan

- [ ] **Step 3: Validate the frontend track**

If implemented, run:

```powershell
Push-Location C:\Users\Tao\Desktop\Project\local-chat-vrm
npx playwright test
Pop-Location
```

If downgraded, verify the docs exist and are internally consistent.

- [ ] **Step 4: Commit the frontend verification track**

If implemented:

```powershell
git add package.json package-lock.json playwright.config.ts tests/e2e/chat-smoke.spec.ts docs/dissertation/chapter3/frontend-verification.md docs/dissertation/chapter3/manual-qa-matrix.md
git commit -m "test: add frontend smoke verification"
```

If downgraded:

```powershell
git add docs/dissertation/chapter3/frontend-verification.md docs/dissertation/chapter3/manual-qa-matrix.md docs/dissertation/chapter3/session-status-and-evidence.md
git commit -m "docs: add frontend verification package"
```

Expected:
- one small logical frontend verification commit or docs-only fallback commit

### Task 9: Assemble The Dissertation Evidence Package

**Files:**
- Create: `docs/dissertation/chapter3/artifacts/screenshots/README.md`
- Create: `docs/dissertation/chapter3/artifacts/logs/01-backend-telemetry-sample.log`
- Create: `docs/dissertation/chapter3/artifacts/evidence/01-observability-evidence.md`
- Modify: `docs/dissertation/chapter3/session-status-and-evidence.md`

- [ ] **Step 1: Capture evidence references**

List:
- metrics endpoint proof
- sample structured logs
- dashboard JSON paths
- smoke/e2e evidence or fallback docs
- non-claimable items

- [ ] **Step 2: Write the non-claimable section**

Explicitly separate:
- confirmed now
- implemented in this session
- proposed but not yet implemented

- [ ] **Step 3: Commit the evidence package**

Run:

```powershell
git add docs/dissertation/chapter3
git commit -m "docs: assemble dissertation evidence package"
```

Expected:
- one docs-only evidence commit in `local-chat-vrm`
