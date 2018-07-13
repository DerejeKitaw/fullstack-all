import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Home from './home'
import NotFound from './not-found'
import PugsList from './pug-list'

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

export default Main
