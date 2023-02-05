export type FooterLink = {
  target: string;
  text: string;
};

export type FooterLinks = Array<FooterLink>;

export const links: FooterLinks = [
  {
    target: "/",
    text: "Privacy Policy",
  },
  {
    target: "/",
    text: "Terms & Conditions",
  },
  {
    target: "/",
    text: "Cookie Policy",
  },
];
