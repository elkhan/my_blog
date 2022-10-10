function foo() {
  let count = 0
  /* eslint func-names: 0 */
  /* eslint no-plusplus: 0 */
  return function() {
    return count++
  }
}

const x = foo()
/* eslint no-console: 0 */
console.log(x()) // 0
console.log(x()) // 1
console.log(x()) // 2

function sumX(z) {
  return function(y) {
    return z + y
  }
}

const add10 = sumX(10)
console.log(add10(3)) // 13
console.log(add10(14)) // 24
