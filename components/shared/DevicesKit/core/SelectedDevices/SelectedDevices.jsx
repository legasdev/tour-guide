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
      <HeaderSelectedDevices />
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
  headphones: PropTypes.object,
  microphones: PropTypes.object,
  transmitter: PropTypes.object,
  receiver: PropTypes.object,
  equipmentCase: PropTypes.object,
};

export default SelectedDevices;
