# Realtime Voice Runtime

## Decision

The continuous voice mode now uses OpenAI Realtime over WebRTC instead of the older staged path:

```text
browser mic -> backend ephemeral session -> OpenAI Realtime WebRTC -> remote audio stream
```

This avoids exposing `OPENAI_API_KEY` in the browser. The frontend receives only a short-lived Realtime client secret from `orchestra`.

## Why This Path

OpenAI Realtime supports browser/mobile ephemeral client secrets through `POST /v1/realtime/client_secrets` and WebRTC SDP negotiation through `POST https://api.openai.com/v1/realtime/calls`.

Official references:
- https://developers.openai.com/api/docs/guides/realtime
- https://developers.openai.com/api/docs/guides/realtime-transcription
- https://platform.openai.com/api-keys

The configured session uses:
- model: `gpt-realtime`
- voice: `marin`
- input noise reduction: `near_field`
- turn detection: `server_vad`
- browser capture constraints: `echoCancellation`, `noiseSuppression`, `autoGainControl`

## Required Environment

Backend, in `C:\Users\Tao\Desktop\Project\orchestra\.env.orchestra`:

```properties
OPENAI_API_KEY=sk-proj-your-real-key
OPENAI_REALTIME_MODEL=gpt-realtime
OPENAI_REALTIME_VOICE=marin
OPENAI_REALTIME_NOISE_REDUCTION=near_field
OPENAI_REALTIME_TURN_DETECTION=server_vad
```

Frontend, in `C:\Users\Tao\Desktop\Project\local-chat-vrm\.env`:

```properties
VITE_API_BASE=http://localhost:8181
```

Do not put the normal OpenAI API key into `VITE_OPENAI_API_KEY` for this runtime.

## Run

Backend:

```powershell
cd C:\Users\Tao\Desktop\Project\orchestra
Get-Content .env.orchestra | Where-Object { $_ -and -not $_.StartsWith('#') } | ForEach-Object {
  $name, $value = $_ -split '=', 2
  [Environment]::SetEnvironmentVariable($name, $value, 'Process')
}
.\mvnw.cmd spring-boot:run
```

Frontend:

```powershell
cd C:\Users\Tao\Desktop\Project\local-chat-vrm
npm install
npm run dev
```

Then open the app, expand the input options, and enable `Непрерывный диалог (hands-free)`.

## Expected Behavior

The browser asks for microphone access, establishes one WebRTC session, and lets OpenAI Realtime decide speech turns. The user can interrupt an active response with `Прервать`, or close the session with `Выключить голос`.

## Current Limits

The Realtime audio response plays through a browser audio element. VRM lip-sync integration for this audio stream is not implemented in this checkpoint.
