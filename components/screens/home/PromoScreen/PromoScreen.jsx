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
          <Title translate="Audio oprema za turističke vodiče Montenegro.">
            Gear for Guides.
          </Title>
        </div>
        <div className={styles.description}>
          <span className={styles.description_text}>
            Guide Your Guests to a Better Experience with Our Headphones and
            Microphones.
          </span>
          <span className={styles.description_text}>
            S našim audio sistemom vodič će raditi, i neće trošiti vrijeme na
            podešavanje
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
        <Button translate="Iznajmite opremu">Rent a Gear</Button>
        <Button
          href="/#guide-system"
          translate="Pokazati sistem"
          theme={Button.themes.white}
        >
          Show System
        </Button>
      </Button.Group>
    </div>
  );
}

export default PromoScreen;
