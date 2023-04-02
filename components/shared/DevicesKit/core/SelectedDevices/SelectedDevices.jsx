import PropTypes from "prop-types";

import styles from "./SelectedDevices.module.less";

import { BodySelectedDevices, HeaderSelectedDevices } from "./core";

function SelectedDevices({
  headphones,
  microphones,
  transmitter,
  receiver,
  equipmentCase,
  onChange,
}) {
  return (
    <div className={styles.main}>
      <HeaderSelectedDevices
        headphones={headphones}
        microphones={microphones}
        transmitter={transmitter}
        receiver={receiver}
        equipmentCase={equipmentCase}
        onChange={onChange}
      />
      <BodySelectedDevices
        headphones={headphones}
        microphones={microphones}
        transmitter={transmitter}
        receiver={receiver}
        equipmentCase={equipmentCase}
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
  onChange: PropTypes.func,
};

export default SelectedDevices;
