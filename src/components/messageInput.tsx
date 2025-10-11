import { useCallback, useEffect, useRef } from "react";
import { classNames } from "@/utils/classNames";

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
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40">
      <div className="mx-auto w-full max-w-4xl px-24 pb-24">
        <div className="pointer-events-auto relative rounded-24 border border-surface1-hover bg-white shadow-[0_-6px_30px_rgba(0,0,0,0.08)]">
          {isExtendedOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-12 rounded-20 border border-surface1-hover bg-white p-20 shadow-xl">
              {children}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="chat-textarea">
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
              className="w-full resize-none rounded-t-24 border-0 px-24 pt-20 text-base font-medium text-primary placeholder:text-primary/40 focus:outline-none"
            />
          </form>
          <div className="flex items-center justify-between gap-12 px-20 pb-16">
            <div className="flex items-center gap-8">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface0 text-primary/70 hover:bg-surface0-hover"
                title="Прикрепить файл (скоро)"
                aria-label="Прикрепить файл"
                disabled
              >
                +
              </button>
              <button
                type="button"
                onClick={onToggleExtended}
                className="flex items-center gap-2 rounded-16 bg-surface0 px-12 py-6 text-sm font-semibold text-primary hover:bg-surface0-hover"
                aria-expanded={isExtendedOpen}
              >
                Дополнительно
                <span
                  aria-hidden="true"
                  className={classNames(
                    "transition-transform",
                    isExtendedOpen ? "rotate-180" : ""
                  )}
                >
                  ▼
                </span>
              </button>
            </div>
            <div className="flex items-center gap-8">
              {isVoiceSupported && (
                <button
                  type="button"
                  onClick={onVoiceInputClick}
                  className={classNames(
                    "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                    isListening
                      ? "bg-secondary text-white"
                      : "bg-surface0 text-primary hover:bg-surface0-hover"
                  )}
                  aria-pressed={isListening}
                  aria-label="Голосовой ввод"
                >
                  🎤
                </button>
              )}
              {isVoiceActive && (
                <button
                  type="button"
                  onClick={onStopSpeech}
                  className="flex items-center gap-2 rounded-16 bg-secondary px-12 py-6 text-sm font-semibold text-white hover:bg-secondary-hover"
                >
                  🔇 Остановить
                </button>
              )}
              <button
                type="button"
                onClick={onSubmit}
                disabled={isChatProcessing || !userMessage.trim()}
                className={classNames(
                  "flex items-center gap-2 rounded-16 px-16 py-8 text-sm font-semibold transition-colors",
                  isChatProcessing || !userMessage.trim()
                    ? "bg-secondary-disabled text-white/60"
                    : "bg-secondary text-white hover:bg-secondary-hover"
                )}
              >
                {isChatProcessing ? "..." : "Отправить"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
