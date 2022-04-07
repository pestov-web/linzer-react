import React from "react";
import { MdDehaze } from "react-icons/md";
import "./BurgerButton.scss";
function BurgerButton({ openModal }) {
  return (
    <button className="burger" onClick={openModal}>
      <MdDehaze className="burger__ico" />
    </button>
  );
}

export default BurgerButton;
