import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Cart.module.css";
import CartItem from "../CartItem";

const Cart = forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <div ref={ref} className={styles.cart}>
      <div className={styles["cart-header"]}>
        <h3>{t("cart")}</h3>
      </div>
      <div className={styles["cart-body"]}>
        {props.updatedCount > 0 ? (
          <CartItem
            updatedCount={props.updatedCount}
            updatedTotal={props.updatedTotal}
            handleDelete={props.handleDelete}
            total={props.total}
          />
        ) : (
          <p>{t("cart_empty")}</p>
        )}
      </div>
    </div>
  );
});

export default Cart;
