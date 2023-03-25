import clsx from "clsx";

import styles from "./DeviceInformationHeader.module.less";

import { DEVICE_INFORMATION_TABS as TABS } from "../../constants";

function DeviceInformationHeader({
  deviceId,
  selectedInformation = TABS[0].id,
  setSelectInformation,
}) {
  function handleChangeSelection(event) {
    setSelectInformation(event.target.value);
  }

  return (
    <header className={styles.main}>
      {TABS.map(({ id, label, labelTranslate }) => {
        const checked = selectedInformation === id;
        const labelStyles = clsx(
          styles.label,
          checked && styles.label__checked
        );
        const translateLabelStyles = clsx(
          styles.label,
          styles.label__translate,
          checked && styles.label__checked
        );

        return (
          <label key={id}>
            <input
              type="radio"
              name={`${deviceId}-${id}`}
              value={id}
              checked={checked}
              onChange={handleChangeSelection}
              className={styles.input}
            />
            <span className={labelStyles}>{label}</span>
            <span className={translateLabelStyles}>{labelTranslate}</span>
          </label>
        );
      })}
    </header>
  );
}

export default DeviceInformationHeader;
