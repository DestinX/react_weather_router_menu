var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h2>About Component</h2>
//     );
//   }
// });

// Stateless functional component
// Endast state lösa komponenter
// Passar att göra på react funktioner som endast har en render funktion
var About = () => {
  return (
    <div>
      <br/>
      <br/>
      <h1 className="centered">About</h1>
      <p>This is an weather fetching application built on rect.</p>
    </div>
  );
};

module.exports = About;
