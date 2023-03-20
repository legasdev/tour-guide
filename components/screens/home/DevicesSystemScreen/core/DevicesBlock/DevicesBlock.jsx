import styles from "./DevicesBlock.module.less";

const transmitterImage = "images/home/transmitter.png";

import { BlurBlock } from "@components/common";

function DevicesBlock() {
  return (
    <div className={styles.main}>
      <BlurBlock className={styles.transmitter}>
        <img className={styles.image} src={transmitterImage} alt="" />
      </BlurBlock>
      <BlurBlock className={styles.receiver}>Block 2</BlurBlock>
      <BlurBlock className={styles.headphones}>Block 3</BlurBlock>
      <BlurBlock className={styles.microphones}>Block 4</BlurBlock>
      <BlurBlock className={styles.case}>Block 5</BlurBlock>
    </div>
  );
}

export default DevicesBlock;
