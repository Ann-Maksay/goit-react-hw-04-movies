import React, { Component } from "react";
import queryString from "query-string";

import { searchMovies } from "../api/fetchFilms";

import MoviesList from "../components/MoviesList/MoviesList";
import Searchbar from "../components/Searchbar/Searchbar";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      const queryParams = queryString.parse(location.search);
      this.setState({ query: queryParams.query });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });

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
