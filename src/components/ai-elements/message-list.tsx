import { useEffect, useRef } from "react";
import { Message } from "./message";
import { ThinkingProcess } from "./thinking-process";
import { ConversationMessage } from "@/types/chat";
import { cn } from "@/lib/utils";

interface MessageListProps {
    messages: ConversationMessage[];
    className?: string;
}

export const MessageList = ({ messages, className }: MessageListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Auto-scroll to bottom when messages change
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div
            ref={scrollRef}
            className={cn("flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth", className)}
        >
            {messages.map((msg, index) => (
                <Message
                    key={msg.messageId || index}
                    role={msg.role.toLowerCase() as "user" | "assistant"}
                    content={msg.content}
                />
            ))}

            {/* Thinking Process Indicator */}
            <ThinkingProcess />

            {/* Invisible element to scroll to */}
            <div ref={bottomRef} className="h-px w-full" />
        </div>
    );
};
