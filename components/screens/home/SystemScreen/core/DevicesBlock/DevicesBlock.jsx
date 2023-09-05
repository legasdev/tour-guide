import Image from "next/image";

import styles from "./DevicesBlock.module.less";

import { BlurBlock, Title } from "@components/common";

import { DEVICES_LIST } from "./constants";

function DevicesBlock() {
  return (
    <div className={styles.main}>
      {DEVICES_LIST.map(
        ({
          id,
          image,
          label,
          labelTranslate,
          description,
          descriptionTranslate,
        }) => (
          <BlurBlock key={id} className={styles[id]}>
            <Image className={styles.image} src={image} width={424} height={200} alt="" />
            <Title size={Title.sizes.h3} translate={labelTranslate}>
              {label}
            </Title>
            <div className={styles.description}>
              <p>{description}</p>
              <p>{descriptionTranslate}</p>
            </div>
          </BlurBlock>
        )
      )}
    </div>
  );
}

export default DevicesBlock;
