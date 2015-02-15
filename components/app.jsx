var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var RouteHandler = Router.RouteHandler;

var Layout = require('./layout.jsx');

var App = React.createClass({
  render: function() {
    console.log('app');
    return <Layout>
      <RouteHandler/>
    </Layout>;
  }
});

module.exports = App;
