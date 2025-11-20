import { useEffect, useMemo, useState } from "react";
import { useChatState } from "@/state/chatStore";
import { formatDuration } from "@/utils/datetime";
import type { AgentIteration, VerifierState } from "@/types/chat";
import styles from "./ThinkingPanel.module.css";

const TIMER_REFRESH_MS = 800;

const VERIFIER_STATUS_LABEL: Record<VerifierState["status"], string> = {
  idle: "Ожидает проверки",
  pending: "Проверяет...",
  approved: "Проверено ✅",
  rejected: "Нужны правки ❌",
};

const VERIFIER_ICON: Record<VerifierState["status"], string> = {
  idle: "⌛",
  pending: "🔍",
  approved: "✅",
  rejected: "❌",
};

export const ThinkingPanel = () => {
  const { agentRun, settings } = useChatState();
  const [isOpen, setIsOpen] = useState(false);
  const [timeNow, setTimeNow] = useState(() => Date.now());

  useEffect(() => {
    if (!agentRun) {
      setIsOpen(false);
      return;
    }

    // Автоматически раскрываем, когда стартует новая сессия.
    setIsOpen(true);
  }, [agentRun?.startedAt]);

  useEffect(() => {
    if (!agentRun || agentRun.finishedAt) {
      return;
    }

    const timer = window.setInterval(() => {
      setTimeNow(Date.now());
    }, TIMER_REFRESH_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [agentRun]);

  const duration = useMemo(() => {
    if (!agentRun) {
      return "0s";
    }
    const end = agentRun.finishedAt ?? timeNow;
    return formatDuration(end - agentRun.startedAt);
  }, [agentRun, timeNow]);

  if (!agentRun || settings.mode !== "agents" || !settings.showThinking) {
    return null;
  }

  const hasIterations = agentRun.iterations.length > 0;

  return (
    <section className={styles.panel}>
      <button
        id="thinking-toggle"
        aria-expanded={isOpen}
        aria-controls="thinking-panel"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.toggleButton}
      >
        <span className={styles.toggleContent}>
          <span className={styles.emoji}>🤖</span>
          <span className={styles.toggleText}>
            Думал{" "}
            <span id="thinking-duration" className={styles.duration}>
              {duration}
            </span>
          </span>
        </span>
        <span
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      <div
        id="thinking-panel"
        hidden={!isOpen}
        className={styles.content}
      >
        {!hasIterations && (
          <div className={styles.emptyState}>
            Ожидание событий от агента...
          </div>
        )}

        {agentRun.iterations.map((iteration, index) => (
          <IterationBlock
            key={iteration.id}
            iteration={iteration}
            isLast={index === agentRun.iterations.length - 1}
          />
        ))}

        {agentRun.error && (
          <div className="mt-16 rounded-xl border border-red-400 bg-red-50 px-16 py-12 text-sm text-red-600">
            🚨 Ошибка: {agentRun.error}
          </div>
        )}
      </div>
    </section>
  );
};

const IterationBlock = ({
  iteration,
  isLast,
}: {
  iteration: AgentIteration;
  isLast: boolean;
}) => {
  const { solver, verifier } = iteration;

  return (
    <div className={styles.iterationBlock}>
      <div className={styles.iterationSection}>
        <div className={styles.sectionHeader}>
          <span role="img" aria-hidden="true">
            💭
          </span>
          Solver
        </div>
        <div className={styles.draftBox}>
          {solver.draft ? (
            solver.draft
          ) : (
            <span className={styles.draftPlaceholder}>Генерирует черновик...</span>
          )}
        </div>
        <SolverFooter solverStreaming={solver.streaming} />
        <SolverContextList contexts={solver.contexts} />
        <SolverTools tools={solver.tools} />
      </div>

      <div className={styles.iterationSection}>
        <div className={styles.sectionHeader}>
          <span role="img" aria-hidden="true">
            {VERIFIER_ICON[verifier.status]}
          </span>
          Verifier
        </div>
        <VerifierDetails verifier={verifier} />
      </div>

      {!isLast && (
        <div className={styles.divider}>
          <hr />
        </div>
      )}
    </div>
  );
};

const SolverFooter = ({ solverStreaming }: { solverStreaming: boolean }) => {
  return (
    <div className={styles.solverFooter}>
      {solverStreaming ? "Печатает..." : "✅ Черновик готов"}
    </div>
  );
};

const SolverContextList = ({ contexts }: { contexts: string[] }) => {
  if (!contexts.length) {
    return null;
  }

  return (
    <details className={styles.contextDetails}>
      <summary className={styles.contextSummary}>
        Источники (RAG)
      </summary>
      <ul className={styles.contextList}>
        {contexts.map((context, index) => (
          <li key={`${context}-${index}`}>{context}</li>
        ))}
      </ul>
    </details>
  );
};

const SolverTools = ({
  tools,
}: {
  tools: AgentIteration["solver"]["tools"];
}) => {
  if (!tools.length) {
    return null;
  }

  return (
    <div className={styles.toolsContainer}>
      <div className={styles.toolsHeader}>
        Инструменты
      </div>
      <ul className={styles.toolsList}>
        {tools.map((tool, index) => (
          <li key={`${tool.name}-${index}`} className={styles.toolItem}>
            <div className={styles.toolHeader}>
              <span className={styles.toolName}>{tool.name}</span>
              <span className={styles.toolStatus}>
                {tool.status}
              </span>
            </div>
            {tool.output && (
              <div className={styles.toolOutput}>
                {tool.output}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const VerifierDetails = ({ verifier }: { verifier: VerifierState }) => {
  switch (verifier.status) {
    case "idle":
      return (
        <div className={styles.verifierIdle}>
          {VERIFIER_STATUS_LABEL[verifier.status]}
        </div>
      );
    case "pending":
      return (
        <div className={styles.verifierPending}>
          <span className={styles.pulseIcon}>⏳</span>
          {VERIFIER_STATUS_LABEL[verifier.status]}
        </div>
      );
    case "approved":
      return (
        <div className={styles.verifierApproved}>
          <div className={styles.verifierApprovedTitle}>
            {VERIFIER_STATUS_LABEL[verifier.status]}
          </div>
          {verifier.message && <p>{verifier.message}</p>}
        </div>
      );
    case "rejected":
    default:
      return (
        <div className={styles.verifierRejected}>
          <div className={styles.verifierRejectedTitle}>
            {VERIFIER_STATUS_LABEL[verifier.status]}
          </div>
          {verifier.requiredChanges && (
            <p className={styles.verifierChanges}>{verifier.requiredChanges}</p>
          )}
          {verifier.reasons.length > 0 && (
            <ul className={styles.verifierReasons}>
              {verifier.reasons.map((reason, index) => (
                <li key={`${reason}-${index}`}>{reason}</li>
              ))}
            </ul>
          )}
        </div>
      );
  }
};
