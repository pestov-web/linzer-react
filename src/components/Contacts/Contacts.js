import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contacts.scss";
import Map from "../Map/Map";
import { ContactUs } from "../ContactUs/ContactUs";

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <Map />
      <div className="contacts__container">
        <ul className="contacts__list">
          <li className="contacts__list-item">
            <div className="contacts__list-container">
              <div className="contacts__list-ico">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contacts__list-title">Адрес шоу-рума:</h3>
            </div>

            <p className="contacts__list-item-contacts">г. Владивосток, ул.</p>
            <p className="contacts__list-item-contacts">Бородинская, 46/50</p>
            <p className="contacts__list-item-contacts">Бутик №9 (КОНТИНЕНТ)</p>
          </li>
          <li className="contacts__list-item">
            <div className="contacts__list-container">
              <div className="contacts__list-ico">
                <FaEnvelope />
              </div>
              <h3 className="contacts__list-title">Адрес шоу-рума:</h3>
            </div>
            <p className="contacts__list-item-contacts">linzer@mylinzer.ru</p>
            <p className="contacts__list-item-contacts">office@mylinzer.ru</p>
          </li>
          <li className="contacts__list-item">
            <div className="contacts__list-container">
              <div className="contacts__list-ico">
                <FaPhone />
              </div>
              <h3 className="contacts__list-title">Адрес шоу-рума:</h3>
            </div>

            <p className="contacts__list-item-contacts">8 (423) 262-10-11</p>
            <p className="contacts__list-item-contacts">8 (423) 262-10-11</p>
          </li>
        </ul>
        <ContactUs />
      </div>
    </section>
  );
}

export default Contacts;
