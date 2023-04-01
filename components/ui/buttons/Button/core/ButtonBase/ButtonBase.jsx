import PropTypes from "prop-types";
import Link from "next/link";

function ButtonBase({ href, children, ...props }) {
  if (href) {
    return (
      <Link href={href} {...props} scroll={false}>
        {children}
      </Link>
    );
  }

  return <button {...props}>{children}</button>;
}

ButtonBase.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ButtonBase;
