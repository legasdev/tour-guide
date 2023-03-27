import styles from "./SelectedDevices.module.less";
import { Select } from "@components/ui/interactions";

function SelectedDevices() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <label className={styles.select}>
          <span>Headphones</span>
          <span>Слушалице</span>
          <Select>
            <Select.Option>Default device</Select.Option>
            <Select.Option>Default 2 device</Select.Option>
          </Select>
        </label>

        <label className={styles.select}>
          <span>Microphones</span>
          <span>Микрофони</span>
          <Select>
            <Select.Option>Default device</Select.Option>
            <Select.Option>Default 2 device</Select.Option>
          </Select>
        </label>

        <label className={styles.select}>
          <span>Guide Transmitter</span>
          <span>Предајник водича</span>
          <Select>
            <Select.Option>Default device</Select.Option>
            <Select.Option>Default 2 device</Select.Option>
          </Select>
        </label>

        <label className={styles.select}>
          <span>User Receiver</span>
          <span>Усер Рецеивер</span>
          <Select>
            <Select.Option>Default device</Select.Option>
            <Select.Option>Default 2 device</Select.Option>
          </Select>
        </label>

        <label className={styles.select}>
          <span>Case</span>
          <span>Кеса</span>
          <Select>
            <Select.Option>Default device</Select.Option>
            <Select.Option>Default 2 device</Select.Option>
          </Select>
        </label>
      </header>
      <div></div>
    </div>
  );
}

export default SelectedDevices;
