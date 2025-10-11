import { useMemo, useState } from "react";
import type { ConversationGroupLabel } from "@/types/chat";
import { useChatState, useChatDispatch } from "@/state/chatStore";
import { classNames } from "@/utils/classNames";
import { formatTimeForDisplay } from "@/utils/datetime";
import { useChatActions } from "@/hooks/useChatActions";

const GROUP_LABELS: ConversationGroupLabel[] = [
  "Today",
  "Yesterday",
  "This Week",
  "Earlier",
];

const createEmptyGroups = () => ({
  Today: [] as string[],
  Yesterday: [] as string[],
  "This Week": [] as string[],
  Earlier: [] as string[],
});

export const Sidebar = () => {
  const dispatch = useChatDispatch();
  const state = useChatState();
  const [searchTerm, setSearchTerm] = useState("");
  const { createConversation, selectConversation } = useChatActions();

  const filteredGroupIds = useMemo(() => {
    if (!searchTerm.trim()) {
      return state.groupedConversationIds;
    }

    const lowered = searchTerm.trim().toLowerCase();
    const matches = state.conversations.filter((conversation) =>
      conversation.title.toLowerCase().includes(lowered)
    );
    const ids = new Set(matches.map((conv) => conv.conversationId));

    return Object.entries(state.groupedConversationIds).reduce(
      (acc, [groupName, groupIds]) => {
        const typedGroup = groupName as ConversationGroupLabel;
        acc[typedGroup] = groupIds.filter((id) => ids.has(id));
        return acc;
      },
      createEmptyGroups()
    );
  }, [searchTerm, state.conversations, state.groupedConversationIds]);

  const widthClass = state.isSidebarCollapsed ? "w-[64px]" : "w-[280px]";

  const handleToggleSidebar = () => {
    dispatch({
      type: "SET_SIDEBAR_COLLAPSED",
      collapsed: !state.isSidebarCollapsed,
      persist: true,
    });
  };

  const handleCreateConversation = () => {
    createConversation();
  };

  const handleSelectConversation = (conversationId: string) => {
    void selectConversation(conversationId);
  };

  return (
    <aside
      className={classNames(
        "fixed left-0 top-0 h-[100svh] bg-surface1 border-r border-surface1-hover transition-[width] duration-300 ease-in-out z-30",
        widthClass
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-8 px-16 py-16">
          <button
            type="button"
            className="rounded-12 bg-secondary px-12 py-8 text-white text-sm font-bold hover:bg-secondary-hover active:bg-secondary-press"
            onClick={handleCreateConversation}
            title="Start a new chat"
          >
            Новая
          </button>
          {!state.isSidebarCollapsed && (
            <div className="text-lg font-bold text-secondary">Orchestra</div>
          )}
          <button
            type="button"
            className="ml-auto rounded-full bg-transparent p-8 text-primary hover:bg-surface1-hover"
            aria-label="Toggle sidebar"
            onClick={handleToggleSidebar}
          >
            {state.isSidebarCollapsed ? "»" : "«"}
          </button>
        </div>

        {!state.isSidebarCollapsed && (
          <div className="px-16 pb-16">
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Поиск..."
              className="w-full rounded-12 border border-surface1-hover bg-surface0 px-12 py-8 text-sm focus:border-secondary focus:outline-none"
            />
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-8 pb-16">
          {GROUP_LABELS.map((label) => {
            const groupIds = filteredGroupIds[label] ?? [];
            if (groupIds.length === 0) {
              return null;
            }
            return (
              <div key={label} className="mb-16">
                {!state.isSidebarCollapsed && (
                  <div className="px-8 pb-8 text-xs font-semibold uppercase tracking-widest text-primary/60">
                    {label}
                  </div>
                )}
                <div className="space-y-4">
                  {groupIds.map((id) => {
                    const conversation = state.conversations.find(
                      (entry) => entry.conversationId === id
                    );
                    if (!conversation) {
                      return null;
                    }
                    const isActive =
                      state.activeConversationId === conversation.conversationId;

                    return (
                      <button
                        key={conversation.conversationId}
                        type="button"
                        onClick={() =>
                          handleSelectConversation(conversation.conversationId)
                        }
                        className={classNames(
                          "w-full rounded-12 text-left px-12 py-10 transition-colors duration-150",
                          isActive
                            ? "bg-secondary text-white"
                            : "bg-surface0 text-primary hover:bg-surface0-hover"
                        )}
                      >
                        {!state.isSidebarCollapsed ? (
                          <div>
                            <div className="text-sm font-semibold">
                              {conversation.title || "Без названия"}
                            </div>
                            <div className="text-xs text-primary/60">
                              {formatTimeForDisplay(conversation.updatedAt)}
                            </div>
                          </div>
                        ) : (
                          <span role="img" aria-label="chat">
                            💬
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {GROUP_LABELS.every(
            (label) => (filteredGroupIds[label]?.length ?? 0) === 0
          ) && (
            <div className="px-12 py-12 text-sm text-primary/60">
              История чатов пока пуста.
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
