export type ConversationVisibility = "hint" | "conversation" | "trace";

export type AgentMode = "stream" | "blocking";

export type ConversationRole = "USER" | "ASSISTANT";

export type AgentStage =
  | "SOLVER_STARTED"
  | "SOLVER_TOKEN"
  | "DRAFT_READY"
  | "RAG_CONTEXT"
  | "TOOL_SELECTION"
  | "TOOL_SELECTION_SKIPPED"
  | "TOOL_EXECUTION"
  | "VERIFICATION_STARTED"
  | "VERIFICATION_PROGRESS"
  | "VERIFICATION_FEEDBACK"
  | "FINAL_ANSWER"
  | "ERROR";

export type AgentVisibilityLevel = "TRACE" | "CONVERSATION" | "HINT";

export type AgentEvent<TStage extends AgentStage = AgentStage> = {
  stage: TStage;
  visibility: AgentVisibilityLevel;
  title?: string;
  message?: string;
  data?: unknown;
};

export type ConversationSummary = {
  conversationId: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ConversationGroupLabel =
  | "Today"
  | "Yesterday"
  | "This Week"
  | "Earlier";

export type ConversationGroupMap = Record<ConversationGroupLabel, string[]>;

export type ConversationMessage = {
  messageId: string;
  conversationId: string;
  role: ConversationRole;
  content: string;
  timestamp: string;
};

export type SolverState = {
  draft: string;
  streaming: boolean;
  contexts: string[];
  tools: Array<{
    name: string;
    status: "pending" | "running" | "completed" | "skipped" | "failed";
    output?: string;
  }>;
  lastUpdatedAt?: number;
};

export type VerifierState = {
  status: "idle" | "pending" | "approved" | "rejected";
  message?: string;
  reasons: string[];
  requiredChanges?: string;
  lastUpdatedAt?: number;
};

export type AgentIteration = {
  id: string;
  index: number;
  solver: SolverState;
  verifier: VerifierState;
  startedAt: number;
  finishedAt?: number;
};

export type AgentRun = {
  startedAt: number;
  finishedAt?: number;
  iterations: AgentIteration[];
  finalAnswer?: string;
  summaryForSpeech?: string;
  error?: string;
};

export type ChatSettings = {
  mode: "simple" | "agents";
  solverProvider: string;
  verifierProvider: string;
  visibility: ConversationVisibility;
  showThinking: boolean;
  debug: boolean;
};

export type ChatState = {
  conversations: ConversationSummary[];
  groupedConversationIds: ConversationGroupMap;
  activeConversationId?: string;
  messages: ConversationMessage[];
  agentRun?: AgentRun;
  loading: boolean;
  error?: string;
  settings: ChatSettings;
  isSidebarCollapsed: boolean;
  isVoiceActive: boolean;
};
