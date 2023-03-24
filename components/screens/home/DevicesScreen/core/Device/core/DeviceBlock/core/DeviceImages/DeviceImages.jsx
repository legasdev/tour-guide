import PropTypes from "prop-types";

import styles from "./DeviceImages.module.less";

function DeviceImages({ imagesList }) {
  return (
    <div className={styles.main}>
      <img className={styles.image} src={imagesList[0]} alt="" />
    </div>
  );
}

DeviceImages.propType = {
  imagesList: PropTypes.array,
};

export default DeviceImages;
