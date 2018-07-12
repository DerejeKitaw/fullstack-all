import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import store from './store'
import {gotPugs, getPugs} from './store/pugs'

const PugsList = () => {
  return (
    <div>
      Pug List!
    </div>
  )
}

const Home = () => {
  return (
    <div>
      Pug Party!
    </div>
  )
}

const NotFound = () => {
  return (
    <div>Not all who wander are lost...but you are</div>
  )
}

const Main = () => {
  return (
    <div id='demo' className='fill-xy bg-yellow black column center-xy'>
      <nav>
        <Link to='/pugs'>Pugs</Link>
        <Link to='/home'>Home</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pugs' component={PugsList} />
          <Route path='/home' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
)
