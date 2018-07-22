import React from 'react';
import axios from 'axios';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      // some state props
    };
    // binder giveaway
    this.someMethod = this.someMethod.bind(this);
  }

  async componentDidMount() {
    // hook, add axios requests to api here, setState based on results
  }

  someMethod() {
    // do stuff, mutate / get state, work with axios data
  }

  render() {
    // must implement, due to extends React.Component
    return <p>some jsx</p>;
  }
}
