import { useContext, useEffect, useRef } from "react";
import { useChatDispatch, useChatState } from "@/state/chatStore";
import { ViewerContext } from "@/features/vrmViewer/viewerContext";
import { DEFAULT_VOICE_ENGINE, textsToScreenplay } from "@/features/messages/messages";
import { speakCharacter } from "@/features/messages/speakCharacter";

export const SummarySpeaker = () => {
  const { agentRun } = useChatState();
  const dispatch = useChatDispatch();
  const { viewer } = useContext(ViewerContext);
  const lastSpokenRef = useRef<string | null>(null);

  useEffect(() => {
    const summary = agentRun?.summaryForSpeech?.trim() ?? "";
    if (!summary || !agentRun?.finishedAt) {
      return;
    }
    if (!viewer?.isReady) {
      return;
    }
    if (lastSpokenRef.current === summary) {
      return;
    }

    lastSpokenRef.current = summary;

    let cancelled = false;

    const play = async () => {
      console.log("🎬 [SummarySpeaker] Starting play sequence");
      try {
        console.log("🔧 [SummarySpeaker] Loading voice engine:", DEFAULT_VOICE_ENGINE);
        await speakCharacter.load(DEFAULT_VOICE_ENGINE);
        
        if (cancelled) {
          console.warn("⚠️ [SummarySpeaker] Cancelled before synthesis");
          return;
        }

        console.log("📝 [SummarySpeaker] Converting text to screenplay", {
          summary: summary.substring(0, 50) + "...",
          summaryLength: summary.length
        });
        
        const screenplays = textsToScreenplay(
          DEFAULT_VOICE_ENGINE,
          [summary]
        );

        console.log("✅ [SummarySpeaker] Screenplays generated:", screenplays.length);

        if (screenplays.length === 0) {
          console.warn("⚠️ [SummarySpeaker] No screenplays generated");
          return;
        }

        dispatch({ type: "SET_VOICE_ACTIVE", active: true });
        let remaining = screenplays.length;

        console.log("🗣️ [SummarySpeaker] Starting to speak", remaining, "screenplays");

        screenplays.forEach((screenplay, index) => {
          console.log(`🎤 [SummarySpeaker] Speaking screenplay ${index + 1}/${screenplays.length}`);
          speakCharacter.speak(
            screenplay,
            viewer,
            "",
            undefined,
            () => {
              remaining -= 1;
              console.log(`✅ [SummarySpeaker] Screenplay ${index + 1} completed. Remaining:`, remaining);
              if (remaining === 0) {
                console.log("🏁 [SummarySpeaker] All screenplays completed");
                dispatch({ type: "SET_VOICE_ACTIVE", active: false });
              }
            }
          );
        });
      } catch (error) {
        console.error("❌ [SummarySpeaker] Play failed:", error);
        dispatch({ type: "SET_VOICE_ACTIVE", active: false });
      }
    };

    void play();

    return () => {
      cancelled = true;
      dispatch({ type: "SET_VOICE_ACTIVE", active: false });
    };
  }, [agentRun?.finishedAt, agentRun?.summaryForSpeech, dispatch, viewer]);

  return null;
};
