import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// fixed data;
const authorized = true;

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => {
        console.log('this is not proccessed if route doenst match /admin/:any', props);

        return authorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        );
      }}
  />
);


export default AuthRoute;
