import { AgentEvent } from "@/types/chat";

export type AgentStreamController = {
  abort: () => void;
};

type StreamOptions = {
  url: string;
  init?: RequestInit;
  onEvent: (event: AgentEvent) => void;
  onOpen?: () => void;
  onError?: (error: Error) => void;
  onComplete?: () => void;
};

const parseEventBlock = (block: string): AgentEvent | null => {
  const lines = block.split("\n");
  let eventName = "";
  const dataLines: string[] = [];

  lines.forEach((line) => {
    if (line.startsWith("event:")) {
      eventName = line.slice("event:".length).trim();
    } else if (line.startsWith("data:")) {
      dataLines.push(line.slice("data:".length).trim());
    }
  });

  if (!eventName || dataLines.length === 0) {
    return null;
  }

  const payload = dataLines.join("\n");

  try {
    const parsed = JSON.parse(payload) as AgentEvent;
    if (parsed.stage) {
      parsed.stage = parsed.stage.toUpperCase() as AgentEvent["stage"];
    } else if (eventName) {
      parsed.stage = eventName.toUpperCase() as AgentEvent["stage"];
    }
    return parsed;
  } catch (error) {
    console.error("Не удалось распарсить событие агента", error, payload);
    return null;
  }
};

export const streamAgentEvents = ({
  url,
  init,
  onEvent,
  onOpen,
  onError,
  onComplete,
}: StreamOptions): AgentStreamController => {
  const controller = new AbortController();
  const mergedInit: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
    mode: "cors",
    ...init,
    signal: controller.signal,
  };

  (async () => {
    try {
      const response = await fetch(url, mergedInit);
      if (!response.ok || !response.body) {
        throw new Error(`SSE request failed with status ${response.status}`);
      }

      onOpen?.();

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split("\n\n");
        buffer = events.pop() ?? "";

        for (const raw of events) {
          const parsedEvent = parseEventBlock(raw.trim());
          if (parsedEvent) {
            onEvent(parsedEvent);
          }
        }
      }

      onComplete?.();
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        onComplete?.();
      } else {
        onError?.(error as Error);
      }
    }
  })();

  return {
    abort: () => controller.abort(),
  };
};
