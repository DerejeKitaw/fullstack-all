import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const PuppiesView = () => {
  return (
    <h1>This is the puppy view!</h1>
  )
}

const BunniesView = () => {
  return (
    <div>
      <h1>This is bunny view</h1>
    </div>
  )
}

const FavoriteBunny = (props) => {
  console.log('Props that we are getting: ', props)
  return (
    <h1 className={props.color}>Our favorite bunny is: {props.favoriteBunny}</h1>
  )
}

ReactDOM.render(
  <Router>
    <div className='bg-blue column center-xy fill-xy'>
      <div>
        <Link to='/puppies'>Go to Pups</Link>
        <Link to='/bunnies'>Go to Buns</Link>
      </div>
      <Route path='/puppies' component={PuppiesView} />
      <Route exact path='/bunnies' component={BunniesView} />
      <Route path='/bunnies/:favoriteBunny' render={
        (routeProps) => <FavoriteBunny color={'brown'} favoriteBunny={routeProps.match.params.favoriteBunny} />
      } />
      <Route exact path='/' component={BunniesView} />
    </div>
  </Router>,
  document.getElementById('app')
)
