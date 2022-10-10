const sum = (a, b) => a + b
const multiplication = (a, b) => a * b

// High Order Functions
const getResultOperation = fn => (a, b) =>
  `The ${fn.name} of ${a} and ${b} is ${fn(a, b)}`

const getSumResult = getResultOperation(sum)
const getMultiplicationResult = getResultOperation(multiplication)

console.log(getSumResult(2, 5))
console.log(getMultiplicationResult(2, 5))
