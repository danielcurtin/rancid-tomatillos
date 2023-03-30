import React from "react";
import PropTypes from 'prop-types';
import './MovieDesc.css';

const MovieDesc = ({ title, tagline, description }) => {
    return (
        <div className="movieDesc">
            <h2>{title}</h2>
            <h3>{tagline}</h3>
            <p>{description}</p>
        </div>
    );
};

export default MovieDesc

MovieDesc.propTypes = {
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}