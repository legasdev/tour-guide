import Image from "next/image";

import styles from "./Footer.module.less";

import logoImage from "@images/logo/logo.svg";

import { Navigation, Social } from "@components/common";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.main}>
      <Navigation />
      <Social />
      <a href="/#" aria-label="Go to Home Page">
        <Image src={logoImage} alt="" />
      </a>
      <span className={styles.copyright}>
        Monteniko d.o.o Tour guide system rental - Montenegro.
        <br />
        Monteniko d.o.o. Iznajmljivanje sistema vodiča - Crna Gora.
        <br />© {currentYear} All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
