import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AddItems.module.css";
import CartIcon from "../SVGs/CartIcon";

function AddItems(props) {
  const { t } = useTranslation();

  const handleMinus = () => {
    if (props.count > 1) {
      props.setCount(props.count - 1);
      props.setTotal(props.total - 44.99);
    }
  };

  const handlePlus = () => {
    if (props.count < 10) {
      props.setCount(props.count + 1);
      props.setTotal(props.total + 44.99);
    }
  };

  const handleAddToCart = () => {
    props.setUpdatedCount(props.count + props.updatedCount);
    props.setUpdatedTotal(props.total + props.updatedTotal);
    props.setCount(1);
    props.setTotal(44.99);
    props.toggleDropDownHandler();
  };

  return (
    <div className={styles["add-to-cart"]}>
      <div className={styles["add-items"]}>
        <div className={styles.modifiers} onClick={handleMinus}>
          <img src="/images/icon-minus.svg"></img>
        </div>
        <h3>{props.count}</h3>
        <div className={styles.modifiers} onClick={handlePlus}>
          <img src="/images/icon-plus.svg"></img>
        </div>
      </div>
      <p className={styles["add-to-cart__price"]}>{`₾${props.total.toFixed(
        2
      )}`}</p>
      <button
        className={styles["add-to-cart__button"]}
        onClick={handleAddToCart}
      >
        {
          <div style={{ fill: "white" }}>
            <CartIcon />
          </div>
        }
        <p className={styles["add-to-cart__button--text"]}>
          {t("add_to_cart")}
        </p>
      </button>
    </div>
  );
}

export default AddItems;
