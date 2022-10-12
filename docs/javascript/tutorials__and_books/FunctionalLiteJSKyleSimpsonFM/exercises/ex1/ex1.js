/* eslint no-console: 0 */
function bar(x, y) {
  let z
  foo(x)

  return [y, z]

  function foo(x) {
    y += 1
    z = x * y
  }
}

console.log(bar(20, 5)) // 120

console.log(bar(25, 6)) // 175
