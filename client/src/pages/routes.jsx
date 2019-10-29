import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Spinner } from "reactstrap";

const routesPath = [
  { component: lazy(() => import("./Home")), path: "/", exact: true },
  { component: lazy(() => import("./About")), path: "/about" },
  { component: lazy(() => import("./Planner")), path: "/planner/:id?" }
];

const LoadingMessage = () => (
  <div className="spinner-loading">
    <Spinner color="yellow" style={{ height: "4rem", width: "4rem" }} />
    <Spinner
      color="secondary"
      type="grow"
      style={{ height: "4rem", width: "4rem" }}
    />
  </div>
);

const Routes = () => (
  <BrowserRouter>
    <NavBar />

    <Suspense fallback={<LoadingMessage />}>
      <Switch>
        {routesPath.map((r, index) => (
          <Route {...r} key={index}/>
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
