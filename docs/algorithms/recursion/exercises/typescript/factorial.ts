/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

/*
Implement factorial.
*/

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

/*
 The “secret sauce” to recursion lies at the end of our factorial function, where we call factorial from within factorial.
 When we do this, the function continues to call itself until it produces a value.
 Then it trickles that value all the way back up to the first function call.
 */
export const factorial = (num: number): number => {
  if (num === 0) {
    return 1
  }
  return num * factorial(num - 1)
}

export const forLoopFactorial = (num: number): number => {
  let product = 1
  for (let i = num; i >= 1; i -= 1) {
    product *= i
  }
  return product
}
