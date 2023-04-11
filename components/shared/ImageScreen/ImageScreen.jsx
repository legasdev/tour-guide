import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./ImageScreen.module.less";

import { ImageScreenHeader } from "./core";

function ImageScreen({ id, title, translate, image, className, children }) {
  const imageScreenStyles = clsx(styles.main, className);

  return (
    <div className={imageScreenStyles} id={id}>
      <ImageScreenHeader title={title} translate={translate} image={image} />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}

ImageScreen.propTypes = {
  title: PropTypes.string,
  translate: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ImageScreen;
