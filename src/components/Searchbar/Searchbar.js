import React, { Component } from "react";

import SearchbarWrapper from "./SearchbarStyled";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSearch(query);
  };

  render() {
    const { query } = this.state;
    return (
      <SearchbarWrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Enter movie name"
            value={query}
            onChange={this.handleChange}
          />
          <button className="submit-btn" type="submit">
            Search
          </button>
        </form>
      </SearchbarWrapper>
    );
  }
}

export default Searchbar;
