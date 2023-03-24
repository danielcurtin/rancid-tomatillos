import React from "react";
import './SingleMovie.css';

import MovieDesc from "../MovieDesc/MovieDesc";
import MovieTags from "../MovieTags/MovieTags";

const SingleMovie = props => {
    return (
        <section className="singleView">
            <div className="singlePoster">
                <img src={props.movie.poster_path} />
                <h2>{props.movie.average_rating} / 10</h2>
            </div>
            <div className="singleDetails">
                <img src={props.movie.backdrop_path} />
                <MovieDesc title={props.movie.title} tagline={props.movie.tagline} description={props.movie.overview} />
                <MovieTags runtime={props.movie.runtime} genres={props.movie.genres} budget={props.movie.budget} revenue={props.movie.revenue} />
            </div>
        </section>
    );
};

export default SingleMovie;