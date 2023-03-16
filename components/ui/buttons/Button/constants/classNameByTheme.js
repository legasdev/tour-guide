import { BUTTON_THEMES } from "./themes";

import styles from "./../Button.module.less";

const CLASS_NAME_BY_THEME = Object.freeze({
  [BUTTON_THEMES.default]: "",
  [BUTTON_THEMES.white]: styles.main__white,
});

export { CLASS_NAME_BY_THEME };
