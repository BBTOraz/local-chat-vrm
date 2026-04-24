import {
  createContext,
  useReducer,
  useContext,
  useMemo,
  ReactNode,
} from "react";
import {
  AgentRun,
  ChatSettings,
  ChatState,
  ConversationGroupMap,
  ConversationMessage,
  ConversationSummary,
} from "@/types/chat";
import {
  DEFAULT_CHAT_SETTINGS,
  loadChatSettings,
  loadSidebarCollapsed,
  saveChatSettings,
  saveSidebarCollapsed,
} from "@/utils/storage";
import { groupConversationsByDate } from "@/utils/datetime";

type ChatAction =
  | {
      type: "SET_CONVERSATIONS";
      conversations: ConversationSummary[];
    }
  | {
      type: "SET_ACTIVE_CONVERSATION";
      conversationId?: string;
    }
  | {
      type: "SET_MESSAGES";
      messages: ConversationMessage[];
    }
  | {
      type: "APPEND_MESSAGE";
      message: ConversationMessage;
    }
  | {
      type: "SET_LOADING";
      value: boolean;
    }
  | {
      type: "SET_ERROR";
      error?: string;
    }
  | {
      type: "SET_AGENT_RUN";
      agentRun?: AgentRun;
    }
  | {
      type: "PATCH_AGENT_RUN";
      update: Partial<AgentRun>;
    }
  | {
      type: "SET_SETTINGS";
      settings: ChatSettings;
      persist?: boolean;
    }
  | {
      type: "SET_SIDEBAR_COLLAPSED";
      collapsed: boolean;
      persist?: boolean;
    }
  | {
      type: "SET_VOICE_ACTIVE";
      active: boolean;
    }
  | {
      type: "SET_CONTINUOUS_VOICE_MODE";
      active: boolean;
    };

const initialState = (): ChatState => {
  const settings = loadChatSettings();
  const isSidebarCollapsed = loadSidebarCollapsed();
  return {
    conversations: [],
    groupedConversationIds: emptyGroupMap(),
    messages: [],
    loading: false,
    settings,
    isSidebarCollapsed,
    isVoiceActive: false,
    isContinuousVoiceMode: false,
  };
};

const emptyGroupMap = (): ConversationGroupMap => ({
  Today: [],
  Yesterday: [],
  "This Week": [],
  Earlier: [],
});

const computeGroups = (conversations: ConversationSummary[]): ConversationGroupMap => {
  const grouped = groupConversationsByDate(conversations);
  return Object.entries(grouped).reduce<ConversationGroupMap>(
    (acc, [label, items]) => {
      const typedLabel = label as keyof ConversationGroupMap;
      acc[typedLabel] = items.map((conv) => conv.conversationId);
      return acc;
    },
    emptyGroupMap()
  );
};

const reducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case "SET_CONVERSATIONS": {
      const { conversations } = action;
      return {
        ...state,
        conversations,
        groupedConversationIds: computeGroups(conversations),
      };
    }
    case "SET_ACTIVE_CONVERSATION":
      return {
        ...state,
        activeConversationId: action.conversationId,
      };
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.messages,
      };
    case "APPEND_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.value,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "SET_AGENT_RUN":
      return {
        ...state,
        agentRun: action.agentRun,
      };
    case "PATCH_AGENT_RUN":
      return {
        ...state,
        agentRun: {
          ...state.agentRun,
          ...action.update,
        },
      };
    case "SET_SETTINGS": {
      const settings = action.settings;
      if (action.persist) {
        saveChatSettings(settings);
      }
      return {
        ...state,
        settings,
      };
    }
    case "SET_SIDEBAR_COLLAPSED":
      if (action.persist) {
        saveSidebarCollapsed(action.collapsed);
      }
      return {
        ...state,
        isSidebarCollapsed: action.collapsed,
      };
    case "SET_VOICE_ACTIVE":
      return {
        ...state,
        isVoiceActive: action.active,
      };
    case "SET_CONTINUOUS_VOICE_MODE":
      return {
        ...state,
        isContinuousVoiceMode: action.active,
      };
    default:
      return state;
  }
};

type ChatDispatch = (action: ChatAction) => void;

const ChatStateContext = createContext<ChatState | undefined>(undefined);
const ChatDispatchContext = createContext<ChatDispatch | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <ChatStateContext.Provider value={memoizedState}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

export const useChatState = () => {
  const context = useContext(ChatStateContext);
  if (!context) {
    throw new Error("useChatState must be used within ChatProvider");
  }
  return context;
};

export const useChatDispatch = () => {
  const context = useContext(ChatDispatchContext);
  if (!context) {
    throw new Error("useChatDispatch must be used within ChatProvider");
  }
  return context;
};

export const useChatStore = (): [ChatState, ChatDispatch] => {
  return [useChatState(), useChatDispatch()];
};

export const resetSettingsToDefault = (dispatch: ChatDispatch) => {
  dispatch({
    type: "SET_SETTINGS",
    settings: DEFAULT_CHAT_SETTINGS,
    persist: true,
  });
};
