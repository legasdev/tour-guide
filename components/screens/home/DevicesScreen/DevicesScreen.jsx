import styles from "./DevicesScreen.module.less";

import { DEVICES } from "@constants/devices";
import { PageBlock } from "@components/shared";

import { Device } from "./core";

function DevicesScreen() {
  return (
    <PageBlock
      id="devices"
      title="Devices."
      titleTranslate="Уређаји."
      theme={PageBlock.themes.grey}
      className={styles.main}
    >
      <div className={styles.content}>
        {DEVICES.map((device) => {
          return <Device key={device.id} {...device} />;
        })}
      </div>
    </PageBlock>
  );
}

export default DevicesScreen;
