/*
https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj
 */
const users = [
  { name: 'Jeff', age: 14 },
  { name: 'Jack', age: 18 },
  { name: 'Milady', age: 22 },
]

const filter = (callback, arr) => arr.filter(callback)
const map = (callback, arr) => arr.map(callback)

expect(
  map(
    (u) => u.name,
    filter((u) => u.age >= 18, users)
  )
).to.deep.eq(['Jack', 'Milady'])

/*
compose is a high order function. It is a function that returns another function.
compose takes multiple functions as arguments and we convert them into an array of functions using the spread operator: ...
Then we simply apply a reduceRight on those functions. The first parameter of the callback is the current argument.
The second argument is the current function. Then we call each function with the current argument and the result is use for the next call.
 */
const compose =
  (...fns) =>
  (args) =>
    fns.reduceRight((arg, fn) => fn(arg), args)

const curryFilter = (callback) => (arr) => arr.filter(callback)
const curryMap = (callback) => (arr) => arr.map(callback)

expect(
  compose(
    curryMap((u) => u.name),
    curryFilter((u) => u.age >= 18)
  )(users)
).to.deep.eq(['Jack', 'Milady'])

/*
compose() performs a right-to-left function composition while pipe() performs a left-to-right composition
 */
const pipe =
  (...fns) =>
  (args) =>
    fns.reduce((arg, fn) => fn(arg), args)

expect(
  pipe(
    curryFilter((u) => u.age >= 18),
    curryMap((u) => u.name)
  )(users)
).to.deep.eq(['Jack', 'Milady'])

/*
Another compose() implementation

https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83
 */

const composeGist = (...fns) =>
  fns.reduceRight(
    (prevFn, nextFn) =>
      (...args) =>
        nextFn(prevFn(...args)),
    (value) => value
  )

const hello = composeGist(
  (val) => {
    console.log(1)
    return `1<${val}>`
  },
  (val) => {
    console.log(2)
    return `2<${val}>`
  },
  (val) => {
    console.log(3)
    return `3<${val}>`
  }
)
// TODO: Review the gist
hello('hello')

/*
https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a
 */
