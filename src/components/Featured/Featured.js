import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from 'prop-types';
import './Featured.css';

const Featured = ({ movies }) => {
  const featuredCards = [...movies].sort((a, b) => b.average_rating - a.average_rating).map(movie => <MovieCard title={movie.title} averageRating={movie.average_rating} posterPath={movie.poster_path} id={movie.id} key={movie.id} /> )

  return (
    <div className="featured">
      <h2>Featured</h2>
      <div className="featuredCards">
        {featuredCards[0]}
        {featuredCards[1]}
        {featuredCards[2]}
        {featuredCards[3]}
      </div>
    </div>
  )
}

export default Featured;

Featured.propTypes = {
  movies: PropTypes.array.isRequired
}