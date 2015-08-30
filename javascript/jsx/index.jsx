//namespacing ReactRouter components
var Router = ReactRouter;
var Route = ReactRouter.Route;

var routes = (
  <Route handler={Home} path="/" />
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
