import React from "react";
import { ImageViewer } from "react-image-viewer-dv";
import "./Portfolio.scss";
import { portfolio } from "../../utils/portfolio";

function Portfolio({ sectionName }) {
  return (
    <section id="portfolio" className="section section_theme_dark portfolio">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
      </div>
      <ul className="portfolio__list">
        {portfolio.map((item, index) => (
          <li key={index} className="portfolio__list-item">
            <ImageViewer>
              <img
                className="portfolio__list-img"
                src={item.image}
                alt={item.nameRu}
              />
            </ImageViewer>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
