import React from "react";
import { Link } from "react-router-dom";

import { PARTNERS } from "../../utils/images";

import("./Partners.scss");

function Partners(props) {
  return (
    <section className="section partners">
      <div className="section-title">
        <h2 className="section-title-text">НАШИ ПАРТНЕРЫ</h2>s
      </div>
      <ul className="partners__list">
        {PARTNERS.map((item, index) => (
          <li key={index} className="partners__item">
            <Link to={item.link}>
              <img
                className="partners__item-image"
                src={item.image}
                alt={item.nameRu}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Partners;
