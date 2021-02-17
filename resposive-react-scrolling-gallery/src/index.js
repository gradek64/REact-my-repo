import React from 'react';
import ReactDOM from 'react-dom';
// for practice;
// import './utils/ramdaPractice/ramdaComposition';
// import './utils/ramdaPractice/ramdaObjectInteration';
// import './utils/ramdaPractice/ramdaObjectComparison';
import './utils/ramdaPractice/ramdaCurry';

// router
import AppRouter from './router/AppRouter';

ReactDOM.render(<AppRouter />, document.querySelector('#root'));
