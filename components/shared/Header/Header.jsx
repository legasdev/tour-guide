import styles from "./Header.module.less";

import { Navigation } from "@components/common";

const logoImage = "images/logo/logo.svg";

function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.wrapper}>
        <a href="/#">
          <img src={logoImage} alt="" />
        </a>
        <Navigation withMobile />
      </div>
    </header>
  );
}

export default Header;
