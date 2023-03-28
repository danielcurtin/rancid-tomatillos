import './App.css';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import AllMovies from '../AllMovies/AllMovies';
import Featured from '../Featured/Featured';
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
    this.setState({ view: 'single', clicked: id });
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

  renderHome() {
    return (
      <div>
        <Featured movies={this.state.movies} selectMovie={this.selectMovie} /> 
        <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} /> 
      </div>
    )
  }

  render() {
    return (
      <main>
        <Header />
        {/* {this.state.view === 'all' ? <div><Featured movies={this.state.movies} selectMovie={this.selectMovie} /> <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} /> </div>: <SingleMovie movie={this.state.clicked} />} */}
        <Route exact path='/' render={ () => this.renderHome() } />
        
      </main>
    );
  };
};

export default App;