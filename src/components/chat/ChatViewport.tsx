import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useChatState } from "@/state/chatStore";
import styles from "./ChatViewport.module.css";

const ROLE_LABEL: Record<string, string> = {
  USER: "YOU",
  ASSISTANT: "CHARACTER",
};

// Единый пузырь с заголовком внутри
const MessageBubble = ({ role, content }: { role: string; content: string }) => {
  const label = ROLE_LABEL[role] ?? role;
  const isAssistant = role === "ASSISTANT";

  return (
    <div className={`${styles.messageBubble} ${isAssistant ? styles.messageBubbleAssistant : styles.messageBubbleUser}`}>
      {/* Заголовок */}
      <div className={`${styles.messageHeader} ${isAssistant ? styles.messageHeaderAssistant : styles.messageHeaderUser}`}>
        {label}
      </div>

      {/* Тело сообщения */}
      <div className={styles.messageBody}>
        {isAssistant ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={styles.markdown}
          >
            {content}
          </ReactMarkdown>
        ) : (
          <p className={styles.messageText}>
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

// Обёртка для выравнивания
const MessageGroup = ({
  messageId,
  role,
  content,
}: {
  messageId: string;
  role: string;
  content: string;
}) => {
  const isAssistant = role === "ASSISTANT";

  return (
    <article
      className={`${styles.messageGroup} ${isAssistant ? styles.messageGroupLeft : styles.messageGroupRight}`}
      data-message-id={messageId}
    >
      <MessageBubble role={role} content={content} />
    </article>
  );
};

export const ChatViewport = () => {
  const { messages, activeConversationId } = useChatState();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!endRef.current) return;
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  if (!activeConversationId) {
    return null;
  }

  return (
    <div className={styles.viewport}>
      <div className={styles.scrollContainer}>
        <div className={styles.messagesWrapper}>
          {messages.map((message) => (
            <MessageGroup
              key={message.messageId}
              messageId={message.messageId}
              role={message.role}
              content={message.content}
            />
          ))}
          <div ref={endRef} className={styles.scrollAnchor} />
        </div>
      </div>
    </div>
  );
};
