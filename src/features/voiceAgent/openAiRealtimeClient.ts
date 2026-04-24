import { buildApiUrl } from "@/utils/config";

export type OpenAiRealtimeSession = {
  clientSecret: string;
  expiresAt?: number | null;
  model: string;
  voice: string;
};

export const OPENAI_REALTIME_CALLS_URL = "https://api.openai.com/v1/realtime/calls";

export async function createOpenAiRealtimeSession(): Promise<OpenAiRealtimeSession> {
  const response = await fetch(buildApiUrl("/api/voice/realtime/session"), {
    method: "POST",
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(
      details || `Не удалось создать OpenAI Realtime session: HTTP ${response.status}`
    );
  }

  const session = (await response.json()) as Partial<OpenAiRealtimeSession>;
  if (!session.clientSecret) {
    throw new Error("Backend не вернул ephemeral OpenAI Realtime clientSecret");
  }

  return {
    clientSecret: session.clientSecret,
    expiresAt: session.expiresAt ?? null,
    model: session.model ?? "gpt-realtime",
    voice: session.voice ?? "marin",
  };
}
