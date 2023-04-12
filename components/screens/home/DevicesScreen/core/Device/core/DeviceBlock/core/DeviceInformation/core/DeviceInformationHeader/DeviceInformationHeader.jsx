import clsx from "clsx";

import styles from "./DeviceInformationHeader.module.less";

function DeviceInformationHeader() {
  const translateLabelStyles = clsx(styles.label, styles.label__translate);
  return (
    <header className={styles.main}>
      <span className={styles.label}>Description / Opis</span>
    </header>
  );
}

export default DeviceInformationHeader;
