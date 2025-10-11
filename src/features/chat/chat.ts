import { useCallback } from "react";
import { Message } from "../messages/messages";

export const CHAT_ENGINES = ["Echo"] as const;

export type ChatEngine = (typeof CHAT_ENGINES)[number];

export const DEFAULT_CHAT_ENGINE: ChatEngine = "Echo";

const createEchoStream = (text: string) => {
  return new ReadableStream<string>({
    start(controller) {
      controller.enqueue(text);
      controller.close();
    },
  });
};

export const useChat = () => {
  const load = useCallback(async () => {
    return Promise.resolve();
  }, []);

  const getChatResponseStream = useCallback(async (messageLog: Message[]) => {
    const lastMessage = messageLog.at(-1);
    const content = lastMessage?.content ?? "";
    return createEchoStream(content);
  }, []);

  return { load, getChatResponseStream };
};
