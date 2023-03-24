import React from "react";
import "./MovieCard.css";

const MovieCard = ({posterPath, title, averageRating, selectMovie, id}) => {
  return (
    <div className="movieCard" onClick={() => selectMovie(id)}>
      <img src={posterPath} />
      <h2>{title}</h2>
      <p>{averageRating.toFixed(2)} 🍿</p>
    </div>
  );
};

export default MovieCard;