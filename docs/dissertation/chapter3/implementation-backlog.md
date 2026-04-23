# Implementation Backlog

Date: 2026-04-23
Scope: prioritized backlog for chapter 3 engineering package

| Priority | Status label | Item | Repo | Files | Implementation cost | Evidence source | Claim sentence | Dissertation artifact enabled |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | proposed but not yet implemented | Enable Prometheus export through Actuator and Micrometer registry | `orchestra` | `pom.xml`, `src/main/resources/application.properties` | Low | `/actuator/prometheus` response, dependency diff, config diff | The backend exposes Prometheus-format metrics through Actuator. | Metrics endpoint screenshot and observability configuration table |
| P2 | proposed but not yet implemented | Add minimal backend custom metrics for SSE sessions, provider calls, provider latency, and title generation | `orchestra` | `src/main/java/.../observability/`, `AgentChatController.java`, `ConversationController.java`, `ConversationService.java`, `AgentChatClientsConfig.java` | Medium | `/actuator/prometheus` metric names, code refs, test output | The backend records a fixed minimal telemetry set aligned with dissertation chapter-3 evidence needs. | Metrics catalog table and Grafana panel mapping |
| P3 | proposed but not yet implemented | Add structured dissertation-ready logs for message submit, provider completion, SSE close, and application error | `orchestra` | `AgentChatController.java`, `AgentChatClientsConfig.java`, shared observability helper | Medium | Captured log samples with fixed fields | The backend emits structured operational events for key interaction and failure points. | Log appendix and reliability evidence table |
| P4 | proposed but not yet implemented | Add monitoring baseline in `orchestra/observability/` with Prometheus and Grafana provisioning | `orchestra` | `observability/docker-compose.yml`, `observability/prometheus/prometheus.yml`, `observability/grafana/**` | Medium | running containers, scrape target status, dashboard JSON | A lightweight monitoring stack can scrape and visualize the prototype telemetry without production-heavy infrastructure. | Deployment diagram and dashboard screenshots |
| P5 | proposed but not yet implemented | Export dashboard copies into dissertation artifacts | `local-chat-vrm` + `orchestra` source | `docs/dissertation/chapter3/artifacts/dashboards/` plus dashboard source JSON in backend repo | Low | copied dashboard JSON files and artifact index | Dashboard definitions are preserved as chapter-3 evidence artifacts in the documentation repo. | Appendix with dashboard JSON provenance |
| P6 | proposed but not yet implemented | Add minimal frontend verification baseline for three capped scenarios | `local-chat-vrm` | `playwright.config.ts`, `tests/e2e/chat-smoke.spec.ts`, `docs/dissertation/chapter3/frontend-verification.md`, `docs/dissertation/chapter3/manual-qa-matrix.md` | Medium | test runner output or proposal-only fallback docs | The frontend verification scope is capped to conversation list reachability, simple mode response, and agent-mode SSE flow. | QA matrix and smoke/e2e evidence |
| P7 | proposed but not yet implemented | Produce proposal-only frontend verification package if runtime or timebox blocks execution | `local-chat-vrm` | `docs/dissertation/chapter3/frontend-verification.md`, `manual-qa-matrix.md` | Low | written scenario matrix, command skeleton, evidence plan | Even without full runtime execution, the frontend verification scope can be documented honestly with runnable next steps. | Manual QA appendix and future-work boundary table |
| P8 | confirmed now | Backend implementation is blocked until `orchestra` leaves `main` | `orchestra` | branch state only | Low | `git -C C:\Users\Tao\Desktop\Project\orchestra branch --show-current` | Backend code and monitoring source changes may not proceed until the backend repo is moved to a safe working branch. | Honest execution-limitations note |

## Implement-now set

- Backend Prometheus export
- Backend custom metrics
- Backend structured logs
- Monitoring baseline in `orchestra/observability/`

## Downgrade-capable set

- Frontend verification implementation
- Provider-call runtime evidence if external provider availability blocks execution
- Monitoring verification if Docker/runtime prevents scrape confirmation
- Dashboard export copies if source dashboards are not yet generated

## Notes

- Current session priority remains `backend instrumentation -> monitoring stack -> minimal frontend verification`.
- All backlog items touching `orchestra` remain blocked until branch safety is resolved.
