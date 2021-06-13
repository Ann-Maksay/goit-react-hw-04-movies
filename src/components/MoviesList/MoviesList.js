import React from "react";
import { Link, withRouter } from "react-router-dom";

import MoviesListItem from "./MoviesListItem/MoviesListItem";

import routes from "../../routes";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <Link
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
            key={id}
          >
            <MoviesListItem movieName={title} movieId={id} />
          </Link>
        );
      })}
    </ul>
  );
};

export default withRouter(MoviesList);
