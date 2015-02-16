var React = require('react');

// Handle the HTML rendering on the server
var Html = React.createClass({
render: function() {
  return (
    <html>
      <head>
        <title>{ this.props.title }</title>
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
    </html>
  );
}
});

module.exports = Html;
