import styles from "./ContactsScreen.module.less";

import { PageBlock } from "@components/shared";
import { CONTACTS } from "@constants/contacts";

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
            <a
              className={styles.contactLink}
              href={`tel:${CONTACTS.telephone.value}`}
            >
              {CONTACTS.telephone.label} (WhatsApp, Viber)
            </a>
          </div>
          <div className={styles.contacts}>
            <h4 className={styles.title}>E-mail:</h4>
            <a
              className={styles.contactLink}
              href={`mailto:${CONTACTS.email.value}`}
            >
              {CONTACTS.email.label}
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
              Priručnik sa Uputstvom za Prijemnik:
            </h4>
            <a
              className={styles.contactLink}
              href={receiverManualFile}
              target="_blank"
              rel="noopener"
            >
              Download / Preuzimanje Datoteka (pdf,&nbsp;7.0&nbsp;MB)
            </a>
          </div>
          <div className={styles.contacts}>
            <h4 className={styles.title}>
              Equipment Case Instruction Manual
              <br />
              Priručnik sa Uputstvom za Kućište za Punjenje:
            </h4>
            <a
              className={styles.contactLink}
              href={caseManualFile}
              target="_blank"
              rel="noopener"
            >
              Download / Preuzimanje Datoteka (pdf,&nbsp;7.7&nbsp;MB)
            </a>
          </div>
        </div>
      </div>
    </PageBlock>
  );
}

export default ContactsScreen;
