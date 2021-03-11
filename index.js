// index.js
const { fetchMyIP } = require('./fetchIP');
const { fetchCoordsByIP } = require('./fetchCoordsByIP');
const { fetchISSFlyOverTimes } =  require('./fetchISSFlyOverTimes');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('99.253.52.196',(err, cbCoord) => {
//     if (err) {
//       console.log("It didn't work!" , err);
//       return;
//     }
//     console.log('It worked! Coordnates:' , cbCoord);
// });


fetchISSFlyOverTimes({ 'latitude': 43.7137, 'longitude': -79.5964 },(err, time) => {
    if (err) {
      console.log("It didn't work!" , err);
      return;
    }
    console.log('It worked! Coordnates:' , time);
});