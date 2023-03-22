import clsx from "clsx";

import styles from "./DeviceHeader.module.less";

function DeviceHeader({ label, labelTranslate }) {
  const labelTranslateStyles = clsx(
    styles.header_label,
    styles.header_label__translate
  );

  return (
    <header className={styles.header}>
      <div className={styles.header_labels}>
        <span className={styles.header_label}>{label}</span>
        <span className={labelTranslateStyles}>{labelTranslate}</span>
      </div>
      <div className={styles.header_select}>
        <select>
          <option value="default">Default model</option>
          <option value="black">Black edition</option>
        </select>
      </div>
    </header>
  );
}

export default DeviceHeader;
