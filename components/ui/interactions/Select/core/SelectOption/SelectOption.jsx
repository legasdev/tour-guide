import PropTypes from "prop-types";

function SelectOption({ value, children }) {
  return <option value={value}>{children}</option>;
}

SelectOption.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType(
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ),
};

export default SelectOption;
