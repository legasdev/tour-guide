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
      title="Our Translation System for Multilingual Tours."
      translate="Наш преводилачки систем за обиласке на више језика."
      image={multilingualToursScreenImage}
    >
      <BlurBlock className={styles.main}>
        <Article
          image={articleImage}
          titleTranslate="Револуционишите своје конференцијске позиве помоћу нашег система који је једноставан за коришћење"
          title="Revolutionize Your Conference Calls with Our Easy-to-Use System"
          reverse
        >
          <Article.Paragraph>
            {"[En] Do you struggle with poor audio quality, technical difficulties, and unproductive conference calls? Our user-friendly conference call system is here to help. With high-quality microphones and easy-to-use controls, our system ensures that every participant is heard clearly and without interruptions. \n" +
              "\n" +
              "Set up is a breeze, and our system is compatible with a wide range of devices and platforms, making it accessible for everyone. With our system, you can focus on your discussions without worrying about technical difficulties or poor sound quality."}
          </Article.Paragraph>
          <Article.Paragraph>
            {"[Sr] Да ли се борите са лошим квалитетом звука, техничким потешкоћама и непродуктивним конференцијским позивима? Наш систем конференцијских позива прилагођен кориснику је ту да вам помогне. Са висококвалитетним микрофонима и контролама лаким за коришћење, наш систем обезбеђује да се сваки учесник чује јасно и без прекида.\n" +
              "\n" +
              "Подешавање је једноставно, а наш систем је компатибилан са широким спектром уређаја и платформи, што га чини доступним свима. Са нашим системом, можете се усредсредити на своје дискусије без бриге о техничким потешкоћама или лошем квалитету звука."}
          </Article.Paragraph>
        </Article>
        <DevicesKit
          title="Recommended Set for Multilingual Tours."
          titleTranslate="Препоручени сет за вишејезичне туре."
        />
      </BlurBlock>
    </ImageScreen>
  );
}

export default MultilingualToursScreen;
