import styles from "./ContactsScreen.module.less";

import { PageBlock } from "@components/shared";

function ContactsScreen() {
  return (
    <PageBlock id="contacts" title="Contacts." titleTranslate="Контакти.">
      <div className={styles.main}>
        <div className={styles.block}>
          <div className={styles.contacts}>
            <h4 className={styles.title}>Phone / Телефон:</h4>
            <a className={styles.contactLink} href="tel:+37033333333">
              +370 333 33333
            </a>
          </div>
          <div>
            <h4 className={styles.title}>E-mail:</h4>
            <a
              className={styles.contactLink}
              href="mailto:guidesystem@eeee.ccc"
            >
              guidesystem@meee.eee
            </a>
          </div>
          <div>
            <h4 className={styles.title}>Address / Адреса:</h4>
            <span className={styles.contactLink}>
              Sausio 13-osios g. 2, Vilnius
            </span>
          </div>
        </div>
      </div>
    </PageBlock>
  );
}

export default ContactsScreen;
