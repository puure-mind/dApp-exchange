import classNames from "classnames/bind";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  sx?: Record<string, string>;
  onClick?: () => void;
}

const cx = classNames.bind(styles);

export const Button = ({ text, sx, onClick }: Props) => {
  return (
    <button style={sx} className={cx("btn", "shadow")} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
