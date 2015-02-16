var url = require('url');
var express = require('express');
var router = express.Router();
var React = require('react');
var ReactRouter = require('react-router');

var AppRoutes = require('./app_routes.jsx');
var Html = require('../components/html.jsx');

/* GET home page. */
router.get('*', function(req, res, next) {
  var path = url.parse(req.url).pathname;

  ReactRouter.run(AppRoutes, path, function (Handler, state) {
    var markup = React.renderToString(React.createElement(Handler, null));
    var html   = React.renderToStaticMarkup(React.createElement(Html, {
      title: "Elevation Pace",
      markup: markup
    }));

    res.send('<!DOCTYPE html>' + html);
  });
});

module.exports = router;
