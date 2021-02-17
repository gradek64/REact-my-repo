import { sortASC, sortDESC } from '../../utilityMethods/sorting';

// testing
test('is sorting ASC', () => {
  const result = sortASC(['b', 'c', 4, 'a', 1]);
  expect(result).toEqual([1, 4, 'a', 'b', 'c']);
});

test('is sorting based on Object property ASC', () => {
  const result = sortASC([{ name: 'Greg' }, { name: 'Libby' }, { name: 'Katie' }], 'name');
  expect(result).toEqual([{ name: 'Greg' }, { name: 'Katie' }, { name: 'Libby' },
  ]);
});

test('is sorting Numbers based on Object property ASC', () => {
  const result = sortASC([{ age: 32 }, { age: 31 }, { age: 23 }], 'age');
  expect(result).toEqual([{ age: 23 }, { age: 31 }, { age: 32 }]);
});

test('is sorting DESC', () => {
  const result = sortDESC(['b', 'c', 4, 'a', 1]);
  expect(result).toEqual(['c', 'b', 'a', 4, 1]);
});

test('is sorting based on Object property DESC', () => {
  const result = sortDESC([{ name: 'Greg' }, { name: 'Libby' }, { name: 'Katie' }], 'name');
  expect(result).toEqual([{ name: 'Libby' }, { name: 'Katie' }, { name: 'Greg' },
  ]);
});

test('is sorting Numbers based on Object property ASC', () => {
  const result = sortDESC([{ age: 32 }, { age: 31 }, { age: 23 }], 'age');
  expect(result).toEqual([{ age: 32 }, { age: 31 }, { age: 23 }]);
});

test('numbers are sorted as first', () => {
  const result = sortASC(['b', 'c', 4, 'a', 1]);
  expect(result[0]).toEqual(expect.any(Number));
});

test('numbers are sorted as last', () => {
  const result = sortDESC(['b', 'c', 4, 'a', 1]);
  expect(result[result.length - 1]).toEqual(expect.any(Number));
});
