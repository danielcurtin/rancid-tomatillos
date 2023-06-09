import React from "react";
import PropTypes from 'prop-types';
import './MovieTags.css';

const MovieTags = ({ runtime, genres, budget, revenue, id }) => {
    const genreList = genres.map((genre, index) => <p key={index}>{genre}</p>)
    
    return (
        <div className="movieTags" key={id}>
            <div>
                <h3>Runtime</h3>
                <p>{runtime} minutes</p>
            </div>
            <div>
                <h3>Genres</h3>
                <div className="genres">
                    {genreList}
                </div>
            </div>
            <div>
                <h3>Budget</h3>
                <p>${budget}</p>
            </div>
            <div>
                <h3>Revenue</h3>
                <p>${revenue}</p>
            </div>
        </div>
    )
};

export default MovieTags;

MovieTags.propTypes = {
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}