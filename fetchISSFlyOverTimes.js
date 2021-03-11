const request = require('request');
let ENDPOINT = 'http://api.open-notify.org/iss-pass.json?'


const fetchISSFlyOverTimes = function(object, callback) {  
  request(ENDPOINT + `lat=${object["latitude"]}&lon=${object["longitude"]}`, (error, response, body) => {
    if(error) {
      callback(error);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      console.log(JSON.parse(body)); 
      const passes = JSON.parse(body).response;
    }
  })
}
  
module.exports = { fetchISSFlyOverTimes };