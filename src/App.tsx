import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./AppStyled";
import store from "./store";
import theme from "./configs/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
