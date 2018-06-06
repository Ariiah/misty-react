import React, { Component } from 'react';
const request = require('request');

const ledComonent = () => {

    const url = 'http://10.9.21.211:80/api/led/change'

    const opts = {
        method: 'POST',
        body: JSON.stringify({ red: 255,
          blue: 0,
          green: 0
          }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }

      const onClick = () => {
        console.log('hello');
        request.post(url, opts)
      }

      return (
        <div>
          <button onClick={onClick}>Click!</button>
        </div>
      )

}

export default ledComonent
