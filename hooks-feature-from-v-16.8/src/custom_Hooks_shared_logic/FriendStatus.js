import React, { useEffect } from 'react';
// shared logic hook;
import { useFriendStatus } from './sharedLogic_hook';

const FriendStatus = () => {
  const isOnline = useFriendStatus();

  useEffect(() => {
    // console.log(useFriendStatus());
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return <span style={{ color: 'green' }}>{isOnline}</span> || 'Offline';
};

export default FriendStatus;
