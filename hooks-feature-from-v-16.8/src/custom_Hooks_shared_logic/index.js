import React, { useState } from 'react';
import User from './User';
import FriendStatus from './FriendStatus';
import { useFriendStatus } from './sharedLogic_hook';


const friendList = [
  { name: 'Phoebe' },
  { name: 'Greg' },
  { name: 'Ross' },
];


const CustomHook = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  console.log('gafgdgd', useFriendStatus());
  const set = useFriendStatus(`You clicked ${count} times`);

  return (
    <div>
    status:
      <FriendStatus />
      {`outcome ${set}`}
      {friendList.map(({ name }, i) => <User name={name} key={`CustomHook${i}`} />)}
      <button type="button" onClick={incrementCount}>change user counter</button>
    </div>
  );
};

export default CustomHook;
