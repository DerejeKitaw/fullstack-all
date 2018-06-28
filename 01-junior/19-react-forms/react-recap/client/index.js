import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const PupForm = ({handleSubmit, draftPupName, handleChange, pupName}) => {
  // const handleSubmit = props.handleSubmit
  // const pupName = props.pupName
  // const {handleSubmit, pupName} = props

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='draftPupName'
        onChange={handleChange}
        defaultValue={pupName}
      />
      <button type='submit'>Change pup name</button>
    </form>
  )
}

class Pup extends React.Component {
  state = {
    pupName: '',
    draftPupName: ''
  }

  async componentDidMount () {
    try {
      const response = await axios.get('/api/puppies/1')
      const cody = response.data
      this.setState({
        pupName: cody.name
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('Success!')
    this.setState({
      pupName: this.state.draftPupName
    })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
      <div className='bg-blue column center-xy fill-xy'>
        <h1>Your pup is: {this.state.pupName}</h1>
        {
          this.state.pupName &&
            <PupForm
              handleSubmit={this.handleSubmit}
              draftPupName={this.state.draftPupName}
              handleChange={this.handleChange}
              pupName={this.state.pupName}
            />
        }
      </div>
    )
  }
}

ReactDOM.render(
  <Pup />,
  document.getElementById('app')
)
