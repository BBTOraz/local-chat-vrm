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
import { useTranscription } from "@/features/transcription/transcription";
import styles from "./messageInputContainer.module.css";

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
  const { transcribe, stopTranscribing } = useTranscription();

  const [userMessage, setUserMessage] = useState("");
  const [isExtendedOpen, setIsExtendedOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const isVoiceSupported = useMemo(() => {
    // OpenAI Whisper всегда доступен (если есть API ключ)
    return true;
  }, []);

  useEffect(() => {
    if (!loading) {
      setUserMessage("");
    }
  }, [loading]);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (isListening) {
        stopTranscribing();
      }
    };
  }, [isListening, stopTranscribing]);

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
      stopTranscribing();
      setIsListening(false);
    }

    setUserMessage("");
    void sendMessage(trimmed);
  }, [isListening, sendMessage, userMessage, stopTranscribing]);

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

  const handleVoiceInputClick = useCallback(async () => {
    console.log('🎤 [Voice Input] Button clicked', { isListening, isVoiceSupported });
    
    if (!isVoiceSupported) {
      console.warn('⚠️ [Voice Input] Voice not supported');
      return;
    }

    if (isListening) {
      console.log('⏹️ [Voice Input] Stopping transcription');
      stopTranscribing();
      setIsListening(false);
      return;
    }

    try {
      console.log('🎙️ [Voice Input] Starting OpenAI Whisper transcription...');
      setIsListening(true);
      
      const transcript = await transcribe();
      
      console.log('✅ [Voice Input] Transcription received:', transcript);
      
      if (transcript) {
        setUserMessage((prev) =>
          prev ? `${prev} ${transcript}` : transcript
        );
      }
      
      setIsListening(false);
    } catch (error) {
      console.error('❌ [Voice Input] Transcription failed:', error);
      setIsListening(false);
    }
  }, [isListening, isVoiceSupported, transcribe, stopTranscribing]);

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
    <div className={styles.extendedMenu}>
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          Режим
        </header>
        <div className={styles.modeOptions}>
          <label className={styles.modeLabel}>
            <input
              type="radio"
              name="chat-mode"
              value="simple"
              checked={settings.mode === "simple"}
              onChange={() => handleModeChange("simple")}
            />
            <span>Обычный</span>
          </label>
          <label className={styles.modeLabel}>
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

      <section className={`${styles.section} ${settings.mode === "simple" ? styles.disabledSection : ''}`}>
        <header className={styles.sectionHeader}>
          Провайдеры
        </header>
        <div className={styles.providersGrid}>
          <label className={styles.providerLabel}>
            <span className={styles.providerLabelText}>Solver</span>
            <select
              value={settings.solverProvider}
              onChange={handleSolverProviderChange}
              disabled={settings.mode === "simple"}
              className={styles.providerSelect}
            >
              <option value="groq">Groq</option>
              <option value="ollama">Ollama</option>
            </select>
          </label>
          <label className={styles.providerLabel}>
            <span className={styles.providerLabelText}>Verifier</span>
            <select
              value={settings.verifierProvider}
              onChange={handleVerifierProviderChange}
              disabled={settings.mode === "simple"}
              className={styles.providerSelect}
            >
              <option value="groq">Groq</option>
              <option value="ollama">Ollama</option>
            </select>
          </label>
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          Детализация
        </header>
        <div className={styles.detailOptions}>
          <label className={styles.detailLabel}>
            <input
              type="checkbox"
              checked={settings.showThinking}
              onChange={handleShowThinkingToggle}
            />
            <span>Показывать мысли агента</span>
          </label>
          <label className={styles.detailLabel}>
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
