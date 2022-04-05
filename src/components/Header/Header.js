import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import Social from "../Social/Social";

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <div className="header__navigation">
          <NavMenu />
          <Social />
        </div>
      </div>
    </header>
  );
}

export default Header;
