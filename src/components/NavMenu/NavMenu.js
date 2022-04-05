import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../utils/navMenu";
import("./NavMenu.scss");

function NavMenu(props) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {menuItems.map((item, index) => (
          <li key={index} className="nav__item">
            <NavLink className="nav__link" to={item.link}>
              {item.nameRu}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
