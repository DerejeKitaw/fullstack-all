import React, {Component} from 'react';

import { connect } from 'react-redux'

import { createFetchMoviesThunk } from '../store'

class MovieSearch extends Component {
  constructor(props) {
    super(props)
    this.fetchOnEnter = this.fetchOnEnter.bind(this)
  }

  fetchOnEnter(evt) {
    if (evt.key === 'Enter') {
      const title = evt.target.value
      this.props.goGrabSomeMovies(title)
      evt.target.value = '';
      evt.target.focus();
    }
  }

  render () {
    return (
      <div className="MovieSearch"
        style={{ padding: '1rem 1.666vw' }}>
        <label>Movie Name:</label>
        <input
          type="text"
          autoFocus
          onKeyDown={this.fetchOnEnter}/>
      </div>
    )
  }
}

const yieldDispatchFromStoreUntoComponentProps = dispatch => ({
  goGrabSomeMovies: (title) => {
    console.log("goGrab is being called")
    dispatch(createFetchMoviesThunk(title))
    console.log("finished calling goGrab")
  }
})

export default connect(
  null,
  yieldDispatchFromStoreUntoComponentProps
)(MovieSearch)