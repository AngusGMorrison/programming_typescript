// Implement a small typesafe assertion library. Start by sketching
// out your types.

type Assertion = <T>(first: T, second: T, ...rest: T[]) => boolean;

const is: Assertion = (first, second, ...rest) => {
  if (first !== second) {
    return false;
  }
  return rest.every(l => l === first);
};

console.log(is("hello", "olá"));
// is(10, "foo"); // invalid
console.log(is(42, 42));
console.log(is([1], [1, 2], [1, 2, 3]));
console.log(is(1, 1, 1));
