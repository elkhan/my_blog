// Define `foo(..)` so that it produces a function which remembers only the first two arguments that were passed to `foo(..)`, and always adds them together.

function foo(x, y) {
  return function () {
    return x + y
  }
}

const x = foo(3, 4)

console.log(x()) // 7
console.log(x()) // 7

/*
function foo(x, y) {
  return function () {
    return x + y
  }
}

const x = foo(3, 4)

x() // 7
x() // 7
*/
