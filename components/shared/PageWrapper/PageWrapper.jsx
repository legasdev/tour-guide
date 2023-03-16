import PropTypes from "prop-types";

import styles from "./PageWrapper.module.less";

function PageWrapper({ children }) {
  return <div className={styles.main}>{children}</div>;
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default PageWrapper;
