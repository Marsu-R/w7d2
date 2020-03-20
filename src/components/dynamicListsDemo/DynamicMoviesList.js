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
        // {
        //   title: "Harry Potter and the Philosopher's Stone",
        //   director: "Chris Columbus"
        // }
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

  addMovie = movieIndex => {
    const moviesCopy = [...this.state.movies];
    moviesCopy.push({
      title: "Harry Potter and the Philosopher's Stone",
      director: "Chris Columbus"
    });
    this.setState({
      movies: moviesCopy
    });
  };

  render() {
    console.log(this.state.movies);
    return (
      <div>
        <div>
          <button onClick={this.addMovie}>Add Harry Potter movie</button>
        </div>
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
