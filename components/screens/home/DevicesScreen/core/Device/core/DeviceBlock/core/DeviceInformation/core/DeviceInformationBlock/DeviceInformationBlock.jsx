import PropTypes from "prop-types";

import styles from "./DeviceInformationBlock.module.less";

function DeviceInformationBlock({ description, descriptionTranslate }) {
  return (
    <div className={styles.main}>
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
    </div>
  );
}

DeviceInformationBlock.propTypes = {
  description: PropTypes.string,
  descriptionTranslate: PropTypes.string,
};

export default DeviceInformationBlock;
