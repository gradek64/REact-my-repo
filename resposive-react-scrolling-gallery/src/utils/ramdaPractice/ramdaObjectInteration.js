import {
  path, pathOr,
} from 'ramda';
// Strating level nested Object

const props = {
  user: {
    posts: [
      { title: 'Foo', comments: ['Good one!', 'Interesting...'] },
      { title: 'Bar', comments: ['Ok'] },
      { title: 'Baz', comments: [] },
    ],
  },
};


const getObjectProperty = (p, object) => p.reduce((xs, x) => ((xs && xs[x]) ? xs[x] : null), object);
// let's pass in our props object...

console.log(getObjectProperty(['user', 'posts', 0, 'comments'], props));
// it would be the same as: props.user.posts[0].comments
console.log('props.user.posts[0].comments', props.user.posts[0].comments);// [ 'Good one!', 'Interesting...' ]
// if property doesnt exist then returns null;
console.log('property doesnt exist::...::', getObjectProperty(['user', 'post', 0, 'comments'], props));// null

/*
    simple example of the machanism;
    starting object for reduce function : { user: { id: 10 } }
    array of properties to interate: ['user','id' , 'set'];

    interation process: user = outcome1 (interation 0 )
    interation process: outcome1[id] = outcome2(interation 1 )
    interation process: outcome2[set] (interation 2 )

*/
const simpleObjectAccess = ['user', 'id', 'set']
  .reduce((xs, x) => ((xs && xs[x]) ? xs[x] : null), { user: { id: { set: 10 } } });
console.log('simpleObjectAccess', simpleObjectAccess);


// the same achieved by Ramda lib;
const getUserComments = path(['user', 'posts', 0, 'comments']);
console.log('interation by Ramda', getUserComments(props));

// if the property doest exist on the object you can specify what to return
const getUserCommentsOr = pathOr('not found prop', ['user', 'post', 0, 'comments']);
console.log('interation by Ramda with default return ...::', getUserCommentsOr(props));
