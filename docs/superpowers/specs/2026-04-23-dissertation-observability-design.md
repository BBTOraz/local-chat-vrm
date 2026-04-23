# Dissertation Engineering Package Design

Date: 2026-04-23
Owner: Codex orchestrator
Status: Draft, under review

## Goal

Prepare an honest engineering package for chapter 3 of the master's dissertation based on the real state of two repositories:

- frontend: `local-chat-vrm`
- backend: `orchestra` (`BBTOraz/E.N.U.R.A.` remote)

The output of this session is not a large production rollout. It is:

- a confirmed system map;
- a prioritized implementation backlog;
- a minimal practical telemetry and observability baseline;
- a minimal monitoring baseline with Prometheus and Grafana;
- minimal smoke/e2e and QA artifacts;
- clear claim boundaries for dissertation writing.

## Session Shipping Boundary

### Must Ship In This Session

- confirmed system map for backend, frontend integration, observability baseline, and testability baseline;
- prioritized backlog with implementation cost and evidence targets;
- minimal backend observability baseline, or a proposal-only fallback package if runtime verification is blocked by environment constraints;
- an explicit status decision for monitoring baseline: either implemented and verified, or downgraded to proposal-only with blocking reason and evidence.

### Ship Only If Time And Verification Permit

- Grafana dashboard refinement beyond the baseline JSON and provisioning;
- frontend smoke/e2e scaffold;
- expanded QA packaging artifacts.

### Proposal Only If Cost Is Too High

- any frontend flow beyond the capped minimal scenarios;
- any telemetry beyond the fixed minimal baseline;
- any feature that cannot be implemented and verified in this session.

## Constraints

- Work in both repositories is allowed.
- Backend is the highest priority.
- Do not claim anything not confirmed by code, config, tests, or runtime artifacts.
- Do not expand into heavy enterprise scope.
- Do not do broad frontend refactoring.
- Prefer pragmatic fallbacks when implementation cost is too high.

## Scope Categories

Every result must be labeled as one of:

- `confirmed now`
- `implemented in this session`
- `proposed but not yet implemented`

Every deliverable row, checkpoint result, and final artifact must also include:

- `evidence source`
- `claim sentence`

## Deliverables

### 1. Confirmed System Map

Collect and document:

- backend components and request flow;
- frontend integration points and SSE flow;
- current observability baseline;
- current testability baseline;
- observability and testability gaps.

### 2. Prioritized Backlog

Produce a backlog ordered by:

1. backend instrumentation;
2. monitoring stack;
3. minimal frontend smoke/e2e.

Each backlog item must say:

- purpose;
- implementation cost;
- expected dissertation artifact;
- whether it will be implemented now or only proposed.

### 3. Minimal Backend Observability Baseline

Implement a minimal but professional baseline:

- Prometheus export through Actuator/Micrometer;
- structured logs for key domain and failure events;
- metrics for the fixed minimal set only:
  - HTTP server request latency/count/error rate through Spring Boot/Micrometer;
  - one SSE session lifecycle counter set: opened, completed, failed;
  - one provider latency timer;
- one provider failure counter;
- one conversation title generation timer or counter;
- clear labels/tags and instrumentation points.

Preferred metric names and tag limits:

- `orchestra_sse_sessions_total{status}`
- `orchestra_provider_calls_total{provider,status,operation}`
- `orchestra_provider_latency_seconds{provider,operation}`
- `orchestra_conversation_title_generation_seconds{status}`

Allowed custom tags should stay minimal and use only:

- `status`
- `provider`
- `operation`
- `mode`

Minimum structured logging scope:

- event `conversation_message_submitted` with fields `conversationId`, `mode`, `messageLength`;
- event `provider_call_completed` with fields `provider`, `operation`, `status`, `latencyMs`;
- event `sse_stream_closed` with fields `conversationId`, `status`, `durationMs`;
- event `application_error` with fields `errorClass`, `context`, `conversationId?`.

### 4. Monitoring Baseline

Implement:

- minimal `docker-compose` for Prometheus and Grafana;
- Prometheus scrape config;
- 1-2 useful dashboards for dissertation evidence.

Dashboard coverage should favor:

- request latency;
- endpoint throughput;
- error rate;
- SSE sessions;
- provider latency;
- title-generation events;
- health status.

### 5. Minimal Frontend Verification Baseline

If time and verification permit after backend and monitoring work, add only the minimal scaffolding required for:

- smoke scenario 1: application starts and frontend reaches backend conversation list endpoint;
- smoke scenario 2: simple mode request returns a response;
- smoke scenario 3: agent mode opens SSE and receives at least one event or a controlled failure.

Do not perform major frontend redesign or refactor.
Do not exceed these three named scenarios in this session.
If frontend verification is not implemented, replace this deliverable with a proposal-only package containing the scenario matrix, chosen tool, and evidence plan.

### 6. Dissertation Artifacts Package

As work progresses, explicitly map each implementation to:

- logs to capture;
- metrics to show;
- dashboard panels to screenshot;
- tests or QA evidence to run;
- tables or figures that can be used in chapter 3.

### 7. Claim Boundaries

At the end, produce a boundary table:

- what is confirmed now;
- what was implemented in this session;
- what remains a recommendation only.

Each row must include:

- status label;
- evidence source;
- claim sentence;
- dissertation artifact enabled by that row.

## Orchestration Model

Codex acts as:

- orchestrator;
- evaluator;
- consolidation owner.

User approval is the acceptance gate for the written spec and the final engineering package.

Subagents are used in two phases.

### Phase A: Research and Judgment

Independent agents:

- backend system mapper;
- frontend integration mapper;
- observability researcher;
- QA/e2e researcher.

These agents must:

- use local code and configs as primary evidence;
- use trusted sources for best practices;
- clearly separate confirmed facts from recommendations;
- propose pragmatic fallbacks for high-cost work.

After Phase A, Codex must produce one consolidated document before any implementation starts.

### Phase B: Targeted Implementation

Independent agents:

- backend instrumentation worker;
- monitoring stack worker;
- frontend smoke/e2e worker.

These agents must:

- stay within assigned write scope;
- avoid broad refactors;
- produce measurable artifacts;
- keep dissertation evidence in mind for every change.

After Phase B, Codex must produce one consolidated status table using the three scope categories plus evidence fields.

## Trusted Sources Standard

Research should rely on primary or official sources where possible:

- Spring Boot documentation;
- Micrometer documentation;
- Spring Observability / Actuator documentation;
- Prometheus documentation;
- Grafana documentation;
- official test-tool documentation for chosen frontend smoke/e2e tooling.

Frontend tool selection rule:

- if the repo already contains an e2e framework, use it;
- if not, prefer the smallest official-tool setup that can cover the three capped scenarios with minimal UI intrusion.

## Evaluation Format For Each Agent

Every agent must return results in this structure:

1. `Confirmed now`
2. `Gaps`
3. `Recommendations`
4. `Evidence for dissertation`
5. `Claim boundaries`

Each claimed item must include:

- `status label`
- `evidence source`
- `claim sentence`

## Output Locations

- design spec: `docs/superpowers/specs/2026-04-23-dissertation-observability-design.md`
- consolidated Phase A system map and gaps: `docs/dissertation/chapter3/confirmed-system-map.md`
- prioritized backlog: `docs/dissertation/chapter3/implementation-backlog.md`
- final status table and evidence checklist: `docs/dissertation/chapter3/session-status-and-evidence.md`
- QA matrix: `docs/dissertation/chapter3/manual-qa-matrix.md`
- frontend smoke/e2e notes: `docs/dissertation/chapter3/frontend-verification.md`

## Execution Checkpoints

### Checkpoint A

Unified confirmed system map and gap list are complete.

Required evidence:

- code references for backend and frontend integration points;
- one written table of confirmed components and gaps.

### Checkpoint B

Prioritized backlog is complete and split into:

- implement now;
- propose only.

Required evidence:

- one backlog table with cost, priority, evidence target, and claim sentence.

### Checkpoint C

Backend telemetry baseline is implemented and verifiable.

If runtime verification is blocked, Checkpoint C must instead produce a proposal-only backend observability package with blocking evidence and exact next steps for verification.

Required evidence:

- config diff showing Prometheus export path or dependency enablement;
- one reachable metrics endpoint check;
- one sample log line for a key domain event;
- one code reference for custom metrics instrumentation.

### Checkpoint D

Monitoring baseline is implemented and verifiable.

If blocked by environment or runtime constraints, Checkpoint D may instead produce a proposal-only monitoring package with explicit blocking evidence and a runnable config set.

Required evidence:

- `docker-compose` and Prometheus config present in the workspace;
- one dashboard JSON or provisioning artifact present in the workspace;
- one note showing scrape target and dashboard panel mapping.

### Checkpoint E

Frontend smoke/e2e scaffold and QA artifacts are in place.

If backend and monitoring work consume the available scope or runtime verification is blocked, Checkpoint E may instead produce a proposal-only frontend verification package with the three capped scenarios and execution instructions.

Required evidence:

- test scaffold files present in the workspace;
- one command for running the scenarios;
- one QA matrix draft with the three capped scenarios and failure notes.

### Checkpoint F

Final engineering package for chapter 3 is assembled with honest claim boundaries.

Required evidence:

- one consolidated status table;
- one evidence checklist for screenshots, logs, metrics, and tests;
- one explicit section of non-claimable items.

## Downgrade Rule

If any planned item is not both implemented and verified at its checkpoint, it is automatically reclassified as `proposed but not yet implemented`.

No unverified item may appear in final materials as an implemented fact.

## Execution Preconditions

Before implementation starts, confirm:

- frontend repo is present and readable;
- backend repo is present and readable;
- backend startup path and configuration files are identifiable;
- frontend API target is verified from configuration and mapped to the actual backend base URL in the current environment;
- Docker is available for Prometheus/Grafana, or a documented fallback will be used;
- if runtime verification is blocked, the affected item is downgraded to proposal-only.

## Agent Write Boundaries

### Backend System Mapper

- repo: `C:\Users\Tao\Desktop\Project\orchestra`
- read-only

### Frontend Integration Mapper

- repo: `C:\Users\Tao\Desktop\Project\local-chat-vrm`
- read-only

### Observability Researcher

- read-only across both repos and official docs

### QA/E2E Researcher

- read-only across frontend repo and official tooling docs

### Backend Instrumentation Worker

- repo: `C:\Users\Tao\Desktop\Project\orchestra`
- allowed paths: backend source, backend resources, backend docs
- no-touch: frontend repo

### Monitoring Stack Worker

- repo: `C:\Users\Tao\Desktop\Project\orchestra`
- required location: `observability/`
- allowed files: `docker-compose`, Prometheus config, Grafana provisioning, dashboard JSON
- no business-logic refactors

### Frontend Smoke/E2E Worker

- repo: `C:\Users\Tao\Desktop\Project\local-chat-vrm`
- allowed paths: test/config/docs only unless a tiny hook is required for testability
- no UI refactor

## Minimal Practical Scope

### In Scope

- confirm architecture and integration flow;
- add minimal backend metrics and structured logs;
- expose Prometheus metrics;
- add minimal Prometheus/Grafana stack;
- add at most three minimal smoke/e2e scenarios;
- produce QA matrix and evidence checklist.

### Explicitly Out Of Scope

- distributed tracing stack;
- heavy log pipelines such as ELK/Loki;
- large-scale load testing;
- major frontend redesign;
- enterprise SLA/SLO claims.

## Done Criteria

This session is done when:

- a confirmed system map exists;
- a prioritized backlog exists;
- a minimal observability baseline is implemented;
- the monitoring track has either been implemented and verified or downgraded to proposal-only with evidence;
- the frontend verification track has either been minimally implemented and verified or downgraded to proposal-only with evidence;
- chapter 3 materials can be assembled honestly without invented claims.
