import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.less";

import { ButtonGroup } from "./core";

function Button({ translate, children, className, ...props }) {
  const buttonStyles = clsx(styles.main, className);

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
        <span className={styles.main__translate}>{translate}</span>
      </span>
    </button>
  );
}

Button.Group = ButtonGroup;

Button.propTypes = {
  translate: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Button;
