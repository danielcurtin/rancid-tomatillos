import React from "react";
import './SingleMovie.css';

import MovieDesc from "../MovieDesc/MovieDesc";
import MovieTags from "../MovieTags/MovieTags";

const SingleMovie = props => {
    return (
        <section className="singleView">
            <div className="singlePoster">
                <img src={props.poster_path} />
                <h2>{props.average_rating} / 10</h2>
            </div>
            <div className="singleDetails">
                <img src={props.backdrop_path} />
                <MovieDesc title={props.title} tagline={props.tagline} description={props.overview} />
                <MovieTags runtime={props.runtime} genres={props.genres} budget={props.budget} revenue={props.revenue} />
            </div>
        </section>
    );
};

export default SingleMovie;