import React, { Component } from "react";
import { fetchCast } from "../../api/fetchFilms";

import CastListItem from "./CastListItem/CastListItem";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const { cast } = await fetchCast(id);
    this.setState({ cast: cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast.length > 0 ? (
          <>
            <h3>Cast:</h3>
            {cast.map(({ cast_id, name, character, profile_path }) => {
              return (
                <CastListItem
                  key={cast_id}
                  name={name}
                  character={character}
                  profile_path={profile_path}
                />
              );
            })}
          </>
        ) : (
          <p>Not found</p>
        )}
      </>
    );
  }
}

export default Cast;
