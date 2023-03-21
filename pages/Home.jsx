import { PageHead } from "@components/common";
import { Footer, Header, PageWrapper } from "@components/shared";
import {
  PromoScreen,
  DevicesSystemScreen,
  DevicesScreen,
  ConferenceScreen,
  MultilingualToursScreen,
  ContactsScreen,
} from "@components/screens/home";

function Home() {
  return (
    <>
      <PageHead />
      <Header />
      <PageWrapper>
        <PromoScreen />
        <DevicesSystemScreen />
        <DevicesScreen />
        <ConferenceScreen />
        <MultilingualToursScreen />
        <ContactsScreen />
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Home;
