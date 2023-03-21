import styles from "./Header.module.less";

const logoImage = "images/logo/logo.svg";

import { HeaderNavigation } from "./core";

function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.wrapper}>
        <a href="/#">
          <img src={logoImage} alt="" />
        </a>
        <HeaderNavigation />
      </div>
    </header>
  );
}

export default Header;
