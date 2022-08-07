// https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264
/** ***************NATIVE forEACH******************** */

/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-extend-native */
Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i += 1) callback(this[i], i, this)
}

// tests
let arr = ['biggy smalls', 'bif tannin', 'boo radley', 'hans gruber']
arr.myEach((word) => {
  console.log(word)
})
// biggy smalls
// bif tannin
// boo radley
// hans gruber

/** ***************NATIVE MAP************************ */

Array.prototype.myMap = function (callback) {
  arr = []
  for (let i = 0; i < this.length; i += 1) arr.push(callback(this[i], i, this))
  return arr
}

// tests
const arrs = ['dic tanin', 'boo radley', 'hans gruber']
const numbers2 = [1, 4, 9]

const goodT = arrs.myMap((n) => n)

const squareRoot = numbers2.myMap((num) => Math.sqrt(num))

console.log(goodT) // [ 'dic tanin', 'boo radley', 'hans gruber' ]
console.log(squareRoot) // [ 1, 2, 3 ]

/** ***************NATIVE FILTER************************ */

Array.prototype.myFilter = function (callback, context) {
  arr = []
  for (let i = 0; i < this.length; i += 1) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}

// tests
const numbers = [1, 20, 30, 80, 2, 9, 3]
const newNum = numbers.myFilter((n) => n >= 10)
console.log(newNum) // [ 20, 30, 80 ]

/** ***************NATIVE REDUCE************************ */

Array.prototype.myReduce = function (callback, initialVal) {
  let accumulator = initialVal === undefined ? undefined : initialVal
  for (let i = 0; i < this.length; i += 1) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this)
    } else {
      accumulator = this[i]
    }
  }
  return accumulator
}

// tests
const numbers3 = [20, 20, 2, 3]
const total = numbers3.myReduce((a, b) => a + b, 10)
console.log(total) // 55

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((a, b) => a.concat(b))
console.log(flattened) // [ 0, 1, 2, 3, 4, 5 ]

/** ***************NATIVE EVERY************************ */

Array.prototype.myEvery = function (callback, context) {
  for (let i = 0; i < this.length; i += 1) {
    if (!callback.call(context, this[i], i, this)) {
      return false
    }
  }
  return true
}

// tests
let passed = [12, 5, 8, 130, 44].myEvery((element) => element >= 10)
console.log(passed) // false
passed = [12, 54, 18, 130, 44].myEvery((element) => element >= 10)
console.log(passed) // true

passed = [12, 54, 18, 130, 44].myEvery((element) => element >= 13)
console.log(passed) // false

/** ***************NATIVE SOME************************ */

Array.prototype.mySome = function (callback, context) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback.call(context, this[i], i, this)) {
      return true
    }
  }
  return false
}

// tests
const passed2 = [12, 5, 8, 130, 44].mySome((element) => element >= 200)
console.log(`some: ${passed2}`) // some: false

const passed3 = [12, 5, 8, 130, 44].mySome((element) => element >= 100)
console.log(`some: ${passed3}`) // some: true
