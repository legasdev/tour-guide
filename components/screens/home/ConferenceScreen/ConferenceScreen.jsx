import { Article, PageBlock, DevicesKit } from "@components/shared";

import styles from "./ConferenceScreen.module.less";

const articleImage = "images/home/conference.jpg";

function ConferenceScreen() {
  return (
    <PageBlock
      id="conferences"
      title="Organize a Conference with Our Help."
      titleTranslate="Organizujte Konferenciju uz Našu Pomoć."
      theme={PageBlock.themes.grey}
      className={styles.main}
    >
      <Article
        image={articleImage}
        title="Our system is easy to conduct conferences. We offer you special headphones for long and comfortable use during the day."
        titleTranslate="Naš sistem je jednostavan za sprovođenje konferencija. Predlažemo vam specijalne slušalice za dugo i komforno korišćenje u toku dana."
      >
        <Article.Paragraph>
          {"[Mne] Да ли се борите са лошим квалитетом звука, техничким потешкоћама и непродуктивним конференцијским позивима? Наш систем конференцијских позива прилагођен кориснику је ту да вам помогне. Са висококвалитетним микрофонима и контролама лаким за коришћење, наш систем обезбеђује да се сваки учесник чује јасно и без прекида.\n" +
            "\n" +
            "Подешавање је једноставно, а наш систем је компатибилан са широким спектром уређаја и платформи, што га чини доступним свима. Са нашим системом, можете се усредсредити на своје дискусије без бриге о техничким потешкоћама или лошем квалитету звука."}
        </Article.Paragraph>
      </Article>
      <DevicesKit
        title="Recommended Conference Set."
        titleTranslate="Preporučeni Set za Konferencije."
        headphones="plastic-hook-earphone"
        microphones="microphone-omni-directional"
        transmitter="transmitter"
        receiver="receiver"
        equipmentCase="light-bag"
      />
    </PageBlock>
  );
}

export default ConferenceScreen;
