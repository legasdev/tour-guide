const guideSystemScreenImage = "images/home/guide-system.jpg";

import { PageHead } from "@components/common";
import { PromoScreen, ImageScreen, PageWrapper } from "@components/shared";

function Home() {
  return (
    <>
      <PageHead />
      <PageWrapper>
        <PromoScreen />
        <ImageScreen image={guideSystemScreenImage}>Screen</ImageScreen>
      </PageWrapper>
    </>
  );
}

export default Home;
