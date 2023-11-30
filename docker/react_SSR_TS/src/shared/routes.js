import Home from "./components/Home";
import Grid from "./components/Grid";
import { fetchPopularRepos } from "./api";
import { GuestCheckoutContainer } from "./containers";

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
];

export default routes;
