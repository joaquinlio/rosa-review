import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/App/App";
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(      
      <BrowserRouter basename="review" injectFirst>
            <App />
      </BrowserRouter>, 
      document.querySelector("#root")
);
