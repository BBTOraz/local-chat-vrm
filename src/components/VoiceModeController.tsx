import { useCallback, useEffect } from "react";
import { useChatDispatch, useChatState } from "@/state/chatStore";
import { useOpenAiRealtimeVoiceAgent } from "@/features/voiceAgent/useOpenAiRealtimeVoiceAgent";

export const VoiceModeController = () => {
  const { isContinuousVoiceMode } = useChatState();
  const dispatch = useChatDispatch();

  const voiceAgent = useOpenAiRealtimeVoiceAgent({
    onError: (error) => {
      console.error("[VoiceModeController] Realtime voice error:", error);
      dispatch({ type: "SET_ERROR", error: error.message });
    },
  });

  useEffect(() => {
    if (isContinuousVoiceMode && !voiceAgent.isActive) {
      void voiceAgent.init();
    } else if (!isContinuousVoiceMode && voiceAgent.isActive) {
      voiceAgent.stop();
    }
  }, [isContinuousVoiceMode, voiceAgent]);

  const handleInterrupt = useCallback(() => {
    voiceAgent.interrupt();
    dispatch({ type: "SET_VOICE_ACTIVE", active: false });
  }, [dispatch, voiceAgent]);

  const handleStop = useCallback(() => {
    voiceAgent.stop();
    dispatch({ type: "SET_CONTINUOUS_VOICE_MODE", active: false });
    dispatch({ type: "SET_VOICE_ACTIVE", active: false });
  }, [dispatch, voiceAgent]);

  if (!isContinuousVoiceMode) {
    return null;
  }

  return (
    <div className="fixed bottom-32 right-8 z-50 flex flex-col items-end gap-2">
      <div className="rounded-lg bg-black/80 px-4 py-2 text-white backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className={`h-3 w-3 rounded-full ${
            voiceAgent.isListening ? "bg-green-500 animate-pulse" :
            voiceAgent.isConnecting ? "bg-yellow-500 animate-pulse" :
            voiceAgent.isSpeaking ? "bg-blue-500 animate-pulse" :
            voiceAgent.hasError ? "bg-red-500" :
            "bg-gray-500"
          }`} />
          <span className="text-sm">
            {voiceAgent.isListening ? "Realtime: слушаю" :
             voiceAgent.isConnecting ? "Realtime: подключение" :
             voiceAgent.isSpeaking ? "Realtime: отвечает" :
             voiceAgent.hasError ? "Realtime: ошибка" :
             "Realtime voice"}
          </span>
        </div>
        {voiceAgent.lastError && (
          <div className="mt-1 max-w-[22rem] text-xs text-red-200">
            {voiceAgent.lastError}
          </div>
        )}
      </div>
      {voiceAgent.isActive && (
        <button
          onClick={handleInterrupt}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
        >
          Прервать
        </button>
      )}
      <button
        onClick={handleStop}
        className="rounded-lg bg-white/90 px-4 py-2 text-sm text-slate-900 hover:bg-white"
      >
        Выключить голос
      </button>
    </div>
  );
};
