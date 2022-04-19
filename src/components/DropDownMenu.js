import React from "react";
import { Link } from "react-router-dom";

function DropDownMenu({ menuItems }) {
  return (
    <ul className="nav__submenu">
      {menuItems.map((item, index) => (
        <li key={index} className="nav__submenu-item ">
          <Link className="nav__submenu-link" to={item.link}>
            {item.nameRu}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DropDownMenu;
