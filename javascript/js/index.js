'use strict';

var Router = ReactRouter;
var Route = Router.Route;

var routes = React.createElement(
  Route,
  { handler: Home },
  React.createElement(Route, { path: '/', handler: Intro }),
  React.createElement(Route, { path: 'about', name: 'about', handler: About }),
  React.createElement(Route, { path: 'projects', name: 'projects', handler: Projects })
);

Router.run(routes, Router.HashLocation, function (Root) {
  React.render(React.createElement(Root, null), document.body);
});