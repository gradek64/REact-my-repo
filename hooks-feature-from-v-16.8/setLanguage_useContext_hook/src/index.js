import React from 'react';
import ReactDOM from 'react-dom';
//custom
import { LanguageProvider } from './containers/Language';
import LanguageSelector from './components/LanguageSelector';
import Explore from './components/Explore';

const Index = () => (
  <LanguageProvider>
    <div className="App">
      <header className="App-header">
        <LanguageSelector />
      </header>

      <Explore />
    </div>
  </LanguageProvider>
);

ReactDOM.render(<Index />, document.querySelector('#root'));
