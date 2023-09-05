import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";

import styles from "./Article.module.less";

import { Title } from "@components/common";

import { ArticleParagraph } from "./core";

function Article({ image, title, titleTranslate, reverse = false, children }) {
  const blockStyles = clsx(styles.block, reverse && styles.block__reverse);

  return (
    <article className={styles.main}>
      <div className={blockStyles}>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={image} alt="" />
        </div>
        <div className={styles.titleBlock}>
          <Title
            size={Title.sizes.h3}
            translate={titleTranslate}
            className={styles.title}
          >
            {title}
          </Title>
        </div>
      </div>
      <div className={styles.block}>{children}</div>
    </article>
  );
}

Article.Paragraph = ArticleParagraph;

Article.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  titleTranslate: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Article;
