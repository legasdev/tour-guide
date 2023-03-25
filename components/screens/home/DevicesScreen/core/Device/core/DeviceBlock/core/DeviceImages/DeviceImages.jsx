import PropTypes from "prop-types";

import styles from "./DeviceImages.module.less";

function DeviceImages({ imagesList }) {
  return (
    <div className={styles.main}>
      <div>
        <img className={styles.image} src={imagesList[0]} alt="" />
      </div>
    </div>
  );
}

DeviceImages.propType = {
  imagesList: PropTypes.array,
};

export default DeviceImages;
