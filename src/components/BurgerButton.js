import React from "react";

import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
function BurgerButton({ modalIsOpen, openModal, closeModal }) {
  return (
    <>
      {!modalIsOpen ? (
        <button className="burger" onClick={openModal}>
          <HiOutlineMenu className="burger__ico" />
        </button>
      ) : (
        <button className="burger" onClick={closeModal}>
          <HiOutlineX className="burger__ico" />
        </button>
      )}
    </>
  );
}

export default BurgerButton;
