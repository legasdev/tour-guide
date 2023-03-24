import PropTypes from "prop-types";

import styles from "./DeviceBlock.module.less";

import { DeviceImages, DeviceInformation } from "./core";

function DeviceBlock({ deviceVariant }) {
  return (
    <div className={styles.main}>
      <DeviceImages imagesList={deviceVariant.images} />
      <DeviceInformation device={deviceVariant} />
    </div>
  );
}

DeviceBlock.propTypes = {
  deviceVariant: PropTypes.object,
};

export default DeviceBlock;
