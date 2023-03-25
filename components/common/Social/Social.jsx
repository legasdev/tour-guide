import styles from "./Social.module.less";

import { IconFacebook, IconInstagram } from "@components/ui/icons";

function Social() {
  return (
    <div className={styles.main}>
      <a href={"/"}>
        <IconFacebook />
      </a>
      <a href={"/"}>
        <IconInstagram />
      </a>
    </div>
  );
}

export default Social;
