var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('../components/app.jsx');
var Index = require('../components/index.jsx');
var About = require('../components/about.jsx');

var AppRoutes = (
  <Route name="home" handler={App} path="/">
    <Route name="about" />
    <DefaultRoute handler={Index} />
  </Route>
);

module.exports = AppRoutes;
