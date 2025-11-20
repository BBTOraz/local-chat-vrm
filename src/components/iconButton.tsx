import { KnownIconType } from "@charcoal-ui/icons";
import { ButtonHTMLAttributes } from "react";
import styles from "./iconButton.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconName: keyof KnownIconType;
  isProcessing: boolean;
  label?: string;
};

export const IconButton = ({
  iconName,
  isProcessing,
  label,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`${styles.iconButton} ${label ? styles.withLabel : ''} ${rest.className || ''}`}
    >
      {isProcessing ? (
        <pixiv-icon name={"24/Dot"} scale="1"></pixiv-icon>
      ) : (
        <pixiv-icon name={iconName} scale="1"></pixiv-icon>
      )}
      {label && <div className={styles.label}>{label}</div>}
    </button>
  );
};
