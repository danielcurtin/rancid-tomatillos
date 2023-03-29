import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({posterPath, title, averageRating, id}) => {
  return (
    <Link to={`/${id}`}>
      <div className="movieCard">
        <img src={posterPath} />
        <h2>{title}</h2>
        <p>{averageRating.toFixed(2)} 🍿</p>
      </div>
    </Link>
  );
};

export default MovieCard;