import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const AllMovies = (props) => {
  const movieCards = props.movies.map(movie => {
    return <MovieCard title={movie.title} averageRating={movie.average_rating} posterPath={movie.poster_path} key={movie.id} />
  })
  
  return (
    <div>
      {movieCards}
    </div>
  )
}

export default AllMovies;