/*
Currying is a process in functional programming in which we can transform a function with multiple arguments
into a sequence of nesting functions. It returns a new function that expects the next argument inline.
Currying is the process of turning a function with multiple arity into a function with less arity.
 */
// eslint-disable-next-line no-unused-vars
function multiply(a, b, c) {
  return a * b * c
}

function multiplyCurr(a) {
  return (b) => (c) => a * b * c
}
expect(multiplyCurr(1)(2)(3)).to.eq(6) // 6
const mul1 = multiplyCurr(2)
const mul2 = mul1(3)
const result = mul2(4)
expect(result).to.eq(24) // 2 * 3 * 4 === 24

// Practical example of currying
// 1. Write little code modules that can be reused and configured with ease.

function discount(price, disc) {
  return price * disc
}
const price500 = discount(500, 0.1)
expect(price500).to.eq(50) // 50
// Not efficient repetition
const price300 = discount(300, 0.1)
expect(price300).to.eq(30) // 30

// Curried discount
function discountCurr(disc) {
  return (price) => price * disc
}
const tenPercentDiscount = discountCurr(0.1)
expect(tenPercentDiscount(700)).to.eq(70) // 70

const twentyPercentDiscount = discountCurr(0.2)
expect(twentyPercentDiscount(500)).to.eq(100) // 100
expect(twentyPercentDiscount(5000)).to.eq(1000) // 1000

// 2. Avoid frequently calling a function with the same argument.

function volume(l, w, h) {
  return l * w * h
}
expect(volume(200, 30, 100)).to.eq(600000) // 600000
expect(volume(32, 45, 100)).to.eq(144000) // 144000
// h (height) - doesn't change
function volumeCurr(h) {
  return (w) => (l) => l * w * h
}
const hCylinderHeight = volumeCurr(100)
expect(hCylinderHeight(200)(30)).to.eq(600000) // 600000
expect(hCylinderHeight(32)(45)).to.eq(144000) // 144000

/* General Curry Function */
// Function that takes any function and returns a curried version of the function.

function curry(fn, ...args) {
  return (..._arg) => fn(...args, ..._arg)
}
function volumeToCurry(l, h, w) {
  return l * w * h // 100 30 200 // 100 60 70 // 100 45 32
}
const hCy = curry(volumeToCurry, 100)
expect(hCy(200, 30)).to.eq(600000) // 600000
expect(hCy(70, 60)).to.eq(420000) // 420000
expect(hCy(32, 45)).to.eq(144000) // 144000

function nester1() {
  return () => () => 'Found me!'
}

console.log(nester1()()())

module.exports = {}
