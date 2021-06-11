import React from "react";
import MoviesListItem from "./MoviesListItem/MoviesListItem";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return <MoviesListItem key={id} movieName={title} movieId={id} />;
      })}
    </ul>
  );
};

export default MoviesList;
