import React from "react";
import Loadable from "react-loadable";

export const GuestCheckoutContainer = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "guestCheckout", webpackPreload: 1 */ "./GuestCheckoutContainer/GuestCheckoutContainer"
    ),
  loading: () => <div>{"loading component"}</div>,

  modules: ["guestCheckout"],
});
//modules: optional array of path to load data object from server static files as some.json to your component
//loading: component to display once import component loads
