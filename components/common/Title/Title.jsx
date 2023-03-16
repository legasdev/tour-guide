import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Title.module.less";

import {
  CLASS_NAME_BY_SIZE,
  TITLE_BY_SIZE,
  TITLE_SIZES,
  TRANSLATE_CLASS_NAME_BY_SIZE,
} from "./constants";

function Title({ translate, size = TITLE_SIZES.h1, className, children }) {
  const TitleComponent = TITLE_BY_SIZE[size];

  const titleStyles = clsx(styles.main, className, CLASS_NAME_BY_SIZE[size]);
  const titleTranslateStyles = clsx(
    styles.main,
    TRANSLATE_CLASS_NAME_BY_SIZE[size]
  );

  if (!translate) {
    return <TitleComponent className={titleStyles}>{children}</TitleComponent>;
  }

  return (
    <div className={styles.wrapper}>
      <TitleComponent className={titleStyles}>{children}</TitleComponent>
      <span className={titleTranslateStyles}>{translate}</span>
    </div>
  );
}

Title.sizes = TITLE_SIZES;

Title.propTypes = {
  size: PropTypes.symbol,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Title;
