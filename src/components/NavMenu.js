import React from "react";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ScrollToButton from "./ScrollToButton";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

import { HashLink } from "react-router-hash-link";

function NavMenu({ menuItems, toggleDropDown, dropDownIsOpen, currenPath }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {menuItems.map((item, index) =>
          !item.dropDown ? (
            <li key={index} className="nav__item">
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
            <li key={index} className="nav__item">
              <ScrollToButton toId={item.anchor}>
                {item.nameRu}
                {!dropDownIsOpen ? (
                  <HiChevronDown className="nav__link-ico" />
                ) : (
                  <HiChevronUp className="nav__link-ico" />
                )}
              </ScrollToButton>
              <DropDownMenu
                dropDownMenu={item.dropDown}
                toggleDropDown={toggleDropDown}
                dropDownIsOpen={dropDownIsOpen}
              />
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;
