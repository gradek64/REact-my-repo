import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';

// custom
import TopManagementListContainer from './logic/TopManagementListContainer';

// sample data;

const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' },
];

const jsx = (
  <div>
    <div>
      <h2>table</h2>
      <TopManagementListContainer list={starWarsChars} />
    </div>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

// lodash examples
const camelCaseName = starWarsChars.map(({ name }) => _.capitalize(name));

console.log(camelCaseName);
