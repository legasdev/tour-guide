import Image from "next/image";

import styles from "./PromScreen.module.less";

import { CONTACTS } from "@constants/contacts";
import { Title } from "@components/common";
import { Button } from "@components/ui/buttons";

import promoImage from "@images/home/promo.jpg"

function PromoScreen() {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.titles}>
          <Title translate="Audio Oprema za Turističke Vodiče Сrna Gora.">
            Tour Guide Equipment Rental Montenegro.
          </Title>
        </div>
        <div className={styles.description}>
          <span className={styles.description_text}>
            With our audio system the guide will work, and won't spend time on
            adjustments.
          </span>
          <span className={styles.description_text}>
            S našim audio sistemom vodič će raditi, i neće trošiti vrijeme na
            podešavanje.
          </span>
        </div>
      </div>
      <Image className={styles.promoImage} src={promoImage} alt="" priority />
      <Button.Group>
        <Button
          href={`mailto:${CONTACTS.email.value}`}
          translate="Iznajmite Opremu"
        >
          Rent a Gear
        </Button>
        <Button
          href="/#guide-system"
          translate="Pokazati Sistem"
          theme={Button.themes.white}
        >
          Show System
        </Button>
      </Button.Group>
    </div>
  );
}

export default PromoScreen;
