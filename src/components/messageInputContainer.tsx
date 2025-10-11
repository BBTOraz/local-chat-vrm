import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MessageInput } from "@/components/messageInput";
import { useChatActions } from "@/hooks/useChatActions";
import { useChatDispatch, useChatState } from "@/state/chatStore";
import type { ChatSettings } from "@/types/chat";
import { ViewerContext } from "@/features/vrmViewer/viewerContext";
import { speakCharacter } from "@/features/messages/speakCharacter";
import { classNames } from "@/utils/classNames";

type SpeechRecognitionInstance =
  | SpeechRecognition
  | (SpeechRecognition & { stop: () => void });

const deriveVisibility = (showThinking: boolean, debug: boolean) => {
  if (debug) {
    return "trace" as const;
  }
  return showThinking ? "conversation" : "hint";
};

/**
 * Bottom dock with message composer and quick controls.
 */
export const MessageInputContainer = () => {
  const { loading, settings, isVoiceActive } = useChatState();
  const dispatch = useChatDispatch();
  const { sendMessage } = useChatActions();
  const { viewer } = useContext(ViewerContext);

  const [userMessage, setUserMessage] = useState("");
  const [isExtendedOpen, setIsExtendedOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const isVoiceSupported = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return Boolean(
      (window as unknown as { SpeechRecognition?: unknown })
        .SpeechRecognition || (window as unknown as { webkitSpeechRecognition?: unknown })
        .webkitSpeechRecognition
    );
  }, []);

  useEffect(() => {
    if (!loading) {
      setUserMessage("");
    }
  }, [loading]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      recognitionRef.current = null;
    };
  }, []);

  const updateSettings = useCallback(
    (next: Partial<ChatSettings>) => {
      const merged: ChatSettings = {
        ...settings,
        ...next,
      };
      dispatch({
        type: "SET_SETTINGS",
        settings: merged,
        persist: true,
      });
    },
    [dispatch, settings]
  );

  const handleSubmit = useCallback(() => {
    const trimmed = userMessage.trim();
    if (!trimmed) {
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      recognitionRef.current = null;
      setIsListening(false);
    }

    setUserMessage("");
    void sendMessage(trimmed);
  }, [isListening, sendMessage, userMessage]);

  const handleToggleExtended = useCallback(() => {
    setIsExtendedOpen((prev) => !prev);
  }, []);

  const stopSpeech = useCallback(() => {
    if (!viewer) {
      return;
    }
    speakCharacter.stop(viewer);
    dispatch({ type: "SET_VOICE_ACTIVE", active: false });
  }, [dispatch, viewer]);

  const handleVoiceInputClick = useCallback(() => {
    if (!isVoiceSupported) {
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      recognitionRef.current = null;
      setIsListening(false);
      return;
    }

    const RecognitionCtor =
      (window as unknown as { SpeechRecognition?: typeof SpeechRecognition })
        .SpeechRecognition ??
      (window as unknown as {
        webkitSpeechRecognition?: typeof SpeechRecognition;
      }).webkitSpeechRecognition;

    if (!RecognitionCtor) {
      return;
    }

    const recognition = new RecognitionCtor();
    recognition.lang = "ru-RU";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript ?? "";
      if (transcript) {
        setUserMessage((prev) =>
          prev ? `${prev} ${transcript}` : transcript
        );
      }
      recognition.stop();
    };

    recognition.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      setIsListening(false);
      recognition.stop();
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    try {
      recognition.start();
      recognitionRef.current = recognition;
      setIsListening(true);
    } catch (error) {
      console.warn("Speech recognition start failed:", error);
    }
  }, [isListening, isVoiceSupported]);

  const handleModeChange = (mode: ChatSettings["mode"]) => {
    updateSettings({ mode });
  };

  const handleSolverProviderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ solverProvider: event.target.value });
  };

  const handleVerifierProviderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ verifierProvider: event.target.value });
  };

  const handleShowThinkingToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const showThinking = event.target.checked;
    const visibility = deriveVisibility(showThinking, settings.debug);
    updateSettings({ showThinking, visibility });
  };

  const handleDebugToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const debug = event.target.checked;
    const visibility = deriveVisibility(settings.showThinking, debug);
    updateSettings({ debug, visibility });
  };

  const extendedMenu = (
    <div className="space-y-16 text-sm text-primary">
      <section>
        <header className="mb-8 text-xs font-semibold uppercase tracking-widest text-primary/60">
          Режим
        </header>
        <div className="flex flex-wrap gap-12">
          <label className="flex items-center gap-6 rounded-12 border border-surface1-hover px-12 py-8 hover:border-secondary">
            <input
              type="radio"
              name="chat-mode"
              value="simple"
              checked={settings.mode === "simple"}
              onChange={() => handleModeChange("simple")}
            />
            <span>Обычный</span>
          </label>
          <label className="flex items-center gap-6 rounded-12 border border-surface1-hover px-12 py-8 hover:border-secondary">
            <input
              type="radio"
              name="chat-mode"
              value="agents"
              checked={settings.mode === "agents"}
              onChange={() => handleModeChange("agents")}
            />
            <span>Агенты</span>
          </label>
        </div>
      </section>

      <section className={classNames(settings.mode === "simple" && "opacity-50")}>
        <header className="mb-8 text-xs font-semibold uppercase tracking-widest text-primary/60">
          Провайдеры
        </header>
        <div className="grid gap-12 md:grid-cols-2">
          <label className="flex flex-col gap-4 text-sm">
            <span className="text-xs text-primary/60">Solver</span>
            <select
              value={settings.solverProvider}
              onChange={handleSolverProviderChange}
              disabled={settings.mode === "simple"}
              className="rounded-12 border border-surface1-hover bg-white px-12 py-8 focus:border-secondary focus:outline-none"
            >
              <option value="groq">Groq</option>
              <option value="ollama">Ollama</option>
            </select>
          </label>
          <label className="flex flex-col gap-4 text-sm">
            <span className="text-xs text-primary/60">Verifier</span>
            <select
              value={settings.verifierProvider}
              onChange={handleVerifierProviderChange}
              disabled={settings.mode === "simple"}
              className="rounded-12 border border-surface1-hover bg-white px-12 py-8 focus:border-secondary focus:outline-none"
            >
              <option value="groq">Groq</option>
              <option value="ollama">Ollama</option>
            </select>
          </label>
        </div>
      </section>

      <section>
        <header className="mb-8 text-xs font-semibold uppercase tracking-widest text-primary/60">
          Детализация
        </header>
        <div className="space-y-8">
          <label className="flex items-center gap-8">
            <input
              type="checkbox"
              checked={settings.showThinking}
              onChange={handleShowThinkingToggle}
            />
            <span>Показывать мысли агента</span>
          </label>
          <label className="flex items-center gap-8">
            <input
              type="checkbox"
              checked={settings.debug}
              onChange={handleDebugToggle}
            />
            <span>Режим отладки (trace)</span>
          </label>
        </div>
      </section>
    </div>
  );

  return (
    <MessageInput
      userMessage={userMessage}
      isChatProcessing={loading}
      isExtendedOpen={isExtendedOpen}
      isListening={isListening}
      isVoiceActive={isVoiceActive}
      isVoiceSupported={isVoiceSupported}
      onChangeUserMessage={(event) => setUserMessage(event.target.value)}
      onSubmit={handleSubmit}
      onToggleExtended={handleToggleExtended}
      onVoiceInputClick={handleVoiceInputClick}
      onStopSpeech={stopSpeech}
    >
      {extendedMenu}
    </MessageInput>
  );
};
