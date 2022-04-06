import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../utils/navMenu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import("./NavMenu.scss");

function NavMenu(props) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {menuItems.map((item, index) => (
          <li key={index} className="nav__item">
            <AnchorLink className="nav__link" href={item.anchor}>
              {item.nameRu}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
