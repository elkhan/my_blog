// Turn `mult(..)` into a recursive function that can work on as many arguments as necessary.

function mult(x, y, z) {
  return x * y * z
}

console.log(mult(3, 4, 5)) // 60

console.log(mult(3, 4, 5, 6)) // Oops!

/* function mult(...args) {
  // base case
  if (args.length <= 2) {
    return args[0] * args[1]
  }
  // recursive (reductive) call
  return args[0] * mult(...args.slice(1))
}

mult(3, 4, 5) // 60

mult(3, 4, 5, 6) // 360 */
