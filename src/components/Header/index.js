import React from "react";
import styles from "./Header.module.css";
import Cart from "../Cart";
import CartIcon from "../SVGs/CartIcon";
import NavigationButons from "../NavigationButtons";
import HamburgerButton from "../Hamburger/HamburgerButton";

function Header(props) {
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
          <a href="" className={styles.logo}>
            <img src="/images/logo.svg"></img>
          </a>
          <NavigationButons />
        </div>
        <div className={styles["cart-and-avatar"]}>
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
          <img
            className={styles["avatar-icon"]}
            src={"/images/image-avatar.png"}
          ></img>
          <div className={styles["cart-drop-down"]}>
            {props.dropDownOpen && (
              <Cart
                cartItem={props.cartItem}
                updatedCount={props.updatedCount}
                setUpdatedCount={props.setUpdatedCount}
                updatedTotal={props.updatedTotal}
                setUpdatedTotal={props.setUpdatedTotal}
                handleDelete={props.handleDelete}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
