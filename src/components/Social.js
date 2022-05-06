import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <ul className="social">
      <li className="social__item">
        <a className="social__link" href="https://twitter.com/" aria-label='Twitter'  target='_blank' rel="noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link" href="https://www.facebook.com/"  aria-label='FaceBook'  target='_blank' rel="noreferrer">
          <FaFacebookF />
        </a>
      </li>
      <li className="social__item" >
        <a className="social__link" href="https://www.instagram.com/" aria-label='Instagram' target='_blank' rel="noreferrer">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
}

export default Social;
