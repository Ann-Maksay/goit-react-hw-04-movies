import React, { Component } from "react";
import { Route } from "react-router";

import { fetchMoviesDetails } from "../api/fetchFilms";

import MovieCard from "../components/MovieCard/MovieCard";
import MovieNavigation from "../components/MovieNavigation/MovieNavigation";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

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
    const { poster_path, title, release_date, vote_average, overview, genres } =
      movie;

    return (
      <>
        {Object.keys(movie).length > 0 ? (
          <>
            <MovieCard
              poster_path={poster_path}
              title={title}
              release_date={release_date}
              vote_average={vote_average}
              overview={overview}
              genres={genres}
            />
            <MovieNavigation />

            <Route path={`${match.path}/cast`} component={Cast}></Route>
            <Route path={`${match.path}/reviews`} component={Reviews}></Route>
          </>
        ) : (
          <p>Not found</p>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
