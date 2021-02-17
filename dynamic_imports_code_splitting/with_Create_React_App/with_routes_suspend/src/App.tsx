import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//import you custom common.js library
import { addSum } from './lib/addSum'
import reg from "./foo-module"


const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

/*
    open network tab and then when you click on about you will see that chunk1.js will
    load 
*/

console.log(addSum(3, 5))
console.log(reg.test('hello'))
console.log(reg.test('greg'))

//console.log(Operations.maxNumber(3, 10))


const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Link to="/">Home </Link>
      <Link to="/about"> About</Link>
      <Switch>
        <Route exact path="/" render={() => (
          <Home name={'HOME'} />
        )} />
        <Route path="/about" render={() => (
          <About name={'ABOUT'} />)} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
