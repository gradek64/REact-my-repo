import React from "react";
import { Route, Switch } from "react-router-dom";

import Users, { CreateUser } from "./comps/Users";

const currentRouteHere = "/switch-with-nested-routes";

export default function SwitchRoutes() {
  return (
    <div>
      <hr />
      <h3>example of switch statement with exact route </h3>
      <h4>
        &lt;Route path="{`${currentRouteHere}/users`}" exact /&gt; <hr /> has to
        be exact if it woun t be it would fall to the next create route
      </h4>
      <ul>
        <li key="ab1">
          <a href={`${currentRouteHere}/users`}>/users</a>
        </li>
        <li key="ab2">
          <a href={`${currentRouteHere}/users/create`}>/users/create</a>
        </li>
      </ul>
      {/*
        React router does partial matching, so unless it specify 'exact' it 
        will return first match for route /users/create it would 
        return ath="/users"

        however if you specify  <Route path="/users" exact component={Users} />
        then it will only return this route for exact match /users but not /users/createUsers

        notice that U only need to specify exact for the first route unless your route tree
        has extension of
        users/create and user/create/:userId then exact is need to be set for the shorter route in 
        tree users/create
      */}
      <Switch>
        <Route path={`${currentRouteHere}/users`} exact>
          <Users />
        </Route>
        <Route path={`${currentRouteHere}/users/create`}>
          <CreateUser />
        </Route>
      </Switch>
    </div>
  );
}
