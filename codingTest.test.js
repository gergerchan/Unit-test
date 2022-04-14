const { fishBash, sort, reverseString } = require("./codingTest");

test("Check fish, bash, or fishbash", () => {
  expect(fishBash(3)).toBe("fish");
  expect(fishBash(5)).toBe("bash");
  expect(fishBash(15)).toBe("fishbash");
  expect(fishBash(1)).toBe(1);
});

test("Sort array number ascending", () => {
  expect(sort([6, 3, 4, 1, 5, 2], true)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(sort([10, 11, 15, 13, 12, 18], true)).toEqual([
    10, 11, 12, 13, 15, 18,
  ]);
});

test("Sort array number descending", () => {
  expect(sort([6, 3, 4, 1, 5, 2], false)).toEqual([6, 5, 4, 3, 2, 1]);
  expect(sort([10, 11, 15, 13, 12, 18], false)).toEqual([
    18, 15, 13, 12, 11, 10,
  ]);
});

test("Reverse String Check if same reversed", () => {
  expect(reverseString("a")).toBe(true);
  expect(reverseString("kodok")).toBe(true);
  expect(reverseString("kodo")).toBe(false);
});
