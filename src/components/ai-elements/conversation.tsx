import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MessageList } from "./message-list";
import { InputArea } from "./input-area";
import { useChatState, useChatDispatch } from "@/state/chatStore";
import { useChatActions } from "@/hooks/useChatActions";
import { ViewerContext } from "@/features/vrmViewer/viewerContext";
import { speakCharacter } from "@/features/messages/speakCharacter";
import { useTranscription } from "@/features/transcription/transcription";
import { ChatSettings } from "@/types/chat";
import { Settings, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Conversation = () => {
  const { messages, loading, settings, isVoiceActive } = useChatState();
  const dispatch = useChatDispatch();
  const { sendMessage } = useChatActions();
  const { viewer } = useContext(ViewerContext);
  const { transcribe, stopTranscribing } = useTranscription();

  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const isVoiceSupported = useMemo(() => true, []);

  useEffect(() => {
    if (!loading) {
      setInput("");
    }
  }, [loading]);

  useEffect(() => {
    return () => {
      if (isListening) stopTranscribing();
    };
  }, [isListening, stopTranscribing]);

  const updateSettings = useCallback(
    (next: Partial<ChatSettings>) => {
      const merged: ChatSettings = { ...settings, ...next };
      dispatch({ type: "SET_SETTINGS", settings: merged, persist: true });
    },
    [dispatch, settings]
  );

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      const trimmed = input.trim();
      if (!trimmed) return;

      if (isListening) {
        stopTranscribing();
        setIsListening(false);
      }

      setInput("");
      void sendMessage(trimmed);
    },
    [input, isListening, sendMessage, stopTranscribing]
  );

  const handleVoiceStart = useCallback(async () => {
    if (!isVoiceSupported) return;

    if (isListening) {
      stopTranscribing();
      setIsListening(false);
      return;
    }

    try {
      setIsListening(true);
      const transcript = await transcribe();
      if (transcript) {
        setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
      }
      setIsListening(false);
    } catch (error) {
      console.error("Transcription failed:", error);
      setIsListening(false);
    }
  }, [isListening, isVoiceSupported, transcribe, stopTranscribing]);

  const handleStopSpeech = useCallback(() => {
    if (!viewer) return;
    speakCharacter.stop(viewer);
    dispatch({ type: "SET_VOICE_ACTIVE", active: false });
  }, [dispatch, viewer]);

  return (
    <div className="relative flex flex-col h-full w-full max-w-4xl mx-auto">
      {/* Settings Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-sm border hover:bg-accent transition-colors"
        >
          {showSettings ? <X className="h-5 w-5" /> : <Settings className="h-5 w-5" />}
        </button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="absolute top-16 right-4 z-20 w-80 rounded-xl border bg-background/95 backdrop-blur shadow-lg p-4 space-y-4 animate-in fade-in slide-in-from-top-2">
          <h3 className="font-semibold">Settings</h3>

          <div className="space-y-2">
            <label className="text-sm font-medium">Mode</label>
            <div className="flex gap-2">
              <button
                onClick={() => updateSettings({ mode: "simple" })}
                className={cn(
                  "flex-1 px-3 py-1.5 rounded-lg text-sm border transition-colors",
                  settings.mode === "simple" ? "bg-primary text-primary-foreground border-primary" : "hover:bg-accent"
                )}
              >
                Simple
              </button>
              <button
                onClick={() => updateSettings({ mode: "agents" })}
                className={cn(
                  "flex-1 px-3 py-1.5 rounded-lg text-sm border transition-colors",
                  settings.mode === "agents" ? "bg-primary text-primary-foreground border-primary" : "hover:bg-accent"
                )}
              >
                Agents
              </button>
            </div>
          </div>

          {settings.mode === "agents" && (
            <div className="space-y-3 pt-2 border-t">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Solver Provider</label>
                <select
                  value={settings.solverProvider}
                  onChange={(e) => updateSettings({ solverProvider: e.target.value })}
                  className="w-full rounded-md border bg-background px-3 py-1 text-sm"
                >
                  <option value="groq">Groq</option>
                  <option value="ollama">Ollama</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Verifier Provider</label>
                <select
                  value={settings.verifierProvider}
                  onChange={(e) => updateSettings({ verifierProvider: e.target.value })}
                  className="w-full rounded-md border bg-background px-3 py-1 text-sm"
                >
                  <option value="groq">Groq</option>
                  <option value="ollama">Ollama</option>
                </select>
              </div>
            </div>
          )}

          <div className="space-y-2 pt-2 border-t">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={settings.showThinking}
                onChange={(e) => updateSettings({ showThinking: e.target.checked })}
                className="rounded border-gray-300"
              />
              Show Thinking Process
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={settings.debug}
                onChange={(e) => updateSettings({ debug: e.target.checked })}
                className="rounded border-gray-300"
              />
              Debug Mode
            </label>
          </div>
        </div>
      )}

      {/* Messages */}
      <MessageList messages={messages} className="flex-1 pb-4" />

      {/* Input Area */}
      <div className="p-4 bg-gradient-to-t from-background via-background to-transparent">
        <InputArea
          input={input}
          handleInputChange={(e) => setInput(e.target.value)}
          handleSubmit={handleSubmit}
          isLoading={loading}
          onVoiceStart={handleVoiceStart}
          onVoiceStop={handleVoiceStart} // Toggle behavior
          isVoiceActive={isListening}
        />
        {isVoiceActive && (
          <div className="mt-2 flex justify-center">
            <button
              onClick={handleStopSpeech}
              className="text-xs text-red-500 hover:underline flex items-center gap-1"
            >
              <span className="animate-pulse">●</span> Stop Character Speech
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
