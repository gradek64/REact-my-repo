import React, { useState, useEffect } from 'react';

const SubstituteForLifeCycles = () => {
  /*
      useEffect() by default is called every single time component is mounted and then when view is updated

      it takes one parameter which is callback function;

  */
  const [count, setCount] = useState(0);

  /*
  limit useEffet to be called only once after is mounted
  just like componentDidMount() class method
  great for call async calls
  */
  useEffect(() => {
    console.log('useEffect called only once I mounted');
    document.title = count;
  }, []); // array of conditions is empty so run only onces is mounted

  // just like componedDidUpdate(prevProps);
  /* useEffect(() => {
    // this effect is called every single time count state is updated;
    document.title = count;
    console.log(`updated count state:${count}`);
  }, [count]); // array of conditions it has count so run only on count change
 */
  return (
    <div>
      <p id="display">{`initial ${count}`}</p>
    </div>
  );
};

export default SubstituteForLifeCycles;
