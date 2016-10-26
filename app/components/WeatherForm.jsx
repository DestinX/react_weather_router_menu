var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="location" />
            <br/>
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.onFormSubmit}>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
