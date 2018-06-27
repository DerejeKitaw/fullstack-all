import React from 'react'
import ReactDOM from 'react-dom'

// state: is our data that changes, we pass them as arguments/props
// props: just like arguments to a function

const CounterView = (props) => {
  return (
    <div>
      <h1>{props.message}</h1>
      {props.count}
    </div>
  )
}

class Counter extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
  }

  increment () {
    this.setState({
      count: this.state.count
    })
  }

  render () {
    return (
      <div>
        <CounterView
          count={this.state.count}
          message={'This is the counter'}
        />
        <CounterView
          count={this.state.count}
          message={'This is the other counter'}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
)
