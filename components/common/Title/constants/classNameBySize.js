import { TITLE_SIZES } from "./sizes";

import styles from "./../Title.module.less";

const CLASS_NAME_BY_SIZE = Object.freeze({
  [TITLE_SIZES.h1]: styles.main__h1,
  [TITLE_SIZES.h2]: styles.main__h2,
  [TITLE_SIZES.h3]: styles.main__h3,
  [TITLE_SIZES.h4]: styles.main,
  [TITLE_SIZES.h5]: styles.main,
  [TITLE_SIZES.h6]: styles.main,
});

export { CLASS_NAME_BY_SIZE };
