import './App.css';

import React, { Component } from 'react';
import movieData from '../../mockdata';

import AllMovies from '../AllMovies/AllMovies';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    };
  };

  render() {
    return (
      <main>
        <Header />
        <AllMovies movies={this.state.movies} />
      </main>
    );
  };
};

export default App;