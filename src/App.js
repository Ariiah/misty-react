import React, { Component } from 'react';
import './App.css';
import LedComponent from './components/ledComponent'
import DiscoComponent from './components/discoComponent'
import TextComponent from './components/textComponent'



class App extends Component {
  render() {
    return(
    <div className={'center'}>
      <h3>Misty's Movements</h3>
      <LedComponent />
      <br></br>
      <DiscoComponent />
      <br></br>
      <TextComponent />
      <br></br>
    </div>

    )
  }
}

export default App;
