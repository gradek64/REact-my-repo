import React, { useState } from 'react';

import { translate } from '../containers/Language';

export default function Explore() {
  const [clickText, setClickText] = useState();

  const handleClick = () => {
    setClickText(translate('buttonClicked'));
  };

  return (
    <div>
      <h1>{translate('exploreHeader')}</h1>
      <p>{translate('welcomeDescription')}</p>

      <div>
        <button onClick={handleClick}>{translate('clickMe')}</button>
        <p>{clickText}</p>
      </div>

      <a href="https://halilcanozcelik.com">{translate('aboutMe')}</a>
    </div>
  );
}
