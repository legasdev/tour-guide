import styles from "./DevicesScreen.module.less";

import { PageBlock } from "@components/shared";

import { DEVICES } from "./constants";
import DeviceInformation from "./core/DeviceInformation/DeviceInformation";

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
          return <DeviceInformation key={device.id} {...device} />;
        })}
      </div>
    </PageBlock>
  );
}

export default DevicesScreen;
