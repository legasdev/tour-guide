import PropTypes from "prop-types";

import styles from "./ImageScreenHeader.module.less";

import { Title } from "@components/common";

function ImageScreenHeader({ title, translate, image }) {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Title
        size={Title.sizes.h2}
        color={Title.colors.white}
        translate={translate}
        className={styles.title}
      >
        {title}
      </Title>
    </header>
  );
}

ImageScreenHeader.propTypes = {
  title: PropTypes.string,
  translate: PropTypes.string,
  image: PropTypes.string,
};

export default ImageScreenHeader;
