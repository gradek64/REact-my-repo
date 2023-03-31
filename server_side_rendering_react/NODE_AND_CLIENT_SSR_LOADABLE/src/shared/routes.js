import React from 'react'
import Home from "./components/Home";
import Grid from "./components/Grid";
import { fetchPopularRepos } from "./api";
import { GuestCheckoutContainer } from "./containers";

 // Has no path, must be the last thing in the tree
 //U need to add react to this file cause we use JSX below in 404 route
export const fourOhFourRoute = {
  component: ()=>(<div>{'U could be lost.. U came to 404'}</div>),
  pageTitle: '404 Not Found',
  pageDescription: '',
  pageDataTest: 'four-oh-four',
}

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: `/guest`,
    pageTitle: "Guest Checkout",
    pageDescription: "",
    pageDataTest: "guest-checkout-page",
    component: GuestCheckoutContainer,
    routes: [],
    analytics: {},
  },
  {
    path: "/popular/:id",
    component: Grid,
    fetchInitialData: (path = "") => fetchPopularRepos(path.split("/").pop()),
  },
  /* 404 page */
  fourOhFourRoute,
];

export default routes;
