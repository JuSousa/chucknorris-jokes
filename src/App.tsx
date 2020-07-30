import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./AppStyled";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
