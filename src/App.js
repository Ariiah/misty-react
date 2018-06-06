import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LedComonent from './components/ledComonent'

const request = require('request');

class App extends Component {
  render() {
    return(
    <LedComonent />
    )
  }
}

export default App;
