import styles from "./ContactsScreen.module.less";

import { PageBlock } from "@components/shared";

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
          <div>
            <h4 className={styles.title}>E-mail:</h4>
            <a
              className={styles.contactLink}
              href="mailto:monteregion@gmail.com"
            >
              monteregion@gmail.com
            </a>
          </div>
          <div>
            <h4 className={styles.title}>Address / Adresa:</h4>
            <span className={styles.contactLink}>
              <span>Turistička agencija Monteniko</span>
              <br />
              <span>85310, Budva, Rozino b/b</span>
            </span>
          </div>
        </div>
      </div>
    </PageBlock>
  );
}

export default ContactsScreen;
