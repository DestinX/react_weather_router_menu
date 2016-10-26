var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Nav />
//         <h2>Main Component</h2>
//         { /* Kommer från app.jsx */ }
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav />
      { /* Kommer från app.jsx */ }
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {props.children}
          </div>
        </div>
      </div>

    </div>
  );
};

module.exports = Main;
