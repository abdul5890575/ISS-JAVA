const request = require('request');
let ENDPOINT = 'https://freegeoip.app/json/'

const fetchCoordsByIP = function(IP, callback) { 
  console.log(ENDPOINT + IP)  
  request(ENDPOINT + IP, (error, response, body) => {
    if(error) {
      callback(error);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const { latitude, longitude } = JSON.parse(body); 
      callback(null,{ latitude, longitude });
    }
  })
}
  
module.exports = { fetchCoordsByIP };