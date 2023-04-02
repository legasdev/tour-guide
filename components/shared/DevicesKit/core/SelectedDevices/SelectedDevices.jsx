import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./SelectedDevices.module.less";

import { BodySelectedDevices, HeaderSelectedDevices } from "./core";

function SelectedDevices({
  headphones,
  microphones,
  transmitter,
  receiver,
  equipmentCase,
}) {
  const [headphonesDevice, setHeadphonesDevice] = useState(headphones);
  const [microphonesDevice, setMicrophonesDevice] = useState(microphones);
  const [transmitterDevice, setTransmitterDevice] = useState(transmitter);
  const [receiverDevice, setReceiverDevice] = useState(receiver);
  const [equipmentCaseDevice, setEquipmentCase] = useState(equipmentCase);

  return (
    <div className={styles.main}>
      <HeaderSelectedDevices
        headphones={headphonesDevice}
        microphones={microphonesDevice}
        transmitter={transmitterDevice}
        receiver={receiverDevice}
        equipmentCase={equipmentCaseDevice}
      />
      <BodySelectedDevices
        headphones={headphonesDevice}
        microphones={microphonesDevice}
        transmitter={transmitterDevice}
        receiver={receiverDevice}
        equipmentCase={equipmentCaseDevice}
      />
    </div>
  );
}

SelectedDevices.propTypes = {
  headphones: PropTypes.string,
  microphones: PropTypes.string,
  transmitter: PropTypes.string,
  receiver: PropTypes.string,
  equipmentCase: PropTypes.string,
};

export default SelectedDevices;
