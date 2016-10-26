var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h2>These are the Examples</h2>
//     );
//   }
// });

var Examples = () => {
  return (
    <div>
      <br/>
      <br/>
      <h2>Examples</h2>
      <p>Here are some examples to try out.</p>
      <ol>
        <li><Link to='/?location=Rio'>Rio, Brazil</Link></li>
      </ol>
    </div>
  )
};

module.exports = Examples;
