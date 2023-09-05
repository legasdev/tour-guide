import styles from "./MultilingualToursScreen.module.less";

import multilingualToursScreenImage from "@images/home/multilingual-tours.jpg";
import articleImage from "@images/home/translation.jpg";

import {Article, DevicesKit, ImageScreen} from "@components/shared";
import { BlurBlock } from "@components/common";

function MultilingualToursScreen() {
  return (
    <ImageScreen
      id="translation"
      title="Organize the Work of Your Translator."
      translate="Organizujte Rad Svojeg Prevodioca."
      image={multilingualToursScreenImage}
      className={styles.screen}
    >
      <BlurBlock className={styles.main}>
        <Article
          image={articleImage}
          title="Our system will provide you with accurate translation during seminars and conferences. We will recommend a comfortable microphone."
          titleTranslate="Naš sistem će vam priuštiti precizan prevod tokom seminara, konferencije. Preporičićemo vam udoban mikrofon."
          reverse
        />
        <DevicesKit
          title="Recommended Translator Set."
          titleTranslate="Preporučeni Set za Prevodioca."
          headphones="rubber-pendant-earphone"
          microphones="microphone-behind-the-head"
          transmitter="transmitter"
          receiver="receiver"
          equipmentCase="light-bag"
        />
      </BlurBlock>
    </ImageScreen>
  );
}

export default MultilingualToursScreen;
