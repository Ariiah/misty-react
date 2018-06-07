import React, { Component } from 'react';
const request = require('request');
const axios = require('axios')

const API = 'http://localhost:3000/tts'

const onClick = () => {
  // console.log('wheee');
  // const message = Document.getElementById('.message').value()
  // console.log(message);
  partyTime()
}


function partyTime() {
    axios({
      url: API,
      crossDomain: true,
      method: 'post'
    })
}


class TextComponent extends Component {

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
        <form>
        What to say? <input type="text" name="speech" className="message" placeholder="Hello World" />
        <input type="submit" value="Submit" onClick={onClick}/>
        </form>
      </div>
    )
  }

}

export default TextComponent
