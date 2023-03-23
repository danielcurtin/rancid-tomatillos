import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <img src={props.posterPath} />
      <h2>{props.title}</h2>
      <p>{props.averageRating}</p>
    </div>
  )
}

export default MovieCard;