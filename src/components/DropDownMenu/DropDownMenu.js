import React from "react";
import "./DropDownMenu.scss";
import { Link } from "react-router-dom";

function DropDownMenu({ dropDownMenu, dropDownIsOpen, toggleDropDown }) {
  return (
    <div>
      <ul className={!dropDownIsOpen ? "dropdown" : "dropdown dropdown_active"}>
        {dropDownMenu.map((item, index) => (
          <li key={index} className="dropdown__item">
            <Link
              className="dropdown__link"
              to={item.link}
              onClick={toggleDropDown}
            >
              {item.nameRu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;
