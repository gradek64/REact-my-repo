import { curry } from 'ramda';


/*

js bahavior for arity number (number of arguments provided)

if you simple execute function of return type that needs return all arguments given
or any combination with those argument you might get undefined if some of the arguments
are not provided as the example below;

*/


const formatName1 = (first, middle, last) => `${first} ${middle} ${last}`;
formatName1('John', 'Paul', 'Jones');
//= > 'John Paul Jones'
formatName1('John', 'Paul');
//= > 'John Paul undefined');


/*
  but if you wrap the same function with ramda curry it will execute the function with
  the number of arguments given and return a function up to the point was executed
*/

// currying done in javascript;
const curryinjs = first => second => last => `${first} ${second} ${last}`;

const executeFirst = curryinjs('Greg');
console.log('execute first curry function', executeFirst()); // returns a function;
const executeSecond = curryinjs('Greg')('Stanislaw');
console.log('execute second curry function', executeSecond); // returns a function;
const executeThird = curryinjs('Greg')('Stanislaw')('Gil');
console.log('execute second curry function', executeThird); // returns a value since there is last function;


// ramda curry
const formatNames2 = curry((first, middle, last) => `${first} ${middle} ${last}`);
const allParamsgiven = formatNames2('John', 'Paul', 'Jones');

console.log('------curry all params-------', allParamsgiven);
//= > 'John Paul Jones' // (definitely the musician!)
const secondFunction = formatNames2('John', 'Paul'); //= > returns a function
console.log('-----Ramda will return a fucntion if not all prams given---');
console.log(secondFunction()); //= > returns a function);
console.log('-----Ramda will execute curry since all params are given---');
console.log(formatNames2(secondFunction, 'Greg')); //= > returns a function); */
