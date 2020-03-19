import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";

class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola" },
        { title: "Star Wars", director: "Rian Johnson" },
        { title: "The Shawshank Redemption", director: "Frank Darabont" }
      ]
    };
  }

  deleteMovieHandler = movieIndex => {
    const moviesCopy = [...this.state.movies];
    moviesCopy.splice(movieIndex, 1);
    this.setState({
      movies: moviesCopy
    });
  };

  render() {
    console.log(this.state.movies);
    return (
      <div>
        {this.state.movies.map((oneMovie, index) => {
          return (
            <ImprovedCard
              key={index}
              {...oneMovie}
              clickToDelete={() => this.deleteMovieHandler(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default DynamicMoviesList;
