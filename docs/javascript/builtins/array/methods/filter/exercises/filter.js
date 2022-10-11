const arr = ['a', 2, 'c', 4, 'a', 2, 2, 5, 'c']

const filtered = arr.filter((item, index) => arr.indexOf(item) === index)
expect(filtered).to.deep.eq(['a', 2, 'c', 4, 5])

/*
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */

const nums = [0, 2, 3, 4, 0, 1, 5, 1, 4]
expect(nums.indexOf(1)).to.eq(5)

// Finding all the occurrences of an element - MDN ^

// TODO: Rewrite in declarative way
const indices = []
const array = ['a', 'b', 'a', 'c', 'a', 'd']
const element = 'a'
let idx = array.indexOf(element)
while (idx !== -1) {
  indices.push(idx)
  idx = array.indexOf(element, idx + 1)
}
expect(indices).to.deep.eq([0, 2, 4])

/*
https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa
 */

const sum = (a, b) => a + b

const subtraction = (a, b) => a - b
export const doubleOperator = (f, a, b) => f(a, b) * 2

expect(doubleOperator(sum, 3, 1)).to.eq(8)
expect(doubleOperator(subtraction, 3, 1)).to.eq(4)

export const even = (n) => n % 2 === 0
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
expect(listOfNumbers.filter(even)).to.deep.equal([0, 2, 4, 6, 8, 10])
expect(listOfNumbers.filter((x) => even(x))).to.deep.equal([0, 2, 4, 6, 8, 10])

/* Example from Array.prototype.filter() */
const gtSix = (w) => w.length > 6
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

expect(words.filter((w) => w.length > 6)).to.deep.equal(['exuberant', 'destruction', 'present'])
expect(words.filter(gtSix)).to.deep.equal(['exuberant', 'destruction', 'present'])

/*
Using predicate with this keyword.
this will be the second parameter in the filter function. In this case, 3 (the x) is represented by this
 */

function smaller(number) {
  return number < this // will be x
}

function filterArray(x, numsArr) {
  return numsArr.filter(smaller, x)
}

const numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0]

const filteredResult = filterArray(3, numbers)
expect(filteredResult).to.deep.eq([2, 1, 0])

// Another filter() example
const people = [
  { name: 'TK', age: 26 },
  { name: 'Kaio', age: 10 },
  { name: 'Kazumi', age: 30 },
]

const olderThan21 = (person) => person.age > 21
const overAge = (peopleArr) => peopleArr.filter(olderThan21)
expect(overAge(people)).to.deep.eq([
  { name: 'TK', age: 26 },
  { name: 'Kazumi', age: 30 },
])
