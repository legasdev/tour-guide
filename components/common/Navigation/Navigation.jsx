import PropTypes from "prop-types";
import clsx from "clsx";
import Link from "next/link";

import styles from "./Navigation.module.less";

import { ROUTES } from "@constants/routes";

function Navigation({ withMobile = false }) {
  const navigationStyles = clsx(
    styles.main,
    withMobile && styles.main__withMobile
  );

  return (
    <nav>
      <ul className={navigationStyles}>
        {ROUTES.filter((_, index) => index !== 0).map((navigateObject) => {
          const { id, route, label, translate } = navigateObject;

          return (
            <li className={styles.navigateItem} key={id}>
              <Link className={styles.navigateLink} href={route} scroll={false}>
                <span>{label}</span>
                <span className={styles.navigateLink__translate}>
                  {translate}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  withMobile: PropTypes.bool,
};

export default Navigation;
