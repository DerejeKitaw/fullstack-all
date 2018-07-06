import React, {Component} from 'react'

import Picker from './Picker'
import Preview from './Preview'

import './Main.css'

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <Picker />
        <Preview />
      </div>
    )
  }
}

export default Main;