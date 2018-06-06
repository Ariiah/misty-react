console.log('hello');
const axios = require('axios')

function yellow(red, yellow, blue) {
  axios({
    url: 'http://10.9.21.211:80/api/led/change',
    method: 'post',
    data: { red: 0, green: 250, blue: 0 }
  })
}

// yellow()

function discoParty() {
  let red = 0
  let green = 0
  let blue = 255
  yellow(red, yellow, blue)
}
