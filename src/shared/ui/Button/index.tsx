import classNames from "classnames/bind";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  sx?: Record<string, string>;
}

const cx = classNames.bind(styles);

export const Button = ({ text, sx }: Props) => {
  return (
    <button style={sx} className={cx("btn", "shadow")}>
      <span>{text}</span>
    </button>
  );
};
