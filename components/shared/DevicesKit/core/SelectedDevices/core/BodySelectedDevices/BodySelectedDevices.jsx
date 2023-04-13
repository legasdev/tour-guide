import PropTypes from "prop-types";

import styles from "./BodySelectedDevices.module.less";

import { DEVICES } from "@constants/devices";
import { SelectedDevicesCard } from "./core";
import { useRef } from "react";

function BodySelectedDevices({
  headphones,
  microphones,
  transmitter,
  receiver,
  equipmentCase,
}) {
  const headphonesVariant = DEVICES.find(({ id }) => id === headphones);
  const microphonesVariant = DEVICES.find(({ id }) => id === microphones);
  const transmitterVariant = DEVICES.find(({ id }) => id === transmitter);
  const receiverVariant = DEVICES.find(({ id }) => id === receiver);
  const caseVariant = DEVICES.find(({ id }) => id === equipmentCase);

  return (
    <div className={styles.main}>
      <SelectedDevicesCard
        id={headphones}
        image={headphonesVariant.images[0]}
        title={headphonesVariant.label}
        titleTranslate={headphonesVariant.labelTranslate}
        className={styles.headphones}
      />
      <SelectedDevicesCard
        id={microphones}
        image={microphonesVariant.images[0]}
        title={microphonesVariant.label}
        titleTranslate={microphonesVariant.labelTranslate}
        className={styles.microphones}
      />
      <SelectedDevicesCard
        id={transmitter}
        image={transmitterVariant.images[0]}
        title={transmitterVariant.label}
        titleTranslate={transmitterVariant.labelTranslate}
        className={styles.transmitter}
      />
      <SelectedDevicesCard
        id={receiver}
        image={receiverVariant.images[0]}
        title={receiverVariant.label}
        titleTranslate={receiverVariant.labelTranslate}
        className={styles.receiver}
      />
      <SelectedDevicesCard
        id={equipmentCase}
        image={caseVariant.images[0]}
        title={caseVariant.label}
        titleTranslate={caseVariant.labelTranslate}
        className={styles.case}
      />
    </div>
  );
}

BodySelectedDevices.propTypes = {
  headphones: PropTypes.string,
  microphones: PropTypes.string,
  transmitter: PropTypes.string,
  receiver: PropTypes.string,
  equipmentCase: PropTypes.string,
};

export default BodySelectedDevices;
