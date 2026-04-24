import { useEffect, useMemo, useState } from "react";
import { useChatState } from "@/state/chatStore";
import { formatDuration } from "@/utils/datetime";
import type { AgentIteration, VerifierState } from "@/types/chat";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, XCircle, Loader2, BrainCircuit, Search, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const TIMER_REFRESH_MS = 800;

const VERIFIER_STATUS_LABEL: Record<VerifierState["status"], string> = {
    idle: "Waiting for verification",
    pending: "Verifying...",
    approved: "Verified",
    rejected: "Needs changes",
};

export const ThinkingProcess = () => {
    const { agentRun, settings } = useChatState();
    const [isOpen, setIsOpen] = useState(false);
    const [timeNow, setTimeNow] = useState(() => Date.now());

    useEffect(() => {
        if (!agentRun) {
            setIsOpen(false);
            return;
        }
        setIsOpen(true);
    }, [agentRun?.startedAt]);

    useEffect(() => {
        if (!agentRun || agentRun.finishedAt) return;
        const timer = window.setInterval(() => setTimeNow(Date.now()), TIMER_REFRESH_MS);
        return () => window.clearInterval(timer);
    }, [agentRun]);

    const duration = useMemo(() => {
        if (!agentRun) return "0s";
        const end = agentRun.finishedAt ?? timeNow;
        return formatDuration(end - agentRun.startedAt);
    }, [agentRun, timeNow]);

    if (!agentRun || settings.mode !== "agents" || !settings.showThinking) {
        return null;
    }

    const hasIterations = agentRun.iterations.length > 0;

    return (
        <div className="w-full max-w-3xl mx-auto my-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
                <BrainCircuit className="h-4 w-4" />
                <span>Thinking Process</span>
                <span className="text-xs text-muted-foreground/70">({duration})</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="mt-2 space-y-4 rounded-xl border bg-card p-4 shadow-sm text-sm">
                            {!hasIterations && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    <span>Initializing agent...</span>
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
                                <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-destructive">
                                    🚨 Error: {agentRun.error}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const IterationBlock = ({ iteration, isLast }: { iteration: AgentIteration; isLast: boolean }) => {
    const { solver, verifier } = iteration;

    return (
        <div className={cn("space-y-4", !isLast && "border-b pb-4")}>
            {/* Solver Section */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 font-medium text-primary">
                    <BrainCircuit className="h-4 w-4" />
                    <span>Solver</span>
                </div>

                <div className="rounded-lg bg-muted/50 p-3 font-mono text-xs text-muted-foreground">
                    {solver.draft || <span className="italic opacity-50">Generating draft...</span>}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    {solver.streaming ? (
                        <>
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>Typing...</span>
                        </>
                    ) : (
                        <>
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span>Draft complete</span>
                        </>
                    )}
                </div>

                {solver.contexts.length > 0 && (
                    <details className="group">
                        <summary className="flex cursor-pointer items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                            <Search className="h-3 w-3" />
                            <span>Sources ({solver.contexts.length})</span>
                            <ChevronDown className="h-3 w-3 transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="mt-2 space-y-1 pl-4 text-xs text-muted-foreground">
                            {solver.contexts.map((ctx, i) => (
                                <li key={i} className="list-disc">{ctx}</li>
                            ))}
                        </ul>
                    </details>
                )}

                {solver.tools.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                            <Wrench className="h-3 w-3" />
                            <span>Tools</span>
                        </div>
                        <div className="space-y-2 pl-2">
                            {solver.tools.map((tool, i) => (
                                <div key={i} className="rounded border bg-background p-2 text-xs">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">{tool.name}</span>
                                        <span className="uppercase opacity-70">{tool.status}</span>
                                    </div>
                                    {tool.output && (
                                        <div className="mt-1 border-t pt-1 font-mono text-muted-foreground">
                                            {tool.output}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Verifier Section */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 font-medium text-primary">
                    {verifier.status === 'pending' && <Loader2 className="h-4 w-4 animate-spin" />}
                    {verifier.status === 'approved' && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                    {verifier.status === 'rejected' && <XCircle className="h-4 w-4 text-amber-500" />}
                    {verifier.status === 'idle' && <div className="h-4 w-4" />}
                    <span>Verifier</span>
                </div>

                <VerifierDetails verifier={verifier} />
            </div>
        </div>
    );
};

const VerifierDetails = ({ verifier }: { verifier: VerifierState }) => {
    switch (verifier.status) {
        case "idle":
            return <div className="text-xs text-muted-foreground">{VERIFIER_STATUS_LABEL.idle}</div>;
        case "pending":
            return <div className="text-xs text-muted-foreground">{VERIFIER_STATUS_LABEL.pending}</div>;
        case "approved":
            return (
                <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-xs text-green-800 dark:border-green-900 dark:bg-green-900/20 dark:text-green-300">
                    <div className="font-semibold mb-1">{VERIFIER_STATUS_LABEL.approved}</div>
                    {verifier.message && <p>{verifier.message}</p>}
                </div>
            );
        case "rejected":
            return (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-300">
                    <div className="font-semibold mb-1">{VERIFIER_STATUS_LABEL.rejected}</div>
                    {verifier.requiredChanges && <p className="mb-2">{verifier.requiredChanges}</p>}
                    {verifier.reasons.length > 0 && (
                        <ul className="list-disc pl-4 space-y-1">
                            {verifier.reasons.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    )}
                </div>
            );
        default:
            return null;
    }
};
