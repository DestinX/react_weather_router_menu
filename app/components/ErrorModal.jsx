var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function() {
    $('#myModal').modal();
  },
  render: function() {
    return (
      <div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Error</h4>
              </div>
              <div className="modal-body">
                {this.props.error}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ErrorModal;