import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";
import { Header, Footer } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Routes />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
