import PropTypes from "prop-types";

import styles from "./DevicesKit.module.less";

import { Title } from "@components/common";
import { Button } from "@components/ui/buttons";

import { SelectedDevices } from "./core";
import { useState } from "react";

function DevicesKit({
  title,
  titleTranslate,
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

  function handleDeviceSelectChange(device, deviceVariant) {
    switch (device) {
      case "headphones":
        setHeadphonesDevice(deviceVariant);
        break;

      case "microphones":
        setMicrophonesDevice(deviceVariant);
        break;

      case "transmitter":
        setTransmitterDevice(deviceVariant);
        break;

      case "receiver":
        setReceiverDevice(deviceVariant);
        break;

      case "case":
        setEquipmentCase(deviceVariant);
        break;
    }
  }

  function resetDevicesKit() {
    setHeadphonesDevice(headphones);
    setMicrophonesDevice(microphones);
    setTransmitterDevice(transmitter);
    setReceiverDevice(receiver);
    setEquipmentCase(equipmentCase);
  }

  return (
    <div className={styles.main}>
      <Title size={Title.sizes.h3} translate={titleTranslate}>
        {title}
      </Title>
      <SelectedDevices
        receiver={receiverDevice}
        transmitter={transmitterDevice}
        microphones={microphonesDevice}
        headphones={headphonesDevice}
        equipmentCase={equipmentCaseDevice}
        onChange={handleDeviceSelectChange}
      />
      <Button.Group>
        <Button translate="Iznajmite komplet">Rent a Kit</Button>
        <Button
          translate="Препоручено"
          theme={Button.themes.white}
          onClick={resetDevicesKit}
        >
          Recommended
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
