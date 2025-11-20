import styles from "./link.module.css";

export const Link = ({ url, label }: { url: string; label: string }) => {
  return (
    <a
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {label}
    </a>
  );
};
