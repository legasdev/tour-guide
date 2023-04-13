import styles from "./MultilingualToursScreen.module.less";

const multilingualToursScreenImage = "images/home/multilingual-tours.jpg";
const articleImage = "images/home/translation.jpg";

import { Article, ImageScreen } from "@components/shared";
import { BlurBlock } from "@components/common";
import DevicesKit from "../../../shared/DevicesKit/DevicesKit";

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
        >
          <Article.Paragraph>
            {"[Mne] Да ли се борите са лошим квалитетом звука, техничким потешкоћама и непродуктивним конференцијским позивима? Наш систем конференцијских позива прилагођен кориснику је ту да вам помогне. Са висококвалитетним микрофонима и контролама лаким за коришћење, наш систем обезбеђује да се сваки учесник чује јасно и без прекида.\n" +
              "\n" +
              "Подешавање је једноставно, а наш систем је компатибилан са широким спектром уређаја и платформи, што га чини доступним свима. Са нашим системом, можете се усредсредити на своје дискусије без бриге о техничким потешкоћама или лошем квалитету звука."}
          </Article.Paragraph>
        </Article>
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
