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
      <h2>About</h2>
      <p>The about page. Just to show off.</p>
    </div>
  );
};

module.exports = About;
