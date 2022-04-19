import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <ul className="social">
      <li className="social__item">
        <Link className="social__link" to="/#">
          <FaTwitter />
        </Link>
      </li>
      <li className="social__item">
        <Link className="social__link" to="/#">
          <FaFacebookF />
        </Link>
      </li>
      <li className="social__item">
        <Link className="social__link" to="/#">
          <FaInstagram />
        </Link>
      </li>
    </ul>
  );
}

export default Social;
