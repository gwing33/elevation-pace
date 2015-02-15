var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('../components/app.jsx');
var Index = require('../components/index.jsx');

var AppRoutes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Index} />
  </Route>
);

module.exports = AppRoutes;
