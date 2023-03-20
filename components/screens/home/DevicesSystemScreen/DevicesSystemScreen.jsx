import styles from "./DevicesSystemScreen.module.less";

const guideSystemScreenImage = "images/home/guide-system.jpg";

import { ImageScreen } from "@components/shared";

import { DevicesBlock, DevicesDescriptions } from "./core";

function DevicesSystemScreen() {
  return (
    <ImageScreen
      title="Collect Your System to a Better Experience."
      translate="Сакупите свој систем за боље искуство."
      image={guideSystemScreenImage}
    >
      <div className={styles.main}>
        <DevicesBlock />
        <DevicesDescriptions />
      </div>
    </ImageScreen>
  );
}

export default DevicesSystemScreen;
