import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// custom
import SimpleClickUpdate from './SimpleClickUpdate_useState_hook';
import ComponendDidMountAndUpdate from './ComponendDidMount_useEffect_hook';
import ComponentDidUnmountHookSubstitute from './ComponentDidUnmount_useEffect_hook';
import AppLocalRedux from './localRedux_useReducer_hook';
import ContextAPI from './contextAPI-useContext-hook';
import CustomHook from './custom_Hooks_shared_logic';
import CustomHookCounter1 from './custom_hook_principle/CounterComp1';
import CustomHookCounter2 from './custom_hook_principle/CounterComp2';
import CustomHookGlobalState from './global_state_custom_hook';
import ExampleClickUpdateuseCallback from './useCallback_hook_memoization';
import ExampleClickUpdateuseMemo from './useMemo_hook_memoization';
import UseReducerComparison from './useReducer_v_useState_benefits/UseReducer_hook';
import UseStateComparison from './useReducer_v_useState_benefits/UseState_comparison';
import UseState_custom_hook_comparison from './useReducer_v_useState_benefits/UseState_comparison';

// shared logic hook;
import { useFriendStatus } from './custom_Hooks_shared_logic/sharedLogic_hook';

const comps = [
  { title: 'set' },
  { title: 'set2' },
  { title: 'set3' },
  { title: 'set4' },
];

const ChecStatusHere = () => {
  const isOnline = useFriendStatus();

  if (isOnline === null) {
    return 'Loading...';
  }
  return <span style={{ color: 'green' }}>{isOnline}</span> || 'Offline';
};

const Index = () => {
  // hook for managing comps array display;
  const [components, setComponent] = useState(comps);
  const removeComponent = (which) => {
    const order = components.findIndex(({ title }) => title === which);
    components.splice(order, 1);
    setComponent([...components]);
  };

  return (
    <div className="helloworld">
      <SimpleClickUpdate />
      <ComponendDidMountAndUpdate />
      <h2>substitue to componentWillUnmount() class method</h2>
      {components.map(({ title }, i) => (
        <ComponentDidUnmountHookSubstitute
          key={`key${i}`}
          title={title}
          eventHandler={removeComponent}
        />
      ))}
      <h2>local reducer with useReducer() hook </h2>
      <AppLocalRedux />
      <h2>context API as the way to simulate redux store</h2>
      <ContextAPI />
      <h2>custom Hooks shared logic with global state</h2>
      <CustomHookGlobalState />
      <h2>custom Hooks counter with useCounter extracted logic hook</h2>
      <CustomHookCounter1 />
      <CustomHookCounter2 />
      <div style={{ border: '2px dotted orange' }}>
        <h2>
          useCallback hook to cache and read components wrapped in
          React.memo(component) (momoization)
        </h2>
        <ExampleClickUpdateuseCallback />
      </div>
      <div style={{ border: '2px dotted green' }}>
        <h2>
          useMemo hook to cache and read components wrapped in
          React.memo(component) (momoization)
        </h2>
        <ExampleClickUpdateuseMemo />
      </div>
      <div style={{ border: '2px dotted green' }}>
        <h2>Use Reducer versus use State</h2>
        <UseReducerComparison />
        <h3>useState comparison</h3>
        <UseStateComparison />
        <h3>useState comparison as custom hook</h3>
        <UseState_custom_hook_comparison />
      </div>
      <h2>custom Hooks shared logic</h2>
      <CustomHook />
      <p>
        Awesome ! react allows you to share state without REDUX by exposing and
        then importing custom hook logic/state
      </p>
      status outside main composition:
      <ChecStatusHere />
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
