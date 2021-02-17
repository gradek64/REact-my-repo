import React, { Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const DynamicallyLoadedComponent1 = React.lazy(() => import('./DynamicallyLoadedComponent1'));
const DynamicallyLoadedComponent2 = React.lazy(() => import('./DynamicallyLoadedComponent2'));
const DynamicallyLoadedComponent3 = React.lazy(() => import('./DynamicallyLoadedComponent3'));


function App() {

  const loadingComponentState = {
    comp1: false,
    comp2: false,
    comp3: false,
  }
  const [isComponnetLoaded, setComponentLoaded] = useState(loadingComponentState)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <header className="App-header">
          <p>
            Load component with button click and open dev tools network
        </p>
          <button onClick={() => setComponentLoaded({ ...isComponnetLoaded, comp1: true })}>Load component 1 </button>
          {
            isComponnetLoaded.comp1 && <DynamicallyLoadedComponent1 index={1} />
          }
          <button onClick={() => setComponentLoaded({ ...isComponnetLoaded, comp2: true })}>Load component 2 </button>
          {
            isComponnetLoaded.comp2 && <DynamicallyLoadedComponent2 index={2} />
          }
          <button onClick={() => setComponentLoaded({ ...isComponnetLoaded, comp3: true })}>Load component 3 </button>
          {
            isComponnetLoaded.comp3 && <DynamicallyLoadedComponent3 index={3} />
          }
        </header>
      </div>
    </Suspense>
  );
}

export default App;
