import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";

export interface MessageProps {
    role: "user" | "assistant" | "system" | "data";
    content: string;
    className?: string;
    children?: React.ReactNode;
}

export const Message = ({ role, content, className, children }: MessageProps) => {
    const isUser = role === "user";

    return (
        <div
            className={cn(
                "flex w-full gap-4 p-4 transition-colors hover:bg-muted/50",
                isUser ? "flex-row-reverse" : "flex-row",
                className
            )}
        >
            <div
                className={cn(
                    "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full border shadow-sm",
                    isUser ? "bg-background" : "bg-primary text-primary-foreground"
                )}
            >
                {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
            </div>

            <div className={cn("flex-1 space-y-2 overflow-hidden", isUser && "text-right")}>
                <div className="prose prose-neutral dark:prose-invert max-w-none break-words">
                    {/* We wrap markdown in a div to avoid p inside p issues if content has paragraphs */}
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>
                {children}
            </div>
        </div>
    );
};
