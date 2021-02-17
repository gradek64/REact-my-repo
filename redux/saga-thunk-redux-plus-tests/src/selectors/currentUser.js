import { createSelector } from "reselect";

/**
*
* @usage: create Selector first executes 
(state) => state.get(`currentUser`) and the the outcome 
is looking at (currentUser) => currentUser
**/
export const currentUserSelector = createSelector(
  (state) => state.get(`currentUser`),
  (currentUser) => currentUser
);
