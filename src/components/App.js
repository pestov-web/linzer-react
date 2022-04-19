import React from "react";
import VenoBox from "venobox";

import Header from "./Header";
import Slider from "./Slider";
import Partners from "./Partners";
import Footer from "./Footer";
import About from "./About";
import Why from "./Why";
import Products from "./Products";
import Portfolio from "./Portfolio";
import ProductDescription from "./ProductDescription";
import Contacts from "./Contacts";

import { menuItems } from "../utils/navMenu";
import { Route, Routes } from "react-router-dom";

import {
  doors,
  lantern,
  sliding,
  ventilated,
  windows,
  winterg,
} from "../data/productsDescription";

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
        <Route
          exact
          path="/windows"
          element={<ProductDescription product={windows} />}
        />{" "}
        <Route
          exact
          path="/doors"
          element={<ProductDescription product={doors} />}
        />{" "}
        <Route
          exact
          path="/winterg"
          element={<ProductDescription product={winterg} />}
        />
        <Route
          exact
          path="/ventilated"
          element={<ProductDescription product={ventilated} />}
        />
        <Route
          exact
          path="/lantern"
          element={<ProductDescription product={lantern} />}
        />{" "}
        <Route
          exact
          path="/sliding"
          element={<ProductDescription product={sliding} />}
        />
      </Routes>

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
