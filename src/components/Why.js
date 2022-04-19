import React from "react";
import {
  FaCity,
  FaTools,
  FaBoxOpen,
  FaHandshake,
  FaBookReader,
  FaMedal,
} from "react-icons/fa";

function Why({ sectionName }) {
  return (
    <section className="section section_theme_dark why">
      <div className="section__title">
        <h2 className="section__title-text">{sectionName}</h2>
      </div>
      <ul className="why__list">
        <li className="why__item">
          <div className="why__item-container">
            <FaCity />
          </div>
          <h3 className="why__item-title">Собственное проектное бюро</h3>
          <p className="why__item-subtitle">
            Ваша гарантия разработки уникального проекта для вас на самом
            высоком профессиональном уровне
          </p>
        </li>
        <li className="why__item">
          <div className="why__item-container">
            <FaTools />
          </div>
          <h3 className="why__item-title">
            Гарантийный период использования 5 лет
          </h3>
          <p className="why__item-subtitle">
            В течение этого срока мы несём ответственность за качество нашей
            продукции
          </p>
        </li>
        <li className="why__item">
          <div className="why__item-container">
            <FaBoxOpen />
          </div>
          <h3 className="why__item-title">Широкий ассортимент продукции</h3>
          <p className="why__item-subtitle">
            Мы готовы предложить вам широкий ассортимент продукции, чтобы
            сделать ваше жильё комфортным, стильным и гармоничным
          </p>
        </li>
        <li className="why__item">
          <div className="why__item-container">
            <FaMedal />
          </div>
          <h3 className="why__item-title">
            Опыт участия в крупных и сложных проектах
          </h3>
          <p className="why__item-subtitle">
            Опыт участия в крупных и сложных проектах сделал нас стабильной и
            надежной компанией на рынке строительных услуг, что является
            гарантией реализации вашей идеи
          </p>
        </li>
        <li className="why__item">
          <div className="why__item-container">
            <FaHandshake />
          </div>
          <h3 className="why__item-title">
            Партнёрство с крупными производителями
          </h3>
          <p className="why__item-subtitle">
            Партнёрство с крупными производителями позволяет вам приобретать
            светопрозрачные конструкции по привлекательной цене, а также даёт
            гарантию на использование высококачественных материалов в работе
          </p>
        </li>
        <li className="why__item">
          <div className="why__item-container">
            <FaBookReader />
          </div>
          <h3 className="why__item-title">Мы имеем 12 летний опыт</h3>
          <p className="why__item-subtitle">
            Опыт в изготовлении современных, функциональных и надёжных
            светопрозрачных конструкций и интересных стилистических решений –
            это позволит вам сделать своё жильё неповторимым
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Why;
