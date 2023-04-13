import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./SelectedDevicesCard.module.less";
import Link from "next/link";

function SelectedDevicesCard({ id, image, title, titleTranslate, className }) {
  const cardStyles = clsx(styles.main, className);
  const titleTranslateStyles = clsx(styles.title, styles.title__translate);

  return (
    <Link href={`/#${id}`} className={cardStyles} scroll={false}>
      <div>
        <img className={styles.image} src={image} alt="" />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={titleTranslateStyles}>{titleTranslate}</span>
    </Link>
  );
}

SelectedDevicesCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  titleTranslate: PropTypes.string,
  modelName: PropTypes.string,
  className: PropTypes.string,
};

export default SelectedDevicesCard;
