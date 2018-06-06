import React, { Component } from 'react';
const request = require('request');
const axios = require('axios')

const disComponent = () => {

  function partyTime() {
    axios({
      url: 'http://10.9.21.211:80/api/audio/play',
      method: 'post',
      data: {
        AssetId: "MrMeeseeks.wav"
      }
    })

    axios({
      url: 'http://10.9.21.211:80/api/images/change',
      method: 'post',
      data: {
        FileName: "mrmee.jpg"
      }
    })

    axios({
      url: 'http://10.9.21.211:80/api/drive/time',
      method: 'post',
      data: {
        LinearVelocity: 0,
        AngularVelocity: 100,
        TimeMS: 5000
      }
    })
    .then(()=>{
      axios({
        url: 'http://10.9.21.211:80/api/images/revert',
        method: 'post'
      })
    })
  }


        const onClick = () => {
          console.log('hello');
          // request.post(url, opts)
          partyTime()
        }

        return (
          <div>
            <button onClick={onClick}>PARTY TIME!!!</button>
          </div>
        )

}

export default disComponent
