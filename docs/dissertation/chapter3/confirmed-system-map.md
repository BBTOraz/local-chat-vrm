# Confirmed System Map

Date: 2026-04-23
Scope: confirmed facts only

## Confirmed now

### Repositories and runtime linkage

- Frontend repository: `C:\Users\Tao\Desktop\Project\local-chat-vrm`
- Backend repository: `C:\Users\Tao\Desktop\Project\orchestra`
- Frontend API base resolves to `http://localhost:8181` by default via [`src/utils/config.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/utils/config.ts:1)
- Backend listens on port `8181` via [`src/main/resources/application.properties`](C:/Users/Tao/Desktop/Project/orchestra/src/main/resources/application.properties:1)

### Backend architecture

- Backend stack is Spring Boot `3.4.5` with WebFlux, Spring AI, Actuator, JDBC/R2DBC, Redis vector store, and Spring AI OpenAI/Ollama starters, confirmed in [`pom.xml`](C:/Users/Tao/Desktop/Project/orchestra/pom.xml:1).
- `ChatController` exposes synchronous and JSON chat endpoints under `/api/chat`, including `GET /api/chat/simple-json/{conversationId}/{message}`, and delegates generation to `AIService`, confirmed in [`controller/ChatController.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/controller/ChatController.java:1).
- `AgentChatController` exposes agent-mode endpoints under `/api/agent/chat`, including the SSE endpoint `POST /api/agent/chat/{conversationId}` and blocking envelope endpoint `POST /api/agent/chat/envelope/{conversationId}`, confirmed in [`controller/AgentChatController.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/controller/AgentChatController.java:1).
- `ConversationController` exposes conversation-title and history endpoints under `/api/conversations`, confirmed in [`controller/ConversationController.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/controller/ConversationController.java:1).
- `AIService` is the simple-mode backend service and uses Spring AI `ChatClient` plus tool callbacks and chat memory advisors, confirmed in [`service/AIService.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/service/AIService.java:1) and [`conf/ChatClientConfig.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/conf/ChatClientConfig.java:1).
- `ConversationService` persists paired user/assistant messages, retrieves history, and generates conversation titles through a separate `plainChatClient`, confirmed in [`service/ConversationService.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/service/ConversationService.java:1).
- Provider-specific agent clients are built in `AgentChatClientsConfig` for Groq, OpenRouter, and Ollama using `RestClient` and `WebClient`, confirmed in [`conf/AgentChatClientsConfig.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/conf/AgentChatClientsConfig.java:1).

### Backend request flows

#### Simple mode

- Frontend calls `GET /api/chat/simple-json/{conversationId}/{message}` from [`useChatActions.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/hooks/useChatActions.ts:34).
- Backend `ChatController.simpleChatJson(...)` delegates to `AIService.generateFormatted(...)`, confirmed in [`controller/ChatController.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/controller/ChatController.java:55) and [`service/AIService.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/service/AIService.java:48).
- `AIService.generateFormatted(...)` calls the configured `ChatClient`, then summarizes the final answer, confirmed in [`service/AIService.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/service/AIService.java:59).

#### Agent mode with SSE

- Frontend posts to `/api/agent/chat/{conversationId}` via `streamAgentEvents(...)`, confirmed in [`useChatActions.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/hooks/useChatActions.ts:40) and [`utils/sse.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/utils/sse.ts:1).
- `AgentChatController.chat(...)` validates message/provider/mode inputs, ensures only one active request per conversation via `activeConversations`, builds `AgentRequestContext`, then streams `Flux<ServerSentEvent<AgentEvent>>`, confirmed in [`controller/AgentChatController.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/controller/AgentChatController.java:24).
- On stream completion, the controller saves the final user/assistant pair through `ConversationService.saveConversationPair(...)`, confirmed in [`controller/AgentChatController.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/controller/AgentChatController.java:112) and [`service/ConversationService.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/service/ConversationService.java:30).

#### Conversation list and history

- Frontend loads conversation summaries from `GET /api/conversations` and messages from `GET /api/conversations/{conversationId}/messages`, confirmed in [`useChatActions.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/hooks/useChatActions.ts:34) and [`controller/ConversationController.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/controller/ConversationController.java:15).
- `ConversationService.getAllConversationTitles()` and `getHistory(...)` back these endpoints, confirmed in [`service/ConversationService.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/service/ConversationService.java:89).

#### Title generation

- Frontend triggers `POST /api/conversations/{conversationId}/generate-title` after the first completed run, confirmed in [`useChatActions.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/hooks/useChatActions.ts:551).
- Backend handles title generation in `ConversationController.generateTitle(...)` and `ConversationService.generateAndSaveTitle(...)`, confirmed in [`controller/ConversationController.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/controller/ConversationController.java:50) and [`service/ConversationService.java`](C:/Users/Tao/Desktop/Project/orchestra/src/main/java/bbt/tao/orchestra/service/ConversationService.java:70).

### Frontend architecture and integration flow

- Frontend stack is React `19.1.0`, TypeScript, and Vite, confirmed in [`package.json`](C:/Users/Tao/Desktop/Project/local-chat-vrm/package.json:1).
- The mounted chapter-3 frontend path starts in [`src/pages/index.tsx`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/pages/index.tsx:1), which mounts `ChatProvider` and triggers `refreshConversations()` on first render.
- `useChatActions` is the main orchestration hook for conversation refresh, history loading, simple mode, agent mode, title generation, and retry queue handling, confirmed in [`src/hooks/useChatActions.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/hooks/useChatActions.ts:1).
- SSE parsing is implemented manually with `fetch`, `ReadableStream`, and `TextDecoder` in [`src/utils/sse.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/utils/sse.ts:1).
- Agent-mode UI state is backed by `AgentEvent`, `AgentRun`, and `AgentIteration` models in [`src/types/chat.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/types/chat.ts:1).
- Conversation list rendering and filtering are driven from state in [`src/components/sidebar/Sidebar.tsx`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/components/sidebar/Sidebar.tsx:1), not via a separate data-access layer.

### Current observability baseline

- Backend already includes `spring-boot-starter-actuator`, confirmed in [`pom.xml`](C:/Users/Tao/Desktop/Project/orchestra/pom.xml:1).
- Backend exposes only `health,metrics` through Actuator today, confirmed in [`application.properties`](C:/Users/Tao/Desktop/Project/orchestra/src/main/resources/application.properties:90).
- There is existing application logging in controllers and services, including stream lifecycle logs in `AgentChatController`, chat endpoint logs in `ChatController`, persistence logs in `ConversationService`, and provider-client request/response logging in `AgentChatClientsConfig`, confirmed in the files above.
- Some code already uses Micrometer Observation annotations in tools, but no confirmed custom dissertation telemetry exists yet; current evidence is limited to generic Actuator metrics plus logs, confirmed by search results in the repository and current dependency/config state.

### Current testability baseline

- Backend has test coverage for application context and conversation persistence behavior, confirmed in [`src/test/java/bbt/tao/orchestra/OrchestraApplicationTests.java`](C:/Users/Tao/Desktop/Project/orchestra/src/test/java/bbt/tao/orchestra/OrchestraApplicationTests.java:1), [`ConversationServiceTest.java`](C:/Users/Tao/Desktop/Project/orchestra/src/test/java/bbt/tao/orchestra/ConversationServiceTest.java:1), and [`ConversationServiceIntegrationTest.java`](C:/Users/Tao/Desktop/Project/orchestra/src/test/java/bbt/tao/orchestra/ConversationServiceIntegrationTest.java:1).
- Backend tests are currently service/integration heavy; there are no confirmed `WebTestClient` or `@WebFluxTest` tests for the requested HTTP controllers or SSE stream.
- No confirmed backend tests currently target `/actuator/prometheus`, SSE metrics, provider metrics, or structured telemetry logs.
- Frontend package and source tree do not currently confirm an installed e2e framework such as Playwright or Cypress.
- Frontend has utility-style TTS test helpers, but not a verified automated smoke/e2e suite for conversation/simple/agent flows, confirmed in [`src/utils/testOpenAITTS.ts`](C:/Users/Tao/Desktop/Project/local-chat-vrm/src/utils/testOpenAITTS.ts:1).
- Current CI in this repo is build-oriented rather than test-oriented, based on the existing Pages workflow.

## Gaps

- No confirmed Prometheus registry dependency in backend yet.
- No confirmed `/actuator/prometheus` export yet.
- No confirmed custom metrics for SSE lifecycle, provider latency/failures, or title-generation latency yet.
- Existing logs are not yet confirmed as structured dissertation-ready logs with fixed field sets.
- No confirmed Grafana/Prometheus monitoring baseline in `orchestra/observability/` yet.
- No confirmed automated frontend smoke/e2e framework for the three capped scenarios yet.
- Backend implementation is currently blocked by branch safety because `orchestra` is on `main`.
- `ConversationService.saveConversationPair(...)` currently saves two rows in sequence without a confirmed transactional boundary, so partial persistence risk is present until proven otherwise in runtime or fixed in code.
- `ConversationController.getAllConversationTitles()` contains a `defaultIfEmpty(...)` branch, but the underlying `collectList()` path in `ConversationService.getAllConversationTitles()` means the `204 No Content` branch is effectively unreachable in the current implementation.
- Existing integration tests include live-dependency style coverage, which is useful for research context but weak as deterministic regression evidence for chapter-3 observability/testability claims.

## Recommendations

- Keep chapter-3 documentation work moving in `local-chat-vrm` while backend writes remain blocked.
- Once backend branch safety is resolved, implement only the fixed minimal telemetry set from the approved spec.
- Treat frontend verification as strictly capped and downgrade it to proposal-only if backend and monitoring consume the session budget.

## Evidence for dissertation

- Architecture figure: controller/service/integration flow derived from the confirmed file references above.
- Table: confirmed endpoints, backend components, frontend integration points, and current gaps.
- Table: current testability baseline showing controller-test gap, SSE-test gap, Prometheus-export gap, and frontend e2e gap.
- Screenshot candidates later: `/actuator/health`, `/actuator/prometheus`, Grafana panels, and frontend conversation flows.
- Log evidence later: stream lifecycle logs, provider-call completion logs, and title-generation logs after implementation.

## Claim boundaries

- Can already claim: Spring Boot + WebFlux + Spring AI backend, React + TypeScript + Vite frontend, API base `http://localhost:8181`, agent-mode SSE integration, baseline Actuator/logging presence.
- Cannot yet claim: Prometheus export, Grafana dashboards, custom Micrometer metrics, structured telemetry schema, or automated smoke/e2e coverage.
