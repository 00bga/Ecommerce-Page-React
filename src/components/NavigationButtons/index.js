import React from "react";
import styles from "./NavigationButtons.module.css";

function NavigationButtons() {
  return (
    <div className={styles["navigation-buttons"]}>
      <a href="" className={styles["navigation-button"]}>
        Collections
      </a>
      <a href="" className={styles["navigation-button"]}>
        Men
      </a>
      <a href="" className={styles["navigation-button"]}>
        Women
      </a>
      <a href="" className={styles["navigation-button"]}>
        About
      </a>
      <a href="" className={styles["navigation-button"]}>
        Contact
      </a>
    </div>
  );
}

export default NavigationButtons;
