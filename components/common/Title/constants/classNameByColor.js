import {TITLE_COLORS} from "./colors";

import styles from "./../Title.module.less";

const CLASS_NAME_BY_COLOR = Object.freeze({
  [TITLE_COLORS.black]: "",
  [TITLE_COLORS.white]: styles.main__white,
});

export { CLASS_NAME_BY_COLOR };