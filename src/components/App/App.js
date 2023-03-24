import './App.css';

import React, { Component } from 'react';
import movieData from '../../mockdata';

import Header from '../Header/Header';
import AllMovies from '../AllMovies/AllMovies';
import SingleMovie from '../SingleMovie/SingleMovie';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      movies: [],
      view: 'all',
      clicked: ''
    };
  };

  selectMovie = id => {
    this.setState({ view: 'single', clicked: movieData.movies.find(movie => movie.id === id) });
  };

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res.status)
      }
    })
    .then(data => this.setState({ movies: data.movies }))
    .catch(() => this.setState({ error: true }))
  };

  render() {
    return (
      <main>
        <Header />
        {this.state.view === 'all' ? <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} /> : <SingleMovie movie={this.state.clicked} />}
      </main>
    );
  };
};

export default App;