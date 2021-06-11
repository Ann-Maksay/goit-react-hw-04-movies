import "./App.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";

import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MoviesDetailsPage from "../pages/MovieDetailsPage";

import AppBar from "./AppBar/AppBar";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.moviesDetails} component={MoviesDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
      </Switch>
    </>
  );
}

export default App;
