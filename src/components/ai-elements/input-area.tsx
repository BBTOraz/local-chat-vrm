import * as React from "react";
import { ArrowUp, Paperclip, Mic, StopCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputAreaProps {
    input: string;
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    onVoiceStart?: () => void;
    onVoiceStop?: () => void;
    isVoiceActive?: boolean;
    className?: string;
}

export const InputArea = ({
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    onVoiceStart,
    onVoiceStop,
    isVoiceActive,
    className,
}: InputAreaProps) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [input]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (input.trim()) {
                const form = e.currentTarget.form;
                if (form) form.requestSubmit();
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn(
                "relative flex w-full items-end gap-2 rounded-xl border bg-background p-2 shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring",
                className
            )}
        >
            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Attach file"
            >
                <Paperclip className="h-5 w-5" />
            </button>

            <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Message..."
                className="flex-1 max-h-48 min-h-[20px] resize-none bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                rows={1}
            />

            {onVoiceStart && (
                <button
                    type="button"
                    onClick={isVoiceActive ? onVoiceStop : onVoiceStart}
                    className={cn(
                        "inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                        isVoiceActive
                            ? "bg-red-100 text-red-600 hover:bg-red-200"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                    aria-label={isVoiceActive ? "Stop recording" : "Start recording"}
                >
                    {isVoiceActive ? (
                        <StopCircle className="h-5 w-5" />
                    ) : (
                        <Mic className="h-5 w-5" />
                    )}
                </button>
            )}

            <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed",
                    isLoading && "animate-pulse"
                )}
                aria-label="Send message"
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </form>
    );
};
