# Observability Evidence

Date: 2026-04-24

## Confirmed now

- The backend repository is on the working branch `chore/dissertation-observability-baseline`.
- The frontend still targets `http://localhost:8181` by default.
- The monitoring compose files are syntactically valid via `docker compose config`.

## Implemented in this session

- Prometheus registry dependency and actuator exposure were added in `orchestra`.
- Minimal backend telemetry code now exists for:
  - SSE session lifecycle
  - provider call count
  - provider latency
  - conversation title generation timing
  - structured operational events
- Focused backend verification passed on 2026-04-24:

```powershell
Push-Location C:\Users\Tao\Desktop\Project\orchestra
.\mvnw.cmd -Dtest=OrchestraApplicationTests,OrchestraTelemetryTest,AgentChatObservabilityTest,ConversationServiceObservabilityTest,AgentChatClientsConfigObservabilityTest test
Pop-Location
```

- Controlled runtime proof was captured on 2026-04-23 against port `8282`:
  - `/actuator` included `prometheus`
  - `/actuator/prometheus` returned HTTP `200`
  - scrape output began with standard Prometheus-format lines such as `application_ready_time_seconds`
- Monitoring baseline was verified once on 2026-04-23:
  - Prometheus target `http://host.docker.internal:8181/actuator/prometheus` was `up`
  - Grafana `/api/health` returned database `ok`, version `13.0.1`
  - Grafana search returned `Orchestra API Overview` and `Orchestra Agent Flow`
- Monitoring baseline was re-verified on 2026-04-24 after Docker returned:
  - Prometheus target `http://host.docker.internal:8181/actuator/prometheus` was again `up`
  - Grafana `/api/health` again returned database `ok`, version `13.0.1`
  - Grafana search again returned `Orchestra API Overview` and `Orchestra Agent Flow`
- Live backend runtime on 2026-04-24 produced:
  - `500` on `/api/conversations`
  - title-generation failure `Failed to obtain R2DBC Connection`
  - successful SSE stream start plus controlled error for `/api/agent/chat/test-conv`
  - standard `http_server_requests_seconds_*` metrics in `/actuator/prometheus`
  - no observed `orchestra_*` metrics in the shared dev-instance scrape
  - no observed `event=` structured telemetry lines in the captured live backend log

## Proposed but not yet implemented

- Full frontend Playwright smoke automation
- Screenshot capture for the final dissertation figure set
- A resolved explanation for why the shared dev instance on `8181` still does not surface `orchestra_*` metrics during manual runtime checks

## Non-claimable items

- Do not claim that full live custom telemetry has been confirmed in the shared dev backend runtime. The stable proof currently comes from focused tests plus controlled runtime proof for Prometheus exposure and monitoring health.
- Do not claim that frontend smoke/e2e automation is implemented.
- Do not claim production-grade monitoring, SLA behavior, or enterprise reliability characteristics.

## Artifact references

- System map: [`confirmed-system-map.md`](C:/Users/Tao/Desktop/Project/local-chat-vrm/docs/dissertation/chapter3/confirmed-system-map.md:1)
- Status ledger: [`session-status-and-evidence.md`](C:/Users/Tao/Desktop/Project/local-chat-vrm/docs/dissertation/chapter3/session-status-and-evidence.md:1)
- Dashboard copies:
  - [`01-api-overview-dashboard.json`](C:/Users/Tao/Desktop/Project/local-chat-vrm/docs/dissertation/chapter3/artifacts/dashboards/01-api-overview-dashboard.json:1)
  - [`02-agent-flow-dashboard.json`](C:/Users/Tao/Desktop/Project/local-chat-vrm/docs/dissertation/chapter3/artifacts/dashboards/02-agent-flow-dashboard.json:1)
- Structured log sample: [`01-backend-telemetry-sample.log`](C:/Users/Tao/Desktop/Project/local-chat-vrm/docs/dissertation/chapter3/artifacts/logs/01-backend-telemetry-sample.log:1)
