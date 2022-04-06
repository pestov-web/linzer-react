import React from "react";
import "./Products.scss";
import { Link } from "react-router-dom";
import { products } from "../../utils/products";

function Products({ sectionName }) {
  return (
    <section className="section products">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
      </div>
      <ul className="products__list">
        {products.map((item, index) => (
          <li key={index} className="products__item">
            <Link className="products__link" to={item.link}>
              <img
                className="products__link-image"
                src={item.image}
                alt={item.nameRu}
              />
            </Link>
            <h3 className="products__item-title">{item.nameRu}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
