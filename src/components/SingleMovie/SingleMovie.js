import React, { Component } from "react";
import PropTypes from 'prop-types';
import './SingleMovie.css';

import MovieDesc from "../MovieDesc/MovieDesc";
import MovieTags from "../MovieTags/MovieTags";

class SingleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: true,
            id: props.id,
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
        if (this.state.error) {
            return <h2>Something went wrong, please try again.</h2>
        } else if (this.state.loading) {
            return
        }
        return (
            <>
                <img src={this.state.movie.backdrop_path} className="backdropImg"/>
                <section className="singleView">             
                    <div className="singlePoster">
                        <img src={this.state.movie.poster_path} />
                        <h2>{this.state.movie.average_rating} / 10</h2>
                    </div>
                    <div className="singleDetails">
                        <MovieDesc title={this.state.movie.title} tagline={this.state.movie.tagline} description={this.state.movie.overview} />
                        <MovieTags runtime={this.state.movie.runtime} genres={this.state.movie.genres} budget={this.state.movie.budget} revenue={this.state.movie.revenue} id={this.state.movie.id} />
                    </div>
                </section>
            </>
        );
    }
};

export default SingleMovie;

SingleMovie.propTypes = {
    id: PropTypes.number.isRequired
}