import { useMemo, useState } from "react";
import type { ConversationGroupLabel } from "@/types/chat";
import { useChatState, useChatDispatch } from "@/state/chatStore";
import { formatTimeForDisplay } from "@/utils/datetime";
import { useChatActions } from "@/hooks/useChatActions";
import styles from "./Sidebar.module.css";

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
      className={`${styles.sidebar} ${state.isSidebarCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded}`}
    >
      <div className={styles.sidebarContent}>
        {/* Заголовок с логотипом и названием */}
        <div className={styles.header}>
          <img 
            src="/enu_bg.png" 
            alt="ENU Logo" 
            className={styles.logo}
          />
          {!state.isSidebarCollapsed && (
            <div className={styles.title}>E.N.U.R.A.</div>
          )}
          <button
            type="button"
            className={styles.toggleButton}
            aria-label="Toggle sidebar"
            onClick={handleToggleSidebar}
          >
            {state.isSidebarCollapsed ? "»" : "«"}
          </button>
        </div>

        {/* Кнопка "Новая" на отдельной строке */}
        <div className={styles.newButtonContainer}>
          <button
            type="button"
            className={styles.newButton}
            onClick={handleCreateConversation}
            title="Start a new chat"
          >
            {state.isSidebarCollapsed ? (
              <img 
                src="/enu_bg.png" 
                alt="New Chat" 
                className={styles.newButtonIcon}
              />
            ) : (
              "Новая"
            )}
          </button>
        </div>

        {/* Поиск */}
        {!state.isSidebarCollapsed && (
          <div className={styles.searchContainer}>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Поиск..."
              className={styles.searchInput}
            />
          </div>
        )}

        <div className={styles.conversationsList}>
          {GROUP_LABELS.map((label) => {
            const groupIds = filteredGroupIds[label] ?? [];
            if (groupIds.length === 0) {
              return null;
            }
            return (
              <div key={label} className={styles.group}>
                {!state.isSidebarCollapsed && (
                  <div className={styles.groupTitle}>
                    {label}
                  </div>
                )}
                <div>
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
                        className={`${styles.conversationItem} ${isActive ? styles.conversationItemActive : ''}`}
                      >
                        {!state.isSidebarCollapsed ? (
                          <div className={styles.conversationContent}>
                            <div className={styles.conversationTitle}>
                              {conversation.title || "Без названия"}
                            </div>
                            <div className={styles.conversationTime}>
                              {formatTimeForDisplay(conversation.updatedAt)}
                            </div>
                          </div>
                        ) : (
                          <span role="img" aria-label="chat" className={styles.conversationIcon}>
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
            <div className={styles.emptyState}>
              <p className={styles.emptyStateText}>
                История чатов пока пуста.
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
