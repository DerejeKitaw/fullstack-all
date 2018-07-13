import React from 'react'
import {connect} from 'react-redux'
import {addPug} from '../store/pugs'

class PugForm extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      age: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    // const name = evt.target.name.value
    // const age = evt.target.age.value
    console.log('so happy to be here')
    console.log(this.state)
    this.props.addPug(this.state)
    this.setState({
      name: '',
      age: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Pug Name</label>
        <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
        <label htmlFor='age'>Pug age</label>
        <input type='number' name='age' onChange={this.handleChange} value={this.state.age} />
        <button type='submit'>Add new pug!</button>
      </form>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    addPug: (pugData) => {
      const thunk = addPug(pugData)
      dispatch(thunk)
    }
  }
}

const ConnectedPugForm = connect(null, mapDispatch)(PugForm)

export default ConnectedPugForm
