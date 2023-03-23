import { PageHead } from "@components/common";
import { Footer, Header, PageWrapper } from "@components/shared";
import {
  PromoScreen,
  SystemScreen,
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
        <SystemScreen />
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
