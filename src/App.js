import React, { Component } from 'react';
import './App.css';
import LedComponent from './components/ledComponent'
import DiscoComponent from './components/discoComponent'
import TextComponent from './components/textComponent'



class App extends Component {
  render() {
    return(
    <div>
      <h3>Miss Tea's Misty-cal Mist-er-y Movements</h3>
      <LedComponent />
      <DiscoComponent />
      <TextComponent />
      <br></br>
    </div>

    )
  }
}

export default App;
