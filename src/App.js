import React, { useState, useRef } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Body from "./components/Body";
import ModalWindow from "./components/ModalWindow";
import HamburgerMenu from "./components/Hamburger/HamburgerMenu";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(44.99);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [updatedTotal, setUpdatedTotal] = useState(0);
  const [cartItem, setCartItem] = useState({});
  const [badge, setBadge] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [cartColor, setCartColor] = useState("#C3CAD9");
  const [focus, setFocus] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        <ModalWindow
          handleCloseModal={handleCloseModal}
          initialIndex={selectedIndex}
        />
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

  const cartRef = useRef(null);

  return (
    <main
      onClick={(e) => {
        if (dropDownOpen && !cartRef.current.contains(e.target)) {
          setDropDownOpen(false);
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
          cartRef={cartRef}
          total={total}
        />
        <Routes>
          <Route
            path="/"
            element={
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
                toggleDropDownHandler={toggleDropDownHandler}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
