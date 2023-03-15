import PropTypes from "prop-types";

import styles from "./ButtonGroup.module.less";

function ButtonGroup({ children }) {
  return <div className={styles.main}>{children}</div>;
}

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ButtonGroup;
