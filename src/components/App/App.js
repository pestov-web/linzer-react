import React from "react";
import VenoBox from "venobox";
import "./App.scss";

import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Why from "../Why/Why";
import Products from "../Products/Products";
import Portfolio from "../Portfolio/Portfolio";
import Contacts from "../Contacts/Contacts";

import { menuItems } from "../../utils/navMenu";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [dropDownIsOpen, setDropDownIsOpen] = React.useState(false);
  const [accordionIsOpen, setAccordionIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const openDropDown = () => {
    setDropDownIsOpen(true);
  };
  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const closeDropDown = () => {
    setDropDownIsOpen(false);
  };

  //  Venobox2 (youtube modal)
  React.useEffect(() => {
    new VenoBox({
      selector: ".venobox",
    });
  }, []);

  return (
    <div className="App">
      <Header
        menuItems={menuItems}
        modalIsOpen={modalIsOpen}
        dropDownIsOpen={dropDownIsOpen}
        accordionIsOpen={accordionIsOpen}
        openModal={openModal}
        openDropDown={openDropDown}
        toggleAccordion={toggleAccordion}
        closeModal={closeModal}
        closeDropDown={closeDropDown}
      />
      <Slider />
      <About sectionName={"О компании"} />
      <Why sectionName={"Почему мы"} />
      <Products sectionName={"Продукция"} />
      <Portfolio sectionName={"Портфолио"} />
      <Partners sectionName={"Наши партнеры"} />
      <Contacts />
      <Footer />{" "}
    </div>
  );
}

export default App;
