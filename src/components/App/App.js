import './App.css';

import React, { Component } from 'react';
import movieData from '../../mockdata';
import AllMovies from '../AllMovies/AllMovies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <AllMovies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;