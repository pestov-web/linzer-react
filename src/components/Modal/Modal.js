import "./Modal.scss";
import Modal from "react-modal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import Accordion from "../Accordion/Accordion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

Modal.setAppElement("body");

function ModalMenu({
  modalIsOpen,
  accordionIsOpen,
  toggleAccordion,
  closeModal,
  menuItems,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Burger Modal"
        overlayClassName="modal-menu__overlay"
        className="modal-menu"
      >
        <nav>
          <ul className="modal-menu__nav">
            {menuItems.map((item, index) =>
              !item.dropDown ? (
                <li key={index} className="modal-menu__nav-item">
                  <AnchorLink
                    className="modal-menu__nav-link"
                    href={item.anchor}
                    onClick={closeModal}
                  >
                    {item.nameRu}
                  </AnchorLink>
                </li>
              ) : (
                <li key={index} className="modal-menu__nav-item">
                  <AnchorLink
                    className="modal-menu__nav-link"
                    href={item.anchor}
                    onClick={toggleAccordion}
                  >
                    {item.nameRu}
                    {!accordionIsOpen ? (
                      <HiChevronDown className="modal-menu__nav-link-ico" />
                    ) : (
                      <HiChevronUp className="modal-menu__nav-link-ico" />
                    )}

                    <Accordion
                      dropDownItems={item.dropDown}
                      accordionIsOpen={accordionIsOpen}
                    />
                  </AnchorLink>
                </li>
              )
            )}
          </ul>
        </nav>
      </Modal>
    </div>
  );
}

export default ModalMenu;
