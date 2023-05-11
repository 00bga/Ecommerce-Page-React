import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./NavigationButtons.module.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div
      className={styles["navigation-buttons"]}
      style={{
        borderBottom: isActive ? "6px solid hsl(26, 100%, 55%)" : "",
      }}
    >
      <Link
        to={to}
        {...props}
        className={`${styles["navigation-button"]} ${
          isActive ? styles["active"] : ""
        }`}
      >
        {children}
      </Link>
    </div>
  );
}

function NavigationButtons() {
  const { t } = useTranslation();

  return (
    <>
      <CustomLink to="/">{t("home")}</CustomLink>
      <CustomLink to="/contact">{t("contact")}</CustomLink>
    </>
  );
}

export default NavigationButtons;
