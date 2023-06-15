// Code MovieReviews Here
import React from "react";

const MovieReviews = ({ reviews }) => {
  // console.log(reviews)
  return (<ul className="review-list">
    {reviews.map((review) => (
      <li className="review">Movie Title: {review.display_title}
      <h4>Reviewer: {review.byline}</h4>
      <p>HeadLine: {review.headline}</p>
      <p>Summary: {review.summary_short}</p>
      </li>
    ))}
  </ul>)
};


export default MovieReviews;