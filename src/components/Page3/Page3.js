import React, { Component } from 'react';
import axios from 'axios';

class Page3 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      info: false
    };
  }

  sendName = () => {
      axios.put('/api/session', {name: this.state.name}).then(res=> {
          console.log('sessions>>>', res)
            this.setState({info: true})
      })
  }

  render() {
    return (
      <div>
        <h1>Page 3</h1>
        <input
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={()=> this.sendName()}>Send</button>
      </div>
    );
  }
}

export default Page3;
