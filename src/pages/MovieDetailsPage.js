import React, { Component } from "react";
import { Route } from "react-router";

import { fetchMoviesDetails } from "../api/fetchFilms";

import MovieCard from "../components/MovieCard/MovieCard";
import MovieNavigation from "../components/MovieNavigation/MovieNavigation";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await fetchMoviesDetails(movieId);
    this.setState({ movie: movie });
  }

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <>
        {Object.keys(movie).length > 0 ? (
          <>
            <MovieCard {...movie} />
            <MovieNavigation />

            <Route path={`${match.path}/cast`}> CAST</Route>
            <Route path={`${match.path}/reviews`}> RE </Route>
          </>
        ) : (
          <p>Not found</p>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
