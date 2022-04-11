import React from "react";
import "./Accordion.scss";

import { NavLink } from "react-router-dom";

function Accordion({ dropDownItems, accordionIsOpen }) {
  return (
    <ul
      className={!accordionIsOpen ? "accordion" : "accordion accordion_active"}
    >
      {dropDownItems.map((item, index) => (
        <li key={index} className="accordion__item">
          <NavLink className="accordion__link" to={item.link}>
            {item.nameRu}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Accordion;
