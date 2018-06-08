import React, {Component} from 'react'
const axios = require('axios')

class TextComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      misty: []
    }

  }

  onClick(e){
    e.preventDefault()

    let msg = document.getElementsByClassName('message')[0].value
    let vol = document.getElementsByClassName('volume')[0].value
    console.log('msg', msg);
    console.log('vol', vol);

    fetch('http://localhost:3000/tts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: msg, volume: vol})
    }).then((response) => {
      console.log('responded', response)
    }).catch((err) => {
      console.log('Error', err)
    })
  }

  // onChange(e) {
  //   e.preventDefault()
  //
  //   this.vol = document.getElementsByClassName('volume')[0].value
  //   // console.log('vol', vol)
  //
  //   return vol
  // }

  render() {

    return (<div>
      <form>
        What to say?
        <input type="text" className="message" placeholder="Hello World"/>
        <button type="submit" onClick={this.onClick}>Click Me!</button>
        Volume
        <input type='range' min='1' max='10' defaultValue='5' step='1' className='volume'/>
      </form>
    </div>)
  }

}

export default TextComponent
