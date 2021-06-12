import React from "react";

const ReviewsListItem = ({ author, content }) => {
  return (
    <>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </>
  );
};

export default ReviewsListItem;
