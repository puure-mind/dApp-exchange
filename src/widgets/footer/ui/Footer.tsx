import { AppLogo } from "../../../shared/ui/Logo";
import styles from "./Footer.module.scss";
import { FooterLinks } from "../../../entity/footerLinks";
import { Socials } from "../../../entity/social";
import { Copyright } from "../../../entity/copyrightText";
import { useMediaQuery } from "react-responsive";
import global from "../../../app/App.module.scss";
import { ReactNode } from "react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <AdaptiveLayout
          Logo={<AppLogo />}
          Links={<FooterLinks />}
          Socials={<Socials />}
        />

        <div style={{ marginTop: "33px" }}>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

interface AdaptiveLayoutProps {
  Logo: ReactNode;
  Links: ReactNode;
  Socials: ReactNode;
}

const AdaptiveLayout = ({ Logo, Links, Socials }: AdaptiveLayoutProps) => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${global.md})`,
  });

  const styleWrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  };

  if (isDesktop) {
    return (
      <div style={styleWrapper}>
        {Logo}
        {Links}
        {Socials}
      </div>
    );
  }
  return (
    <>
      <div style={{ marginTop: "50px" }}>{Logo}</div>
      <div style={{ marginTop: "60px" }}>{Links}</div>
      <div style={{ marginTop: "33px" }}>{Socials}</div>
    </>
  );
};
