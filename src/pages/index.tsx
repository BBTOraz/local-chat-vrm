import { Introduction } from "@/components/introduction";
import { MessageInputContainer } from "@/components/messageInputContainer";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ChatViewport } from "@/components/chat/ChatViewport";
import { ThinkingPanel } from "@/components/thinking/ThinkingPanel";
import { Meta } from "@/components/meta";
import VrmViewer from "@/components/vrmViewer";
import { SummarySpeaker } from "@/components/SummarySpeaker";
import { VoiceModeController } from "@/components/VoiceModeController";
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
      {/* VRM Viewer - фиксированный фон */}
      <div className="fixed inset-0 -z-10">
        <VrmViewer />
      </div>
      
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: 'url(/bg-c-enu.png)',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <Sidebar />
      <Introduction onStart={async () => undefined} />
      
      <main
        className={classNames(
          "relative flex min-h-[100svh] flex-col transition-[margin] duration-300 ease-in-out",
          isSidebarCollapsed ? "ml-[80px]" : "ml-[280px]"
        )}
      >
        {/* Контейнер чата с правильным скроллом */}
        <div className="relative z-10 ml-24 flex w-full max-w-4xl flex-1 flex-col gap-16 px-24 pb-[180px] pt-24">
          <ThinkingPanel />
          <ChatViewport />
        </div>
      </main>
      
      <MessageInputContainer />
      <SummarySpeaker />
      <VoiceModeController />
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
