var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({
  render: function() {
    return <div>
      <header>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
      </header>
      <h1>Layout</h1>
      {this.props.children}

      <script src="/js/build/app.js" />
    </div>;
  }
});

module.exports = Layout;
