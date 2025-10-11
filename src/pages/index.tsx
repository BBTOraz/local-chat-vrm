import { Introduction } from "@/components/introduction";
import { MessageInputContainer } from "@/components/messageInputContainer";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ChatViewport } from "@/components/chat/ChatViewport";
import { ThinkingPanel } from "@/components/thinking/ThinkingPanel";
import { Meta } from "@/components/meta";
import VrmViewer from "@/components/vrmViewer";
import { SummarySpeaker } from "@/components/SummarySpeaker";
import { ChatProvider, useChatState } from "@/state/chatStore";
import { classNames } from "@/utils/classNames";
import { useChatActions } from "@/hooks/useChatActions";
import { useEffect } from "react";

const Layout = () => {
  const { isSidebarCollapsed } = useChatState();
  const { refreshConversations } = useChatActions();

  useEffect(() => {
    void refreshConversations();
  }, [refreshConversations]);

  return (
    <div className="relative min-h-[100svh] overflow-hidden font-M_PLUS_2 text-primary">
      <Meta />
      <VrmViewer />
      <Sidebar />
      <Introduction onStart={async () => undefined} />
      <main
        className={classNames(
          "relative flex min-h-[100svh] flex-col transition-[margin] duration-300 ease-in-out",
          isSidebarCollapsed ? "ml-[64px]" : "ml-[280px]"
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-white/40" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col gap-24 px-24 pb-64 pt-40">
          <ThinkingPanel />
          <ChatViewport />
        </div>
      </main>
      <MessageInputContainer />
      <SummarySpeaker />
    </div>
  );
};

export default function Home() {
  return (
    <ChatProvider>
      <Layout />
    </ChatProvider>
  );
}
