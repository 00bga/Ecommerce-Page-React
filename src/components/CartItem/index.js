import React, { useState } from "react";
import styles from "./CartItem.module.css";
import BinIcon from "../SVGs/BinIcon";

function CartItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const fill = isHovered ? "hsl(26, 100%, 55%)" : "#C3CAD9";
  
  return (
    <div className={styles.product}>
      <div className={styles["product-description"]}>
        <img
          className={styles["cart-product-image"]}
          src={"/images/image-product-1-thumbnail.png"}
          alt="Product Image"
        ></img>
        <p className={styles["product-name"]}>
          {`Fall Limited Edition Sneakers $125.00 x ${props.updatedCount} `}
          <span
            className={styles["product-total-price"]}
          >{`$${props.updatedTotal}.00`}</span>
        </p>
        <div
          className={styles.delete}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={props.handleDelete}
        >
          <BinIcon fill={fill}></BinIcon>
        </div>
      </div>
      <a href="">
        <button className={styles["product-checkout"]}>Checkout</button>
      </a>
    </div>
  );
}

export default CartItem;
