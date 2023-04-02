import styles from "./Header.module.less";

import { Navigation } from "@components/common";
import { useState } from "react";

const logoImage = "images/logo/logo.svg";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleMobileMenuClick() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <header className={styles.main}>
        <div className={styles.wrapper}>
          <a href="/#">
            <img src={logoImage} alt="" />
          </a>
          <Navigation
            withMobile
            isMobileMenuOpen={isMobileMenuOpen}
            handleMobileMenuClick={handleMobileMenuClick}
          />
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className={styles.menu}>
          <Navigation handleMobileLinkMenuClick={handleMobileMenuClick} />
        </div>
      )}
    </>
  );
}

export default Header;
