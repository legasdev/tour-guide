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
        title="Recommended set."
        titleTranslate="Preporučeni set."
        headphones="headphones_default"
        microphones="microphones_dark"
        transmitter="transmitter_dark"
        receiver="receiver_default"
        equipmentCase="case_default"
      />
    </PageBlock>
  );
}

export default ExcursionsScreen;
