import PropTypes from "prop-types";

import styles from "./ArticleParagraph.module.less";

function ArticleParagraph({ children }) {
  return <p className={styles.main}>{children}</p>;
}

ArticleParagraph.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ),
};

export default ArticleParagraph;
