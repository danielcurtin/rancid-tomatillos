import React from "react";
import './SingleMovie.css';

import MovieDesc from "../MovieDesc/MovieDesc";
import MovieTags from "../MovieTags/MovieTags";

const SingleMovie = () => {
    return (
        <section className="singleView">
            <div className="singlePoster">
                <img src="https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg" />
                <h2>Rating</h2>
            </div>
            <div className="singleDetails">
                <img src="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg" />
                <MovieDesc />
                <MovieTags />
            </div>
        </section>
    )
};

export default SingleMovie;