import clsx from "clsx";

import styles from "./HeaderSelectedDevices.module.less";

import { Select } from "@components/ui/interactions";

function HeaderSelectedDevices() {
  const titleTranslateStyles = clsx(styles.title, styles.title__translate);

  return (
    <header className={styles.header}>
      <label className={clsx(styles.select, styles.headphones)}>
        <span className={styles.title}>Headphones</span>
        <span className={titleTranslateStyles}>Слушалице</span>
        <Select>
          <Select.Option>Default device</Select.Option>
          <Select.Option>Default 2 device</Select.Option>
        </Select>
      </label>

      <label className={clsx(styles.select, styles.microphones)}>
        <span className={styles.title}>Microphones</span>
        <span className={titleTranslateStyles}>Микрофони</span>
        <Select>
          <Select.Option>Default device</Select.Option>
          <Select.Option>Default 2 device</Select.Option>
        </Select>
      </label>

      <label className={clsx(styles.select, styles.transmitter)}>
        <span className={styles.title}>Guide Transmitter</span>
        <span className={titleTranslateStyles}>Предајник водича</span>
        <Select>
          <Select.Option>Default device</Select.Option>
          <Select.Option>Default 2 device</Select.Option>
        </Select>
      </label>

      <label className={clsx(styles.select, styles.receiver)}>
        <span className={styles.title}>User Receiver</span>
        <span className={titleTranslateStyles}>Усер Рецеивер</span>
        <Select>
          <Select.Option>Default device</Select.Option>
          <Select.Option>Default 2 device</Select.Option>
        </Select>
      </label>

      <label className={clsx(styles.select, styles.case)}>
        <span className={styles.title}>Case</span>
        <span className={titleTranslateStyles}>Кеса</span>
        <Select>
          <Select.Option>Default device</Select.Option>
          <Select.Option>Default 2 device</Select.Option>
        </Select>
      </label>
    </header>
  );
}

export default HeaderSelectedDevices;
