import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    names : [
      'Andrews',
      'Bobs',
      'Charlies'
    ]
  }

  nameHandler = (event) =>{
    this.setState({
      names : [
        event.target.value,
        event.target.value,
        event.target.value
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameHandler} name={this.state.names[0]}></UserInput>
        <UserOutput name={this.state.names[0]}></UserOutput>
        <UserOutput name={this.state.names[1]}></UserOutput>
        <UserOutput name={this.state.names[2]}></UserOutput>
      </div>
    );
  }
}

export default App;
