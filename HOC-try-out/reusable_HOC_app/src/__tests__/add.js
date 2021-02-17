const add = (a, b) => a + b;

test("should add 2 numbers", () => {
  const result = add(5, 6);
  expect(result).toBe(11);
});
