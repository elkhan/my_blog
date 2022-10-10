/* eslint-disable prefer-rest-params */
/* eslint-disable */
function sumIter() {
  let sum = 0
  for (let i = 0; i < arguments.length; i += 1) {
    sum += arguments[i]
  }
  return sum
}

// console.log("sumIter: ", sumIter(3, 4, 5)); // 12

function sumRecur() {
  const args = [].slice.call(arguments)
  if (args.length <= 2) {
    return args[0] + args[1]
  }
  return args[0] + sumRecur(...args.slice(1))
}

console.log('sumRecur:', sumRecur(3, 4, 5, 6, 7, 8, 9)) // 42
