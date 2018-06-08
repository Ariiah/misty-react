import React, {Component} from 'react';
const axios = require('axios')

const API = 'http://localhost:3000/disco'

const onClick = () => {
  fetch(API)
}


class DisComponent extends Component {
  constructor() {
    super()
    this.state = {
      misty: []
    }
  }

  render() {
    return (<div>
      <button onClick={onClick}>Disco!</button>
    </div>)
  }
}

export default DisComponent
