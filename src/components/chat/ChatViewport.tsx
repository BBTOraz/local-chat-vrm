import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useChatState } from "@/state/chatStore";
import { classNames } from "@/utils/classNames";

const ROLE_LABEL: Record<string, string> = {
  USER: "Вы",
  ASSISTANT: "Orchestra",
};

export const ChatViewport = () => {
  const { messages, activeConversationId } = useChatState();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!endRef.current) {
      return;
    }
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  if (!activeConversationId) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center text-primary/60">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-semibold text-primary">
            Начните новый диалог
          </h2>
          <p className="text-sm">
            Создайте первый запрос или выберите беседу в боковой панели, чтобы
            увидеть историю.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex-1 space-y-16 overflow-y-auto px-24 py-32">
        {messages.map((message) => (
          <MessageBlock key={message.messageId} messageId={message.messageId}>
            <Bubble role={message.role} content={message.content} />
          </MessageBlock>
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
};

const MessageBlock = ({
  children,
  messageId,
}: {
  children: React.ReactNode;
  messageId: string;
}) => {
  return (
    <article
      className="rounded-16 border border-surface1-hover bg-white shadow-sm"
      data-message-id={messageId}
    >
      {children}
    </article>
  );
};

const Bubble = ({
  role,
  content,
}: {
  role: string;
  content: string;
}) => {
  const label = ROLE_LABEL[role] ?? role;
  const isAssistant = role === "ASSISTANT";

  return (
    <div
      className={classNames(
        "flex flex-col gap-8",
        isAssistant ? "bg-white" : "bg-surface0"
      )}
    >
      <header
        className={classNames(
          "flex items-center gap-8 rounded-t-16 px-20 py-12 text-sm font-semibold tracking-wide",
          isAssistant
            ? "bg-secondary text-white"
            : "bg-base text-primary uppercase"
        )}
      >
        {label}
      </header>
      <div className="px-20 pb-20 text-primary">
        {isAssistant ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        ) : (
          <p className="text-base font-medium">{content}</p>
        )}
      </div>
    </div>
  );
};
