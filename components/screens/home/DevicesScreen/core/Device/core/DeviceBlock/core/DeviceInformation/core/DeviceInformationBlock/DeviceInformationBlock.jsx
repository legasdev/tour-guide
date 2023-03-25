import PropTypes from "prop-types";

import styles from "./DeviceInformationBlock.module.less";

import { DEVICE_INFORMATION_TABS } from "../../constants";

function DeviceInformationBlock({
  selectedInformation,
  description,
  descriptionTranslate,
  specifications,
}) {
  return (
    <div className={styles.main}>
      {selectedInformation === DEVICE_INFORMATION_TABS[0].id && (
        <div className={styles.description}>
          <div className={styles.list}>
            <span className={styles.description_lang}>[En]</span>
            {specifications.map(({ id, value }) => (
              <span className={styles.description_text} key={`${id}`}>
                {value}
              </span>
            ))}
          </div>
          <div className={styles.list}>
            <span className={styles.description_lang}>[Sr]</span>
            {specifications.map(({ id, valueTranslate }) => (
              <span className={styles.description_text} key={`${id}-translate`}>
                {valueTranslate}
              </span>
            ))}
          </div>
        </div>
      )}

      {selectedInformation === DEVICE_INFORMATION_TABS[1].id && (
        <div className={styles.description}>
          <p>
            <span className={styles.description_lang}>[En]</span>
            <span className={styles.description_text}>{description}</span>
          </p>
          <p className={styles.description_text}>
            <span className={styles.description_lang}>[Sr]</span>
            <span className={styles.description_text}>
              {descriptionTranslate}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

DeviceInformationBlock.propTypes = {
  selectedInformation: PropTypes.string,
  description: PropTypes.string,
  descriptionTranslate: PropTypes.string,
  specifications: PropTypes.arrayOf(PropTypes.object),
};

export default DeviceInformationBlock;
