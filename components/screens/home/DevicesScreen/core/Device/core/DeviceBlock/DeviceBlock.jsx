import PropTypes from "prop-types";

import styles from "./DeviceBlock.module.less";

import { DeviceImages, DeviceInformation } from "./core";

function DeviceBlock({ images, description, descriptionTranslate }) {
  return (
    <div className={styles.main}>
      <DeviceImages imagesList={images[0]} />
      <DeviceInformation
        description={description}
        descriptionTranslate={descriptionTranslate}
      />
    </div>
  );
}

DeviceBlock.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  descriptionTranslate: PropTypes.string,
};

export default DeviceBlock;
