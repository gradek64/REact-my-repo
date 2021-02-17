import React, { useEffect } from 'react';

const SubstituteForLifeCycles = ({ title, eventHandler }) => {
  /*
   by returning a method inside useEffect, it wil be called once the component is removed
   just like componentDidUnmount class method
  */
  useEffect(() => {
    console.log('useEffect called only once I mounted');

    return () => {
      console.log('component has been removed/unmounted');
    };
  }, []); // array of conditions is empty so run only onces is mounted

  return (
    <div>
      <span>it logs unmounted state once removed</span>
      <button
        type="button"
        onClick={() => {
          eventHandler(title);
        }}
      >
        remove me
      </button>
    </div>
  );
};

export default SubstituteForLifeCycles;
