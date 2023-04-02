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
}) {
  const titleTranslateStyles = clsx(styles.title, styles.title__translate);

  function handleChange(event) {
    console.log(event);
  }

  return (
    <header className={styles.header}>
      {DEVICES.map((device) => (
        <label
          key={device.id}
          className={clsx(styles.select, styles[device.id])}
          onChange={handleChange}
        >
          <span className={styles.title}>{device.label}</span>
          <span className={titleTranslateStyles}>{device.labelTranslate}</span>
          <Select>
            {device.variants.map((deviceVariant) => (
              <Select.Option key={deviceVariant.id} value={deviceVariant.id}>
                {deviceVariant.label}
              </Select.Option>
            ))}
          </Select>
        </label>
      ))}

      {/*<label className={clsx(styles.select, styles.headphones)}>*/}
      {/*  <span className={styles.title}>Headphones</span>*/}
      {/*  <span className={titleTranslateStyles}>Слушалице</span>*/}
      {/*  <Select>*/}
      {/*    <Select.Option>Default device</Select.Option>*/}
      {/*    <Select.Option>Default 2 device</Select.Option>*/}
      {/*  </Select>*/}
      {/*</label>*/}

      {/*<label className={clsx(styles.select, styles.microphones)}>*/}
      {/*  <span className={styles.title}>Microphones</span>*/}
      {/*  <span className={titleTranslateStyles}>Микрофони</span>*/}
      {/*  <Select>*/}
      {/*    <Select.Option>Default device</Select.Option>*/}
      {/*    <Select.Option>Default 2 device</Select.Option>*/}
      {/*  </Select>*/}
      {/*</label>*/}

      {/*<label className={clsx(styles.select, styles.transmitter)}>*/}
      {/*  <span className={styles.title}>Guide Transmitter</span>*/}
      {/*  <span className={titleTranslateStyles}>Предајник водича</span>*/}
      {/*  <Select>*/}
      {/*    <Select.Option>Default device</Select.Option>*/}
      {/*    <Select.Option>Default 2 device</Select.Option>*/}
      {/*  </Select>*/}
      {/*</label>*/}

      {/*<label className={clsx(styles.select, styles.receiver)}>*/}
      {/*  <span className={styles.title}>User Receiver</span>*/}
      {/*  <span className={titleTranslateStyles}>Усер Рецеивер</span>*/}
      {/*  <Select>*/}
      {/*    <Select.Option>Default device</Select.Option>*/}
      {/*    <Select.Option>Default 2 device</Select.Option>*/}
      {/*  </Select>*/}
      {/*</label>*/}

      {/*<label className={clsx(styles.select, styles.case)}>*/}
      {/*  <span className={styles.title}>Case</span>*/}
      {/*  <span className={titleTranslateStyles}>Кеса</span>*/}
      {/*  <Select>*/}
      {/*    <Select.Option>Default device</Select.Option>*/}
      {/*    <Select.Option>Default 2 device</Select.Option>*/}
      {/*  </Select>*/}
      {/*</label>*/}
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
