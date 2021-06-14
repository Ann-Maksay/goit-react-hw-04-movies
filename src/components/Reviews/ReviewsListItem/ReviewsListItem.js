import React from "react";
import PropTypes from "prop-types";

const ReviewsListItem = ({ author, content }) => {
  return (
    <li className="reviews-list-item">
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
};

ReviewsListItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewsListItem;
