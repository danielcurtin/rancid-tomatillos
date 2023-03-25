import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './Featured.css';

const Featured = (props) => {
  const featuredCards = [...props.movies].sort((a, b) => b.average_rating - a.average_rating).map(movie => <MovieCard title={movie.title} averageRating={movie.average_rating} posterPath={movie.poster_path} selectMovie={props.selectMovie} id={movie.id} key={movie.id} /> )

  return (
    <div className="featured">
      <h2>Featured</h2>
      <div>
        {featuredCards[0]}
        {featuredCards[1]}
        {featuredCards[2]}
        {featuredCards[3]}
      </div>
    </div>
  )
}

export default Featured;