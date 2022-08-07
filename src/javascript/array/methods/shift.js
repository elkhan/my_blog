// Array literal
// eslint-disable-next-line no-unused-vars
const array = [1, 2, 3]

// Array constructor
// eslint-disable-next-line no-array-constructor,no-unused-vars
const numbers = []

// push - adds element to the end of an array
const superheroines = ['catwoman', 'she-hulk', 'mystique']
superheroines.push('wonder woman') // ["catwoman", "she-hulk", "mystique", "wonder woman"]

// unshift - beginning of an array
const cities = ['New York', 'San Francisco']
cities.unshift('Philadelphia') // ["Philadelphia", "New York", "San Francisco"]
// push and unshift mutate the original array

// Shift removes an element from the beginning of an array mutating it
const days = ['Monday', 'Tuesday', 'Wednesday']
days.shift() // returns the removed element, in this case "Monday"
console.log(days) // ["Tuesday", "Wednesday"]

// Slice - non destructive NOT TO BE CONFUSED WITH SPLICE()
const cats = ['Milo', 'Garfield', 'Otis']
cats.slice(1) // ["Garfield", "Otis"]
console.log(cats) // ["Milo", "Garfield", "Otis"]

const dogs = ['Milo', 'Garfield', 'Otis']
// get the last 2 dogs
dogs.slice(-2) // ["Garfield", "Otis"]
// get the last 1 dogs
console.log(dogs.slice(-1)) // ["Otis"]

const iceCreams = ['chocolate', 'vanilla', 'raspberry']
iceCreams.slice(0, iceCreams.length - 1) // ["chocolate", "vanilla"]
console.log(iceCreams) // ["chocolate", "vanilla", "raspberry"]

// Slice, combined with the spread operator, to make removing from the middle of an array much easier
const items = [1, 2, 3, 4, 5]
// let's remove the third element
// a slice from the start up to but not including index 2 (the third element)
// and a slice from index 3 to the end
console.log([...items.slice(0, 2), ...items.slice(3)]) // [1, 2, 4, 5]

// Pop removes an element from the end of an array
const moreIceCreams = ['chocolate', 'vanilla', 'raspberry']
moreIceCreams.pop() // returns the removed element, in this case "raspberry"
console.log(moreIceCreams) // ["chocolate", "vanilla"]

// push() pushes elements onto the ends of arrays, and pop() pops them off; similarly, unshift() adds elements to the beginnings of arrays, and shift() pulls them off.

// Spread operator creates new array in place rather that modifying the original
const moreCities = ['New York', 'San Francisco']
console.log(['Philadelphia', ...moreCities]) // ["Philadelphia", "New York", "San Francisco"]
console.log(moreCities) // ["New York", "San Francisco"]
// Spread operator at the end of the array
const evenMoreCities = ['New York', 'San Francisco']
console.log([...evenMoreCities, 'Philadelphia']) // ["New York", "San Francisco", "Philadelphia"]

// To preserve the new array created with Spread operator
// eslint-disable-next-line no-unused-vars
let yetMoreCities = ['New York', 'San Francisco']
// we can assign it to the existing `cities` variable
yetMoreCities = ['Philadelphia', ...yetMoreCities]
// but if we have a const
const otherCats = ['Milo', 'Garfield']
// we need a new variable:
// eslint-disable-next-line no-unused-vars
const someMoreCats = ['Felix', ...otherCats]
console.log(someMoreCats)

// Accessing elements - Indexes
const entrepreneurs = [
  'Elizabeth Holmes',
  'Laurene Powell Jobs',
  'Ariana Huffington',
]
const bio = ' is the co-founder and editress-in-chief of The Huffington Post'
console.log(entrepreneurs[2] + bio)
//
// Slice vs Splice
const letters = ['alpha', 'gamma', 'delta']
// We need to get ["alpha", "beta", "gamma", "delta"]
console.log([...letters.slice(0, 1), 'beta', ...letters.slice(1)])
// Or
letters.splice(1, 0, 'beta')
