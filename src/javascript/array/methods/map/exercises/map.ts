/*
https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa
 */
const people = [
  { name: 'TK', age: 26 },
  { name: 'Kaio', age: 10 },
  { name: 'Kazumi', age: 30 },
]

const makeSentence = (person: { name: string; age: number }) => `${person.name} is ${person.age} years old`

const peopleSentences = (peopleArr: { name: string; age: number; }[]) => peopleArr.map(makeSentence)

peopleSentences(people)

// Another map() example
const values = [1, 2, 3, -4, 5]

const updateListMap = (valuesArr: number[]) => valuesArr.map(Math.abs)

/*
Custom map()

https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad
 */

function mapForEach(arr: string | any[], fn: { (item: string): number; (arg0: any): any; }) {
  const newArray = []
  for (let i = 0; i < arr.length; i += 1) {
    newArray.push(fn(arr[i]))
  }
  return newArray
}

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C']
const lenArray = mapForEach(strArray, (item: string) => item.length)
// expect(lenArray).to.deep.eq([10, 6, 3, 4, 1])

/*
Yet another implementation of map()

https://jsmanifest.com/the-power-of-higher-order-functions-in-javascript/
// TODO: Add more examples from the source above ^
 */
function customMap(callback: (arg0: any, arg1: number, arg2: any) => any) {
  const result = []
  for (let index = 0; index < this.length; index += 1) {
    const currentItem = this[index]
    const returnValue = callback(currentItem, index, this)
    result.push(returnValue)
  }
  return result
}
const nums = [1, 2, 3, 4, 5, 6]
// eslint-disable-next-line no-extend-native
Array.prototype.customMap = customMap
// expect(nums.customMap((x) => x * 2)).to.deep.eq([2, 4, 6, 8, 10, 12])

/*
Custom implementations https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264
 */
/*
Custom map
 */
Array.prototype.myMap = function myMap (callback: (arg0: any, arg1: number, arg2: any) => any) {
  const arr = []
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

/*
Custom filter
 */
Array.prototype.myFilter = function myFilter (callback: { call: (arg0: any, arg1: any, arg2: number, arg3: any) => any; }, context: any) {
  const arr = []
  for (let i = 0; i < this.length; i += 1) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}

// tests
const numbers = [1, 20, 30, 80, 2, 9, 3]
const newNum = numbers.myFilter((n: number) => n >= 10)
console.log(newNum) // [ 20, 30, 80 ]

/*
Custom reduce
 */
Array.prototype.myReduce = function myReduce(callback: { call: (arg0: undefined, arg1: any, arg2: any, arg3: number, arg4: any) => any; }, initialVal: any) {
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
const total = numbers3.myReduce((a: number, b: number) => a + b, 10)
console.log(total) // 55

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((a, b) => a.concat(b))
console.log(flattened) // [ 0, 1, 2, 3, 4, 5 ]

/*
Custom every
 */
Array.prototype.myEvery = function myEvery(callback: { call: (arg0: any, arg1: any, arg2: number, arg3: any) => any; }, context: any) {
  for (let i = 0; i < this.length; i += 1) {
    if (!callback.call(context, this[i], i, this)) {
      return false
    }
  }
  return true
}

// tests
let passed = [12, 5, 8, 130, 44].myEvery((element: number) => element >= 10)
console.log(passed) // false
passed = [12, 54, 18, 130, 44].myEvery((element: number) => element >= 10)
console.log(passed) // true

passed = [12, 54, 18, 130, 44].myEvery((element: number) => element >= 13)
console.log(passed) // false

/*
Custom some
 */
Array.prototype.mySome = function mySome(callback: { call: (arg0: any, arg1: any, arg2: number, arg3: any) => any; }, context: any) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback.call(context, this[i], i, this)) {
      return true
    }
  }
  return false
}

// tests
const passed2 = [12, 5, 8, 130, 44].mySome((element: number) => element >= 200)
console.log(`some: ${passed2}`) // some: false

const passed3 = [12, 5, 8, 130, 44].mySome((element: number) => element >= 100)
console.log(`some: ${passed3}`) // some: true
