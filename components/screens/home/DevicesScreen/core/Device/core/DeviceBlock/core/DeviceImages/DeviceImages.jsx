import PropTypes from "prop-types";
import Image from "next/image";

import styles from "./DeviceImages.module.less";

function DeviceImages({ imagesList }) {
  return (
    <div className={styles.main}>
      <div>
        <Image className={styles.image} width={558} height={302} src={imagesList[0]} alt="" />
      </div>
    </div>
  );
}

DeviceImages.propType = {
  imagesList: PropTypes.array,
};

export default DeviceImages;
