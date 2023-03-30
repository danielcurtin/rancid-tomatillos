import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({posterPath, title, averageRating, id}) => {
  return (
    <Link to={`/${id}`}>
      <div className="movieCard">
        <img src={posterPath} />
        <h2>{title}</h2>
        <p>🍿{averageRating}/10</p>
      </div>
    </Link>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}