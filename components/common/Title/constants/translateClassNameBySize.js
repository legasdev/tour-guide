import { TITLE_SIZES } from "./sizes";

import styles from "./../Title.module.less";

const TRANSLATE_CLASS_NAME_BY_SIZE = Object.freeze({
  [TITLE_SIZES.h1]: styles.main__h1_translate,
  [TITLE_SIZES.h2]: styles.main__h2_translate,
  [TITLE_SIZES.h3]: styles.main,
  [TITLE_SIZES.h4]: styles.main,
  [TITLE_SIZES.h5]: styles.main,
  [TITLE_SIZES.h6]: styles.main,
});

export { TRANSLATE_CLASS_NAME_BY_SIZE };
