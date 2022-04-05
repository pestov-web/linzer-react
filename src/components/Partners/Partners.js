import React from "react";
import { Link } from "react-router-dom";

import { PARTNERS } from "../../utils/images";

import("./Partners.scss");

function Partners({ sectionName }) {
  return (
    <section className="section partners">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
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
