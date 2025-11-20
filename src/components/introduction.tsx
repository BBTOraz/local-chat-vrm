import { useState, useCallback } from "react";
import { Link } from "./link";
import styles from "./introduction.module.css";

type Props = {
  onStart: () => Promise<void> | void;
};
export const Introduction = ({ onStart }: Props) => {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClickStartButton = useCallback(async () => {
    setLoading(true);
    await onStart?.();
    setLoading(false);
    setOpened(false);
  }, [onStart]);

  return opened ? (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            About This Application
          </div>
          <div className={styles.sectionText}>
            Enjoy chatting with a 3D character directly in your web browser.
            Responses are generated instantly by mirroring what you type, so you
            can focus on testing layouts and interactions without external AI
            services or API keys.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Technology
          </div>
          <div className={styles.sectionText}>
            This application leverages the @pixiv/three-vrm library for 3D model
            rendering and manipulation. Voice synthesis and external LLM
            providers have been removed for a fully local, deterministic demo.
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Important Notes
          </div>
          <div className={styles.sectionText}>
            Please refrain from intentionally prompting discriminatory, violent,
            or disparaging remarks towards specific individuals. When replacing
            characters using VRM models, please adhere to the terms of use for
            each model.
          </div>
        </div>
        <div className={styles.section}>
          <button
            onClick={onClickStartButton}
            disabled={loading}
            className={styles.startButton}
          >
            Start Chatting
          </button>
        </div>
        <div className={styles.footer}>
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
