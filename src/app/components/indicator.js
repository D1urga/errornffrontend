import React from "react";
import styles from "../components/styles/indicator.module.css";

export default function Indicator() {
  return (
    <div>
      <div className={styles.animations}>
        <div className={styles.animation1}></div>
        <div className={styles.animation2}></div>
        <div className={styles.animation3}></div>
        <div className={styles.animation4}></div>
      </div>
    </div>
  );
}
