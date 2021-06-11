import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name"
          value={query}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Searchbar;
