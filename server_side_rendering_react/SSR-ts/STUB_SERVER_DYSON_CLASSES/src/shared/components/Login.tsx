import React, { useState } from 'react';
import PasswordInput from './PasswordStrength/PasswordInputCheck'
const MyComponent = () => {

  const handlePostRequest = async () => {
    //this will have to handle different env as UAT2 and PROD and DEV
    //only DEV hardcoded
    const url = 'http://localhost:3011/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include', // include cookies in the request
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
        body: JSON.stringify({}),
      });

      console.log('response', response)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle the response data if needed
      //const responseData = await response.json();
      //console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePostRequest}>Make POST Request</button>
    </div>
  );
};

export default MyComponent;