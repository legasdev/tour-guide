import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./DeviceInformation.module.less";

import { DeviceInformationHeader } from "./core";

function DeviceInformation({ device }) {
  const [selectedInformation, setSelectInformation] = useState(
    DeviceInformationHeader.tabs[0].id
  );

  return (
    <div className={styles.main}>
      <DeviceInformationHeader
        deviceId={device.id}
        selectedInformation={selectedInformation}
        setSelectInformation={setSelectInformation}
      />
    </div>
  );
}

DeviceInformation.propTypes = {
  device: PropTypes.object,
};

export default DeviceInformation;
