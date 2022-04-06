import React from "react";

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

function App() {
  return (
    <div className="App">
      <Header />
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
