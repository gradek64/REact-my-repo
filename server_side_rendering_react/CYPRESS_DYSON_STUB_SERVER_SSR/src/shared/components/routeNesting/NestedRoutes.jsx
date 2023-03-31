import React from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
//sample data and components
import Topic from "./comps/Topic";
import nestedRoutesData from "../../data/nestedRoutesData";

export default function Home() {
  // this hook returns up to now url for nested routes
  // in this case the parent route is /nested-routes
  const { path, url: upToNowUrl } = useRouteMatch();

  return (
    <div>
      <hr />
      <h3>nested routes</h3>
      <ul>
        {nestedRoutesData.map(({ description, topicRoute }) => (
          <li key={topicRoute}>
            <Link to={`${upToNowUrl}/${topicRoute}`}>{description}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </div>
  );
}
