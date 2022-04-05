import "@fontsource/roboto";
import "./App.scss";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Why from "../Why/Why";
import Products from "../About/Products/Products";
import Portfolio from "../Portfolio/Portfolio";

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
      <Footer />
    </div>
  );
}

export default App;
