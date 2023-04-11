import { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Device.module.less";

import { DeviceHeader, DeviceBlock } from "./core";
import { getDeviceByVariant, getDeviceVariantsForSelect } from "./utils";

function Device({
  images,
  label,
  labelTranslate,
  description,
  descriptionTranslate,
}) {
  return (
    <div className={styles.main}>
      <DeviceHeader label={label} labelTranslate={labelTranslate} />
      <DeviceBlock
        images={images}
        description={description}
        descriptionTranslate={descriptionTranslate}
      />
    </div>
  );
}

Device.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  labelTranslate: PropTypes.string,
  description: PropTypes.string,
  descriptionTranslate: PropTypes.string,
};

export default Device;
