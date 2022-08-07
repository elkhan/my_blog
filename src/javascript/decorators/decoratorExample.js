/* eslint-disable func-names */

// https://www.telerik.com/blogs/decorators-in-javascript

// Functions Assigned to a Variable
const helloWorldFunction = function() {
  console.log('hello world')
}

const anotherVar = helloWorldFunction
helloWorldFunction() // hello world
anotherVar() // hello world

// Functions Passed as a Parameter to Another Function
const printHello = function() {
  console.log('I am print hello function')
}

function printHelloAndHi(func) {
  func()
  console.log('I am printHelloAndHi function')
}

printHelloAndHi(printHello)
/*
I am print hello function
I am printHelloAndHi function
*/

// Function Returned by Another Function - Closure
function printAdditionFunction(x, y) {
  const addNumbers = function() {
    const result = x + y
    console.log(`Addition of ${x} and ${y} is: ${result}`)
  }
  return addNumbers
}

const addNumbersFunction = printAdditionFunction(3, 4)
console.log(addNumbersFunction) // [Function: addNumbersFunction]
addNumbersFunction() // Addition of 3 and 4 is: 7

/* ------------------------------ */

// HIGHER-ORDER FUNCTIONS IN JAVASCRIPT

function printMessage(message) {
  return function() {
    console.log(message)
  }
}

const printHelloMessage = printMessage('Hello')
printHelloMessage() // Hello
const printHiMessage = printMessage('Hi')
printHiMessage() // Hi

// Handling exception
function handleException(funcAsParameter) {
  console.log('Inside handle exception function')
  try {
    funcAsParameter()
  } catch (error) {
    console.log(error)
  }
}

function divideByZero() {
  const result = 5 / 0
  if (!Number.isFinite(result)) {
    // eslint-disable-next-line no-throw-literal
    throw 'Division by zero is not a good idea'
  }
  console.log(`Result of division of 5 by zero is: ${result}`)
}

handleException(divideByZero)
/*
Inside handle exception function
Division by zero is not a good idea
*/

/* ---------------------------- */

// CLASSES IN JAVASCRIPT

// Prototypes
function Human(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Human.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}
const person = new Human('Joe', 'Doe')
console.log(person.firstName) // Joe
console.log(person.lastName) // Doe
console.log(person.getFullName()) // Joe Doe
console.log(Human.prototype) // Human { getFullName: [Function] }
// eslint-disable-next-line no-proto
console.log(person.__proto__) // Human { getFullName: [Function] }
console.log(Object.getPrototypeOf(person)) // Human { getFullName: [Function] }

// Classes

function log(obj, funcParam) {
  return function() {
    console.log(`Execution of ${funcParam.name} begin`)
    funcParam.call(obj)
    console.log(`Execution of ${funcParam.name} end`)
  }
}

class HumanClass {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const newHuman = new HumanClass('Jane', 'Doe')
const newHumanFullName = log(newHuman, newHuman.getFullName)
newHumanFullName()
/*
Execution of getFullName begin
Execution of getFullName end
 */

console.log(Object.getOwnPropertyDescriptor(newHuman, 'firstName'))
/*
{ value: 'Jane',
  writable: true,
  enumerable: true,
  configurable: true }
 */
