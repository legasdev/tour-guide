import PropTypes from "prop-types";

import styles from "./DeviceInformation.module.less";

import { DeviceInformationHeader, DeviceInformationBlock } from "./core";

function DeviceInformation({ description, descriptionTranslate }) {
  return (
    <div className={styles.main}>
      <DeviceInformationHeader />
      <DeviceInformationBlock
        description={description}
        descriptionTranslate={descriptionTranslate}
      />
    </div>
  );
}

DeviceInformation.propTypes = {
  device: PropTypes.object,
};

export default DeviceInformation;
