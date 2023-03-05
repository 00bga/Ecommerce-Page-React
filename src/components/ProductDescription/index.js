import React from "react";
import styles from "./ProductDescription.module.css";
import AddItems from "../AddItems";

function ProductDescription(props) {
  return (
    <div className={styles["product-description__position"]}>
      <div className={styles["product-description"]}>
        <h5>Sneaker Company</h5>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className={styles["description-text"]}>
          These low profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
        <div className={styles.price}>
          <h3>$125.00</h3>
          <p className={styles.sale}>50%</p>
        </div>
        <p className={styles["old-price"]}>$250.00</p>
        <AddItems
          setCartItem={props.setCartItem}
          count={props.count}
          total={props.total}
          setCount={props.setCount}
          setTotal={props.setTotal}
          handleAddtoCart={props.handleAddtoCart}
          updatedCount={props.updatedCount}
          updatedTotal={props.updatedTotal}
          setUpdatedCount={props.setUpdatedCount}
          setUpdatedTotal={props.setUpdatedTotal}
        />
      </div>
    </div>
  );
}

export default ProductDescription;
