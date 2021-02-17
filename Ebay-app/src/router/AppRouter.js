import React from 'react';
import {
  Redirect, Router, Route, Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// custom
import AuthRoute from './AuthRoute';
import HomePage from './pages/Home';
import AboutProtected from './pages/About';
import ItemDetails from './pages/ItemDetails';
import NotFoundPage from './pages/NotFoundPage';
/* import Login from '../pages/Login/';
import CostModel from '../pages/Admin/CostModels/';
import CostPots from '../pages/Admin/Costpots/';
import FileManagementCostPot from '../pages/Admin/FileManagement/';
import DataSetFilterstCostPot from '../pages/Admin/DataSetFilters/';
import NotFoundPage from '../pages/NotFoundPage/';
import Header from '../pages/pagePartials/Header';
import MainNavBar from '../pages/pagePartials/MainNavBar';
import AuthRoute  from './AuthRoute';
import '../main.scss'; */


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

export const ProtectedRoutes = ({ match }) => {
  const { params, url } = match;

  /* const allParams = Object.keys(params).length;
  const arr = Object.keys(params).map(i => params[i]); */

  if (/admin/.test(url)) {
    return <AboutProtected />;
  }

  if (/item\/\d+$/.test(url)) {
    return <ItemDetails params={params} />;
  }

  if (/about || about\/\d+$/.test(url)) {
    return <AboutProtected />;
  }

  //* cost-overview Routes
  if (/cost-overview || cost-overview\/\w+?$/.test(url)) {
    // even if the user is on /cost-overview general then redirect it to cost-overview/general-ledger
    if (params.reportName) {
      return <CostOverview activeTab={params.reportName} costPotId={params.costPotId} />;
    }
    return <Redirect to="/cost-overview/general-ledger" />;
  }

  return <div> Authorized but page does not exist </div>;
};
// <AuthRoute path="/admin/:userid" component={ProtectedRoutes} / >
const AppRouter = () => (

  <Router history={history}>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <AuthRoute path="/about" component={ProtectedRoutes} />
      <AuthRoute path="/item/:id" component={ProtectedRoutes} />

      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
