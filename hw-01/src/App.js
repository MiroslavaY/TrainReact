import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name : 'stranger'
    }
  }

  handleNameChange = (event) => {
    if(event.target.value !== '') {
      this.setState({
          name: event.target.value
      });
    } else {
      this.setState({
        name: 'stranger'
    });
    }
}

  render() {
    return (
      <div>
        <input onChange={this.handleNameChange}/>
        <h3>Hello, {this.state.name}</h3>
      </div>
    );
  }
}

export default App;
