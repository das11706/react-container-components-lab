import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'K6vgI4CTJMG0XWwLYWhkCM4qcZnfjjxe';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      reviews: [],
    };
  };

  componentDidMount() {
    fetch(URL)
    .then((response) => response.json())
    .then((reviewData) => {
      // console.log(reviewData)
      this.setState({
        reviews: reviewData.results
      })});
    
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;