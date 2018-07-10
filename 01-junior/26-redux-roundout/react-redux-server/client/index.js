import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Pugs from './components/pugs'

ReactDOM.render(
  <Provider store={store}>
    <div id='demo' className='fill-xy bg-yellow black column center-xy'>
      <Pugs />
    </div>
  </Provider>,
  document.getElementById('app')
)
