import React from "react";
import { Switch, Route } from "react-router-dom";

import Count from "./containers/counter";
import Home from "./components/Home";

const App = () => {
  return (
    <Switch>
      <Route path="/counter">
        <Count />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
