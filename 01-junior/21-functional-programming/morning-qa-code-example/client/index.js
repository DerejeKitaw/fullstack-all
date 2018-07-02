import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
// io: func that configures socket.io for your client
import io from 'socket.io-client'

// socket: represents this client's connection to the server
const socket = io()

socket.emit('iDidSomething', {data: 'something'}, 'something else')

socket.on('someoneDidSomething', (...payload) => {
  console.log('Someone did a thing!')
  console.log(...payload)
})

const MessageView = (props) => {
  const {message} = props

  return (
    <div>
      {message}
    </div>
  )
}

const MessageForm = (props) => {
  const {handleChange, clear, message} = props

  return (
    <div>
      <input type='text' onChange={handleChange} value={message} />
      <button onClick={clear}>Clear Input</button>
    </div>
  )
}

class StatefulMessage extends React.Component {
  constructor () {
    super()
    this.state = {
      message: 'Welcome'
    }
  }

  handleChange = (evt) => {
    this.setState({
      message: evt.target.value
    })
  }

  clear = () => {
    this.setState({
      message: ''
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render () {
    const {message} = this.state
    const {userName} = this.props

    return (
      <div>
        <button onClick={this.goBack}>Go Back!</button>
        <h1>This is the name of {userName}'s app:</h1>
        <MessageView message={message} />
        <MessageForm
          handleChange={this.handleChange}
          clear={this.clear}
          message={message}
        />
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    user: {
      name: 'Cody'
    }
  }

  render () {
    const userName = this.state.user.name

    return (
      <div className='bg-blue column center-xy fill-xy'>
        <nav>
          <Link to='/message'>Go to message</Link>
        </nav>

        <div>
          <Route
            path='/message'
            render={
              (routeProps) => (
                <StatefulMessage
                  history={routeProps.history}
                  userName={userName}
                />
              )
            }
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
