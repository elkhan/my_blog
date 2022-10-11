// https://medium.freecodecamp.org/reduce-f47a7da511a9
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
const euros = [29.76, 41.85, 46.5]

const sum = euros.reduce((total, amount) => total + amount)

// console.log(sum); // 118.11

const average = euros.reduce((total, amount, index, array) => {
  total += amount
  if (index === array.length - 1) {
    return total / array.length // divide at the end of the loop
  }
  return total
})

// console.log(average); // 118.11 / 3 = 39.37

const eachAverage = euros.reduce((total, amount, index, array) => {
  // console.log(`total ${total}`); // first iteration - total === 0
  // console.log(`amount ${amount}`); // amount === 29.76
  total += amount
  return total / array.length // total - add amount and then divide by 3 on every iteration
}, 0)

// console.log(eachAverage); // (0 + 29.76) / 3 = 9.92; (9.92 + 41.85) / 3 = 17,256666666666667; (17,256666666666667 + 46.5) / 3 = 21.252222222222223
/*
total 0
amount 29.76
total 9.92
amount 41.85
total 17.256666666666668
amount 46.5
 */

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2)
  return total
}, [])

// console.log(doubled); // [ 59.52, 83.7, 93 ]

const above30 = euros.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount)
  }
  return total
}, [])

// console.log(above30); // [ 41.85, 46.5 ]

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
]

const countFruits = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1
  return tally
}, {})

// console.log(countFruits); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

const countFruitsLongerVersion = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1
  } else {
    tally[fruit] += 1
  }
  return tally
}, {})

// console.log(countFruitsLongerVersion);

const obj = {}

for (let i = 0; i < fruitBasket.length; i += 1) {
  if (!obj[fruitBasket[i]]) {
    obj[fruitBasket[i]] = 1
  } else {
    obj[fruitBasket[i]] += 1
  }
}

// console.log(obj); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const flattenArray = data.reduce((total, amount) => total.concat(amount), [])

// console.log(flattenArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const complexData = [
  { a: 'happy', b: 'robin', c: ['blue', 'green'] },
  { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
  { a: 'sad', b: 'goldfish', c: ['green', 'red'] },
]

const colors = complexData.reduce((total, amount) => {
  amount.c.forEach((color) => {
    total.push(color)
  })
  return total
}, [])

// console.log(colors); // ["blue", "green", "green", "black", "orange", "blue", "green", "red"];

const uniqueColors = complexData.reduce((total, amount) => {
  amount.c.forEach((color) => {
    if (total.indexOf(color) === -1) {
      total.push(color)
    }
  })
  return total
}, [])

// console.log(uniqueColors); // [ 'blue', 'green', 'black', 'orange', 'red' ]

/**
 * Piping with Reduce
 */
const increment = (input) => input + 1
const decrement = (input) => input - 1
const double = (input) => input * 2
const halve = (input) => input / 2

const pipeline = [increment, double, decrement]

const result = pipeline.reduce(
  (total, func) => func(total), // increment(5); double(6); decrement(12)
  5
)

console.log(result) // 11 = 5 + 1 = 6; 6 * 2 = 12; 12 - 1 = 11;

const anotherPipeline = [increment, increment, increment, double, decrement, halve]

const anotherResult = anotherPipeline.reduce((total, func) => func(total), 5)

console.log(anotherResult) // 7.5 = 5 + 1 + 1 + 1 = 8; 8 * 2 = 16; 16 - 1 = 15; 15 / 2 = 7.5;
