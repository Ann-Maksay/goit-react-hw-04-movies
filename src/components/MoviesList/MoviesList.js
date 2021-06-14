import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import MoviesListWrapper from "./MoviesListStyled";

import MoviesListItem from "./MoviesListItem/MoviesListItem";

import routes from "../../routes";

const MoviesList = ({ movies, location }) => {
  return (
    <MoviesListWrapper>
      <ul className="movies-list">
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
    </MoviesListWrapper>
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
