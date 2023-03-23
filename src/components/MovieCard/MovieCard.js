import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="movieCard">
      <img src={props.posterPath} />
      <h2>{props.title}</h2>
      <p>{props.averageRating.toFixed(2)} 🍿</p>
    </div>
  );
};

export default MovieCard;