import React from 'react';
import ReactDOM from 'react-dom';

// custom

import UseCallback_withReactMemo from './UseCallback_withReactMemo';
import UseMemo_withReactMemo from './UseMemo_withReactMemo';

const Index = () => {
  return (
    <>
      <h2>USE CALLBACK</h2>
      <UseCallback_withReactMemo />
      <h2>USE MEMO</h2>
      <UseMemo_withReactMemo />
    </>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
