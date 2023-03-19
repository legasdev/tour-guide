import Link from "next/link";

import styles from "./Header.module.less";

const logoImage = "images/logo/logo.svg";

import { HeaderNavigation } from "./core";

function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.wrapper}>
        <Link href="/">
          <img src={logoImage} alt="" />
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
}

export default Header;
