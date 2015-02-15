var React = require('react');
var PropTypes = React.PropTypes;
var Layout = require('./layout');

var Error = React.createClass({
  propTypes: {
    message: PropTypes.any,
    error: PropTypes.any
  },

  render: function() {
    console.log('error page');
    return <Layout>
      <h1>Error</h1>
      {this.props.message}
    </Layout>;
  }
});

module.exports = Error;
