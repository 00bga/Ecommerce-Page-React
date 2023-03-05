import React from "react";
import styles from "./HamburgerMenu.module.css";

function HamburgerMenu(props) {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div className={styles.background} onClick={handleBackgroundClick}>
      <div className={styles.menu}>
        <div className={styles["navigation-buttons__hamburger"]}>
          <a href="" className={styles["navigation-button__hamburger"]}>
            Collections
          </a>
          <a href="" className={styles["navigation-button__hamburger"]}>
            Men
          </a>
          <a href="" className={styles["navigation-button__hamburger"]}>
            Women
          </a>
          <a href="" className={styles["navigation-button__hamburger"]}>
            About
          </a>
          <a href="" className={styles["navigation-button__hamburger"]}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
