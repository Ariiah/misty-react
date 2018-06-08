import React, {Component} from 'react';
import '../App.css';
const axios = require('axios')

const API = 'http://localhost:3000/led'

const onClick = () => {
  fetch(API)
}

class LedComponent extends Component {

  constructor() {
    super()
    this.state = {
      misty: []
    }
  }

  render() {
    return (<div>
      <button onClick={onClick}>Lights!</button>
    </div>)
  }
}

export default LedComponent
