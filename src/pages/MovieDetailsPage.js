import React, { Component } from "react";
import { Route } from "react-router";

import { fetchMoviesDetails } from "../api/fetchFilms";
import routes from "../routes";

import MovieCard from "../components/MovieCard/MovieCard";
import MovieNavigation from "../components/MovieNavigation/MovieNavigation";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    prevLocationState: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { location } = this.props;
    const movie = await fetchMoviesDetails(movieId);
    this.setState({ movie: movie, prevLocationState: location.state });
  }

  goBack = () => {
    const { history } = this.props;
    const { prevLocationState } = this.state;
    if (prevLocationState?.from) {
      history.push(prevLocationState.from);
      return;
    }
    history.push(routes.movies);
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    const { poster_path, title, release_date, vote_average, overview, genres } =
      movie;

    return (
      <>
        <button type="button" onClick={this.goBack}>
          Go back
        </button>
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
