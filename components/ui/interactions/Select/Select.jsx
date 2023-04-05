import PropTypes from "prop-types";

import styles from "./Select.module.less";

import { SelectOption } from "./core";

function Select({ value, onChange, children }) {
  return (
    <select className={styles.main} value={value} onChange={onChange}>
      {children}
    </select>
  );
}

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Select.Option = SelectOption;

export default Select;
