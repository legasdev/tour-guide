import { useState } from "react";
import clsx from "clsx";
import Image from "next/image"

import styles from "./Header.module.less";

import { Navigation } from "@components/common";
import { CONTACTS } from "@constants/contacts";

import logoImage from "@images/logo/logo.svg";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleMobileMenuClick() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const topMenuWrapperStyles = clsx(
    styles.wrapper,
    styles.wrapper_topBottomPadding
  );

  return (
    <>
      <header className={styles.main}>
        <div className={styles.topMenu}>
          <div className={topMenuWrapperStyles}>
            <a
              className={styles.topMenu__link}
              href={`tel:${CONTACTS.telephone.value}`}
            >
              {CONTACTS.telephone.label} (WhatsApp, Viber)
            </a>
            <span className={styles.topMenu__description}>
              Monteniko d.o.o. Iznajmljivanje sistema vodiča - Crna Gora.
            </span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <a href="/#" aria-label="Open home page">
            <Image src={logoImage} alt="" />
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
