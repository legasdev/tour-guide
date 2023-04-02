import styles from "./SystemScreen.module.less";

const guideSystemScreenImage = "images/home/guide-system.jpg";

import { ImageScreen } from "@components/shared";

import { DevicesBlock, DevicesDescriptions } from "./core";

function SystemScreen() {
  return (
    <ImageScreen
      id="guide-system"
      title="Collect Your System to a Better Experience."
      translate="Sklopite svoj sistem za bolje iskustvo vodiča."
      image={guideSystemScreenImage}
    >
      <div className={styles.main}>
        <DevicesBlock />
        <DevicesDescriptions />
      </div>
    </ImageScreen>
  );
}

export default SystemScreen;
