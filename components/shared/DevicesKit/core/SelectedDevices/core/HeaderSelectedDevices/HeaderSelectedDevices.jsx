import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./HeaderSelectedDevices.module.less";

import { DEVICES } from "@constants/devices";
import { Select } from "@components/ui/interactions";

function HeaderSelectedDevices({
  headphones,
  microphones,
  transmitter,
  receiver,
  equipmentCase,
  onChange,
}) {
  const titleTranslateStyles = clsx(styles.title, styles.title__translate);

  const selectedDevices = {
    headphones,
    microphones,
    transmitter,
    receiver,
    case: equipmentCase,
  };

  function handleDeviceSelectChange(event) {
    const value = event.target.value;
    const device = value.split("_")[0];
    onChange(device, value);
  }

  return (
    <header className={styles.header}>
      {DEVICES.map((device) => (
        <label
          key={device.id}
          className={clsx(styles.select, styles[device.id])}
        >
          <span className={styles.title}>{device.label}</span>
          <span className={titleTranslateStyles}>{device.labelTranslate}</span>
          <Select
            onChange={handleDeviceSelectChange}
            value={selectedDevices[device.id]}
          >
            {device.variants.map((deviceVariant) => (
              <Select.Option key={deviceVariant.id} value={deviceVariant.id}>
                {deviceVariant.label}
              </Select.Option>
            ))}
          </Select>
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
  onChange: PropTypes.func,
};

export default HeaderSelectedDevices;
