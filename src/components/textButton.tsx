import { ButtonHTMLAttributes } from "react";
import styles from "./textButton.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const TextButton = (props: Props) => {
  return (
    <button
      {...props}
      className={`${styles.textButton} ${props.className || ''}`}
    >
      {props.children}
    </button>
  );
};
