import styles from "./DevicesScreen.module.less";

import { DEVICES } from "@constants/devices";
import { PageBlock } from "@components/shared";

import { Device } from "./core";

function DevicesScreen() {
  return (
    <PageBlock
      id="devices"
      title="Devices."
      titleTranslate="Uređaji."
      theme={PageBlock.themes.grey}
    >
      <div className={styles.main}>
        {DEVICES.map((device) => {
          return <Device key={device.id} {...device} />;
        })}
      </div>
    </PageBlock>
  );
}

export default DevicesScreen;
