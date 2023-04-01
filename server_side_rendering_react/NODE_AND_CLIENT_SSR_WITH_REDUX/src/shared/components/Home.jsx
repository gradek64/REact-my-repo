import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { ADD_PROMO, DELETE_PROMO } from '../../shared/Redux/actions/promotions';


export default function Home() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();


  return (
    <div>
      <h2>this routes is to show that hooks take over in browser</h2>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
          dispatch(ADD_PROMO());
        }}
      >
        Click me
      </button>
    </div>
  );
}
