import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./PageBlock.module.less";

import { Title } from "@components/common";

import { PAGE_BLOCK_THEMES, CLASS_NAME_BY_THEME } from "./constants";

function PageBlock({
  id,
  theme = PAGE_BLOCK_THEMES.default,
  title,
  titleTranslate,
  className,
  children,
}) {
  const pageBlockStyles = clsx(
    styles.main,
    className,
    CLASS_NAME_BY_THEME[theme]
  );
  return (
    <section className={pageBlockStyles} id={id}>
      <Title
        size={Title.sizes.h2}
        translate={titleTranslate}
        className={styles.title}
      >
        {title}
      </Title>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
}

PageBlock.themes = PAGE_BLOCK_THEMES;

PageBlock.propTypes = {
  title: PropTypes.string.isRequired,
  titleTranslate: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default PageBlock;
