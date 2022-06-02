import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
