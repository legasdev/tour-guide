import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.less";

import { BUTTON_THEMES, CLASS_NAME_BY_THEME } from "./constants";

import { ButtonGroup, ButtonBase } from "./core";

function Button({
  href,
  translate,
  theme = BUTTON_THEMES.default,
  children,
  className,
  ...props
}) {
  const buttonStyles = clsx(styles.main, className, CLASS_NAME_BY_THEME[theme]);

  if (!translate) {
    return (
      <ButtonBase href={href} className={buttonStyles} {...props}>
        {children}
      </ButtonBase>
    );
  }

  return (
    <ButtonBase href={href} className={buttonStyles} {...props}>
      <span className={styles.wrapper}>
        {children}
        <span className={styles.main__withTranslate}>{translate}</span>
      </span>
    </ButtonBase>
  );
}

Button.Group = ButtonGroup;

Button.themes = BUTTON_THEMES;

Button.propTypes = {
  href: PropTypes.string,
  translate: PropTypes.string,
  theme: PropTypes.symbol,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Button;
