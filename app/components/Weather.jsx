var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
// var $ = require('jquery');

var Weather = React.createClass({
  getInitialState: function() {
    return{
      isLoading: false,
      errModalMessage: undefined
    }
  },
  handleSearch: function(location) {
    this.setState({
      isLoading: true,
      errModalMessage: undefined
    });

    // ANVÄNDER openWeatherMap filen för en promise och hämtar data med axios
    var that = this;
    openWeatherMap.getTemp(location).then(
      function(data) {
        that.setState({
          location: location,
          temp: data,
          isLoading: false
        });
    }, function(err) {
      that.setState({
        isLoading: false,
        errModalMessage: err.message
      });
      // alert(err);
    });

    // const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=d17ac8a90e7190bfd3ab87a81607b2da';
    // $.ajax({
    //   url: OPEN_WEATHER_MAP_URL+'&q='+location,
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     this.setState({
    //       location: location,
    //       temp: (data.count === 0) ? 0 : data.list[0].main.temp,
    //       isLoading: false
    //     });
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(requestUrl, status, xhr, err.toString()); //bättre error!!!
    //     this.setState({isLoading: false, errModalMessage: err});
    //   }.bind(this)
    // });

  },
  render: function() {
    var {isLoading, temp, location, errModalMessage} = this.state;
    // var that = this;

    function renderLoadingMessage() {
      if(isLoading) {
        return <h3>Fetching weather..</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />
      }
    }

    function renderErrorMessage() {
      if(typeof errModalMessage === 'string') {
        return <ErrorModal message={errModalMessage} />
      }
    }

    return (
      <div>
        <br/>
        <br/>
        <h1 className="muzzo">See the weather!</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderLoadingMessage()}
        {renderErrorMessage()}
      </div>
    );
  }
});

module.exports = Weather;
