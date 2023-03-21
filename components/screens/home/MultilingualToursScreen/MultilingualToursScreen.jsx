import styles from "./MultilingualToursScreen.module.less";

const multilingualToursScreenImage = "images/home/multilingual-tours.jpg";

import { ImageScreen } from "@components/shared";
import { BlurBlock } from "@components/common";

function MultilingualToursScreen() {
  return (
    <ImageScreen
      id="translation"
      title="Our Translation System for Multilingual Tours."
      translate="Наш преводилачки систем за обиласке на више језика."
      image={multilingualToursScreenImage}
    >
      <BlurBlock className={styles.main}>Текст</BlurBlock>
    </ImageScreen>
  );
}

export default MultilingualToursScreen;
