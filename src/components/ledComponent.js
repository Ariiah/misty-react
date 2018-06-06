import React, { Component } from 'react';
const request = require('request');
const axios = require('axios')

const ledComponent = () => {

    const axios = require('axios')

    function changeColor(red, green, blue) {
      axios({
        url: 'http://10.9.21.211:80/api/led/change',
        crossDomain: true,
        method: 'post',
        data: {
          red: red,
          green: green,
          blue: blue
        }
      })
    }

    let red = 50
    let green = 150
    let blue = 255

    function discoParty() {
      console.log(red)

      if (red >= 255) {
        red -= 255
      }
      if (green >= 255) {
        green -= 255
      }
      if (blue >= 255) {
        blue -= 255
      }

      changeColor(red, green, blue)

      red += 50
      green += 50
      blue += 50

    }

    let myInterval = setInterval(discoParty, 1000)

      const onClick = () => {
        console.log('hello');
        discoParty()
      }

      return (
        <div>
          <button onClick={onClick}>Click Me!</button>
        </div>
      )

}

export default ledComponent
