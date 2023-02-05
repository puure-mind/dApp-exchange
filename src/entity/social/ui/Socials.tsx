import { icons } from "../config";
import styles from "./Socials.module.scss";

export const Socials = () => {
  return (
    <div className={styles.wrapper}>
      {icons.map((icon, index) => {
        return <img src={icon.img} alt={icon.title} key={index} />;
      })}
    </div>
  );
};
