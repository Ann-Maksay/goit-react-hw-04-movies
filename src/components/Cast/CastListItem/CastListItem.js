import React from "react";
import { DEFAULT_IMG } from "../../../data/img";

const CastListItem = ({ profile_path, name, character }) => {
  return (
    <>
      <div>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w300${profile_path}`
              : DEFAULT_IMG
          }
          alt={name}
        />
      </div>
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </>
  );
};

export default CastListItem;
