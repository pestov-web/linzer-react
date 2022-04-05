import "@fontsource/roboto";
import "./App.scss";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
