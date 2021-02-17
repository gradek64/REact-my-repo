import React from 'react';

// custom;
import './styles.scss';

class Proposal extends React.Component {
  state = {
    property: 'Proposal',
  };

  componentDidMount() {
    window.loadScript({ src: 'https://code.jquery.com/jquery-3.5.1.min.js' });
  }

  loadScriptWithCallback({ src }) {
    if (document) {
      return new Promise((resolve) => {
        const time = new Date().getTime();

        window.loadScript({ src, isAsync: true, onload: resolve });
      });
    }
    return Promise.reject();
  }

  addScript = async () => {
    window.loadScript({
      src: '/public/scripts/globalScript.js',
    });
    console.log(window.Greg); //undefined
  };

  addScriptWithPromiseWrap = async () => {
    //webpack serve static files from public folder
    await this.loadScriptWithCallback({
      src: '/public/scripts/globalScript.js',
    });
    console.log(window.Greg); //Greg
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={this.addScriptWithPromiseWrap}>
          load script With Promise
        </button>
        <button onClick={this.addScript}>load script</button>
      </div>
    );
  }
}

export default Proposal;
