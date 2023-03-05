import React from "react";
import styles from "./AddItems.module.css";
import CartIcon from "../SVGs/CartIcon";

function AddItems(props) {
  const handleMinus = () => {
    if (props.count > 0) {
      props.setCount(props.count - 1);
      props.setTotal(props.total - 125);
    }
  };

  const handlePlus = () => {
    if (props.count < 10) {
      props.setCount(props.count + 1);
      props.setTotal(props.total + 125);
    }
  };

  const handleAddToCart = () => {
    props.setUpdatedCount(props.count + props.updatedCount);
    props.setUpdatedTotal(props.total + props.updatedTotal);
    props.setCount(0);
    props.setTotal(0);
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
      <p className={styles["add-to-cart__price"]}>{`$${props.total}.00`}</p>
      <button
        className={styles["add-to-cart__button"]}
        onClick={handleAddToCart}
      >
        {
          <div style={{ fill: "white" }}>
            <CartIcon />
          </div>
        }
        <p className={styles["add-to-cart__button--text"]}>Add to Cart</p>
      </button>
    </div>
  );
}

export default AddItems;
