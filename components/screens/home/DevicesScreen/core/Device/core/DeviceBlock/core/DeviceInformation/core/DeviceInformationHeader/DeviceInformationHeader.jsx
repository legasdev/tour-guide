import clsx from "clsx";

import styles from "./DeviceInformationHeader.module.less";

import { KEY_CODES } from "@constants/keyCodes";

import { DEVICE_INFORMATION_TABS as TABS } from "../../constants";

function DeviceInformationHeader({
  deviceId,
  selectedInformation = TABS[0].id,
  setSelectInformation,
}) {
  function handleChangeSelection(event) {
    setSelectInformation(event.target.value);
  }

  function handleKeyDown(event) {
    if (
      event.keyCode !== KEY_CODES.space.keyCode &&
      event.keyCode !== KEY_CODES.enter.keyCode
    ) {
      return;
    }

    event.preventDefault();
    setSelectInformation(event.target.dataset.value);
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
          <label
            key={id}
            tabIndex="0"
            data-value={id}
            onKeyDown={handleKeyDown}
          >
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
