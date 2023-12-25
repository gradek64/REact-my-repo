import React, { useState } from 'react';

const UserSecretInfo = (props) => {
  console.log('props......', props);

  /*
      This page will have parent container that will authoriztioin before it is even available 
      since it will contain sensitive user info
    */

  return <div>{'secret info is here'}</div>;
};

export default UserSecretInfo;
