// code here! :)
// # Instructions
//
// 1. Write two functions, each which return a different number value when called.
//
// 2. Write an `add(..)` function that takes two numbers and adds them and returns the result. Call `add(..)` with the
// results of your two functions from (1) and print the result to the console.  3. Write an `add2(..)` that takes two
// functions instead of two numbers, and it calls those two functions and then sends those values to `add(..)`, just
// like you did in (2) above.  4. Replace your two functions from (1) with a single function that takes a value and
// returns a function back, where the returned function will return the value when it's called.  5. Write an `addn(..)`
// that can take an array of 2 or more functions, and using only `add2(..)`, adds them together. Try it with a loop.
// Try it without a loop (recursion). Try it with built-in array functional helpers (map/reduce).  6. Start with an
// array of odd and even numbers (with some duplicates), and trim it down to only have unique values.  7. Filter your
// array to only have even numbers in it.  8. Map your values to functions, using (4), and pass the new list of
// functions to the `addn(..)` from (5).  9. Bonus: write tests for your functions.

// function foo() {
//     return 42;
// }

// function bar() {
//     return 100;
// }

function foo(v) {
  return function () {
    return v
  }
}

function add(x, y) {
  return x + y
}

function add2(fn1, fn2) {
  return add(fn1(), fn2())
}

function addn(vals) {
  const args = vals
  return args.slice(1).reduce(
    (prev, current) =>
      function addPrevCur() {
        return add2(prev, current)
      },
    args[0]
  )()

  // if (vals.length > 2) {
  // 	return addn(
  // 		[
  // 			function() {
  // 				return add2(vals[0],vals[1]);
  // 			}
  // 		]
  // 		.concat(vals.slice(2))
  // 	);
  // }
  // return add2(vals[0],vals[1]);
}

let vals = [10, 100, 30, 100, 42, 10, 15]

vals = vals
  .reduce((a, v) => {
    // eslint-disable-next-line no-bitwise
    if (!~a.indexOf(v)) return a.concat(v)
    return a
  }, [])
  // .filter(function(v,i,arr){
  //    return i == arr.lastIndexOf(v);
  // })
  .filter((v) => v % 2 === 0)
  .map(foo)

console.log(addn(vals))
