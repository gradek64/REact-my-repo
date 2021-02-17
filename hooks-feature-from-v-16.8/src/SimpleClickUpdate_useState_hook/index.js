import React, { useState } from 'react';

const ExampleClickUpdate = () => {
  /*
      useState() method returns an array with 2 entries;

      method argument could be any type not just object as U would have in class state={kk=1}

      useState should be used mutiple times for seperate state

      const [user,changeUser] = useState(user) //string;
      const [count,increaseCount] = useState(count) //string;

      that way it is easier to maintain and you dont need to operate on mergin object (redux style)

      these arguments could be destructured as any array arguments could be:

      [first,second]= [0,1];

      useState() returns first value which was provided initially and callback function

       [firstArgument,callbackFn]= userState( firstArgument );

  */
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Simple click update counter using hook useState()</h2>
      <p id="display" data-testid="counter">{`You clicked ${count} times`}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me up
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Click me down
      </button>
    </div>
  );
};

export default ExampleClickUpdate;
