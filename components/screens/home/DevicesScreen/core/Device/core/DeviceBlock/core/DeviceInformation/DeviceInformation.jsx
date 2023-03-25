import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./DeviceInformation.module.less";

import { DEVICE_INFORMATION_TABS as TABS } from "./constants";
import { DeviceInformationHeader, DeviceInformationBlock } from "./core";

function DeviceInformation({ device }) {
  const [selectedInformation, setSelectInformation] = useState(TABS[0].id);

  return (
    <div className={styles.main}>
      <DeviceInformationHeader
        deviceId={device.id}
        selectedInformation={selectedInformation}
        setSelectInformation={setSelectInformation}
      />
      <DeviceInformationBlock
        selectedInformation={selectedInformation}
        description={device.description}
        descriptionTranslate={device.descriptionTranslate}
        specifications={device.specifications}
      />
    </div>
  );
}

DeviceInformation.propTypes = {
  device: PropTypes.object,
};

export default DeviceInformation;
