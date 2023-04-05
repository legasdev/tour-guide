import styles from "./Footer.module.less";

const logoImage = "images/logo/logo.svg";

import { Navigation, Social } from "@components/common";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.main}>
      <Navigation />
      <Social />
      <a href="/#">
        <img src={logoImage} alt="" />
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
