import React from 'react';

const UserSecretInfo = ({savedPaymentMethods}) => {
  console.log('props......', savedPaymentMethods);

  /*
      This page will have parent container that will authoriztioin before it is even available 
      since it will contain sensitive user info
    */

  return <div>{JSON.stringify(savedPaymentMethods)}</div>;
};

export default UserSecretInfo;
