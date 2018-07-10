import React from 'react'
import {connect} from 'react-redux'
import {fetchPugs, selectPugs} from '../store/pugs'

class Pugs extends React.Component {
  componentDidMount () {
    this.props.fetchPugs()
  }

  render () {
    const {pugs, isLoading, gotError} = this.props

    if (isLoading) {
      return <div>Loading pugs...</div>
    }

    if (gotError) {
      return <div>Oh noes! Problems with pugs!</div>
    }

    return (
      <ul>
        {
          pugs.map(pug => (<li key={pug}>{pug}</li>))
        }
      </ul>
    )
  }
}

const mapState = (state) => {
  return {
    pugs: selectPugs(state),
    isLoading: state.pugs.isLoading,
    gotError: state.pugs.gotError
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchPugs: () => dispatch(fetchPugs())
  }
}

const ConnectedPugs = connect(mapState, mapDispatch)(Pugs)

export default ConnectedPugs
