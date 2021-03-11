const request = require('request');
let ENDPOINT = 'https://api.ipify.org'

const fetchMyIP = function(callback) { 
  request(ENDPOINT, (error, response, body) => {
    if(error) {
        callback(error,null);
    } else if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      } else {
        callback(null,body);
    }
  })
}
  
module.exports = { fetchMyIP };

