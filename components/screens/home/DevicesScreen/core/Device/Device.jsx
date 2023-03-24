import { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Device.module.less";

import { DeviceHeader, DeviceBlock } from "./core";
import { getDeviceByVariant, getDeviceVariantsForSelect } from "./utils";

function Device({ id, image, label, labelTranslate, variants }) {
  const variantsForSelect = useRef(getDeviceVariantsForSelect(variants));
  const [deviceModel, setDeviceModel] = useState(
    variantsForSelect.current[0].id
  );

  const deviceVariant = getDeviceByVariant(variants, deviceModel);

  function handleDeviceSelectChanged(event) {
    setDeviceModel(event.target.value);
  }

  return (
    <div className={styles.main}>
      <DeviceHeader
        label={label}
        labelTranslate={labelTranslate}
        variantsRef={variantsForSelect}
        deviceModel={deviceModel}
        handleDeviceSelectChanged={handleDeviceSelectChanged}
      />
      <DeviceBlock deviceVariant={deviceVariant} />
    </div>
  );
}

Device.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
  labelTranslate: PropTypes.string,
  variants: PropTypes.arrayOf(PropTypes.object),
};

export default Device;