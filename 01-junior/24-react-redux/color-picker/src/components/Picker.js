import React, {Component} from 'react'
import { connect } from 'react-redux'

/* This component needs to talk to the store, so here we need
 * to dispatch!
 */
import { changeColor } from '../store'

import './Picker.css'
class Picker extends Component {
  constructor(props) {
    super(props)
    this.state = { r: 0, g: 0, b: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(colorObj) {
    this.setState(colorObj, () => {
      this.props.componentAlertStoreOfColorChange(this.state)
    })
  }

  render() {
    return (
      <div className="Picker">
        <div className="control">
          <label>Red - {this.state.r}</label>
          <input list="red" type="range" 
            min="0" max="255"
            value={this.state.r}
            onInput={(e) => this.handleChange({ r: e.target.value })} />
          <datalist id="red">
            <option value="0" />
            <option value="63" />
            <option value="127" />
            <option value="191" />
            <option value="255" />
          </datalist>
        </div>
        <div className="control">
          <label>Green - {this.state.g}</label>
          <input list="green" type="range" 
            min="0" max="255"
            value={this.state.g}
            onInput={(e) => this.handleChange({ g: e.target.value })} />
          <datalist id="green">
            <option value="0" />
            <option value="63" />
            <option value="127" />
            <option value="191" />
            <option value="255" />
          </datalist>
        </div>
        <div className="control">
          <label>Blue - {this.state.b}</label>
          <input list="blue" type="range" 
            min="0" max="255"
            value={this.state.b}
            onInput={(e) => this.handleChange({ b: e.target.value })} />
          <datalist id="blue">
            <option value="0" />
            <option value="63" />
            <option value="127" />
            <option value="191" />
            <option value="255" />
          </datalist>
        </div>
      </div>
    );
  }
}

const convertStoreStateToComponentProps = state => ({
  shenanigan: 'Dishwasher'
})

const provideDispatchingToComponentProps = dispatch => ({
  componentAlertStoreOfColorChange: (color) => dispatch(changeColor(color))
})

/* connect: ((fn, fn) => fn)(Component)
 * connect takes two functions as inputs, and returns a new function
 * which likes to eat Components
 * It's TOTES OK for either of the two inputs to be null/undefined
 */
export default connect(
  convertStoreStateToComponentProps,
  provideDispatchingToComponentProps
)(Picker);