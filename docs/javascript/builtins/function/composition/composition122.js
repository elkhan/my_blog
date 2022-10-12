function sum(x, y) {
  return x + y
}

function mult(x, y) {
  return x * y
}

function compose(fn1, fn2) {
  return function comp() {
    const args = [].slice.call(arguments)
    return fn2(fn1(args.shift(), args.shift()), args.shift())
  }
}

const multAndSum = compose(mult, sum)

/* eslint no-console: 0 */
console.log(multAndSum(3, 4, 5)) // 17 = 3 * 4 + 5

function sumRecur() {
  const args = [].slice.call(arguments)
  if (args.length <= 2) {
    return args[0] + args[1]
  }
  return args[0] + sumRecur(...args.slice(1))
}
sumRecur(3, 4, 5, 6, 7, 8, 9)
