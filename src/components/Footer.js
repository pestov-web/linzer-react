import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { contacts } from "../data/contacts";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contacts">
          <h3 className="footer__contacts-title">КОНТАКТЫ</h3>
          <p className="footer__contacts-text">г. Владивосток, ул.</p>
          <p className="footer__contacts-text">Бородинская, 46/50</p>
          <p className="footer__contacts-text">Бутик №9 (ТЦ «КОНТИНЕНТ»)</p>
          <p className="footer__contacts-text">
            <span className="footer__contacts-text_type_bold">Телефон:</span>{" "}
            {contacts.phonePrimary}
          </p>
          <p className="footer__contacts-text">
            <span className="footer__contacts-text_type_bold">Почта: </span>{" "}
            {contacts.emailPrimary}
          </p>
        </div>

        <div className="footer__social">
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a
                aria-label="twitter"
                className="footer__social-link"
                target="_blank"
                href="https://twitter.com/?lang=ru"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="footer__social-item">
              <a
                aria-label="facebook"
                className="footer__social-link"
                target="_blank"
                href="https://ru-ru.facebook.com/"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="footer__social-item">
              <a
                aria-label="instagram"
                className="footer__social-link"
                target="_blank"
                href="https://www.instagram.com/"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
          <small className="footer__copy">
            <a
              href="https://pestov-web.ru/"
              target="_blank"
              className="footer__copy-text"
              rel="noreferrer"
            >
              © Vladimir Pestov
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
