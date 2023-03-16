import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.less";

import { BUTTON_THEMES, CLASS_NAME_BY_THEME } from "./constants";

import { ButtonGroup } from "./core";

function Button({
  translate,
  theme = BUTTON_THEMES.default,
  children,
  className,
  ...props
}) {
  const buttonStyles = clsx(styles.main, className, CLASS_NAME_BY_THEME[theme]);

  if (!translate) {
    return (
      <button className={buttonStyles} {...props}>
        {children}
      </button>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      <span className={styles.wrapper}>
        {children}
        <span className={styles.main__withTranslate}>{translate}</span>
      </span>
    </button>
  );
}

Button.Group = ButtonGroup;

Button.themes = BUTTON_THEMES;

Button.propTypes = {
  translate: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Button;
