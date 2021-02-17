import React from 'react';
// shared logic hook;
import { useFriendStatus } from './sharedLogic_hook';


const FriendListItem = ({ name }) => {
  const isOnline = useFriendStatus();

  return (
    <li style={{ color: isOnline === name ? 'green' : 'black' }}>
      {name}
    </li>
  );
};

export default FriendListItem;
