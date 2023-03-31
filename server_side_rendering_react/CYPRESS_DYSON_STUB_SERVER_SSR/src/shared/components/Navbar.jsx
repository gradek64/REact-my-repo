import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  /*
    those link have to be a tags or Link cause the page has to be reloaded in order to work in server site 
*/
  return (
    <>
      <ul>
        <li key={'home'}>
          <a href={`/`}>home</a>
        </li>
        <li key={'routesWithRedux'}>
          <a href={`/routes-with-redux`}>routes with Redux Example</a>
        </li>
        <li key={'nestedRoutes'}>
          <a href={`/nested-routes`}>nested Routes Example</a>
        </li>
        <li key={'switchWithNestedRoutes'}>
          <a href={`/switch-with-nested-routes`}>
            switch-with-nested-routes Example
          </a>
        </li>
        <li key={'switchWithNestedRoutes'}>
          <a href={`/login`}>LOGIN page done for Cypress testing</a>
        </li>
      </ul>
    </>
  );
}
