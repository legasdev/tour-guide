import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./SelectedDevicesCard.module.less";

function SelectedDevicesCard({
  image,
  title,
  titleTranslate,
  modelName,
  className,
}) {
  const cardStyles = clsx(styles.main, className);
  const titleTranslateStyles = clsx(styles.title, styles.title__translate);

  return (
    <div className={cardStyles}>
      <div>
        <img className={styles.image} src={image} alt="" />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={titleTranslateStyles}>{titleTranslate}</span>
      <span className={styles.modelName}>{modelName}</span>
    </div>
  );
}

SelectedDevicesCard.propTypes = {
  image: PropTypes,
  title: PropTypes,
  titleTranslate: PropTypes,
  modelName: PropTypes,
  className: PropTypes,
};

export default SelectedDevicesCard;
