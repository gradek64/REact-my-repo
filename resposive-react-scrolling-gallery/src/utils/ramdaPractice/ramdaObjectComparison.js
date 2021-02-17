import {
  equals, identical,
} from 'ramda';

const props = {
  user: {
    posts: [
      { title: 'Foo', comments: ['Good one!', 'Interesting...'] },
      { title: 'Bar', comments: ['Ok'] },
      { title: 'Baz', comments: [] },
    ],
  },
};

const props1 = {
  user: {
    posts: [
      { title: 'Foo', comments: ['Good one!', 'Interesting...'] },
      { title: 'Bar', comments: ['Ok'] },
      { title: 'Baz', comments: [] },
    ],
  },
};

const props2 = {
  user: {
    posts: [
      { title: 'Foo', comments: ['Good one!', 'Interesting...'] },
      { title: 'Bar', comments: ['Ok'] },
      { title: 'Baz', comments: ['non the same'] },
    ],
  },
};

// deep comparison
const deepObjectComparison = equals(props, props1); //= > true;
const deepObjectComparisonFalse = equals(props, props2); //= > false;

console.log('is prop Object equal to prop1 object', deepObjectComparison);
console.log('is prop Object equal to prop2 object', deepObjectComparisonFalse);

// shallow comparison with indetical
const deepObjectComparisonIdentical = identical(props, props1); //= > false because of shallow comparison;
const deepObjectComparisonIdenticalFalse = identical(props, props2); //= > false;

console.log('is prop Object equal to prop1 object', deepObjectComparisonIdentical);
console.log('is prop Object equal to prop2 object', deepObjectComparisonIdenticalFalse);
