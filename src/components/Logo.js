import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <h1>
        <Link to="/" className="logo__text">
          <span className="logo__text_type_green">lin</span>zer
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
