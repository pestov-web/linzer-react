import Modal from "react-modal";

import React from "react";
import Accordion from "./Accordion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ScrollToButton from "./ScrollToButton";
import { HashLink } from "react-router-hash-link";

Modal.setAppElement("body");

function ModalMenu({
  modalIsOpen,
  accordionIsOpen,
  toggleAccordion,
  closeModal,
  menuItems,
  currenPath,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Burger Modal"
        overlayClassName="modal-menu__overlay"
        className="modal-menu"
        currenPath={currenPath}
      >
        <nav>
          <ul className="modal-menu__nav">
            {menuItems.map((item, index) =>
              !item.dropDown ? (
                <li key={index} className="modal-menu__nav-item">
                  {currenPath === "/" ? (
                    <ScrollToButton toId={item.anchor}>
                      {item.nameRu}
                    </ScrollToButton>
                  ) : (
                    <HashLink className="nav__link" to={`/#${item.anchor}`}>
                      {item.nameRu}
                    </HashLink>
                  )}
                </li>
              ) : (
                <li key={index} className="modal-menu__nav-item">
                  {currenPath === "/" ? (
                    <>
                      {" "}
                      <ScrollToButton
                        toId={item.anchor}
                        onClick={toggleAccordion}
                      >
                        {item.nameRu}{" "}
                        {!accordionIsOpen ? (
                          <HiChevronDown className="modal-menu__nav-link-ico" />
                        ) : (
                          <HiChevronUp className="modal-menu__nav-link-ico" />
                        )}
                      </ScrollToButton>{" "}
                      <Accordion
                        dropDownItems={item.dropDown}
                        accordionIsOpen={accordionIsOpen}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <HashLink
                        className="nav__link"
                        to={`/#${item.anchor}`}
                        onClick={toggleAccordion}
                      >
                        {item.nameRu}{" "}
                        {!accordionIsOpen ? (
                          <HiChevronDown className="modal-menu__nav-link-ico" />
                        ) : (
                          <HiChevronUp className="modal-menu__nav-link-ico" />
                        )}
                      </HashLink>
                      <Accordion
                        dropDownItems={item.dropDown}
                        accordionIsOpen={accordionIsOpen}
                      />
                    </>
                  )}
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
