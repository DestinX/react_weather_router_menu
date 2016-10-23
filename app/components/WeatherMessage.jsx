var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//       <h4>Det är {temp} grader i {location}</h4>
//     );
//   }
// });

// var WeatherMessage = (props) => {
var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;
  return (
    <h4>Det är {temp} grader i {location}.</h4>
  );
}

module.exports = WeatherMessage;
