import React, {Component} from 'react'
import { connect } from 'react-redux'

import store, { initialState } from '../store'

import './Preview.css'
class Preview extends Component {
  render() {
    const {r,g,b} = this.props;
    return (
      <div className="Preview"
        style={{
          background: `rgb(${r},${g},${b})`
        }} />
    )
  }
}

const convertStoreStateToComponentProps = state => ({
  r: state.r,
  g: state.g,
  b: state.b
})

export default connect(convertStoreStateToComponentProps, null)(Preview)