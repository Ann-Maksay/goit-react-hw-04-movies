import React from "react";

import { DEFAULT_IMG } from "../../data/img";

const MovieCard = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  const stats = Math.round((Number(vote_average) / 10) * 100);
  return (
    <>
      <div className="imgContainer">
        <img
          className="filmImg"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : DEFAULT_IMG
          }
          alt={title}
        />
      </div>

      <div className="filmCard">
        <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
        <p>{`User Score: ${stats}%`}</p>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h3>Ganres</h3>
        {genres.length > 0 ? (
          <ul>
            {genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        ) : (
          <p>None</p>
        )}
      </div>
    </>
  );
};

export default MovieCard;
