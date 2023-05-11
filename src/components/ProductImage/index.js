import React, { useState, useEffect } from "react";
import styles from "./ProductImage.module.css";
import NextIcon from "../SVGs/NextIcon";
import PreviousIcon from "../SVGs/PreviousIcon";
import { useSwipeable } from "react-swipeable";

function ProductImage(props) {
  const [thumbnailScrollIndex, setThumbnailScrollIndex] = useState(0);
  const [currentThumbnailWidth, setCurrentThumbnailWidth] = useState(7);

  const thumbnails = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const visibleThumbnails = 4;
  const thumbnailWidth = 7;
  const thumbnailMargin = 1;

  const handleNextClick = () => {
    const nextIndex = (props.selectedIndex + 1) % thumbnails.length;
    props.setSelectedIndex(nextIndex);
  };

  const handlePreviousClick = () => {
    const previousIndex =
      (props.selectedIndex + thumbnails.length - 1) % thumbnails.length;
    props.setSelectedIndex(previousIndex);
  };

  const scrollThumbnailsLeft = () => {
    if (thumbnailScrollIndex === 0) {
      setThumbnailScrollIndex(thumbnails.length - visibleThumbnails);
    } else {
      setThumbnailScrollIndex(thumbnailScrollIndex - 1);
    }
  };

  const scrollThumbnailsRight = () => {
    if (thumbnailScrollIndex + visibleThumbnails >= thumbnails.length) {
      setThumbnailScrollIndex(0);
    } else {
      setThumbnailScrollIndex(thumbnailScrollIndex + 1);
    }
  };

  const handleThumbnailClick = (index) => {
    props.setSelectedIndex(index);
  };

  const updateThumbnailWidth = () => {
    if (window.innerWidth <= 1540) {
      setCurrentThumbnailWidth(5);
    } else {
      setCurrentThumbnailWidth(thumbnailWidth);
    }
  };

  useEffect(() => {
    updateThumbnailWidth();
    window.addEventListener("resize", updateThumbnailWidth);

    return () => {
      window.removeEventListener("resize", updateThumbnailWidth);
    };
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePreviousClick,
  });

  return (
    <div className={styles["product-images"]}>
      <div className={`${styles["image-main"]} ${styles["main-image"]}`}>
        <div
          {...swipeHandlers}
          className={styles["image-container"]}
          style={{
            transform: `translateX(-${
              (props.selectedIndex * 100) / thumbnails.length
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
        <div className={styles.next} onClick={handleNextClick}>
          <NextIcon />
        </div>
        <div className={styles.previous} onClick={handlePreviousClick}>
          <PreviousIcon />
        </div>
      </div>
      <div className={styles["thumbnails-wrapper"]}>
        <div
          className={styles.thumbnailArrowLeft}
          onClick={scrollThumbnailsLeft}
        >
          <PreviousIcon />
        </div>
        <div className={styles.thumbnails}>
          <div
            className={styles["thumbnails-container"]}
            style={{
              transform: `translateX(-${
                thumbnailScrollIndex * (currentThumbnailWidth + thumbnailMargin)
              }rem)`,
            }}
          >
            {thumbnails.map((_, index) => (
              <img
                src={`/images/image-product-${index + 1}.png`}
                alt=""
                key={index}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
        <div
          className={styles.thumbnailArrowRight}
          onClick={scrollThumbnailsRight}
        >
          <NextIcon />
        </div>
      </div>
    </div>
  );
}

export default ProductImage;
