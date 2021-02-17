import customEvent from './dispatchEvent';

test('returns undefined if called with no args or fn not type of funcion ', () => {
  expect(customEvent.on(undefined, undefined, true)).toBe(undefined);
});
