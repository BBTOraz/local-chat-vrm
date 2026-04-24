# Implementation Backlog

Date: 2026-04-24
Scope: prioritized backlog for chapter 3 engineering package

| Priority | Status label | Item | Repo | Files | Implementation cost | Evidence source | Claim sentence | Dissertation artifact enabled |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | implemented in this session | Enable Prometheus export through Actuator and Micrometer registry | `orchestra` | `pom.xml`, `src/main/resources/application.properties`, `src/test/java/bbt/tao/orchestra/OrchestraApplicationTests.java` | Low | focused test pass plus controlled `/actuator/prometheus` runtime proof | The backend exposes Prometheus-format metrics through Actuator. | Metrics endpoint screenshot and observability configuration table |
| P2 | implemented in this session | Add minimal backend custom metrics for SSE sessions, provider calls, provider latency, and title generation | `orchestra` | `src/main/java/.../observability/`, `AgentChatController.java`, `ConversationService.java`, `AgentChatClientsConfig.java`, focused tests | Medium | focused test pass and telemetry sample log | The backend records a fixed minimal telemetry set aligned with chapter-3 observability evidence needs. | Metrics catalog table and Grafana panel mapping |
| P3 | implemented in this session | Add structured dissertation-ready logs for message submit, provider completion, SSE close, and application error | `orchestra` | `AgentChatController.java`, `AgentChatClientsConfig.java`, `OrchestraTelemetry.java`, focused tests | Medium | focused test output and sample log artifact | The backend emits structured operational events for key interaction and failure points. | Log appendix and reliability evidence table |
| P4 | implemented in this session | Add monitoring baseline in `orchestra/observability/` with Prometheus and Grafana provisioning | `orchestra` | `observability/docker-compose.yml`, `observability/prometheus/prometheus.yml`, `observability/grafana/**` | Medium | 2026-04-23 live verification and 2026-04-24 `docker compose config` validation | A lightweight monitoring stack can scrape and visualize prototype telemetry without production-heavy infrastructure. | Deployment diagram and dashboard screenshots |
| P5 | implemented in this session | Export dashboard copies into dissertation artifacts | `local-chat-vrm` + `orchestra` source | `docs/dissertation/chapter3/artifacts/dashboards/` plus dashboard source JSON in backend repo | Low | copied dashboard JSON files and artifact references | Dashboard definitions are preserved as chapter-3 evidence artifacts in the documentation repo. | Appendix with dashboard JSON provenance |
| P6 | proposed but not yet implemented | Add minimal frontend verification baseline for three capped scenarios | `local-chat-vrm` | `playwright.config.ts`, `tests/e2e/chat-smoke.spec.ts`, `package.json` | Medium | future Playwright run output | Automated frontend smoke coverage is still a recommended next step rather than an implemented fact. | Future-work table |
| P7 | implemented in this session | Produce proposal-only frontend verification package because runtime/timebox favored backend + monitoring | `local-chat-vrm` | `docs/dissertation/chapter3/frontend-verification.md`, `manual-qa-matrix.md` | Low | written scenario matrix, command skeleton, evidence plan | The frontend verification scope is documented honestly even without installing a browser automation stack in this session. | Manual QA appendix and validation-scope section |
| P8 | proposed but not yet implemented | Capture screenshot set for chapter 3 after Docker daemon is running again | `local-chat-vrm` + local runtime | `docs/dissertation/chapter3/artifacts/screenshots/README.md` targets | Low | future screenshot captures | Final dissertation screenshots still need to be captured from the running monitoring stack and UI. | Figure list and screenshot appendix |
| P9 | proposed but not yet implemented | Resolve the live dev-instance custom telemetry discrepancy on shared port `8181` | `orchestra` | runtime investigation only | Medium | future controlled rerun against the shared dev instance | Live proof for `orchestra_*` metrics in the long-running shared dev backend remains a follow-up item and should not yet be claimed as fully confirmed. | Honest limitations note |

## Implemented-now set

- Backend Prometheus export
- Backend custom metrics
- Backend structured logs
- Monitoring baseline in `orchestra/observability/`
- Dashboard artifact copies
- Frontend verification fallback package

## Remaining downgrade-capable set

- Full frontend Playwright scaffold and smoke automation
- Screenshot capture after Docker daemon is running again
- Live shared-instance proof for `orchestra_*` metrics on port `8181`

## Notes

- Session priority remained `backend instrumentation -> monitoring stack -> minimal frontend verification`.
- The strongest backend evidence is the focused observability test suite plus the controlled runtime proof on 2026-04-23.
- The heaviest unresolved items are explicitly kept outside the set of confirmed claims.
