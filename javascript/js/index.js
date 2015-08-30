//namespacing ReactRouter components
"use strict";

var Router = ReactRouter;
var Route = ReactRouter.Route;

var routes = React.createElement(Route, { handler: Home, path: "/" });

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});