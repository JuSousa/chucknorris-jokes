import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";

import GlobalStyles from "./AppStyled";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>
);

export default App;
