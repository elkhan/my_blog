// Make a pure function `bar(..)` to wrap around `foo(..)`.

/* eslint no-console: 0 */
function bar(x, y) {
  let z
  // eslint-disable-next-line no-use-before-define
  foo(x)

  return [y, z]

  // eslint-disable-next-line no-shadow
  function foo(x) {
    // eslint-disable-next-line no-param-reassign
    y += 1
    z = x * y
  }
}

console.log(bar(20, 5)) // 120

console.log(bar(25, 6)) // 175
/*

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function bar(x, y) {
  let z

  // eslint-disable-next-line no-use-before-define
  foo(x)
  return [y, z]

  // eslint-disable-next-line no-shadow
  function foo(x) {
    y += 1
    z = x * y
  }
}

const y = 5
let z

// eslint-disable-next-line no-undef
foo(20, 5) // [6,120]

// eslint-disable-next-line no-undef
foo(25, 6) // [7,175]
*/
