import PropTypes from "prop-types";

import styles from "./ImageScreen.module.less";

import { ImageScreenHeader } from "./core";

function ImageScreen({ id, title, translate, image, children }) {
  return (
    <div className={styles.main} id={id}>
      <ImageScreenHeader title={title} translate={translate} image={image} />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}

ImageScreen.propTypes = {
  title: PropTypes.string,
  translate: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ImageScreen;
