import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../routes";

const MoviesListItem = ({ movieName, movieId }) => {
  return (
    <li>
      <Link to={`${routes.movies}/${movieId}`}>{movieName}</Link>
    </li>
  );
};
export default MoviesListItem;
