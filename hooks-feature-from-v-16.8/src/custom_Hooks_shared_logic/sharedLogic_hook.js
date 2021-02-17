import React, { useState, useEffect } from 'react';

const useFriendStatus = (name = 'Greg') => {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    /* function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    } */

    setIsOnline(name);
    console.log('isOnline', isOnline);
    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      // ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  }, [isOnline, name]);

  return isOnline;
};

export { useFriendStatus };
