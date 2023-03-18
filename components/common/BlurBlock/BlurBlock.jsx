import PropTypes from "prop-types";

import styles from "./BlurBlock.module.less";

function BlurBlock({ children }) {
  return <div className={styles.main}>{children}</div>;
}

BlurBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default BlurBlock;
