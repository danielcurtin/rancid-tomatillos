import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from 'prop-types';
import "./AllMovies.css";

const AllMovies = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return <MovieCard title={movie.title} averageRating={movie.average_rating} posterPath={movie.poster_path} id={movie.id} key={movie.id} />
  });
  
  return (
    <div className="allMovies">
      {movieCards}
    </div>
  );
};

export default AllMovies;

AllMovies.propTypes = {
  movies: PropTypes.array.isRequired
}