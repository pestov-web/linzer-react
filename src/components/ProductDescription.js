import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

function ProductDescription({ product }) {
  return (
    <>
      {product.map((item, index) => (
        <section
          key={index}
          className={
            (index + 2) % 2 === 1
              ? "section product section_theme_dark"
              : "section product"
          }
        >
          <div className="section__title">
            <img className="section__title-img" src={item.brandImage} alt="" />
            <h2 className="section__title-text section__title-text_place_description">
              {item.descriptionHeader}
            </h2>
          </div>

          <div className="product__container">
            <div className="product__paragraph">
              {" "}
              {item.description.map((item, index) => (
                <p key={index} className="product__paragraph-text">
                  {item}
                </p>
              ))}
            </div>

            <div className="product__description">
              <div className="product__description-container">
                <img
                  className="product__description-img"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <ul className="product__description-list">
                {item.descriptionList.map((item, index) => (
                  <li key={index} className="product__description-item">
                    <GoPrimitiveDot className="product__description-item-ico" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {item.imageList && (
              <ul className="product__gallery">
                {item.imageList.map((item, index) => (
                  <li key={index} className="product__gallery-item">
                    <img className="product__gallery-img" src={item} alt="" />
                  </li>
                ))}
              </ul>
            )}
            {item.descriptionAdditional &&
              item.descriptionAdditional.map((item, index) => (
                <p key={index} className="product__description-additional">
                  {item}
                </p>
              ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default ProductDescription;
