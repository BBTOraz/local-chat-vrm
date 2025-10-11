import { useState, useCallback } from "react";
import { Link } from "./link";

type Props = {
  onStart: () => Promise<void> | void;
};
export const Introduction = ({ onStart }: Props) => {
  const [opened, setOpened] = useState(true);
  const [loading, setLoading] = useState(false);

  const onClickStartButton = useCallback(async () => {
    setLoading(true);
    await onStart?.();
    setLoading(false);
    setOpened(false);
  }, [onStart]);

  return opened ? (
    <div className="absolute z-40 w-full h-full px-24 py-40  bg-black/30 font-M_PLUS_2">
      <div className="mx-auto my-auto max-w-3xl max-h-full p-24 overflow-auto bg-white rounded-16">
        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary ">
            About This Application
          </div>
          <div>
            Enjoy chatting with a 3D character directly in your web browser.
            Responses are generated instantly by mirroring what you type, so you
            can focus on testing layouts and interactions without external AI
            services or API keys.
          </div>
        </div>
        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            Technology
          </div>
          <div>
            This application leverages the @pixiv/three-vrm library for 3D model
            rendering and manipulation. Voice synthesis and external LLM
            providers have been removed for a fully local, deterministic demo.
          </div>
        </div>

        <div className="my-24">
          <div className="my-8 font-bold typography-20 text-secondary">
            Important Notes
          </div>
          <div>
            Please refrain from intentionally prompting discriminatory, violent,
            or disparaging remarks towards specific individuals. When replacing
            characters using VRM models, please adhere to the terms of use for
            each model.
          </div>
        </div>
        <div className="my-24">
          <button
            onClick={onClickStartButton}
            disabled={loading}
            className="font-bold bg-secondary hover:bg-secondary-hover active:bg-secondary-press disabled:bg-secondary-disabled text-white px-24 py-8 rounded-oval"
          >
            Start Chatting
          </button>
        </div>
        <div className="my-16">
          Need the original project? Visit the
          <Link
            url="https://github.com/pixiv/local-chat-vrm"
            label=" GitHub repository"
          />
          .
        </div>
      </div>
    </div>
  ) : null;
};
