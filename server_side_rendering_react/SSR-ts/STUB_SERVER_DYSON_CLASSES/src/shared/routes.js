import { matchPath } from 'react-router-dom';

import Home from './components/Home';
import Grid from './components/Grid';
import ParamsQuery from './components/ParamsQuery';
import Login from './components/Login';
import UserSecretInfoContainer from './containers/UserSecretInfoContainer/UserSecretInfoContainer';
import { fetchPopularRepos } from './api';
import { GuestCheckoutContainer } from './containers';

// redux and sagas
import createStore from '../store';
import rootSaga from '../sagas';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/query',
    exact: true,
    component: ParamsQuery,
  },
  {
    path: '/userInfo',
    exact: true,
    component: UserSecretInfoContainer,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: `/guest`,
    pageTitle: 'Guest Checkout',
    pageDescription: '',
    pageDataTest: 'guest-checkout-page',
    component: GuestCheckoutContainer,
    routes: [],
    analytics: {},
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  },
];

// Recursively fetch data
export const processRoutes = (
  routesProcessing = routes,
  history,
  state,
  req,
  res,
  level = 1
) => {
  return new Promise((resolve, reject) => {
    // A fresh store is needed each loop as a closed store cannot be re-opened
    const store = createStore(history, state);

    // Start the root saga tasks which is a promise
    const tasks = store.runSaga(rootSaga);

    // return new Promise((resolve, reject) => {
    // Will contain routes that will be processed in the next recursion
    const next = [];

    // Map through the routes and find any that match the current path

    routesProcessing.map((route) => {
      const match = matchPath(req.url, route);
      if (match) console.log('--------MATCH------', route.component);
      if (match) {
        let reduxAction;

        // If the route has sub-routes, queue them for the next recursion
        // if (route.routes) next.push(...route.routes);

        // Check if the component is a lazy-loaded Loadable wrapper
        if (route.component?.contextTypes?.loadable) {
          const LoadableContainer = route.component;
          const component = new LoadableContainer()?.state?.loaded?.default;
          if (component?.getInitialActions) {
            initialAction = component.getInitialActions({ req, match });
          }
        }


        // Regular non-lazy component that check for initialActions
        if (route.component.getInitialActions) {
          reduxAction = route.component.getInitialActions({ req, match });
        }
        console.log('STORE',store.getState())

        // this promise has to be resolved even though there are not any other initial actions or nested routes
        if (reduxAction) {
          console.log('reduxAction', reduxAction);
          return store.dispatch(reduxAction);
        }
      }
    });

    // Close the store to new actions
    store.close();

    // Wait for the running actions to complete
    tasks
      .toPromise()
      .then(() => {
        if (next.length > 0) {
          processRoutes(next, history, store.getState(), req, res, level + 1) // recursion!
            .then((latestStore) => resolve(latestStore))
            .catch(reject);
        } else {
          resolve(store);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default routes;
