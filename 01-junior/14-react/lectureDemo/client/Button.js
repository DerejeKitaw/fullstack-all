import React from 'react';

class Button extends React.Component {

  constructor() {
    super();
    this.state = {
      clicks: 0
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  render() {
    return (<div>
       <h1> Button Game!</h1>
       {
         this.state.clicks < 10
         ? <button type="button" onClick={this.clickHandler}>Click me 10 times!</button>
         : <h3>You Won!!!!!</h3>
       }

    </div>)
  }

}

export default Button
