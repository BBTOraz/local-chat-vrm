import styles from "./githubLink.module.css";

export const GitHubLink = () => {
  return (
    <div className={styles.githubLink}>
      <a
        draggable={false}
        href="https://github.com/pixiv/local-chat-vrm"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.link}
      >
        <div className={styles.container}>
          <img
            alt="https://github.com/pixiv/local-chat-vrm"
            height={24}
            width={24}
            src={"./github-mark-white.svg"}
            className={styles.icon}
          />
          <div className={styles.text}>Fork me</div>
        </div>
      </a>
    </div>
  );
};
