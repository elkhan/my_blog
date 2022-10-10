// https://javascript.info/currying-partials
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind#Partially_applied_functions

/* eslint-disable func-names */
function multiply(a, b) {
  return a * b
}

const double = multiply.bind(null, 2)
console.log(double(3)) // multiply(2, 3) = 6
console.log(double(4)) // multiply(2, 4) = 8
console.log(double(5)) // multiply(2, 5) = 10

function partial(func, ...argsBound) {
  return function(...args) {
    // (*)
    return func.call(this, ...argsBound, ...args)
  }
}

/**
 *
 */

// Usage:
const user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`)
  },
}

// add a partial method that says something now by fixing the first argument
user.sayNow = partial(
  user.say,
  `${new Date().getHours()}:${new Date().getMinutes()}`
)

user.sayNow('Hello') // [23:54] John: Hello!

/**
 * Curry
 */
function curry(f) {
  // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b)
    }
  }
}

// usage
function sum(a, b) {
  return a + b
}

const carriedSum = curry(sum)

console.log(carriedSum(1)(2)) // 3

/**
 *
 */
// eslint-disable-next-line no-unused-vars
function genericCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}
