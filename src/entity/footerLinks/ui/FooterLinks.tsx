import { links } from "../config";
import { Link } from "../../../shared/ui/Link";
import styles from "./FooterLinks.module.scss";
import { SX } from "../../../shared/utils/styles";

interface Props {
  sx?: SX;
}

export const FooterLinks = ({ sx }: Props) => {
  return (
    <ul className={styles.list} style={sx}>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link target="/">{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};
