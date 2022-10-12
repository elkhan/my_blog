export const greeting = (name) => `Hello ${name}!`

export const introduction = (firstName, lastName, callback) => {
  const fullName = `${firstName} ${lastName}`
  return callback(fullName)
}

// https://stackoverflow.com/a/3458816
// callback function
function tryMe(param1, param2, param3) {
  // eslint-disable-next-line no-console
  console.log(`${param1} and ${param2} ${param3}`)
}

// callback executor
function callbackTester(callback) {
  // this is the more obvious scenario as we use callback function
  // only when we have some missing value
  // get this data from ajax or compute
  const extraParam = 'this data was missing'

  // call the callback when we have the data
  callback(extraParam)
}

// test function
callbackTester((k) => {
  tryMe('hello', 'goodbye', k)
})

// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { expect } = require('chai')

const sayHello = (callback) => {
  console.log('Hello 1')
  callback()
}

sayHello(() => {
  console.log('Hello 2')
})
/**
 * Hello 1
 * Hello 2
 */

const printSomething = () => {
  console.log('Hello world')
}

sayHello(printSomething)
/**
 * Hello 1
 * Hello world
 */

const greeting = (name) => `Hello ${name}, welcome to Riga!`

const introduction = (firstName, lastName, callback) => {
  const fullName = `${firstName} ${lastName}`
  return callback(fullName)
}

expect(introduction('Elkhan', 'Mamedov', greeting)).to.eq(
  'Hello Elkhan Mamedov, welcome to Riga!'
)

/**
 *
 */
const callBackPerson = (arg, cb) => cb(arg)
const consolePersonDetails = (obj) =>
  `My name is ${obj.name}, I am a ${obj.job} and I like ${obj.hobby}`
const person = {
  name: 'Elkhan',
  job: 'JavaScript Developer',
  hobby: 'Photography'
}
expect(callBackPerson(person, consolePersonDetails)).to.eq(
  'My name is Elkhan, I am a JavaScript Developer and I like Photography'
)
