import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Joke from "./pages/Joke";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/joke/:id" component={Joke} />
    </BrowserRouter>
  );
};

export default Routes;
