import styles from "./DevicesScreen.module.less";

import { PageBlock } from "@components/shared";

function DevicesScreen() {
  return (
    <PageBlock
      id="devices"
      title="Devices."
      titleTranslate="Уређаји."
      theme={PageBlock.themes.grey}
      className={styles.main}
    >
      <div>Text</div>
    </PageBlock>
  );
}

export default DevicesScreen;
