import React from "react";
import { FaCheck } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import "./About.scss";
import { VIDEO_IMG } from "../../utils/images";

function About({ sectionName }) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <section className="section about">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
      </div>
      <div className="about__container">
        <div className="about__video">
          <img src={VIDEO_IMG} className="about__video-img" alt="Промо ролик" />
          <button
            className="about__video-button"
            onClick={() => setOpen(true)}
          ></button>
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
      <ModalVideo
        autoplay={1}
        channel="youtube"
        isOpen={isOpen}
        videoId="2c9wJSuCwow"
        onClose={() => setOpen(false)}
      />
    </section>
  );
}

export default About;
