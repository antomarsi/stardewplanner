import React from "react";
import HomePage from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlannerPage from "./pages/Planner";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/planner/:id?" component={PlannerPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
