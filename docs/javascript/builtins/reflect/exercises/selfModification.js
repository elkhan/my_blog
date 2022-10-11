function sum(a, b) {
  if (a > 5) {
    // eslint-disable-next-line no-func-assign
    sum = () => 0
  }
  return a + b
}

console.log(sum(1, 1)) // 2
console.log(sum(10, 1)) // 11
console.log(sum(2, 3)) // 0
console.log(sum(2, 100)) // 0
