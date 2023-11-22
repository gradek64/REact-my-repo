import React, { useState } from "react";
import PasswordInput from './PasswordStrength/PasswordInputCheck'
export default function Home() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Password input strengh webpack laod librayry</h3>
      <PasswordInput />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
