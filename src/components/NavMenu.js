import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

function NavMenu({ menuItems, toggleDropDown, dropDownIsOpen }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {menuItems.map((item, index) =>
          !item.dropDown ? (
            <li key={index} className="nav__item">
              <AnchorLink className="nav__link" href={item.anchor}>
                {item.nameRu}
              </AnchorLink>
            </li>
          ) : (
            <li key={index} className="nav__item">
              <AnchorLink
                className="nav__link"
                href={item.anchor}
                onClick={toggleDropDown}
              >
                {item.nameRu}
                {!dropDownIsOpen ? (
                  <HiChevronDown className="nav__link-ico" />
                ) : (
                  <HiChevronUp className="nav__link-ico" />
                )}
              </AnchorLink>
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
