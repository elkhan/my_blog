console.log('*****Asynchronous callback example*****')

// https://glebbahmutov.com/blog/sync-callbacks/
function asyncIdentity(x, cb) {
  setTimeout(() => {
    console.assert(`returning x = ${x}` === `returning x = foo`)
    cb(x)
  }, 0)
}

const result = asyncIdentity('foo', (arg) => {
  console.assert(`callback value = ${arg}` === `callback value = foo`)
})
console.log(`result = ${result}`)

// https://learn.co/lessons/javascript-callbacks
function doTo5(anything) {
  return anything(5)
}

function divide10ByN(n) {
  return 10 / n
}

expect(doTo5(divide10ByN)).to.eq(2)

function appendToHello(s) {
  return `Hello, ${s}!`
}

expect(doTo5(appendToHello)).to.eq('Hello, 5!')

// We do not call divide10ByN or appendToHello when we pass them as functions to doTo5()
// — that is, we pass just their name without any parentheses after it.
// That's because the calling actually happens inside doTo5(), when doTo5() calls back to
// the "outside world."
// Because of this process of calling back,
// we often call functions that we pass to other functions callbacks.

// Another example
const nails = ['rusty nail', 'bent nail', 'clean nail']
const planks = ['splintered plank', 'straight plank', 'bent plank']

const groupAndClean = (items, cleaningMethod, done) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = items.length; i < l; i += 1) {
    cleaningMethod(items[i])
  }
  done() // Return to outer function context
}

const clean = (item) => {
  console.log(`I just cleaned a ${item}`)
}

const nailsAndPlanks = nails.concat(planks)

groupAndClean(nailsAndPlanks, clean, () => {
  console.log('Whew, that was a lot of work!')
})

function performOperations(a, b, cb) {
  const c = a + b
  return cb(c)
}

performOperations(2, 3, (res) => `The result is ${res}`)

expect(performOperations(2, 3, (res) => `The result is ${res}`)).to.eq(
  'The result is 5'
)
