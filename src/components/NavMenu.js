import React from "react";

import { HiChevronDown } from "react-icons/hi";
import ScrollToButton from "./ScrollToButton";

import { HashLink } from "react-router-hash-link";
import DropDownMenu from "./DropDownMenu";

function NavMenu({ menuItems, currenPath }) {
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
            <li key={index} className="nav__item nav__item-sub">
              {currenPath === "/" ? (
                <>
                  <ScrollToButton toId={item.anchor}>
                    {item.nameRu}
                    <HiChevronDown className="nav__link-ico" />
                  </ScrollToButton>
                  <DropDownMenu menuItems={item.dropDown} />
                </>
              ) : (
                <>
                  <HashLink className="nav__link" to={`/#${item.anchor}`}>
                    {item.nameRu}
                    <HiChevronDown className="nav__link-ico" />
                  </HashLink>
                  <DropDownMenu menuItems={item.dropDown} />
                </>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;
