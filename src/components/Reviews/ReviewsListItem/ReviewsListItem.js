import React from "react";
import PropTypes from "prop-types";

const ReviewsListItem = ({ author, content }) => {
  return (
    <>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </>
  );
};

ReviewsListItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewsListItem;
