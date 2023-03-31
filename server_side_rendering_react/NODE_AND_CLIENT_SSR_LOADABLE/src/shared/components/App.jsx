import React, { Component } from "react";
import routes from "../routes";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import RouteWithSubRoutes from '../routesWithSubRoutes'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {routes.map((route) => (<RouteWithSubRoutes key={route.path || '404'} {...route} />))}
        </Switch>
      </div>
    );
  }
}

export default App;
