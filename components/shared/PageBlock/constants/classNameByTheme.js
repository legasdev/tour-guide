import { PAGE_BLOCK_THEMES } from "./themes";

import styles from "../PageBlock.module.less";

const CLASS_NAME_BY_THEME = Object.freeze({
  [PAGE_BLOCK_THEMES.default]: "",
  [PAGE_BLOCK_THEMES.grey]: styles.main__grey,
});

export { CLASS_NAME_BY_THEME };
