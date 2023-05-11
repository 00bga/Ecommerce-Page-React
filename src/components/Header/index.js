import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import Cart from "../Cart";
import CartIcon from "../SVGs/CartIcon";
import NavigationButons from "../NavigationButtons";
import HamburgerButton from "../Hamburger/HamburgerButton";

function Header(props) {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("ge");

  return (
    <header>
      <div className={styles.hamburger} onClick={props.handleHamburgerClick}>
        <HamburgerButton
          handleClick={props.handleClick}
          isActive={props.isActive}
        />
      </div>
      <nav>
        <div className={styles["logo-and-nav"]}>
          <a href="/" className={styles.logo}>
            <img src="/images/logo.svg"></img>
          </a>
          <NavigationButons />
        </div>
        <div className={styles["cart-and-language"]}>
          <div className={styles.cart}>
            <div
              onClick={props.toggleDropDownHandler}
              className={styles.cartIcon}
              style={{ fillOpacity: props.cartColor === "#C3CAD9" ? 0.5 : 1 }}
            >
              {props.updatedCount > 0 ? (
                <div className={styles.badge}>{props.updatedCount}</div>
              ) : (
                ""
              )}
              <CartIcon />
            </div>
          </div>
          <div className={styles["language-changer"]}>
            <a
              className={`${styles.georgian} ${
                selectedLanguage === "ge" ? styles.selectedLanguage : ""
              }`}
              onClick={() => {
                setSelectedLanguage("ge");
                i18n.changeLanguage("ge");
              }}
            >
              GE
            </a>
            <a
              className={`${styles.english} ${
                selectedLanguage === "en" ? styles.selectedLanguage : ""
              }`}
              onClick={() => {
                setSelectedLanguage("en");
                i18n.changeLanguage("en");
              }}
            >
              EN
            </a>
            <a
              className={`${styles.russian} ${
                selectedLanguage === "ru" ? styles.selectedLanguage : ""
              }`}
              onClick={() => {
                setSelectedLanguage("ru");
                i18n.changeLanguage("ru");
              }}
            >
              RU
            </a>
          </div>

          <div className={styles["cart-drop-down"]}>
            {props.dropDownOpen && (
              <Cart
                cartItem={props.cartItem}
                updatedCount={props.updatedCount}
                setUpdatedCount={props.setUpdatedCount}
                updatedTotal={props.updatedTotal}
                setUpdatedTotal={props.setUpdatedTotal}
                handleDelete={props.handleDelete}
                ref={props.cartRef}
                total={props.total}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
