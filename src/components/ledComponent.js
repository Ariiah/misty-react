import React, {Component} from 'react';
const request = require('request');
const axios = require('axios')

const API = 'http://localhost:3000/led'

const onClick = () => {
  console.log('hello')
    const response = fetch(API)
  // changeColor()
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

  // async componentDidMount() {
  //   try {
  //     console.log('hi');
  //     const response = await fetch(API)
  //     console.log(response)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  render() {
    return (
      <div>
      <button onClick={onClick}>Lights!</button>
    </div>)
  }
}

export default LedComponent
