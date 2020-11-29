import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

// fixed data;
//change for checking if the user is authorized
//boolean value most likely
//const authorized = true;

//custom
import Login from './pages/Login';

//=========================================================
// AuthRoute componemt is executed once you specify AuthRoute in
// routes stack order as in AppRouter.js
//
//    <AuthRoute path="/about" component={ProtectedRoutes} />
//
//  once here it will create <Route render={(props)=> <Component ...props/> }>
// check render prop for React for more details how the component is
// is rendered back
//
//=========================================================

const AuthRoute = ({ component: Component, ...rest }) => {
  const [authorized, authorize] = useState(false);

  return (
    <Route
      {...rest} //rest of the props in this case  path="/about"
      render={(props) => {
        console.log(
          'this is not proccessed if route doesnt match /domain/:any',
          props
        );

        //if !authorized then render <Login /> component instead
        return authorized ? (
          <Component {...props} />
        ) : (
          <React.Fragment>
            {/* <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          /> */}
            <Login authorize={authorize} />
          </React.Fragment>
        );
      }}
    />
  );
};

export default AuthRoute;
