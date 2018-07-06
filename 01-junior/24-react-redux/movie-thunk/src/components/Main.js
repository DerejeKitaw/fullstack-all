import React, {Component} from 'react';

import MovieList from './MovieList';
import MovieSearch from './MovieSearch';

import axios from 'axios';

class Main extends Component {
  render () {
    return (
      <div className="Main">
        <MovieSearch />
        <MovieList />
      </div>
    );
  }
}

export default Main;