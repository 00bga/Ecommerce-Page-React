import React, { useState } from "react";
import styles from "./ModalWindow.module.css";
import NextIcon from "../SVGs/NextIcon";
import PreviousIcon from "../SVGs/PreviousIcon";
import CloseIcon from "../SVGs/CloseIcon";

function ModalWindow(props) {
  const [selectedIndex, setSelectedIndex] = useState(props.initialIndex);
  const [currentImage, setCurrentImage] = useState(
    `/images/image-product-${props.initialIndex + 1}.png`
  );

  const thumbnails = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const handleNextClick = () => {
    const nextIndex = (selectedIndex + 1) % thumbnails.length;
    setCurrentImage(`/images/image-product-${nextIndex + 1}.png`);
    setSelectedIndex(nextIndex);
  };

  const handlePreviousClick = () => {
    const previousIndex =
      (selectedIndex + thumbnails.length - 1) % thumbnails.length;
    setCurrentImage(`/images/image-product-${previousIndex + 1}.png`);
    setSelectedIndex(previousIndex);
  };

  return (
    <div className={styles["product-images"]}>
      <div className={styles.close} onClick={props.handleCloseModal}>
        <CloseIcon />
      </div>
      <div className={styles.next} onClick={handleNextClick}>
        <NextIcon />
      </div>
      <div className={styles.previous} onClick={handlePreviousClick}>
        <PreviousIcon />
      </div>
      <div className={`${styles["image-main"]} ${styles["main-image"]}`}>
        <div
          className={styles["image-container"]}
          style={{
            transform: `translateX(-${
              (selectedIndex * 100) / thumbnails.length
            }%)`,
          }}
        >
          {thumbnails.map((_, index) => (
            <img
              key={index}
              src={`/images/image-product-${index + 1}.png`}
              alt=""
              className={styles["image-main"]}
              onClick={props.handleFocus}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
