var url = require('url');
var express = require('express');
var router = express.Router();
var React = require('react');
var ReactRouter = require('react-router');

var AppRoutes = require('./app_routes.jsx');

/* GET home page. */
router.get('*', function(req, res, next) {
  var path = url.parse(req.url).pathname;

  ReactRouter.run(AppRoutes, path, function (Handler, state) {
    console.log('react router...');
    
    var html = React.renderToString(
      React.createElement(Handler, null)
    );

    res.send('<!DOCTYPE html>' + html);
  });
});

module.exports = router;
