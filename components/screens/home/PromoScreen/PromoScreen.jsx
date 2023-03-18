import styles from "./PromScreen.module.less";

import { Title } from "@components/common";
import { Button } from "@components/ui/buttons";

const promoImage = "images/home/promo.jpg";
const promoImage2x = "images/home/promo-2x.jpg";

function PromoScreen() {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.titles}>
          <Title translate="Опрема за водиче.">Gear for Guides.</Title>
        </div>
        <div className={styles.description}>
          <span className={styles.description_text}>
            Guide Your Guests to a Better Experience with Our Headphones and
            Microphones.
          </span>
          <span className={styles.description_text}>
            Водите своје госте до бољег искуства помоћу наших слушалица и
            микрофона.
          </span>
        </div>
      </div>
      <img
        className={styles.promoImage}
        src={promoImage}
        srcSet={`${promoImage} 1x, ${promoImage2x} 2x`}
        alt=""
      />
      <Button.Group>
        <Button translate="Изнајмите опрему">Rent a Gear</Button>
        <Button translate="Прикажи систем" theme={Button.themes.white}>
          Show System
        </Button>
      </Button.Group>
    </div>
  );
}

export default PromoScreen;
