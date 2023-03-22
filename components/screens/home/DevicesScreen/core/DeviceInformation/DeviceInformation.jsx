import styles from "./DeviceInformation.module.less";

import { DeviceHeader } from "./core";

function DeviceInformation({
  id,
  image,
  label,
  labelTranslate,
  description,
  descriptionTranslate,
}) {
  return (
    <div className={styles.main}>
      <DeviceHeader label={label} labelTranslate={labelTranslate} />
    </div>
  );
}

export default DeviceInformation;
