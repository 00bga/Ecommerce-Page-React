import React from "react";
import styles from "./Body.module.css";
import ProductImage from "../ProductImage";
import ProductDescription from "../ProductDescription";

function Body(props) {
  return (
    <div className={styles["product-position"]}>
      <div className={styles.product}>
        <ProductImage handleFocus={props.handleFocus} />
        <ProductDescription
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

export default Body;
