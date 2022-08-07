const recursiveFactorial = number => {
  if (number <= 1) {
    return number
  }
  return number * recursiveFactorial(number - 1)
}

console.log('recursiveFactorial(5)', recursiveFactorial(5)) // 120

/*
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
5 * 4 * 3 * 2
5  * 4 * 6
5 * 24
120
 */

// https://www.sitepoint.com/recursion-functional-javascript/

// Trampoline
// https://blog.logrocket.com/using-trampolines-to-manage-large-recursive-loops-in-javascript-d8c9db095ae3/
const sumBelow = (number, sum = 0) =>
  number === 0 ? sum : sumBelow(number - 1, sum + number)
/*
The “secret sauce” to recursion lies at the end of our sumBelow function, where we call sumBelow from within sumBelow.
When we do this, the function continues to call itself until it produces a value.
Then it trickles that value all the way back up to the first function call.
 */

const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}

const sumBelowRec = (number, sum = 0) =>
  number === 0 ? sum : () => sumBelowRec(number - 1, sum + number)

const sumBelowTrampoline = trampoline(sumBelowRec)
console.log(sumBelowTrampoline(100000)) // 5000050000
