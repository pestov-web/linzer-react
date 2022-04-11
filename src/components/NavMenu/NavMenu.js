import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import("./NavMenu.scss");

function NavMenu({ menuItems }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {menuItems.map((item, index) =>
          item.dropDown ? (
            <li key={index} className="nav__item">
              <AnchorLink className="nav__link" href={item.anchor}>
                {item.nameRu}
              </AnchorLink>
            </li>
          ) : (
            <li key={index} className="nav__item">
              <AnchorLink className="nav__link" href={item.anchor}>
                {item.nameRu}
              </AnchorLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;
