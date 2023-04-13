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
      />
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
