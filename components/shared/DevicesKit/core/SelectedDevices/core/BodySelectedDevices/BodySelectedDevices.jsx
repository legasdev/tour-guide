import PropTypes from "prop-types";

import styles from "./BodySelectedDevices.module.less";

import { SelectedDevicesCard } from "./core";

const transmitterImage = "images/home/transmitter.png";
const receiverImage = "images/home/receiver.png";
const headphonesImage = "images/home/headphones.png";
const microphonesImage = "images/home/microphones.png";
const caseImage = "images/home/case.png";

function BodySelectedDevices({
  headphones,
  microphones,
  transmitter,
  receiver,
  equipmentCase,
}) {
  return (
    <div className={styles.main}>
      <SelectedDevicesCard
        image={headphonesImage}
        title="Headphones"
        titleTranslate="Слушалице"
        modelName={"Default model"}
        className={styles.headphones}
      />
      <SelectedDevicesCard
        image={microphonesImage}
        title="Microphones"
        titleTranslate="Микрофони"
        modelName={"Default model"}
        className={styles.microphones}
      />
      <SelectedDevicesCard
        image={transmitterImage}
        title="Guide Transmitter"
        titleTranslate="Предајник водича"
        modelName={"Default model"}
        className={styles.transmitter}
      />
      <SelectedDevicesCard
        image={receiverImage}
        title="User Receiver"
        titleTranslate="Усер Рецеивер"
        modelName={"Default model"}
        className={styles.receiver}
      />
      <SelectedDevicesCard
        image={caseImage}
        title="Case"
        titleTranslate="Кеса"
        modelName={"Default model"}
        className={styles.case}
      />
    </div>
  );
}

BodySelectedDevices.propTypes = {
  headphones: PropTypes.object,
  microphones: PropTypes.object,
  transmitter: PropTypes.object,
  receiver: PropTypes.object,
  equipmentCase: PropTypes.object,
};

export default BodySelectedDevices;
