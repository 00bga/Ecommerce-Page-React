import React, { useState } from "react";
import styles from "./ModalWindow.module.css";
import NextIcon from "../SVGs/NextIcon";
import PreviousIcon from "../SVGs/PreviousIcon";
import CloseIcon from "../SVGs/CloseIcon";

function ModalWindow(props) {
  const [currentImage, setCurrentImage] = useState(
    "/images/image-product-1.png"
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const thumbnails = [1, 1, 1, 1];

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
      <img className={styles["image-main"]} src={currentImage} alt="" />
      <div className={styles.thumbnails}>
        {thumbnails.map((thumbnail, index) => (
          <img
            src={`/images/image-product-${index + 1}.png`}
            alt=""
            key={index}
            onClick={() => {
              setCurrentImage(`/images/image-product-${index + 1}.png`);
              setSelectedIndex(index);
            }}
            style={{
              border: selectedIndex === index ? "2.5px solid rgb(0, 0, 0)" : "",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalWindow;
