import React from 'react';

const Login = ({ authorize }) => (
  <React.Fragment>
    <button
      onClick={() => {
        authorize(true);
      }}
    >
      authorise user
    </button>
  </React.Fragment>
);
export default Login;
