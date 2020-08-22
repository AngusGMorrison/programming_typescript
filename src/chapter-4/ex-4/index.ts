// Update our call implementation from earlier in the chapter to only
// work for functions whose second argument is a string. For all
// other functions, your implementation should fail at compile time.

type ArrWithStringAtIdx1 = [unknown, string, ...unknown[]];

function call<T extends ArrWithStringAtIdx1, R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function logArray(...args: unknown[]) {
  console.log(args);
}

call(logArray, 1, "hello", 10, null); // valid
call(logArray, 1, 2, "hello", 3); // compile-time