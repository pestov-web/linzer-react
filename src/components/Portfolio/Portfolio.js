import React from "react";
import "./Portfolio.scss";

function Portfolio({ sectionName }) {
  return (
    <section className="section section_theme_dark portfolio">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
      </div>
    </section>
  );
}

export default Portfolio;
