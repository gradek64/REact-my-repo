import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const languages = [
    {
      name: 'HOME',
      param: 'home'
    },
    {
      name: 'All',
      param: 'all'
    },
    {
      name: 'JavaScript',
      param: 'javascript'
    },
    {
      name: 'Ruby',
      param: 'ruby'
    },
    {
      name: 'Python',
      param: 'python'
    },
    {
      name: 'Java',
      param: 'java'
    }
  ];

  console.log('navbvar has been rendered');

  return (
    <ul>
      {languages.map(({ name, param }) => {
        const redirect = param === 'home' ? '/' : `/popular/${param}`;
        return (
          <li key={param}>
            <NavLink activeStyle={{ fontWeight: 'bold' }} to={redirect}>
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
