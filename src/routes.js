import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Loading from "./components/Loading";

import { ROUTE_HOME, ROUTE_CATEGORY } from "./configs/routes";

const Home = lazy(() => import("./pages/Home"));
const Joke = lazy(() => import("./pages/Joke"));
const Error = lazy(() => import("./components/Error"));

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path={ROUTE_HOME} exact component={Home} />
      <Route path={ROUTE_CATEGORY} exact component={Joke} />
      <Route
        path="*"
        render={() => <Error message="this page does not exist." />}
      />
    </Switch>
  </Suspense>
);

export default Routes;
