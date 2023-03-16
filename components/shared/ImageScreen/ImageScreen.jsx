import PropTypes from "prop-types";

import styles from "./ImageScreen.module.less";
import { Title } from "@components/common";

function ImageScreen({ image, children }) {
  return (
    <div className={styles.main}>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${image})` }}
      >
        <Title
          size={Title.sizes.h2}
          translate="Сакупите свој систем за боље искуство."
          className={styles.title}
        >
          Collect Your System to a Better Experience.
        </Title>
      </header>
      {children}
    </div>
  );
}

ImageScreen.propTypes = {
  image: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ImageScreen;
