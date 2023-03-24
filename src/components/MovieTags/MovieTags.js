import React from "react";
import './MovieTags.css';

const MovieTags = ({ runtime, genres, budget, revenue }) => {
    const genreList = genres.map(genre => <p>{genre}</p>)
    
    return (
        <div className="movieTags">
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