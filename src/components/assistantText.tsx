import styles from "./assistantText.module.css";

export const AssistantText = ({ message }: { message: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.header}>
            CHARACTER
          </div>
          <div className={styles.content}>
            <div className={styles.message}>
              <div>
                {message.replace(/\[([a-zA-Z]*?)\]/g, "")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
