import React from "react";
import styles from "./HamburgerButton.module.css";

function HamburgerButton(props) {
  return (
    <div className={styles["hamburger-button"]}>
      <button
        className={`${styles["hamburger-menu"]} ${
          props.isActive ? styles["is-active"] : ""
        }`}
        onClick={props.handleClick}
      >
        <span className={styles["line"]}></span>
        <span className={styles["line"]}></span>
        <span className={styles["line"]}></span>
      </button>
    </div>
  );
}

export default HamburgerButton;
