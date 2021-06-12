import React, { Component } from "react";

import { searchMovies } from "../api/fetchFilms";

import MoviesList from "../components/MoviesList/MoviesList";
import Searchbar from "../components/Searchbar/Searchbar";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.searchFilms();
    }
  }

  onSearch = (value) => {
    this.setState({ query: value });
  };

  searchFilms = async () => {
    const { query } = this.state;
    const movies = await searchMovies(query);
    this.setState({ movies: movies });
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;
