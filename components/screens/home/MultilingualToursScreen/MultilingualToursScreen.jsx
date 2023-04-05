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
      title="Organize the work of your translator."
      translate="Organizujte rad svojeg prevodioca."
      image={multilingualToursScreenImage}
    >
      <BlurBlock className={styles.main}>
        <Article
          image={articleImage}
          title="Our system will provide you with accurate translation during seminars and conferences. We will recommend a comfortable microphone."
          titleTranslate="Naš sistem će vam priuštiti precizan prevod tokom seminara, konferencije. Preporičićemo vam udoban mikrofon."
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
          title="Recommended translator set."
          titleTranslate="Preporučeni set za prevodioca."
          headphones="headphones_default"
          microphones="microphones_dark"
          transmitter="transmitter_default"
          receiver="receiver_default"
          equipmentCase="case_default"
        />
      </BlurBlock>
    </ImageScreen>
  );
}

export default MultilingualToursScreen;
