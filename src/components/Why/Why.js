import React from "react";
import "./Why.scss";

function Why({ sectionName }) {
  return (
    <section className="section section_theme_dark about">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
      </div>
    </section>
  );
}

export default Why;
