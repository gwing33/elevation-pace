var React = require('react');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({
  render: function() {
    return <html lang="en">
      <head>
        <title>Elevation Pace</title>
        <link src='/css/main.css' />
      </head>
      <body>
        <h1>Layout</h1>
        {this.props.children}
      </body>
    </html>;
  }
});

module.exports = Layout;
