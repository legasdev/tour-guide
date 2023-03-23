import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./DeviceHeader.module.less";

function DeviceHeader({
  label,
  labelTranslate,
  variantsRef,
  deviceModel,
  handleDeviceSelectChanged,
}) {
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
        <select value={deviceModel} onChange={handleDeviceSelectChanged}>
          {variantsRef.current.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

DeviceHeader.propTypes = {
  label: PropTypes.string,
  labelTranslate: PropTypes.string,
  variantsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  deviceModel: PropTypes.string,
  handleDeviceSelectChanged: PropTypes.func,
};

export default DeviceHeader;
