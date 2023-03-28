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

  // selectMovie = id => {
  //   this.setState({ clicked: id });
  // };

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
    console.log(this.state.clicked)
    return (
      <main>
        <Header />
        {/* {this.state.view === 'all' ? <div><Featured movies={this.state.movies} selectMovie={this.selectMovie} /> <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} /> </div>: <SingleMovie movie={this.state.clicked} />} */}
        {/* <Switch>
          <Route path="/:id">
            <SingleMovie id='724495' />
          </Route>
          <Route exact path='/'>
            <Featured movies={this.state.movies} selectMovie={this.selectMovie} /> 
            <AllMovies movies={this.state.movies} selectMovie={this.selectMovie} /> 
          </Route>
        </Switch> */}
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