import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Social from "./Social";
import BurgerButton from "./BurgerButton";
import Modal from "./Modal";

function Header({
  menuItems,
  modalIsOpen,
  accordionIsOpen,
  openModal,
  toggleAccordion,
  closeModal,
  currenPath,
}) {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <div className="header__navigation">
          <NavMenu menuItems={menuItems} currenPath={currenPath} />
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
        currenPath={currenPath}
      />
    </header>
  );
}

export default Header;
