import { useState } from "react";

import styles from "./SelectedDevices.module.less";

import { BodySelectedDevices, HeaderSelectedDevices } from "./core";

function SelectedDevices() {
  const [headphones, setHeadphones] = useState("");

  return (
    <div className={styles.main}>
      <HeaderSelectedDevices />
      <BodySelectedDevices />
    </div>
  );
}

export default SelectedDevices;
