import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.scss";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../utils/constants";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact">
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <div className="contact__form-container">
          <input
            className="contact__form-input"
            type="text"
            name="user_name"
            placeholder="Ваше Имя"
          />
          <input
            className="contact__form-input"
            type="email"
            name="user_email"
            placeholder="Ваш Email"
          />
        </div>
        <input
          className="contact__form-input"
          type="subject"
          name="subject"
          placeholder="Тема Сообщения"
        />
        <textarea
          className="contact__form-text"
          name="message"
          placeholder="Пожалуйста напишите нам хоть что-то =)"
        />
        <input className="contact__form-submit" type="submit" value="Send" />
      </form>
    </div>
  );
};
