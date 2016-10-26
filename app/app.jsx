var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // var obj = { name: 'Joe' } --> var {name} = obj; --> name = obj.name;
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
// var $ = require('jquery');
// var jQuery = require('jquery');

// Load bootstrap
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path = "/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} /> // skickas som props.children till Main.jsx
    </Route>
  </Router>,
  document.getElementById('app')
);
