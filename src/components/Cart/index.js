import React from "react";
import styles from "./Cart.module.css";
import CartItem from "../CartItem";

function Cart(props) {
  return (
    <div className={styles.cart}>
      <div className={styles["cart-header"]}>
        <h3>Cart</h3>
      </div>
      <div className={styles["cart-body"]}>
        {props.updatedCount > 0 ? (
          <CartItem
            updatedCount={props.updatedCount}
            updatedTotal={props.updatedTotal}
            handleDelete={props.handleDelete}
          />
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
