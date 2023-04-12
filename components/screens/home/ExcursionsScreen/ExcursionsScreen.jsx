import { Article, PageBlock, DevicesKit } from "@components/shared";

const articleImage = "images/home/excursions.jpg";

function ExcursionsScreen() {
  return (
    <PageBlock id="excursions" title="Excursions." titleTranslate="Ekskurzije.">
      <Article
        image={articleImage}
        title="City, Bus, Ship tours."
        titleTranslate="Gradske, autobuske i plovne ekskurzije."
      >
        <Article.Paragraph>
          {"[Sr] Да ли се борите са лошим квалитетом звука, техничким потешкоћама и непродуктивним конференцијским позивима? Наш систем конференцијских позива прилагођен кориснику је ту да вам помогне. Са висококвалитетним микрофонима и контролама лаким за коришћење, наш систем обезбеђује да се сваки учесник чује јасно и без прекида.\n" +
            "\n" +
            "Подешавање је једноставно, а наш систем је компатибилан са широким спектром уређаја и платформи, што га чини доступним свима. Са нашим системом, можете се усредсредити на своје дискусије без бриге о техничким потешкоћама или лошем квалитету звука."}
        </Article.Paragraph>
      </Article>
      <DevicesKit
        title="Recommended Set."
        titleTranslate="Preporučeni Set."
        headphones="reusable-earphone"
        microphones="microphone-behind-the-head"
        transmitter="transmitter"
        receiver="receiver"
        equipmentCase="portable-charging-storage-case"
      />
    </PageBlock>
  );
}

export default ExcursionsScreen;
