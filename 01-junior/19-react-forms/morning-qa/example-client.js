import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

const Puppies = (props) => {
  if (!(+props.match.params.puppyId)) {
    return <Redirect to='/not-found' />
  }

  return (
    <div>
      <h1>Welcome to Puppies!</h1>
      {
        props.match.params.puppyId &&
          <p>In particular, the puppy with the id of {props.match.params.puppyId}</p>
      }
    </div>
  )
}

const Bunnies = () => {
  return (
    <h1>Welcome to Bunnies!</h1>
  )
}

const Home = () => {
  return (
    <h1>Welcome Home!</h1>
  )
}

const NotFound = () => {
  return (
    <h1>Um, you are lost!</h1>
  )
}

const Routes = () => {
  return (
    <div className='bg-blue column center-xy fill-xy'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/puppies' component={Puppies} />
        <Route path='/puppies/:puppyId' component={Puppies} />
        <Route path='/bunnies' render={() => <Bunnies foo={'foo'} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app')
)
