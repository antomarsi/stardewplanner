import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Planner from "./Planner";
import About from "./About";
import NavBar from "../components/NavBar";

const Routes = () => (
  <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/planner/:id?" component={Planner} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
