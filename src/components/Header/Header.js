import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import Social from "../Social/Social";
import BurgerButton from "../BurgerButton/BurgerButton";
import Modal from "../Modal/Modal";

function Header({
  menuItems,
  modalIsOpen,
  accordionIsOpen,
  openModal,
  toggleAccordion,
  closeModal,
}) {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <div className="header__navigation">
          <NavMenu menuItems={menuItems} />
          <Social />
        </div>
      </div>
      <BurgerButton
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Modal
        modalIsOpen={modalIsOpen}
        accordionIsOpen={accordionIsOpen}
        toggleAccordion={toggleAccordion}
        closeModal={closeModal}
        menuItems={menuItems}
      />
    </header>
  );
}

export default Header;
