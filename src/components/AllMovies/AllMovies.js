import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./AllMovies.css";

const AllMovies = (props) => {
  const movieCards = props.movies.map(movie => {
    return <MovieCard title={movie.title} averageRating={movie.average_rating} posterPath={movie.poster_path} key={movie.id} />
  });
  
  return (
    <div className="allMovies">
      {movieCards}
    </div>
  );
};

export default AllMovies;