import React from "react";
import PropTypes from "prop-types";
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default withRouter(MoviesList);
