const { fetchMyIP } = require('./fetchIP');
const { fetchCoordsByIP } = require('./fetchCoordsByIP');
const { fetchISSFlyOverTimes } =  require('./flyover');

const nextISSTimesForMyLocation = ((callback) => {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordsByIP(ip,(err, cbCoord) => {
      if (err) {
        return callback(err, null);
      }
      console.log(fetchISSFlyOverTimes)
      fetchISSFlyOverTimes(cbCoord,(err2, time) => {
        if (err2) {
          return callback(err2, null);
        }
        callback(null,time)
      });
    });  
  });
});

module.exports = { nextISSTimesForMyLocation };


