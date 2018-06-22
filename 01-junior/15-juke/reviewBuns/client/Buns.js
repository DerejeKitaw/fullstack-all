import React, {Component} from 'react';
import axios from 'axios';

class Buns extends Component {
  constructor() {
    super();
    this.state = {
      buns: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/bunnies');
      this.setState({ buns: data})
    } catch (err) {
      console.log('Something went wrong', err.message)
    }
  }

  render() {
    return (
      <div>
        <h1>Adopt a Bun</h1>
        {
          this.state.buns.map(bun => (
            <div key={bun.id}>
              <li>{bun.name}</li>
              <img src={bun.image} />
            </div>
            )
          )
        }
      </div>
    )

  }
}

export default Buns;
