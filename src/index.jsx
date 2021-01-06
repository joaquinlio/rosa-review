import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import App from "./Pages/App/App";
/**
 * @desc Redux
 */
import { Store, History } from './Config/Store';

ReactDOM.render(
  <Provider store={ Store }>
    <BrowserRouter injectFirst>
      <App  history={ History }/>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
