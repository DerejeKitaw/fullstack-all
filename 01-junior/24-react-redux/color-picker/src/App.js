import React, { Component } from 'react'

import store from './store'
import { Provider } from 'react-redux'

import Main from './components/Main'

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
