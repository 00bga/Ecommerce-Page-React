import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProductDescription.module.css";
import AddItems from "../AddItems";

function ProductDescription(props) {
  const { t } = useTranslation();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const colors = t("colors", { returnObjects: true });

  return (
    <div className={styles["product-description__position"]}>
      <div className={styles["product-description"]}>
        <h5>{t("title")}</h5>
        <p className={styles["description-text"]}>{t("material")}</p>
        <p>{t("height")}</p>
        <p>{t("made_in")}</p>
        <p>{t("size_per_size")}</p>
        <div className={styles.price}>
          <h3>₾44.99</h3>
          <p className={styles.sale}>25%</p>
        </div>
        <p className={styles["old-price"]}>₾59.99</p>
        <div className={styles["product-attributes"]}>
          <div className={styles["product-size"]}>
            <div className={styles["select-wrapper"]}>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className={styles["select-size"]}
              >
                <option value="" disabled>
                  {t("select_size")}
                </option>
                {[...Array(9).keys()].map((_, index) => {
                  const size = 36 + index;
                  return (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={styles["product-color"]}>
            <div className={styles["select-wrapper"]}>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className={styles["select-size"]}
              >
                <option value="" disabled>
                  {t("select_color")}
                </option>
                {colors.map((color, index) => (
                  <option key={index} value={color.toLowerCase()}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
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
          toggleDropDownHandler={props.toggleDropDownHandler}
        />
      </div>
    </div>
  );
}

export default ProductDescription;
