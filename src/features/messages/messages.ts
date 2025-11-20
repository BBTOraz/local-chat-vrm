import { VRMExpressionPresetName } from "@pixiv/three-vrm";

// ChatGPT API
export type Message = {
  role: "assistant" | "system" | "user";
  content: string;
};

export const voiceEngines = ["OpenAI TTS"] as const;

export type VoiceEngine = (typeof voiceEngines)[number];

export const DEFAULT_VOICE_ENGINE: VoiceEngine = "OpenAI TTS";

export type OpenAITtsTalk = {
  voiceEngine: "OpenAI TTS";
  voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
  message: string;
};

export type Talk = OpenAITtsTalk;

const emotions = ["neutral", "happy", "angry", "sad", "relaxed"] as const;
type EmotionType = (typeof emotions)[number] & VRMExpressionPresetName;

/**
 * 発話文と音声の感情と、モデルの感情表現がセットになった物
 */
export type Screenplay = {
  expression: EmotionType;
  talk: Talk;
};

export const splitSentence = (text: string): string[] => {
  const splitMessages = text.split(/(?<=[。．！？\n])/g);
  return splitMessages.filter((msg) => msg !== "");
};

export const textsToScreenplay = (
  voiceEngine: VoiceEngine,
  texts: string[]
): Screenplay[] => {
  console.log("📝 [Screenplay] textsToScreenplay called", {
    voiceEngine,
    textsCount: texts.length,
    texts: texts.map(t => t.substring(0, 30) + "...")
  });
  
  const screenplays: Screenplay[] = [];
  let prevExpression = "neutral";
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];

    const match = text.match(/\[(.*?)\]/);

    const tag = (match && match[1]) || prevExpression;

    const message = text.replace(/\[(.*?)\]/g, "");

    let expression = prevExpression;
    if (emotions.includes(tag as any)) {
      expression = tag;
      prevExpression = tag;
    }

    screenplays.push({
      expression: expression as EmotionType,
      talk: {
        voiceEngine,
        voice: "nova", // Default voice
        message: message,
      },
    });
  }

  console.log("✅ [Screenplay] Generated", screenplays.length, "screenplays");
  return screenplays;
};
