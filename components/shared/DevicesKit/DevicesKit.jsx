import styles from "./DevicesKit.module.less";

import { Title } from "@components/common";
import { Button } from "@components/ui/buttons";

import { SelectedDevices } from "./core";

function DevicesKit({ title, titleTranslate }) {
  return (
    <div className={styles.main}>
      <Title size={Title.sizes.h3} translate={titleTranslate}>
        {title}
      </Title>
      <SelectedDevices />
      <Button.Group>
        <Button translate="Изнајмите комплет">Rent a Kit</Button>
        <Button translate="Препоручено" theme={Button.themes.white}>
          Recommended
        </Button>
      </Button.Group>
    </div>
  );
}

export default DevicesKit;
