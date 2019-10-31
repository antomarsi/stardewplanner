import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoadingComponent from "../components/LoadingComponent";
import { useDispatch } from "react-redux";
import { RemoveLoading, SetLoading } from "../store/ducks/loading/actions";

const routesPath = [
  { component: lazy(() => import("./Home")), path: "/", exact: true },
  { component: lazy(() => import("./About")), path: "/about" },
  { component: lazy(() => import("./Planner")), path: "/planner/:id?" }
];

const Loading = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetLoading("ROUTE_LOADING"));
    return () => {
      dispatch(RemoveLoading("ROUTE_LOADING"));
    };
  });
  return <div className="d-none">Carregando...</div>;
};

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <LoadingComponent />
    <Suspense fallback={<Loading />}>
      <Switch>
        {routesPath.map((r, index) => (
          <Route {...r} key={index} />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
