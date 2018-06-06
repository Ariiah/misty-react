import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LedComponent from './components/ledComponent'
import DiscoComponent from './components/discoComponent'

const request = require('request');

class App extends Component {
  render() {
    return(
    <div>
      <h3>Miss Tea's Misty-cal Mist-er-y Movements</h3>
      <LedComponent />
      <br></br>
      <DiscoComponent />
    </div>

    )
  }
}

export default App;
