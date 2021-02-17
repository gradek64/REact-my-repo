import React from 'react';
import Loadable from 'react-loadable';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// custom
import AuthRoute from './AuthRoute';
/* import HomePage from './pages/Home';
import AboutProtected from './pages/About';
import SiteProtected from './pages/Site';
import ItemDetails from './pages/ItemDetails'; */
import NotFoundPage from './pages/NotFoundPage';

//above components need to be loadable dynamicaly once they are requested
//React Loadable is perfect tool for a job

const AboutProtected_Loadable = Loadable({
  loader: () => import('./pages/About'),
  loading() {
    return <div>Loading...</div>;
  },
});
const HomePage_Loadable = Loadable({
  loader: () => import('./pages/Home'),
  loading() {
    return <div>Loading...</div>;
  },
});
const SiteProtected_Loadable = Loadable({
  loader: () => import('./pages/Site'),
  loading() {
    return <div>Loading...</div>;
  },
});
const ItemDetails_Loadable = Loadable({
  loader: () => import('/pages/ItemDetails'),
  loading() {
    return <div>Loading...</div>;
  },
});

// make history available everywhere
export const history = createHistory();
// const { location } = history;

// Listen to history changes.
// You can unlisten by calling the constant (`unlisten()`).
/*
  history.listen((location, action) => {

    console.log('routes changes,,,,,');
    console.log('props........', this.props);
    console.log(action, location.pathname, location.state);
  });
*/

//

export const ProtectedRoutes = ({ match }) => {
  const { params, url } = match;

  /**
   *
   * @usage: those are proccessed first in AuthRoute
   **/

  console.log('url', url);
  console.log('param', params);
  console.log('match', match);

  if (/admin/.test(url)) {
    return <AboutProtected_Loadable />;
  }

  if (/item\/\d+$/.test(url)) {
    return <ItemDetails_Loadable params={params} />;
  }

  if (/^.*\/about\/?$/.test(url)) {
    console.log('protected', url);
    return <AboutProtected_Loadable />;
  }
  if (/site || site\/\d+$/.test(url)) {
    return <SiteProtected_Loadable />;
  }

  //* cost-overview Routes
  if (/cost-overview || cost-overview\/\w+?$/.test(url)) {
    // even if the user is on /cost-overview general then redirect it to cost-overview/general-ledger
    if (params.reportName) {
      return (
        <CostOverview
          activeTab={params.reportName}
          costPotId={params.costPotId}
        />
      );
    }
    return <Redirect to="/cost-overview/general-ledger" />;
  }
  console.log('protected2');

  console.log('check url first', url);

  return <div> Authorized but page does not exist </div>;
};
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={HomePage_Loadable} exact />
      {/*with the exact flag it will only exept /about/ but not about/sth */}
      <AuthRoute path="/about" component={ProtectedRoutes} exact />
      <AuthRoute path="/site" component={ProtectedRoutes} />
      <AuthRoute path="/item/:id" component={ProtectedRoutes} />

      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
