import React, {Component} from 'react';
const axios = require('axios')

const API = 'http://localhost:3000/led'

const onClick = () => {
   fetch(API)
}

function changeColor() {
  axios({url: API, crossDomain: true, method: 'post'})
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
