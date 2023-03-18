import { PageHead } from "@components/common";
import { Header, PageWrapper } from "@components/shared";
import { PromoScreen, DevicesSystemScreen } from "@components/screens/home";

function Home() {
  return (
    <>
      <PageHead />
      <Header />
      <PageWrapper>
        <PromoScreen />
        <DevicesSystemScreen />
      </PageWrapper>
    </>
  );
}

export default Home;
