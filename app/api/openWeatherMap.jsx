var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=d17ac8a90e7190bfd3ab87a81607b2da';
// appid=d17ac8a90e7190bfd3ab87a81607b2da
// q=stockholm

module.exports = {
  getTemp: function(location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      function(res) {
        // debugger;
        // console.log(res);
        if(res.data.list[0].main.temp && res.data.message) {
          return res.data.list[0].main.temp;
        } else {
          throw new Error(res.data.message);
        }
      }, function(res) {
        throw new Error(res.data.message);
      }
    );

  }
}
