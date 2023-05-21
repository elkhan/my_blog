// https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d

const map = (fn, arr) =>
  // eslint-disable-next-line no-shadow
  arr.reduce((acc, item, index, arr) => acc.concat(fn(item, index, arr)), [])

const sum = n => n + n

console.log(map(sum, [1, 2, 3, 4])) // [ 2, 4, 6, 8 ]

const filter = (fn, arr) =>
  arr.reduce((newArr, item) => fn(item) ? newArr.concat([item]) : newArr, [])

const filterOut = n => n > 0

console.log(filter(filterOut, [0, 2, 4, -2, 10, -2])) // [ 2, 4, 10 ]

// Functional composition

// compose() i.e f(g(x))
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const addOne = n => n + 1
const double = n => n * 2

const addOneThenDoubleCompose = compose(double, addOne)
console.log('addOneThenDoubleCompose(2)', addOneThenDoubleCompose(2)) // (2 + 1) * 2 = 6
/*
The first step is listed last, so in order to understand the sequence, 
you’ll need to start at the bottom of the list and work your way backwards to the top.
*/

// pipe()

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)
const addOneThenDoublePipe = pipe(addOne, double)

console.log('addOneThenDoublePipe(3)', addOneThenDoublePipe(3)) // (3 + 1) * 2 = 8
