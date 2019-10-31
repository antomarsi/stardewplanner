import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoadingComponent from "../components/LoadingComponent";

const routesPath = [
  { component: lazy(() => import("./Home")), path: "/", exact: true },
  { component: lazy(() => import("./About")), path: "/about" },
  { component: lazy(() => import("./Planner")), path: "/planner/:id?" }
];

const Routes = () => (
  <BrowserRouter>
    <NavBar />

    <Suspense fallback={<LoadingComponent />}>
      <Switch>
        {routesPath.map((r, index) => (
          <Route {...r} key={index}/>
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
