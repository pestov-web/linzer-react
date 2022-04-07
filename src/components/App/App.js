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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
        openModal={openModal}
        closeModal={closeModal}
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
