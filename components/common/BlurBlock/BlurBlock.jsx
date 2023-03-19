import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./BlurBlock.module.less";

function BlurBlock({ className, children }) {
  const blurBlockStyles = clsx(styles.main, className);
  return <div className={blurBlockStyles}>{children}</div>;
}

BlurBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default BlurBlock;
