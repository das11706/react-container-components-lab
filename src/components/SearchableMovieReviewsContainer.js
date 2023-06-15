import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'K6vgI4CTJMG0XWwLYWhkCM4qcZnfjjxe';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: [],
    };
  }  

  // componentDidMount() {
  //   fetch(URL)
  //   .then((response) => response.json())
  //   .then((reviewData) => {
  //     // console.log(reviewData)
  //     this.setState({
  //       reviews: reviewData.results
  //     });
  //   });
  // }

  handleSearch = (search) => {
    console.log('searchTerm', search)

    // fetch(URL + `${search}`)
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=K6vgI4CTJMG0XWwLYWhkCM4qcZnfjjxe&query=${search}`)
    .then((response) => response.json()
    .then((reviewData) => {
      console.log(reviewData)
      this.setState({
        reviews: reviewData.results
      });
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleSearch(this.state.searchTerm)
  }

  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return(
      <div>
      <form className="searchable-movie-reviews" onSubmit={(event) => this.handleSubmit(event)}>

        <label>
          Search a Movie Review:
          <input id="search" name="search" type="text" onChange={this.handleInputChange} value={this.state.search} />
        </label>

        <button type="submit">Search Reviews</button>

      </form>
      <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}