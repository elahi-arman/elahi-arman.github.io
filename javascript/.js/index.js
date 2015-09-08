'use strict';

var Router = ReactRouter;
var Route = Router.Route;

var Chrome = React.createClass({
  displayName: 'Chrome',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'App'
      ),
      React.createElement(RouteHandler, null)
    );
  }
});

var About = React.createClass({
  displayName: 'About',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'About'
      )
    );
  }
});

var Inbox = React.createClass({
  displayName: 'Inbox',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Inbox'
      )
    );
  }
});

var routes = React.createElement(
  Route,
  { handler: Chrome },
  React.createElement(Route, { path: 'about', handler: About }),
  React.createElement(Route, { path: 'inbox', handler: Inbox })
);

Router.run(routes, Router.HashLocation, function (Root) {
  React.render(React.createElement(Root, null), document.body);
});