// Trampoline

// @ts-ignore
// prettier-ignore
const trampoline = (fn) => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}

export const sumBelow = (number: number, sum = 0) =>
  number === 0 ? sum : () => sumBelow(number - 1, sum + number)

const sumBelowTrampoline = trampoline(sumBelow)

console.log(sumBelowTrampoline(100000)) // 5000050000

/*
 https://blog.logrocket.com/using-trampolines-to-manage-large-recursive-loops-in-javascript-d8c9db095ae3/

 The “secret sauce” to recursion lies at the end of our sumBelow function, where we call sumBelow from within sumBelow.
 When we do this, the function continues to call itself until it produces a value.
 Then it trickles that value all the way back up to the first function call.
 */

// https://www.sitepoint.com/recursion-functional-javascript/
