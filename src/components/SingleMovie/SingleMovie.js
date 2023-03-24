import React, { Component } from "react";
import './SingleMovie.css';

import MovieDesc from "../MovieDesc/MovieDesc";
import MovieTags from "../MovieTags/MovieTags";

class SingleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: true,
            id: props.movie,
            movie: undefined
        }
    }

    componentDidMount = () => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(res.status)
            }
        })
        .then(data => {
            this.setState({ movie: data.movie, loading: false })
        })
        .catch(() => this.setState({ error: true }))
    }

    render() {
        if (this.state.loading) {
            return
        }
        return (
            <section className="singleView">
                <div className="singlePoster">
                    <img src={this.state.movie.poster_path} />
                    <h2>{this.state.movie.average_rating} / 10</h2>
                </div>
                <div className="singleDetails">
                    <img src={this.state.movie.backdrop_path} />
                    <MovieDesc title={this.state.movie.title} tagline={this.state.movie.tagline} description={this.state.movie.overview} />
                    <MovieTags runtime={this.state.movie.runtime} genres={this.state.movie.genres} budget={this.state.movie.budget} revenue={this.state.movie.revenue} />
                </div>
            </section>
        );
    }
};

export default SingleMovie;