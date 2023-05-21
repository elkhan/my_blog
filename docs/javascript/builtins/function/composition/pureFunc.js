let y = 2
let z = 3

const foo = x => {
  y = x * 2
  z = x * 3
}

foo(5)
/* eslint no-console: 0 */
console.log('%d first call of y', y) // 10
console.log('%d first call of z', z) // 15

foo(5)
/* eslint no-console: 0 */
console.log('%d second call of y', y) // 10
console.log('%d second call of z', z) // 15

let j = 2
let k = 3

const foo2 = x => {
  j *= x
  k *= x
}

foo2(5)
/* eslint no-console: 0 */
console.log('%d third call of y', j) // 10
console.log('%d third call of z', k) // 15

foo2(5)
/* eslint no-console: 0 */
console.log('%d fourth call of y', j) // 50
console.log('%d fourth call of z', k) // 75

// Pure function
function bar(x, l, m) {
  foo3(x)
  return [l, m]

  function foo3(x) {
    l *= x
    m *= x
  }
}

console.log(bar(5, 2, 3)) // [10, 15]
console.log(bar(5, 10, 15)) // [50, 75]
