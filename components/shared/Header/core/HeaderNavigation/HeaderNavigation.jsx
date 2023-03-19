import Link from "next/link";

import styles from "./HeaderNavigation.module.less";

import { ROUTES } from "@constants/routes";

function HeaderNavigation() {
  return (
    <nav>
      <ul className={styles.main}>
        {ROUTES.filter((_, index) => index !== 0).map((navigateObject) => {
          const { id, route, label, translate } = navigateObject;

          return (
            <li className={styles.navigateItem} key={id}>
              <Link className={styles.navigateLink} href={route}>
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

export default HeaderNavigation;
