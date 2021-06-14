import "./App.scss";
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../routes";
import AppBar from "./AppBar/AppBar";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("../pages/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MoviesDetailsPage = lazy(() =>
  import(
    "../pages/MovieDetailsPage" /* webpackChunkName: "movies-details-page" */
  )
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.moviesDetails} component={MoviesDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
