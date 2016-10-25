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
    // fontWeight: 'bold',
    color: '#9C27B0',
    backgroundColor: '#ececec'
  };

  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Get Location Weather</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/" activeClassName="active" activeStyle={style}>Get Weather</IndexLink></li>
              <li><IndexLink to="/about" activeClassName="active" activeStyle={style}> About</IndexLink></li>
              <li><IndexLink to="/examples" activeClassName="active" activeStyle={style}> Examples</IndexLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">#</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

module.exports = Nav;
