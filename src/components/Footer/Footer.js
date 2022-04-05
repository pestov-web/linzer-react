import React from "react";
import("./Footer.scss");

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contacts">
          <h3 className="footer__contacts-title">КОНТАКТЫ</h3>
          <p className="footer__contacts-text">г. Владивосток, ул.</p>
          <p className="footer__contacts-text">Бородинская, 46/50</p>
          <p className="footer__contacts-text">Бутик №9 (ТЦ «КОНТИНЕНТ»)</p>
          <p className="footer__contacts-text">Телефон: 8 (423) 262-10-11</p>
          <p className="footer__contacts-text">Почта: linzer@mylinzer.ru</p>
        </div>

        <div className="footer__social">
          <ul className="footer__social-list">
            <li className="footer__social-item">
              {" "}
              <a href="#" className="twitter">
                twitter
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#" className="facebook">
                facebook
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#" className="instagram">
                instagram
              </a>
            </li>
          </ul>
          <copy className="footer__copy">
            <a href="#" className="instagram">
              Vladimir Pestov 2022
            </a>
          </copy>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
