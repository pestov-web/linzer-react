import React from "react";
import { FaCheck } from "react-icons/fa";
import { VIDEO_IMG } from "../data/images";

function About({ sectionName }) {
  return (
    <section id="about" className="section about">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
      </div>
      <div className="about__container">
        <div className="about__video">
          <img src={VIDEO_IMG} className="about__video-img" alt="Промо ролик" />

          <a
            href="https://www.youtube.com/watch?v=2c9wJSuCwow"
            className="about__video-button venobox"
            data-vbtype="video"
            data-autoplay="true"
            data-maxwidth="900px"
          />
        </div>
        <ul className="about__list">
          <h3 className="about__list-title">Сделайте правильный выбор</h3>
          <li className="about__list-item">
            <FaCheck className="about__list-ico" /> При правильном
            проектировании из окон будет открываться сногсшибательный вид на
            ночной город, лесную лужайку или кроны деревьев.
          </li>
          <li className="about__list-item">
            <FaCheck className="about__list-ico" /> В дом будет попадать гораздо
            больше солнечных лучей, и даже в дождливые дни вы не будете
            чувствовать недостатка в освещении.
          </li>
          <li className="about__list-item">
            <FaCheck className="about__list-ico" /> В интерьере стены из стекла
            расширяют пространство, создают ощущение свободы и единения с
            природой и окружающим вас миром.
          </li>
          <h3 className="about__list-title">Решим Вопросы</h3>
          <li className="about__list-item">
            <FaCheck className="about__list-ico" /> Малоосвещенности
          </li>
          <li className="about__list-item">
            <FaCheck className="about__list-ico" /> Теплосбережения
          </li>
        </ul>
      </div>{" "}
    </section>
  );
}

export default About;
