import { ChatSettings } from "@/types/chat";

const STORAGE_KEYS = {
  settings: "orchestraSettings",
  sidebar: "orchestraSidebarCollapsed",
} as const;

export const DEFAULT_CHAT_SETTINGS: ChatSettings = {
  mode: "agents",
  solverProvider: "groq",
  verifierProvider: "groq",
  visibility: "conversation",
  showThinking: true,
  debug: false,
};

const isBrowser = () => typeof window !== "undefined";

export const loadChatSettings = (): ChatSettings => {
  if (!isBrowser()) {
    return DEFAULT_CHAT_SETTINGS;
  }

  const raw = window.localStorage.getItem(STORAGE_KEYS.settings);
  if (!raw) {
    return DEFAULT_CHAT_SETTINGS;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ChatSettings>;
    return {
      ...DEFAULT_CHAT_SETTINGS,
      ...parsed,
    };
  } catch {
    window.localStorage.removeItem(STORAGE_KEYS.settings);
    return DEFAULT_CHAT_SETTINGS;
  }
};

export const saveChatSettings = (settings: ChatSettings) => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    STORAGE_KEYS.settings,
    JSON.stringify(settings)
  );
};

export const loadSidebarCollapsed = (): boolean => {
  if (!isBrowser()) {
    return false;
  }
  const raw = window.localStorage.getItem(STORAGE_KEYS.sidebar);
  if (!raw) {
    return false;
  }
  return raw === "true";
};

export const saveSidebarCollapsed = (collapsed: boolean) => {
  if (!isBrowser()) {
    return;
  }
  window.localStorage.setItem(
    STORAGE_KEYS.sidebar,
    collapsed ? "true" : "false"
  );
};
