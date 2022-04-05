import React from "react";

function About({ sectionName }) {
  return (
    <section className="section about">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
      </div>
    </section>
  );
}

export default About;
