
var routes = (
  <Route handler={Home} path="/">
    <Route handler={Projects} name="projects" path="projects" />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
