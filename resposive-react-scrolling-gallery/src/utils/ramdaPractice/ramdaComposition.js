import {
  map, split, join, compose,
} from 'ramda';

export const capitalize = word => (typeof word === 'string' && word.length > 0
  ? word[0].toUpperCase().concat(word.slice(1).toLowerCase())
  : '');


/*
   ramda compose method will execute functions in a composition compose(fn1, fn2, fn3) from the RIGHT side
   and the result of the function execution is passed to the next function on the left so U would have:

   fn1(return value) goes to fn2(return value) goes to fn3(return value) ...etc;

   IMPORTANT::: when you assign compose itself U need to assign to function and pass argument for the first
   right-most inside composition function; (there is your starting point) another world is the agrument for
   the first righ-most function in composition , U need to provide this argument as starting point for composition

   therefore if you have

  export const titleCase = compose(
      join(' '),
      map(capitalize),
      split(' '),
  );

  const allResult = titleCase('this is my starting argument');
  --- 'this is my starting argument' argument will go to split(' ') method as it is the most Right ---
*/


// capitalise every single world in a string
export const makeUpperCase = compose(
  join(' '), // 3 execute
  map(capitalize), // 2 exucuted
  split(' '), // 1 executed
);

const makeUpperCaseResult = makeUpperCase('this is my starting argument');
console.log('makeUpperCaseResult: ', makeUpperCaseResult);


// steps for compose execution broke down in seperate functions;
export const step1 = compose(
  split(' '), // 1
);

export const step2 = compose(
  map(capitalize), // 2
);

export const step3 = compose(
  join(' '), // 3
);

// the same as all steps above but put into composition;
export const allStepsTogther = compose(
  join(' '),
  map(capitalize),
  split(' '),
);


const brandName = 'new Brand of Greg';
const step1Result = step1(brandName); // need starting argument string in this case;
const step2Result = step2(step1Result); // result of step1
const step3Result = step3(step2Result); // result of step2

const allResult = allStepsTogther(brandName);


console.log('step1:', step1Result);
console.log('step2:', step2Result);
console.log('step3:', step3Result);
console.log('all steps toheger:', allResult);
