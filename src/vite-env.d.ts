/// <reference types="vite/client" />

interface ViteTypeOptions {}

interface ImportMetaEnv {
  readonly VITE_CHARACTER_SETTINGS_DISABLED: boolean;
  readonly VITE_OPENAI_API_KEY?: string;
  readonly VITE_OPENAI_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
