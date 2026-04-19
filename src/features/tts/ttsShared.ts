/**
 * Module-level singletons for shared TTS state.
 *
 * Because `useChatActions` is called by multiple components, using `useRef`
 * inside the hook gives each caller an isolated copy. These singletons ensure
 * that VoiceModeController (which writes the viewer callback) and
 * sendAgentMessage (which reads it) share the same object.
 */
import type { StreamingTtsQueue } from "./StreamingTtsQueue";

/** The active streaming TTS queue. Null when no agent run is in progress. */
export const streamingTtsQueueRef: { current: StreamingTtsQueue | null } = {
  current: null,
};

/**
 * Plays one ArrayBuffer audio chunk through the VRM viewer.
 * Populated by VoiceModeController once the viewer is ready.
 * Falls back to plain HTML Audio when null.
 */
export const onSpeakChunkRef: {
  current: ((audio: ArrayBuffer) => Promise<void>) | null;
} = { current: null };

/**
 * Called when the TTS queue drains (all audio played).
 * Populated by VoiceModeController so it can advance the voice agent
 * state machine out of the speaking state and resume listening.
 */
export const voiceAgentCallbackRef: { current: (() => void) | null } = {
  current: null,
};

/**
 * Called when the first TTS audio chunk starts playing.
 * Populated by VoiceModeController so the voice agent state machine
 * transitions to the speaking state at the correct moment (actual audio
 * start) rather than on FINAL_ANSWER receipt.
 */
export const voiceAgentStartCallbackRef: { current: (() => void) | null } = {
  current: null,
};
