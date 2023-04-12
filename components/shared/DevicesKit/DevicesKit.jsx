import PropTypes from "prop-types";

import styles from "./DevicesKit.module.less";

import { CONTACTS } from "@constants/contacts";
import { Title } from "@components/common";
import { Button } from "@components/ui/buttons";

import { SelectedDevices } from "./core";

function DevicesKit({
  title,
  titleTranslate,
  headphones,
  microphones,
  transmitter,
  receiver,
  equipmentCase,
}) {
  return (
    <div className={styles.main}>
      <Title size={Title.sizes.h3} translate={titleTranslate}>
        {title}
      </Title>
      <SelectedDevices
        receiver={receiver}
        transmitter={transmitter}
        microphones={microphones}
        headphones={headphones}
        equipmentCase={equipmentCase}
      />
      <Button.Group>
        <Button
          href={`mailto:${CONTACTS.email.value}`}
          translate="Iznajmite Komplet"
        >
          Rent a Kit
        </Button>
      </Button.Group>
    </div>
  );
}

DevicesKit.propTypes = {
  title: PropTypes.string,
  titleTranslate: PropTypes.string,
  headphones: PropTypes.string,
  microphones: PropTypes.string,
  transmitter: PropTypes.string,
  receiver: PropTypes.string,
  equipmentCase: PropTypes.string,
};

export default DevicesKit;
