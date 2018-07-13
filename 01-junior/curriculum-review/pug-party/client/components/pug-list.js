import React from 'react'
import {connect} from 'react-redux'
import {getPugs} from '../store/pugs'
import PugForm from './pug-form'

// 1. Hard-coded view
//  - Just hard code the JSX
// 2. Calculated view
//  - Use dummy "prop" data to calculate the view
//  - Write things like .map, .filter, etc
// 3. Get data from store
//  - Move dummy data to initial state in the store
//  - Connect the component
//  - write mapStateToProps
// 4. Get data from server
//  - get rid of dummy data
//  - write mapDispatchToProps
//  - get real data

// Function component (view)

export const PugsList = (props) => {
  const pugs = props.pugs

  return (
    <div>
      <ul>
        {
          pugs.map(pug => (
            <li key={pug.id}>{pug.name}</li>
          ))
        }
      </ul>
      <PugForm />
    </div>
  )
}

// "Loader" component

class PugsLoader extends React.Component {
  componentDidMount () {
    this.props.getPugs()
  }

  render () {
    return (
      <PugsList {...this.props} />
    )
  }
}

// "Smart" component (state/behavior)

const mapState = (state) => {
  return {
    pugs: state.pugs
  }
}

const mapDispatch = (dispatch) => {
  return {
    getPugs: () => {
      const thunk = getPugs()
      dispatch(thunk)
    }
  }
}

const ConnectedPugsList = connect(mapState, mapDispatch)(PugsLoader)

export default ConnectedPugsList
