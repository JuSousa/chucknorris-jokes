import React from "react";
import { Provider } from "react-redux";

import CategoryList from "./pages/Category";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <CategoryList />
  </Provider>
);

export default App;
