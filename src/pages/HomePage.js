import React, { Component } from "react";
import { fetchTrendings } from "../api/fetchFilms";
import MoviesList from "../components/MoviesList/MoviesList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movies = await fetchTrendings();
    this.setState({ movies: movies });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>The most popular films today:</h1>
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default HomePage;
