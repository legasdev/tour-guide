import PropTypes from "prop-types";

import styles from "./ImageScreenHeader.module.less";

import { Title } from "@components/common";
import Image from "next/image";

function ImageScreenHeader({ title, translate, image }) {
  return (
    <div
      className={styles.header}
    >
      <Title
        size={Title.sizes.h2}
        color={Title.colors.white}
        translate={translate}
        className={styles.title}
      >
        {title}
      </Title>
      <Image className={styles.image} src={image} alt="" fill />
    </div>
  );
}

ImageScreenHeader.propTypes = {
  title: PropTypes.string,
  translate: PropTypes.string,
  image: PropTypes.string,
};

export default ImageScreenHeader;
