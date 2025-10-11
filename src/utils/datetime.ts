import { ConversationSummary } from "@/types/chat";

type ConversationGroups = {
  Today: ConversationSummary[];
  Yesterday: ConversationSummary[];
  "This Week": ConversationSummary[];
  Earlier: ConversationSummary[];
};

const MS_IN_DAY = 24 * 60 * 60 * 1000;

const floorToDay = (date: Date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

export const groupConversationsByDate = (
  conversations: ConversationSummary[]
): ConversationGroups => {
  const now = new Date();
  const today = floorToDay(now).getTime();
  const yesterday = today - MS_IN_DAY;
  const weekAgo = today - MS_IN_DAY * 7;

  return conversations.reduce<ConversationGroups>(
    (groups, conv) => {
      const createdAtDate = conv.createdAt
        ? new Date(conv.createdAt)
        : null;

      if (!createdAtDate || Number.isNaN(createdAtDate.getTime())) {
        groups.Earlier.push(conv);
        return groups;
      }

      const createdAtDay = floorToDay(createdAtDate).getTime();

      if (createdAtDay === today) {
        groups.Today.push(conv);
      } else if (createdAtDay === yesterday) {
        groups.Yesterday.push(conv);
      } else if (createdAtDay >= weekAgo) {
        groups["This Week"].push(conv);
      } else {
        groups.Earlier.push(conv);
      }

      return groups;
    },
    { Today: [], Yesterday: [], "This Week": [], Earlier: [] }
  );
};

export const formatDuration = (durationMs: number): string => {
  if (durationMs <= 0) {
    return "0s";
  }

  const totalSeconds = Math.floor(durationMs / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }

  return `${seconds}s`;
};

export const formatTimeForDisplay = (isoTimestamp?: string): string => {
  if (!isoTimestamp) {
    return "—";
  }
  const date = new Date(isoTimestamp);
  if (Number.isNaN(date.getTime())) {
    return "—";
  }
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
