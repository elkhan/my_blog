// https://medium.com/@dave_lunny/reduce-your-fears-about-array-reduce-629b334ab945

/* eslint-disable no-unused-vars */
const users = [
  {
    firstName: 'Bob',
    lastName: 'Doe',
    age: 37,
  },
  {
    firstName: 'Rita',
    lastName: 'Smith',
    age: 21,
  },
  {
    firstName: 'Rick',
    lastName: 'Fish',
    age: 28,
  },
  {
    firstName: 'Betty',
    lastName: 'Bird',
    age: 44,
  },
  {
    firstName: 'Joe',
    lastName: 'Grover',
    age: 22,
  },
  {
    firstName: 'Jill',
    lastName: 'Pill',
    age: 19,
  },
  {
    firstName: 'Sam',
    lastName: 'Smith',
    age: 22,
  },
]

const twentySomethingsLongFullNames = users
  // First we filter only the users who are in their twenties:
  .filter(user => user.age >= 20 && user.age < 30)
  // Concat first and last names:
  .map(user => `${user.firstName} ${user.lastName}`)
  // Now remove any names that are 9 or less characters
  .filter(fullName => fullName.length >= 10)

console.log(twentySomethingsLongFullNames) // [ 'Rita Smith', 'Joe Grover' ]

/**
 * Alternative
 */

const isInTwenties = user => user.age >= 20 && user.age < 30
const makeFullName = user => `${user.firstName} ${user.lastName}`
const isAtLeastTenChars = fullName => fullName.length >= 10

const twentySomethingsLongFullNamesAlternative = users
  .filter(isInTwenties)
  .map(makeFullName)
  .filter(isAtLeastTenChars)

/**
 * Reduce
 */

const twentySomethingsLongFullNamesReduce = users.reduce(
  //  First argument is our reducer/callback function:
  (accumulator, user) => {
    const fullName = makeFullName(user)
    if (isInTwenties(user) && isAtLeastTenChars(fullName)) {
      accumulator.push(fullName)
    }
    //  Always return the accumulator (for the next iteration)
    return accumulator
  },
  //  The 2nd argument (optional) is the initial value:
  []
)

/**
 * Array.find() using reduce
 */

const fruits = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
]

const thisShitIsBananas = fruits.reduce((accumulator, fruit) => {
  if (fruit.name === 'bananas') {
    return fruit
  }
  return accumulator
})

/**
 * Alternative reduce
 */

//  arrayFind accepts an array and returns a function
//  the returned function accepts the finder function
const arrayFind = arr => fn =>
  arr.reduce((acc, item, index) => {
    //  We pass the finder function the item and the index
    if (fn(item, index)) {
      return item
    }
    return acc
  })

//  Creates a finder function for just our fruits
const fruitFinder = arrayFind(fruits)

//  Now we can pass a simple finder function to fruitFinder
//  This is what the `fn` refers to above:
const thisShitIsBananasAlternative = fruitFinder(
  fruit => fruit.name === 'bananas'
)

/*  Naive implementation  */
let everyonesNameForEach = ''
users.forEach(user => {
  everyonesNameForEach += `${user.firstName} ${user.lastName}\n`
})
/*  Better implementation  */
const everyonesNameMapJoin = users
  .map(user => `${user.firstName} ${user.lastName}\n`)
  .join('')
/*  Best implementation  */
const everyonesNameReduce = users.reduce(
  (acc, user) => `${acc}${user.firstName} ${user.lastName}\n`,
  ''
)
