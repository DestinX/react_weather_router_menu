var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function() {
//     var style = {
//       fontWeight: 'bold',
//       color: '#9C27B0',
//       fontSize: '18px'
//     };
//
//     return (
//       <div>
//         <h2>This iz Navigation</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={style}>Get Weather</IndexLink>
//         <IndexLink to="/about" activeClassName="active" activeStyle={style}> About</IndexLink>
//         <IndexLink to="/examples" activeClassName="active" activeStyle={style}> Examples</IndexLink>
//       </div>
//     );
//   }
// });

var Nav = () => {
  var style = {
    fontWeight: 'bold',
    color: '#9C27B0',
    fontSize: '18px'
  };

  return (
    <div>
      <h2>This iz Navigation</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={style}>Get Weather</IndexLink>
      <IndexLink to="/about" activeClassName="active" activeStyle={style}> About</IndexLink>
      <IndexLink to="/examples" activeClassName="active" activeStyle={style}> Examples</IndexLink>
    </div>
  );
}

module.exports = Nav;
