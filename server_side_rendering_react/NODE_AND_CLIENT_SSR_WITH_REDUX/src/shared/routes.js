import { matchPath } from "react-router-dom";
import Home from "./components/Home";
import NestedRoutes from "./components/routeNesting/NestedRoutes";
import NestedRoutesSwitch from "./components/routeNesting/Switch_Exact_Nested_Routes";
import RoutesWithRedux from "./components/RoutesWithRedux";
import Grid from "./components/Grid";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/nested-routes",
    component: NestedRoutes,
  },
  {
    path: "/routes-with-redux",
    component: RoutesWithRedux,
  },
  {
    path: "/switch-with-nested-routes",
    component: NestedRoutesSwitch,
  },
  {
    path: "/popular/:repo_name",
    component: Grid,
  },
];

// Recursively fetch data
export const processRoutes = (routesProcessing = routes, store, req) => {
  //return new Promise((resolve, reject) => {
  // Will contain routes that will be processed in the next recursion
  const next = [];

  // Map through the routes and find any that match the current path

  return routesProcessing.map((route) => {
    const match = matchPath(req.url, route);
    if (match) {
      let reduxAction;

      // If the route has sub-routes, queue them for the next recursion
      // if (route.routes) next.push(...route.routes);

      // Check if the component is a lazy-loaded Loadable wrapper
      /* if (route.component?.contextTypes?.loadable) {
          const LoadableContainer = route.component
          const component = new LoadableContainer()?.state?.loaded?.default
          if (component?.getInitialActions) {
            initialAction = component.getInitialActions({ req, match })
          }
        } */

      // Regular non-lazy component that check for initialActions
      if (route.component.getInitialActions) {
        reduxAction = route.component.getInitialActions({ req, match });
      }

      //this promise has to be resolved even though there are not any other initial actions or nested routes
      if (reduxAction) {
        console.log("reduxAction", reduxAction);
        return store.dispatch(reduxAction);
      }
    }
  });
};

export default routes;
