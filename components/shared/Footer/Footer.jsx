import styles from "./Footer.module.less";

const logoImage = "images/logo/logo.svg";

import { Navigation, Social } from "@components/common";

function Footer() {
  return (
    <footer className={styles.main}>
      <Navigation />
      <Social />
      <a href="/#">
        <img src={logoImage} alt="" />
      </a>
      <span className={styles.copyright}>
        Tour guide system rental - Montenegro. Изнајмљивање система водича -
        Црна Гора. © 2023 All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
