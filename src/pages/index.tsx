import { useCallback, useEffect, useState } from "react";
import VrmViewer from "@/components/vrmViewer";
import { Message } from "@/features/messages/messages";
import { MessageInputContainer } from "@/components/messageInputContainer";
import { Introduction } from "@/components/introduction";
import { Meta } from "@/components/meta";
import { ChatLog } from "@/components/chatLog";

export default function Home() {
  const [chatLog, setChatLog] = useState<Message[]>([]);
  const [chatProcessing, setChatProcessing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem("chatVRMHistory");
    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored) as Message[];
      if (Array.isArray(parsed)) {
        setChatLog(parsed);
      }
    } catch (error) {
      console.warn("Failed to parse stored chat log", error);
      window.localStorage.removeItem("chatVRMHistory");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem("chatVRMHistory", JSON.stringify(chatLog));
  }, [chatLog]);

  const handleSendChat = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) {
        setChatProcessing(false);
        return;
      }

      setChatProcessing(true);
      setChatLog((prev) => {
        const historyWithUser: Message[] = [
          ...prev,
          { role: "user", content: trimmed },
        ];
        const updatedHistory: Message[] = [
          ...historyWithUser,
          { role: "assistant", content: trimmed },
        ];
        return updatedHistory;
      });
      setChatProcessing(false);
    },
    []
  );

  return (
    <div className={"font-M_PLUS_2"}>
      <Meta />
      <Introduction onStart={async () => undefined} />
      <ChatLog messages={chatLog} />
      <VrmViewer />
      <MessageInputContainer
        isChatProcessing={chatProcessing}
        onChatProcessStart={handleSendChat}
      />
    </div>
  );
}
