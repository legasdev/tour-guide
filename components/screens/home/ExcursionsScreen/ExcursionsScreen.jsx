import { Article, PageBlock, DevicesKit } from "@components/shared";

const articleImage = "images/home/excursions.jpg";

function ExcursionsScreen() {
  return (
    <PageBlock id="excursions" title="Excursions." titleTranslate="Ekskurzije.">
      <Article
        image={articleImage}
        title="City, Bus, Ship tours."
        titleTranslate="Gradske, autobuske i plovne ekskurzije."
      />
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
