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
import { Route, Routes, useLocation } from "react-router-dom";

import {
  canopies,
  doors,
  facade,
  lantern,
  pvc,
  sliding,
  ventilated,
  windows,
  winterg,
} from "../data/productsDescription";
import ScrollTopButton from "./ScrollTopButton";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [accordionIsOpen, setAccordionIsOpen] = React.useState(false);

  const location = useLocation();

  const openModal = () => {
    setIsOpen(true);
  };

  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ScrollToTopOnMount = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
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
        accordionIsOpen={accordionIsOpen}
        openModal={openModal}
        toggleAccordion={toggleAccordion}
        closeModal={closeModal}
        currenPath={location.pathname}
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
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={windows} key={1} />,
          ]}
        />{" "}
        <Route
          exact
          path="/doors"
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={doors} key={1} />,
          ]}
        />{" "}
        <Route
          exact
          path="/winterg"
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={winterg} key={1} />,
          ]}
        />
        <Route
          exact
          path="/ventilated"
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={ventilated} key={1} />,
          ]}
        />
        <Route
          exact
          path="/lantern"
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={lantern} key={1} />,
          ]}
        />{" "}
        <Route
          exact
          path="/sliding"
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={sliding} key={1} />,
          ]}
        />
        <Route
          exact
          path="/canopies"
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={canopies} key={1} />,
          ]}
        />
        <Route
          exact
          path="/pvc"
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={pvc} key={1} />,
          ]}
        />{" "}
        <Route
          exact
          path="/facade"
          element={[
            <ScrollToTopOnMount key={0} />,
            <ProductDescription product={facade} key={1} />,
          ]}
        />
      </Routes>

      <Contacts />
      <Footer />
      <ScrollTopButton toId="home" />
    </div>
  );
}

export default App;
