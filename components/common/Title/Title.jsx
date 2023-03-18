import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Title.module.less";

import {
  CLASS_NAME_BY_SIZE,
  TITLE_BY_SIZE,
  TITLE_SIZES,
  TITLE_COLORS,
  CLASS_NAME_BY_COLOR,
  TRANSLATE_CLASS_NAME_BY_SIZE,
} from "./constants";

function Title({
  translate,
  size = TITLE_SIZES.h1,
  color = TITLE_COLORS.black,
  className,
  children,
}) {
  const TitleComponent = TITLE_BY_SIZE[size];

  const titleStyles = clsx(
    styles.main,
    !translate && className,
    CLASS_NAME_BY_SIZE[size],
    CLASS_NAME_BY_COLOR[color]
  );
  const titleTranslateStyles = clsx(
    styles.main,
    CLASS_NAME_BY_COLOR[color],
    TRANSLATE_CLASS_NAME_BY_SIZE[size]
  );

  if (!translate) {
    return <TitleComponent className={titleStyles}>{children}</TitleComponent>;
  }

  const wrapperStyles = clsx(styles.wrapper, className);

  return (
    <div className={wrapperStyles}>
      <TitleComponent className={titleStyles}>{children}</TitleComponent>
      <span className={titleTranslateStyles}>{translate}</span>
    </div>
  );
}

Title.sizes = TITLE_SIZES;
Title.colors = TITLE_COLORS;

Title.propTypes = {
  size: PropTypes.symbol,
  color: PropTypes.symbol,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Title;
