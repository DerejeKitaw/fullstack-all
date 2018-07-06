import React, {Component} from 'react';

import { connect } from 'react-redux'

class MovieList extends Component {
  render () {
    return (
      <div className="MovieList"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}>
        {this.props.movies.map((movie,i) => (
          <div className="movie" key={i}
            style={{
              width: '30vw'
            }}>
            <h3>{movie.Title} ({movie.Year})</h3>
            <img src={movie.Poster} 
              style={{
                width: '100%'
              }} />
          </div>
        ))}
      </div>
    )
  }
}

const turnStoreStateIntoSomePropsForMyComponent = state => ({
  movies: state.movies
})

export default connect(
  turnStoreStateIntoSomePropsForMyComponent, 
  null
)(MovieList)