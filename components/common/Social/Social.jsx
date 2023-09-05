import styles from "./Social.module.less";

import { IconFacebook, IconInstagram } from "@components/ui/icons";

function Social() {
  return (
    <div className={styles.main}>
      <a
        href="https://instagram.com/monteregion"
        target="_blank"
        rel="noopener"
        aria-label="Link to Instagram account"
      >
        <IconInstagram />
      </a>
    </div>
  );
}

export default Social;
