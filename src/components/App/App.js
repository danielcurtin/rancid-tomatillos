import './App.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

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
      clicked: ''
    };
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
    if (this.state.error) {
      return (
        <main>
          <Header /> 
          <h2>Something went wrong, please try again.</h2>
        </main>
      )
    }
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path='/:id' render={({match}) => {
            let movieId = parseInt(match.params.id)
            return <SingleMovie id={movieId} />
          }} />
          <Route exact path='/' render={ () => {
            return (
              <div>
                <Featured movies={this.state.movies} selectMovie={this.selectMovie} /> 
                <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} />
              </div>
            )
          }} />
        </Switch>
      </main>
    );
  };
};

export default App;