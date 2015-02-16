var React = require('react');
var PropTypes = React.PropTypes;

var Error = React.createClass({
  propTypes: {
    message: PropTypes.any,
    error: PropTypes.any
  },

  render: function() {
    return <div>
      <h1>Error</h1>
      {this.props.message}
    </div>;
  }
});

module.exports = Error;
