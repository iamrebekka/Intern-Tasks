import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
