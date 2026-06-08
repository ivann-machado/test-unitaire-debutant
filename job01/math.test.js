const addition = require('./math')

test('adds 1 + 2 to equal 3', () => {
  expect(addition(1, 2)).toBe(3);
});

test('adds 2(int) + 2(string) to equal 4', () => {
  expect(addition(2, "2")).toBe(4);
});

test('adds 2(int) + a(string) to be null', () => {
  expect(addition(2, "a")).toBeNull();
});