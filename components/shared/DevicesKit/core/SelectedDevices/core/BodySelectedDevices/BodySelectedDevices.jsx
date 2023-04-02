import PropTypes from "prop-types";

import styles from "./BodySelectedDevices.module.less";

import { DEVICES } from "@constants/devices";
import { SelectedDevicesCard } from "./core";
import { useRef } from "react";

const transmitterImage = "images/home/transmitter.png";
const receiverImage = "images/home/receiver.png";
const headphonesImage = "images/home/headphones.png";
const microphonesImage = "images/home/microphones.png";
const caseImage = "images/home/case.png";

const headphonesDevice = DEVICES.find((device) => device.id === "headphones");
const microphonesDevice = DEVICES.find((device) => device.id === "microphones");
const transmitterDevice = DEVICES.find((device) => device.id === "transmitter");
const receiverDevice = DEVICES.find((device) => device.id === "receiver");
const equipmentCaseDevice = DEVICES.find((device) => device.id === "case");

function BodySelectedDevices({
  headphones,
  microphones,
  transmitter,
  receiver,
  equipmentCase,
}) {
  const headphonesVariant = headphonesDevice.variants.find(
    (variant) => variant.id === headphones
  );
  const microphonesVariant = microphonesDevice.variants.find(
    (variant) => variant.id === microphones
  );
  const transmitterVariant = transmitterDevice.variants.find(
    (variant) => variant.id === transmitter
  );
  const receiverVariant = receiverDevice.variants.find(
    (variant) => variant.id === receiver
  );
  const caseVariant = equipmentCaseDevice.variants.find(
    (variant) => variant.id === equipmentCase
  );

  return (
    <div className={styles.main}>
      <SelectedDevicesCard
        image={headphonesVariant.images[0]}
        title="Headphones"
        titleTranslate="Slušalice"
        modelName={headphonesVariant.label}
        className={styles.headphones}
      />
      <SelectedDevicesCard
        image={microphonesVariant.images[0]}
        title="Microphones"
        titleTranslate="Mikrofoni"
        modelName={microphonesVariant.label}
        className={styles.microphones}
      />
      <SelectedDevicesCard
        image={transmitterVariant.images[0]}
        title="Guide Transmitter"
        titleTranslate="Odašiljač vodiča"
        modelName={transmitterVariant.label}
        className={styles.transmitter}
      />
      <SelectedDevicesCard
        image={receiverVariant.images[0]}
        title="User Receiver"
        titleTranslate="Korisnički prijemnik"
        modelName={receiverVariant.label}
        className={styles.receiver}
      />
      <SelectedDevicesCard
        image={caseVariant.images[0]}
        title="Case"
        titleTranslate="Kučište za prenos"
        modelName={caseVariant.label}
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
