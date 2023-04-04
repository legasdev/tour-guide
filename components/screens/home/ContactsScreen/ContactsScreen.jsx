import styles from "./ContactsScreen.module.less";

import { PageBlock } from "@components/shared";

const receiverManualFile =
  "files/MontenegroGuideSystem-ReceiverInstructionManual.pdf";
const caseManualFile = "files/GuideSystemMontenegro-CaseInstructionManual.pdf";

function ContactsScreen() {
  return (
    <PageBlock id="contacts" title="Contacts." titleTranslate="Контакти.">
      <div className={styles.main}>
        <div className={styles.block}>
          <div className={styles.contacts}>
            <h4 className={styles.title}>Phone / Телефон:</h4>
            <a className={styles.contactLink} href="tel:+38267277971">
              +382 672 77971 (WhatsApp, Viber)
            </a>
          </div>
          <div className={styles.contacts}>
            <h4 className={styles.title}>E-mail:</h4>
            <a
              className={styles.contactLink}
              href="mailto:monteregion@gmail.com"
            >
              monteregion@gmail.com
            </a>
          </div>
          <div className={styles.contacts}>
            <h4 className={styles.title}>Address / Adresa:</h4>
            <span className={styles.contactLink}>
              <span>Turistička agencija Monteniko</span>
              <br />
              <span>85310, Budva, Rozino b/b</span>
            </span>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.contacts}>
            <h4 className={styles.title}>
              Receiver Instruction Manual
              <br />
              Priručnik s uputama za prijemnik:
            </h4>
            <a
              className={styles.contactLink}
              href={receiverManualFile}
              target="_blank"
              rel="noopener"
            >
              Download / Preuzimanje datoteka (pdf,&nbsp;7.0&nbsp;MB)
            </a>
          </div>
          <div className={styles.contacts}>
            <h4 className={styles.title}>
              Equipment Case Instruction Manual
              <br />
              Priručnik s uputama za kutiju opreme:
            </h4>
            <a
              className={styles.contactLink}
              href={caseManualFile}
              target="_blank"
              rel="noopener"
            >
              Download / Preuzimanje datoteka (pdf,&nbsp;7.7&nbsp;MB)
            </a>
          </div>
        </div>
      </div>
    </PageBlock>
  );
}

export default ContactsScreen;
