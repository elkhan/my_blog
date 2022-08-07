/* eslint-disable no-return-assign,no-param-reassign */

// https://blog.bitsrc.io/understanding-memoization-in-javascript-to-improve-performance-2763ab107092
/**
 * Sqrt
 */
function sqrt(arg) {
  if (!sqrt.cache) {
    sqrt.cache = {}
  }
  if (!sqrt.cache[arg]) {
    return (sqrt.cache[arg] = Math.sqrt(arg))
  }
  return sqrt.cache[arg]
}

console.log(sqrt(9)) // 3
console.log(sqrt(9)) // 3
console.log(sqrt(4)) // 2
console.log(sqrt.cache) // { '4': 2, '9': 3 }

/**
 * Square
 */
function square(num) {
  if (!square.cache) {
    square.cache = {}
  }
  if (!square.cache[num]) {
    return (square.cache[num] = num * num)
  }
  return square.cache[num]
}

console.log(square(9))
console.log(square(9))
console.log(square(4))
console.log(square.cache)

function sum(num) {
  if (!sum.cache) {
    sum.cache = {}
  }
  if (!sum.cache[num]) {
    return (sum.cache[num] = num + num)
  }
  return sum.cache[num]
}

/**
 * Generic Memoize
 */
console.log('***Generic Memoize***')

function memoize(fn) {
  // eslint-disable-next-line func-names
  return function(...args) {
    fn.cache = fn.cache || {}
    // console.log(fn.name);
    // console.log(fn.cache);
    return fn.cache[args]
      ? fn.cache[args]
      : (fn.cache[args] = fn.apply(this, args))
  }
}

const memoizedSum = memoize(sum)

memoizedSum(4)
memoizedSum(4)
memoizedSum(9)
memoizedSum(9)

const memoizedSqrt = memoize(sqrt)

console.time('non-memoized call')
console.log(memoizedSqrt(144))
console.timeEnd('non-memoized call')

console.time('memoized call')
console.log(memoizedSqrt(144))
console.timeEnd('memoized call')
