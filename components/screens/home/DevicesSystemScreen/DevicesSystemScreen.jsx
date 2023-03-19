import styles from "./DevicesSystemScreen.module.less";

const guideSystemScreenImage = "images/home/guide-system.jpg";

import { BlurBlock } from "@components/common";
import { ImageScreen } from "@components/shared";

function DevicesSystemScreen() {
  return (
    <ImageScreen
      title="Collect Your System to a Better Experience."
      translate="Сакупите свој систем за боље искуство."
      image={guideSystemScreenImage}
    >
      <div className={styles.main}>
        <div className={styles.row}>
          <BlurBlock>Block 1</BlurBlock>
          <BlurBlock>Block 2</BlurBlock>
        </div>
        <div className={styles.row}>
          <BlurBlock>Block 3</BlurBlock>
          <BlurBlock>Block 4</BlurBlock>
          <BlurBlock>Block 5</BlurBlock>
        </div>
        <div>
          [En] Our headphones for guides are designed to provide an exceptional
          audio experience for your tour guests. They are lightweight,
          comfortable to wear, and have noise-cancelling capabilities to
          eliminate any background noise. With clear audio quality, your guests
          will be able to hear every word of your tour without any distortion or
          interference. Our headphones are also durable and built to last,
          making them ideal for frequent use in various environments. They are
          the perfect tool to enhance your guests' experience while on your
          tour.
        </div>
      </div>
    </ImageScreen>
  );
}

export default DevicesSystemScreen;
