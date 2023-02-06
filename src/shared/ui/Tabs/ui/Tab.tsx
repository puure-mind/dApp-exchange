import { SX } from "../../../utils/styles";
import styles from "./Tab.module.scss";
import classNames from "classnames/bind";

interface Props {
  sx?: SX;
  title: string;
  index: number;
}

const cx = classNames.bind(styles);

export const Tab = ({ sx = {}, title, index }: Props) => {
  const isActive = () => {
    return index === 1;
  };
  return (
    <div className={cx({ tab: true, active: isActive() })} style={sx}>
      <span>{title}</span>
    </div>
  );
};
