import { useEffect, useMemo, useState } from "react";
import { useChatState } from "@/state/chatStore";
import { classNames } from "@/utils/classNames";
import { formatDuration } from "@/utils/datetime";
import type { AgentIteration, VerifierState } from "@/types/chat";

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
    <section className="rounded-16 border border-surface1-hover bg-white shadow-md">
      <button
        id="thinking-toggle"
        aria-expanded={isOpen}
        aria-controls="thinking-panel"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-12 rounded-16 px-24 py-20 text-left text-sm font-semibold text-primary hover:bg-surface0 focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        <span className="flex items-center gap-8">
          <span className="text-lg">🤖</span>
          <span>
            Думал на протяжении{" "}
            <span id="thinking-duration" className="text-secondary">
              {duration}
            </span>
          </span>
        </span>
        <span
          className={classNames(
            "transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      <div
        id="thinking-panel"
        hidden={!isOpen}
        className="max-h-[420px] overflow-y-auto border-t border-surface1-hover px-24 py-24"
      >
        {!hasIterations && (
          <div className="text-sm text-primary/60">
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
          <div className="mt-16 rounded-12 border border-red-400 bg-red-50 px-16 py-12 text-sm text-red-600">
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
    <div className="space-y-16 text-sm text-primary">
      <div>
        <div className="flex items-center gap-8 text-base font-semibold text-secondary">
          <span role="img" aria-hidden="true">
            💭
          </span>
          Solver
        </div>
        <div className="mt-8 rounded-12 border border-surface1-hover bg-surface0 px-16 py-16 text-sm font-mono leading-relaxed text-primary">
          {solver.draft ? (
            solver.draft
          ) : (
            <span className="text-primary/50">Генерирует черновик...</span>
          )}
        </div>
        <SolverFooter solverStreaming={solver.streaming} />
        <SolverContextList contexts={solver.contexts} />
        <SolverTools tools={solver.tools} />
      </div>

      <div>
        <div className="flex items-center gap-8 text-base font-semibold text-secondary">
          <span role="img" aria-hidden="true">
            {VERIFIER_ICON[verifier.status]}
          </span>
          Verifier
        </div>
        <VerifierDetails verifier={verifier} />
      </div>

      {!isLast && (
        <div className="pt-8">
          <hr className="border-dashed border-surface1-hover" />
        </div>
      )}
    </div>
  );
};

const SolverFooter = ({ solverStreaming }: { solverStreaming: boolean }) => {
  return (
    <div className="mt-8 text-xs font-medium uppercase tracking-widest text-primary/60">
      {solverStreaming ? "Печатает..." : "✅ Черновик готов"}
    </div>
  );
};

const SolverContextList = ({ contexts }: { contexts: string[] }) => {
  if (!contexts.length) {
    return null;
  }

  return (
    <details className="mt-12 rounded-12 border border-surface1-hover bg-white px-16 py-12">
      <summary className="cursor-pointer text-xs font-semibold text-secondary">
        Источники (RAG)
      </summary>
      <ul className="mt-8 list-disc space-y-4 pl-16 text-xs text-primary/80">
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
    <div className="mt-12 space-y-8 rounded-12 border border-surface1-hover bg-white px-16 py-12">
      <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
        Инструменты
      </div>
      <ul className="space-y-6 text-xs text-primary/80">
        {tools.map((tool, index) => (
          <li key={`${tool.name}-${index}`} className="flex flex-col gap-2">
            <div className="flex items-center gap-8">
              <span className="font-semibold">{tool.name}</span>
              <span className="text-[11px] uppercase tracking-widest text-primary/50">
                {tool.status}
              </span>
            </div>
            {tool.output && (
              <div className="rounded-8 bg-surface0 px-12 py-8 text-[13px] text-primary">
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
        <div className="mt-8 text-sm text-primary/60">
          {VERIFIER_STATUS_LABEL[verifier.status]}
        </div>
      );
    case "pending":
      return (
        <div className="mt-8 flex items-center gap-8 text-sm text-primary/70">
          <span className="animate-pulse">⏳</span>
          {VERIFIER_STATUS_LABEL[verifier.status]}
        </div>
      );
    case "approved":
      return (
        <div className="mt-8 space-y-4 rounded-12 border border-emerald-400 bg-emerald-50 px-16 py-12 text-sm text-emerald-600">
          <div className="font-semibold">
            {VERIFIER_STATUS_LABEL[verifier.status]}
          </div>
          {verifier.message && <p>{verifier.message}</p>}
        </div>
      );
    case "rejected":
    default:
      return (
        <div className="mt-8 space-y-6 rounded-12 border border-amber-500 bg-amber-50 px-16 py-12 text-sm text-amber-700">
          <div className="font-semibold">
            {VERIFIER_STATUS_LABEL[verifier.status]}
          </div>
          {verifier.requiredChanges && (
            <p className="text-primary">{verifier.requiredChanges}</p>
          )}
          {verifier.reasons.length > 0 && (
            <ul className="list-disc space-y-2 pl-16 text-primary">
              {verifier.reasons.map((reason, index) => (
                <li key={`${reason}-${index}`}>{reason}</li>
              ))}
            </ul>
          )}
        </div>
      );
  }
};
