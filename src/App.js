import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Body from "./components/Body";
import ModalWindow from "./components/ModalWindow";
import HamburgerMenu from "./components/Hamburger/HamburgerMenu";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [updatedTotal, setUpdatedTotal] = useState(0);
  const [cartItem, setCartItem] = useState({});
  const [badge, setBadge] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [cartColor, setCartColor] = useState("#C3CAD9");
  const [focus, setFocus] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  const hamburgerMenu = isActive ? (
    <HamburgerMenu
      onClose={handleCloseMenu}
      isActive={isActive}
      hamburgerClicked={hamburgerClicked}
    />
  ) : (
    ""
  );

  const handleModalBackgroundClick = (e) => {
    if (e.target.closest(`.${styles.modal}`)) {
      return;
    }
    setFocus(false);
  };

  const handleCloseModal = () => {
    setFocus(false);
  };

  const modalWindow = focus ? (
    <div
      className={styles["modal-background"]}
      onClick={handleModalBackgroundClick}
    >
      <div className={styles.modal}>
        <ModalWindow handleCloseModal={handleCloseModal} />
      </div>
    </div>
  ) : (
    ""
  );

  const handleFocus = () => {
    setFocus(true);
  };

  const toggleDropDownHandler = () => {
    setCartColor(cartColor === "#C3CAD9" ? "black" : "#C3CAD9");
    setDropDownOpen(!dropDownOpen);
  };

  const handleDelete = () => {
    setUpdatedCount(0);
    setUpdatedTotal(0);
  };

  return (
    <main
      onClick={(e) => {
        if (dropDownOpen && e.target.closest(".Cart_cart__wijC3") === null) {
          setDropDownOpen(!dropDownOpen);
          setCartColor(cartColor === "#C3CAD9" ? "black" : "#C3CAD9");
        }
      }}
    >
      <div className={styles["main-card"]}>
        {modalWindow}
        {hamburgerMenu}
        <Header
          toggleDropDownHandler={toggleDropDownHandler}
          dropDownOpen={dropDownOpen}
          cartColor={cartColor}
          cartItem={cartItem}
          badge={badge}
          setBadge={setBadge}
          updatedCount={updatedCount}
          updatedTotal={updatedTotal}
          setUpdatedCount={setUpdatedCount}
          setUpdatedTotal={setUpdatedTotal}
          handleDelete={handleDelete}
          isActive={isActive}
          handleClick={handleClick}
          handleHamburgerClick={handleHamburgerClick}
        />
        <Body
          count={count}
          setCount={setCount}
          total={total}
          setTotal={setTotal}
          setCartItem={setCartItem}
          badge={badge}
          setBadge={setBadge}
          updatedCount={updatedCount}
          updatedTotal={updatedTotal}
          setUpdatedCount={setUpdatedCount}
          setUpdatedTotal={setUpdatedTotal}
          handleFocus={handleFocus}
        />
      </div>
    </main>
  );
}

export default App;
