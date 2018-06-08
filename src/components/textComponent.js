import React, { Component } from 'react'
const axios = require('axios')

const API = 'http://localhost:3000/tts'

const onClick = (e) => {
  e.preventDefault()

  let msg = document.getElementsByClassName('message')[0].value
  console.log('msg', msg);

  fetch(API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: msg })
  })
  .then((response) => {
    console.log('responded', response);
  })
  .catch((err) => {
    console.log('Error', err);
  })
}

class TextComponent extends Component {
  constructor() {
    super()
      this.state = {
        misty: []
      }
  }

  render() {

    return(
      <div>
        <form>
          What to say? <input type="text" name="speech" className="message" placeholder="Hello World" />
          <button type="submit" onClick={onClick}>Click Me!</button>
        </form>
      </div>
    )
  }

}

export default TextComponent
