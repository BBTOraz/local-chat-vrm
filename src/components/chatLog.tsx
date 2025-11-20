import { useEffect, useRef } from "react";
import { Message } from "@/features/messages/messages";
import styles from "./chatLog.module.css";

type Props = {
  messages: Message[];
};

export const ChatLog = ({ messages }: Props) => {
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatScrollRef.current?.scrollIntoView({
      behavior: "auto",
      block: "center",
    });
  }, []);

  useEffect(() => {
    chatScrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [messages]);

  return (
    <div className={styles.chatLogContainer}>
      <div className={styles.scrollWrapper}>
        {messages.map((msg, i) => {
          return (
            <div key={i} ref={messages.length - 1 === i ? chatScrollRef : null}>
              <Chat role={msg.role} message={msg.content} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Chat = ({ role, message }: { role: string; message: string }) => {
  const isAssistant = role === "assistant";
  
  return (
    <div className={`${styles.chatMessage} ${isAssistant ? styles.chatMessageAssistant : styles.chatMessageUser}`}>
      <div className={`${styles.messageHeader} ${isAssistant ? styles.messageHeaderAssistant : styles.messageHeaderUser}`}>
        {isAssistant ? "CHARACTER" : "YOU"}
      </div>
      <div className={styles.messageBody}>
        <div className={`${styles.messageContent} ${isAssistant ? styles.messageContentAssistant : styles.messageContentUser}`}>
          {message}
        </div>
      </div>
    </div>
  );
};
