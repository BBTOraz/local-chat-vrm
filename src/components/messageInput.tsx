import { useCallback, useEffect, useRef } from "react";
import styles from "./messageInput.module.css";

type Props = {
  userMessage: string;
  isChatProcessing: boolean;
  isExtendedOpen: boolean;
  isListening: boolean;
  isVoiceActive: boolean;
  isVoiceSupported: boolean;
  onChangeUserMessage: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: () => void;
  onToggleExtended: () => void;
  onVoiceInputClick: () => void;
  onStopSpeech: () => void;
  children?: React.ReactNode;
};

export const MessageInput = ({
  userMessage,
  isChatProcessing,
  isExtendedOpen,
  isListening,
  isVoiceActive,
  isVoiceSupported,
  onChangeUserMessage,
  onSubmit,
  onToggleExtended,
  onVoiceInputClick,
  onStopSpeech,
  children,
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResize = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, []);

  useEffect(() => {
    autoResize();
  }, [autoResize, userMessage]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!isChatProcessing && userMessage.trim()) {
        onSubmit();
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isChatProcessing && userMessage.trim()) {
      onSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputCard}>
          {isExtendedOpen && (
            <div className={styles.extendedPanel}>
              {children}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label className={styles.srOnly} htmlFor="chat-textarea">
              Введите сообщение
            </label>
            <textarea
              id="chat-textarea"
              ref={textareaRef}
              value={userMessage}
              onChange={onChangeUserMessage}
              onKeyDown={handleKeyDown}
              placeholder="Спросите что-нибудь..."
              rows={1}
              className={styles.textarea}
            />
          </form>
          <div className={styles.controlsBar}>
            <div className={styles.leftControls}>
              <button
                type="button"
                className={styles.attachButton}
                title="Прикрепить файл (скоро)"
                aria-label="Прикрепить файл"
                disabled
              >
                +
              </button>
              <button
                type="button"
                onClick={onToggleExtended}
                className={styles.extendedButton}
                aria-expanded={isExtendedOpen}
              >
                Дополнительно
                <span
                  aria-hidden="true"
                  className={`${styles.arrow} ${isExtendedOpen ? styles.arrowRotated : ''}`}
                >
                  ▼
                </span>
              </button>
            </div>
            <div className={styles.rightControls}>
              {isVoiceSupported && (
                <button
                  type="button"
                  onClick={onVoiceInputClick}
                  className={`${styles.voiceButton} ${isListening ? styles.voiceButtonActive : styles.voiceButtonIdle}`}
                  aria-pressed={isListening}
                  aria-label="Голосовой ввод"
                  title="Голосовой ввод"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </button>
              )}
              {isVoiceActive && (
                <button
                  type="button"
                  onClick={onStopSpeech}
                  className={styles.stopButton}
                  title="Остановить воспроизведение"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                    <line x1="23" y1="9" x2="17" y2="15"/>
                    <line x1="17" y1="9" x2="23" y2="15"/>
                  </svg>
                  <span>Остановить</span>
                </button>
              )}
              <button
                type="button"
                onClick={onSubmit}
                disabled={isChatProcessing || !userMessage.trim()}
                className={`${styles.submitButton} ${isChatProcessing || !userMessage.trim() ? styles.submitButtonDisabled : styles.submitButtonActive}`}
                title={isChatProcessing ? "Отправка..." : "Отправить сообщение"}
              >
                {isChatProcessing ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
