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
      movies: movieData.movies,
      view: 'all',
      clicked: ''
    };
  };

  selectMovie = id => {
    this.setState({ view: 'single', clicked: id });
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