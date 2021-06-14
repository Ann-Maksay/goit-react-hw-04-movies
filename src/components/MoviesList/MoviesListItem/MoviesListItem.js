import React from "react";
import PropTypes from "prop-types";

const MoviesListItem = ({ movieName }) => {
  return <li className="movies-list-item">{movieName}</li>;
};

MoviesListItem.propTypes = {
  movieName: PropTypes.string.isRequired,
};
export default MoviesListItem;
