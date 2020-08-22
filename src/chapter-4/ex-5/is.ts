// Implement a small typesafe assertion library. Start by sketching
// out your types.

type Assertion = <T>(first: T, ...rest: [T, ...T[]]) => boolean;

const is: Assertion = (first, ...rest) => {
  return rest.every(l => l === first);
};

console.log(is("hello", "olá"));
// is(10, "foo"); // invalid
console.log(is(42, 42));
console.log(is([1], [1, 2], [1, 2, 3]));
console.log(is(1, 1, 1));
