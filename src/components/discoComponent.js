import React, { Component } from 'react';
const request = require('request');
const axios = require('axios')

const API = 'http://localhost:3000/disco'

const onClick = () => {
  console.log('hello');
  partyTime()
}


function partyTime() {
    axios({
      url: API,
      crossDomain: true,
      method: 'post'
    })
}


class DisComponent extends Component {

  constructor() {
    super()
      this.state = {
        misty: []
      }
  }

  async componentDidMount() {

    try {
      console.log('hi');
        const response = await fetch(API)
        console.log(response);
    }
    catch(err) {
        console.log(err);
    }
  }

  render() {
    return(
      <div>
        <button onClick={onClick}>Disco!</button>
      </div>
    )
  }

}

export default DisComponent
