import { useContext, useEffect, useRef } from "react";
import { useChatDispatch, useChatState } from "@/state/chatStore";
import { ViewerContext } from "@/features/vrmViewer/viewerContext";
import { DEFAULT_VOICE_ENGINE, textsToScreenplay } from "@/features/messages/messages";
import { DEFAULT_PARAM } from "@/features/constants/koeiroParam";
import { speakCharacter } from "@/features/messages/speakCharacter";

export const SummarySpeaker = () => {
  const { agentRun } = useChatState();
  const dispatch = useChatDispatch();
  const { viewer } = useContext(ViewerContext);
  const lastSpokenRef = useRef<string | null>(null);

  useEffect(() => {
    const summary = agentRun?.summaryForSpeech?.trim() ?? "";
    if (!summary || !agentRun.finishedAt) {
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
      try {
        await speakCharacter.load(DEFAULT_VOICE_ENGINE);
        if (cancelled) {
          return;
        }

        const screenplays = textsToScreenplay(
          DEFAULT_VOICE_ENGINE,
          [summary],
          DEFAULT_PARAM
        );

        if (screenplays.length === 0) {
          return;
        }

        dispatch({ type: "SET_VOICE_ACTIVE", active: true });
        let remaining = screenplays.length;

        screenplays.forEach((screenplay) => {
          speakCharacter.speak(
            screenplay,
            viewer,
            "",
            undefined,
            () => {
              remaining -= 1;
              if (remaining === 0) {
                dispatch({ type: "SET_VOICE_ACTIVE", active: false });
              }
            }
          );
        });
      } catch (error) {
        console.warn("Не удалось озвучить summary:", error);
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
