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
import { Route, Routes } from "react-router-dom";
import Windows from "../Windows/Windows";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [dropDownIsOpen, setDropDownIsOpen] = React.useState(false);
  const [accordionIsOpen, setAccordionIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const toggleDropDown = () => {
    setDropDownIsOpen(!dropDownIsOpen);
  };
  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
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
        toggleDropDown={toggleDropDown}
        toggleAccordion={toggleAccordion}
        closeModal={closeModal}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={[
            <Slider key={0} />,
            <About sectionName={"О компании"} key={1} />,
            <Why sectionName={"Почему мы"} key={2} />,
            <Products sectionName={"Продукция"} key={3} />,
            <Portfolio sectionName={"Портфолио"} key={4} />,
            <Partners sectionName={"Наши партнеры"} key={5} />,
          ]}
        />
        <Route exact path="/windows" element={<Windows />} />
      </Routes>

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
