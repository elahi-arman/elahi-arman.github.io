var Router = ReactRouter;
var Route = Router.Route;

const routes = (
  <Route handler={Home}>
    <Route path='/' handler={Intro} />
    <Route path='about' name='about' handler={About} />
    <Route path='projects' name='projects'  handler={Projects} />
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body)
})
