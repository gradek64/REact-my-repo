import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import AboutProtected from './pages/About';
import SiteProtected from './pages/Site';
import AppRouter from './AppRouter';
import AuthRoute from './AuthRoute';

// mock you AuthRoute for instant authorization callback
jest.mock('./AuthRoute');

let routeTree = { route: {}, protectedRoute: {} };
const routesParams = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<AppRouter />);

    /*
      shallow(<AppRouter />) will render anything what you return in App router component
      since it is route it will return <Route>s which are defined there also
      it will return custom <AuthRoute> wich is HOC to <Route>

      so after autorization <AuthRoute> also returs <Route> therefore all of them have the
      same props and method that we use in reduce function to adjust those props to our needs...

      ezyme shallow wrapper once render comes with find() method that returns array depneds how many
      elements have been find in our case ..
      ...component.find(Route) = return 2 <Routes >
      ...component.find(AuthRoute) = return 2 <AuthRoutes >

      --- of couse this is example, the more you have routes the
      more U will return here, the ideas is to combine them together and (by...spread operator)
      and manipulate their props to your needs for testing as below

    */

    routeTree = [...component.find(Route), ...component.find(AuthRoute)].reduce((paths, route) => {
      const routeProps = route.props;
      // check for basic routes and the compnent name which under the hood is just function name;
      // <Route path="/" component={HomePage} exact />
      if (typeof route.type === 'function' && route.type.name === 'Route') {
        routeTree.route[routeProps.path] = routeProps.component;
      }
      // if it is AuthRoute it needs to use mock Autorization and go throuh ProtectedRoutes function extension
      if (typeof route.type === 'function' && route.type.name === 'AuthRoute') {
        routeTree.protectedRoute[routeProps.path] = { generalComponent_HOC_Method: routeProps.component };
        /* ----Above ---
           <AuthRoute path="/about" component={ProtectedRoutes} />

          component from Route is general HOC component --ProtectedRoutes--- so only acts as function
          that would return final component once is called with props

          in this case the hoc method is : --- ProtectedRoutes--

          anothe option to receive a final component is to call imported method
          and call with props to return a Final component

                import { ProtectedRoutes } from './AppRouter';

          --but this way U would only test HOC component functionality not entire Route structure
          how it gets to this point;

          the whole structure how is rendered in Snapshot could be seen by:

            console.log('every route ', route);

            -----example of HOC for <AuthRoute/>------

          const generalComponentHOC(props)=>{
            //tansformations

            return <Final Route Component/>

          }

          ----------------------------------------------

          Below specify your custom object to pass to the HOC and execute on final Route component
          */
        if (routeProps.path === '/site') {
          // if you need cutom props for your final Component route
          routesParams[routeProps.path] = {
            match: {
              url: routeProps.path,
              params: { id: 1 },
            },
          };
        }
        // make diffrent configuration for AuthRoute;
        if (routeProps.path === '/about') {
          // if you need cutom props for your final Compoent route
          routesParams[routeProps.path] = {
            match: {
              url: routeProps.path,
              params: { index: 1 },
            },
          };
        }
      }
      return routeTree;
    }, {});
  });

  it('it follows the ladder of the routes setup', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show HomePage component for / ', () => {
    expect(routeTree.route['/']).toBe(HomePage);
  });
  it('should show AboutProtected component from AuthRoute and path /admin', () => {
    // if you decided to return component just by using imported ProtectedRoutes method
    // console.log(ProtectedRoutes(routesParams['/admin']).type);

    // below preferred method of using routeTree object that uses HOC
    const comp = routeTree.protectedRoute['/about']
      .generalComponent_HOC_Method(routesParams['/about']).type;
    expect(comp).toBe(AboutProtected);

    /* ---important ---

    important AboutProtected --is not executed Component-- executed will be <AboutProtected />
    likely React comes with type propperty on Component object so if you want just Constructor
    call U need to user property type on Compoent....
    our HOC returns complete Component </Component> to get Component not JSX = use type

    */
  });
  it('should show SiteProtected component from AuthRoute and path /site', () => {
    const comp = routeTree.protectedRoute['/site']
      .generalComponent_HOC_Method(routesParams['/site']).type;
    expect(comp).toBe(SiteProtected);
  });

  it('should show No match component for route not defined', () => {
    expect(routeTree.route.undefined).toBe(NotFoundPage);
  });
});
