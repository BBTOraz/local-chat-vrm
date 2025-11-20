import { useCallback, useEffect, useRef } from "react";
import {
  AgentEvent,
  AgentIteration,
  AgentRun,
  ConversationMessage,
  ConversationSummary,
} from "@/types/chat";
import { useChatDispatch, useChatState } from "@/state/chatStore";
import { generateId } from "@/utils/id";
import { streamAgentEvents, AgentStreamController } from "@/utils/sse";
import { buildApiUrl } from "@/utils/config";

type TitleResponse = string;

const API = {
  conversations: () => buildApiUrl("/api/conversations"),
  conversationMessages: (id: string) =>
    buildApiUrl(`/api/conversations/${encodeURIComponent(id)}/messages`),
  conversationTitle: (id: string) =>
    buildApiUrl(`/api/conversations/${encodeURIComponent(id)}/generate-title`),
  agentStream: (id: string) =>
    buildApiUrl(`/api/agent/chat/${encodeURIComponent(id)}`),
  agentEnvelope: (id: string) =>
    buildApiUrl(`/api/agent/chat/envelope/${encodeURIComponent(id)}`),
  simpleChat: (id: string, message: string) =>
    buildApiUrl(
      `/api/chat/simple-json/${encodeURIComponent(id)}/${encodeURIComponent(
        message
      )}`
    ),
};

const cloneRun = (run?: AgentRun): AgentRun => {
  if (!run) {
    return {
      startedAt: Date.now(),
      iterations: [],
    };
  }

  return {
    ...run,
    iterations: run.iterations.map((iteration) => ({
      ...iteration,
      solver: {
        ...iteration.solver,
        contexts: [...iteration.solver.contexts],
        tools: iteration.solver.tools.map((tool) => ({ ...tool })),
      },
      verifier: {
        ...iteration.verifier,
        reasons: [...iteration.verifier.reasons],
      },
    })),
  };
};

const extractMessage = (event: AgentEvent): string => {
  if (typeof event.message === "string") {
    return event.message;
  }
  if (event.data && typeof event.data === "object" && "message" in event.data) {
    const candidate = (event.data as Record<string, unknown>).message;
    if (typeof candidate === "string") {
      return candidate;
    }
  }
  return "";
};

const ensureArray = (input: unknown): string[] => {
  if (!input) {
    return [];
  }
  if (Array.isArray(input)) {
    return input.map((item) => String(item));
  }
  return [String(input)];
};

const createIteration = (index: number): AgentIteration => ({
  id: generateId("iteration"),
  index,
  solver: {
    draft: "",
    streaming: true,
    contexts: [],
    tools: [],
    lastUpdatedAt: Date.now(),
  },
  verifier: {
    status: "idle",
    reasons: [],
    lastUpdatedAt: Date.now(),
  },
  startedAt: Date.now(),
});

const mapConversationMessages = (
  raw: any[]
): ConversationMessage[] => {
  return raw.map((message) => ({
    messageId: message.messageId || generateId("msg"),
    conversationId: message.conversationId,
    role: message.type || message.role, // Сервер возвращает "type", а не "role"
    content: message.content,
    timestamp: message.timestamp,
  }));
};

export const useChatActions = () => {
  const state = useChatState();
  const dispatch = useChatDispatch();

  const agentRunRef = useRef<AgentRun | undefined>(undefined);
  const streamControllerRef = useRef<AgentStreamController | null>(null);
  const pendingTitleMessageRef = useRef<string | null>(null);

  useEffect(() => {
    agentRunRef.current = state.agentRun;
  }, [state.agentRun]);

  const updateConversations = useCallback(
    (updater: (conversations: ConversationSummary[]) => ConversationSummary[]) => {
      const updated = updater(state.conversations);
      dispatch({ type: "SET_CONVERSATIONS", conversations: updated });
    },
    [dispatch, state.conversations]
  );

  const ensureConversationExists = useCallback(
    (conversationId: string) => {
      const exists = state.conversations.some(
        (conversation) => conversation.conversationId === conversationId
      );
      if (exists) {
        return;
      }
      const now = new Date().toISOString();
      const placeholder: ConversationSummary = {
        conversationId,
        title: "Новый разговор",
        createdAt: now,
        updatedAt: now,
      };
      updateConversations((conversations) => [placeholder, ...conversations]);
    },
    [state.conversations, updateConversations]
  );

  const refreshConversations = useCallback(async () => {
    try {
      const response = await fetch(API.conversations());
      if (!response.ok) {
        throw new Error(`Не удалось загрузить список бесед (${response.status})`);
      }
      const payload = (await response.json()) as ConversationSummary[];
      dispatch({ type: "SET_CONVERSATIONS", conversations: payload });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        error: (error as Error).message,
      });
    }
  }, [dispatch]);

  const loadConversationMessages = useCallback(
    async (conversationId: string) => {
      try {
        dispatch({ type: "SET_LOADING", value: true });
        const response = await fetch(API.conversationMessages(conversationId));
        if (!response.ok) {
          throw new Error("Не удалось загрузить сообщения беседы");
        }
        const payload = (await response.json()) as ConversationMessage[];
        dispatch({
          type: "SET_MESSAGES",
          messages: mapConversationMessages(payload),
        });
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          error: (error as Error).message,
        });
        dispatch({ type: "SET_MESSAGES", messages: [] });
      } finally {
        dispatch({ type: "SET_LOADING", value: false });
      }
    },
    [dispatch]
  );

  const setActiveConversation = useCallback(
    (conversationId: string) => {
      dispatch({
        type: "SET_ACTIVE_CONVERSATION",
        conversationId,
      });
    },
    [dispatch]
  );

  const createConversation = useCallback(
    (initialMessage?: string) => {
      const conversationId =
        (typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : generateId("conversation"));
      ensureConversationExists(conversationId);
      setActiveConversation(conversationId);
      dispatch({ type: "SET_MESSAGES", messages: [] });
      pendingTitleMessageRef.current = initialMessage ?? null;
      return conversationId;
    },
    [ensureConversationExists, setActiveConversation, dispatch]
  );

  const selectConversation = useCallback(
    async (conversationId: string) => {
      if (streamControllerRef.current) {
        streamControllerRef.current.abort();
        streamControllerRef.current = null;
      }
      setActiveConversation(conversationId);
      await loadConversationMessages(conversationId);
    },
    [loadConversationMessages, setActiveConversation]
  );

  const updateAgentRun = useCallback(
    (mutator: (current: AgentRun) => AgentRun) => {
      const next = mutator(cloneRun(agentRunRef.current));
      agentRunRef.current = next;
      dispatch({ type: "SET_AGENT_RUN", agentRun: next });
    },
    [dispatch]
  );

  const appendAssistantMessage = useCallback(
    (conversationId: string, content: string) => {
      const assistantMessage: ConversationMessage = {
        messageId: generateId("msg"),
        conversationId,
        role: "ASSISTANT",
        content,
        timestamp: new Date().toISOString(),
      };
      dispatch({ type: "APPEND_MESSAGE", message: assistantMessage });
    },
    [dispatch]
  );

  const handleAgentEvent = useCallback(
    (conversationId: string, event: AgentEvent) => {
      switch (event.stage) {
        case "SOLVER_STARTED": {
          updateAgentRun((run) => {
            const iteration = createIteration(run.iterations.length + 1);
            iteration.solver.streaming = true;
            run.iterations = [...run.iterations, iteration];
            return run;
          });
          break;
        }
        case "SOLVER_TOKEN": {
          const token = extractMessage(event);
          if (!token) {
            break;
          }
          updateAgentRun((run) => {
            let iteration = run.iterations.at(-1);
            if (!iteration) {
              iteration = createIteration(1);
              run.iterations = [...run.iterations, iteration];
            }
            iteration.solver.draft += token;
            iteration.solver.streaming = true;
            iteration.solver.lastUpdatedAt = Date.now();
            return run;
          });
          break;
        }
        case "DRAFT_READY": {
          updateAgentRun((run) => {
            const iteration = run.iterations.at(-1);
            if (iteration) {
              iteration.solver.streaming = false;
              iteration.solver.lastUpdatedAt = Date.now();
            }
            return run;
          });
          break;
        }
        case "RAG_CONTEXT": {
          updateAgentRun((run) => {
            const iteration = run.iterations.at(-1);
            if (iteration) {
              const payload =
                (event.data as Record<string, unknown>)?.documents ??
                (event.data as Record<string, unknown>)?.items ??
                extractMessage(event);
              const contexts = ensureArray(payload).filter(Boolean);
              if (contexts.length > 0) {
                iteration.solver.contexts.push(...contexts);
              }
            }
            return run;
          });
          break;
        }
        case "TOOL_SELECTION": {
          updateAgentRun((run) => {
            const iteration = run.iterations.at(-1);
            if (iteration) {
              const data = (event.data ?? {}) as Record<string, unknown>;
              const name =
                (data.tool as string) ??
                (data.name as string) ??
                "Инструмент";
              const reason = data.reason ?? data.message ?? "";
              iteration.solver.tools.push({
                name,
                status: "pending",
                output: reason ? String(reason) : undefined,
              });
            }
            return run;
          });
          break;
        }
        case "TOOL_EXECUTION": {
          updateAgentRun((run) => {
            const iteration = run.iterations.at(-1);
            if (!iteration) {
              return run;
            }
            const data = (event.data ?? {}) as Record<string, unknown>;
            const toolName =
              (data.tool as string) ??
              (data.name as string) ??
              iteration.solver.tools.at(-1)?.name;
            const status =
              (data.status as AgentIteration["solver"]["tools"][number]["status"]) ??
              "completed";
            const output = data.output ?? data.message;
            iteration.solver.tools = iteration.solver.tools.map((tool) =>
              tool.name === toolName
                ? {
                    ...tool,
                    status,
                    output: output ? String(output) : tool.output,
                  }
                : tool
            );
            return run;
          });
          break;
        }
        case "VERIFICATION_STARTED": {
          updateAgentRun((run) => {
            const iteration = run.iterations.at(-1);
            if (iteration) {
              iteration.verifier.status = "pending";
              iteration.verifier.lastUpdatedAt = Date.now();
            }
            return run;
          });
          break;
        }
        case "VERIFICATION_PROGRESS": {
          const message = extractMessage(event);
          updateAgentRun((run) => {
            const iteration = run.iterations.at(-1);
            if (iteration) {
              iteration.verifier.status = "pending";
              iteration.verifier.message = message;
              iteration.verifier.lastUpdatedAt = Date.now();
            }
            return run;
          });
          break;
        }
        case "VERIFICATION_FEEDBACK": {
          updateAgentRun((run) => {
            const iteration = run.iterations.at(-1);
            if (!iteration) {
              return run;
            }
            const data = (event.data ?? {}) as {
              ok?: boolean;
              reasons?: string[];
              requiredChanges?: string;
              message?: string;
            };
            if (data.ok) {
              iteration.verifier.status = "approved";
              iteration.verifier.reasons = [];
              iteration.verifier.requiredChanges = undefined;
              iteration.verifier.message =
                data.message ?? "Ответ подтверждён.";
            } else {
              iteration.verifier.status = "rejected";
              iteration.verifier.reasons = ensureArray(data.reasons ?? []);
              if (data.requiredChanges) {
                iteration.verifier.requiredChanges = data.requiredChanges;
              }
              iteration.verifier.message =
                data.message ?? "Необходимо улучшить черновик.";
            }
            iteration.verifier.lastUpdatedAt = Date.now();
            return run;
          });
          break;
        }
        case "FINAL_ANSWER": {
          updateAgentRun((run) => {
            const data = (event.data ?? {}) as {
              answer?: string;
              summary?: string;
            };
            run.finishedAt = Date.now();
            run.finalAnswer = data.answer ?? "";
            run.summaryForSpeech = data.summary ?? "";
            return run;
          });
          if (
            event.data &&
            typeof event.data === "object" &&
            "answer" in event.data
          ) {
            appendAssistantMessage(
              conversationId,
              String((event.data as Record<string, unknown>).answer ?? "")
            );
          }
          dispatch({ type: "SET_LOADING", value: false });
          void refreshConversations();
          break;
        }
        case "ERROR": {
          const message = extractMessage(event) || "Ошибка агента";
          updateAgentRun((run) => {
            run.error = message;
            run.finishedAt = Date.now();
            return run;
          });
          dispatch({
            type: "SET_ERROR",
            error: message,
          });
          dispatch({ type: "SET_LOADING", value: false });
          break;
        }
        default:
          break;
      }
    },
    [appendAssistantMessage, dispatch, refreshConversations, updateAgentRun]
  );

  const requestConversationTitle = useCallback(
    async (conversationId: string, firstMessage: string | null) => {
      if (!firstMessage) {
        return;
      }
      try {
        const response = await fetch(API.conversationTitle(conversationId), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: firstMessage }),
        });
        if (!response.ok) {
          throw new Error("Не удалось сгенерировать заголовок беседы");
        }
        const title = (await response.json()) as TitleResponse;
        updateConversations((conversations) =>
          conversations.map((conversation) =>
            conversation.conversationId === conversationId
              ? { ...conversation, title }
              : conversation
          )
        );
      } catch (error) {
        console.warn("Title generation failed:", error);
      }
    },
    [updateConversations]
  );

  const sendSimpleMessage = useCallback(
    async (conversationId: string, message: string) => {
      try {
        const response = await fetch(API.simpleChat(conversationId, message));
        if (!response.ok) {
          throw new Error("Не удалось получить ответ модели");
        }
        const payload = (await response.json()) as {
          answer?: string;
          summary?: string;
        };
        appendAssistantMessage(conversationId, payload.answer ?? "");
        updateAgentRun((run) => ({
          ...run,
          startedAt: run.startedAt,
          finishedAt: Date.now(),
          finalAnswer: payload.answer ?? "",
          summaryForSpeech: payload.summary ?? "",
        }));
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          error: (error as Error).message,
        });
      } finally {
        dispatch({ type: "SET_LOADING", value: false });
        void refreshConversations();
      }
    },
    [appendAssistantMessage, dispatch, refreshConversations, updateAgentRun]
  );

  const sendAgentMessage = useCallback(
    (conversationId: string, message: string) => {
      if (streamControllerRef.current) {
        streamControllerRef.current.abort();
      }

      const body = {
        message,
        solverProvider: state.settings.solverProvider,
        verifierProvider: state.settings.verifierProvider,
        mode: state.settings.mode === "agents" ? "stream" : "blocking",
        visibility: state.settings.visibility,
      };

      streamControllerRef.current = streamAgentEvents({
        url: API.agentStream(conversationId),
        init: {
          body: JSON.stringify(body),
        },
        onEvent: (event) => handleAgentEvent(conversationId, event),
        onError: (error) => {
          dispatch({ type: "SET_ERROR", error: error.message });
          dispatch({ type: "SET_LOADING", value: false });
          updateAgentRun((run) => ({
            ...run,
            error: error.message,
            finishedAt: Date.now(),
          }));
        },
        onComplete: () => {
          streamControllerRef.current = null;
          dispatch({ type: "SET_LOADING", value: false });
        },
      });
    },
    [dispatch, handleAgentEvent, state.settings, updateAgentRun]
  );

  const sendMessage = useCallback(
    async (rawMessage: string) => {
      const trimmed = rawMessage.trim();
      if (!trimmed) {
        return;
      }

      dispatch({ type: "SET_ERROR", error: undefined });
      dispatch({ type: "SET_LOADING", value: true });

      const conversationId =
        state.activeConversationId ?? createConversation(trimmed);

      ensureConversationExists(conversationId);
      updateConversations((conversations) =>
        conversations.map((conversation) =>
          conversation.conversationId === conversationId
            ? { ...conversation, updatedAt: new Date().toISOString() }
            : conversation
        )
      );

      const userMessage: ConversationMessage = {
        messageId: generateId("msg"),
        conversationId,
        role: "USER",
        content: trimmed,
        timestamp: new Date().toISOString(),
      };
      dispatch({ type: "APPEND_MESSAGE", message: userMessage });

      updateAgentRun(() => ({
        startedAt: Date.now(),
        iterations: [],
      }));

      if (pendingTitleMessageRef.current == null) {
        pendingTitleMessageRef.current = trimmed;
      }

      if (state.settings.mode === "agents") {
        sendAgentMessage(conversationId, trimmed);
      } else {
        await sendSimpleMessage(conversationId, trimmed);
      }
    },
    [
      createConversation,
      dispatch,
      ensureConversationExists,
      sendAgentMessage,
      sendSimpleMessage,
      state.activeConversationId,
      state.settings.mode,
      updateAgentRun,
      updateConversations,
    ]
  );

  useEffect(() => {
    if (!state.agentRun?.finishedAt || !state.activeConversationId) {
      return;
    }
    const summary = pendingTitleMessageRef.current;
    if (!summary) {
      return;
    }
    void requestConversationTitle(state.activeConversationId, summary);
    pendingTitleMessageRef.current = null;
  }, [requestConversationTitle, state.activeConversationId, state.agentRun?.finishedAt]);

  useEffect(() => {
    return () => {
      if (streamControllerRef.current) {
        streamControllerRef.current.abort();
      }
    };
  }, []);

  return {
    refreshConversations,
    loadConversationMessages,
    selectConversation,
    createConversation,
    sendMessage,
  };
};
