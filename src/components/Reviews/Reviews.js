import React, { Component } from "react";
import { fetchReviews } from "../../api/fetchFilms";

import ReviewsWrapper from "./ReviewsStyled";

import ReviewsListItem from "./ReviewsListItem/ReviewsListItem";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const reviews = await fetchReviews(id);
    this.setState({ reviews: reviews });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ReviewsWrapper>
        {reviews.length > 0 ? (
          <>
            <h3>Reviews:</h3>
            <ul className="reviews-list">
              {reviews.map(({ id, author, content }) => {
                return (
                  <ReviewsListItem key={id} author={author} content={content} />
                );
              })}
            </ul>
          </>
        ) : (
          <p>Not found</p>
        )}
      </ReviewsWrapper>
    );
  }
}

export default Reviews;
