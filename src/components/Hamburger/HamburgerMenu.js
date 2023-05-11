import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HamburgerMenu.module.css";
import { Link } from "react-router-dom";

function HamburgerMenu(props) {
  const { t } = useTranslation();

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  function CustomLink({ to, children, ...props }) {
    return (
      <div className={styles["navigation-buttons__hamburger"]}>
        <Link
          to={to}
          {...props}
          onClick={props.onClose}
          className={styles["navigation-button__hamburger"]}
        >
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.background} onClick={handleBackgroundClick}>
      <div className={styles.menu}>
        <CustomLink to="/" onClose={props.onClose}>
        {t("home")}
        </CustomLink>
        <CustomLink to="/contact" onClose={props.onClose}>
        {t("contact")}
        </CustomLink>
      </div>
    </div>
  );
}

export default HamburgerMenu;
