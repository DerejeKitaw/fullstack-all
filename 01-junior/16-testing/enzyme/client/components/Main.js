import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Critters from './Critters.js';
import axios from 'axios';

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      critters: []
    };
    this.selectCritters = this.selectCritters.bind(this);
  }

  selectCritters(critterName) {
    axios.get(`/api/${critterName}`)
      .then(res => res.data)
      .then(critters => {
        this.setState({critters});
      });
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>Gallery of Cute</h1>
        </div>
        <Navbar selectCritters={this.selectCritters} />
        <Critters critters={this.state.critters} title="my critters:" />
      </div>
    );
  }
}
