function sumIter() {
  let result = 0
  for (let i = 0; i < arguments.length; i += 1) {
    // eslint-disable-next-line prefer-rest-params
    result += arguments[i]
  }
  return result
}

console.log('sumIter: ', sumIter(3, 4, 5)) // 12

function sumRecur() {
  // eslint-disable-next-line prefer-rest-params
  const args = [].slice.call(arguments)
  if (args.length <= 2) {
    return args[0] + args[1]
  }
  return args[0] + sumRecur(...args.slice(1))
}

console.log('sumRecur:', sumRecur(3, 4, 5, 6, 7, 8, 9)) // 42

const list = [1, 2, 3, 4, 5]
const accumulator = 0

function sum(arg, acc) {
  if (arg.length === 0) {
    return acc
  }
  return sum(arg.slice(1), acc + arg[0])
}

console.log('sum: ', sum(list, accumulator))

module.exports = {}
