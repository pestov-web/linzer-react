import React from "react";
import { Link } from "react-router-dom";
import("./Social.scss");

function Social(props) {
  return (
    <ul className="social">
      <li className="social__item">
        <Link className="social__link" to="/#"></Link>
      </li>
      <li className="social__item">
        <Link className="social__link" to="/#"></Link>
      </li>
      <li className="social__item">
        <Link className="social__link" to="/#"></Link>
      </li>
    </ul>
  );
}

export default Social;
