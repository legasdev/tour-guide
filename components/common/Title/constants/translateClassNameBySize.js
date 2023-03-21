import { TITLE_SIZES } from "./sizes";

import styles from "./../Title.module.less";

const TRANSLATE_CLASS_NAME_BY_SIZE = Object.freeze({
  [TITLE_SIZES.h1]: styles.main__h1_translate,
  [TITLE_SIZES.h2]: styles.main__h2_translate,
  [TITLE_SIZES.h3]: styles.main__h3_translate,
  [TITLE_SIZES.h4]: "",
  [TITLE_SIZES.h5]: "",
  [TITLE_SIZES.h6]: "",
});

export { TRANSLATE_CLASS_NAME_BY_SIZE };
