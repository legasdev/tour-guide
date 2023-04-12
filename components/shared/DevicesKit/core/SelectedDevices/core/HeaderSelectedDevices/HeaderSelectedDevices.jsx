import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./HeaderSelectedDevices.module.less";

import { DEVICES } from "@constants/devices";

import { checkIncludeDeviceById } from "./utils";

function HeaderSelectedDevices({
  headphones,
  microphones,
  transmitter,
  receiver,
  equipmentCase,
}) {
  const titleTranslateStyles = clsx(styles.title, styles.title__translate);

  return (
    <header className={styles.header}>
      {DEVICES.filter(({ id }) =>
        checkIncludeDeviceById(
          id,
          headphones,
          microphones,
          transmitter,
          receiver,
          equipmentCase
        )
      ).map(({ id, label, labelTranslate }) => (
        <label key={id} className={clsx(styles.select, styles[id])}>
          <span className={styles.title}>{label}</span>
          <span className={titleTranslateStyles}>{labelTranslate}</span>
        </label>
      ))}
    </header>
  );
}

HeaderSelectedDevices.propTypes = {
  headphones: PropTypes.string,
  microphones: PropTypes.string,
  transmitter: PropTypes.string,
  receiver: PropTypes.string,
  equipmentCase: PropTypes.string,
};

export default HeaderSelectedDevices;
