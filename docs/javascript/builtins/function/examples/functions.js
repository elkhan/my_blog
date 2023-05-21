function callSomeFunction(someFunction, someArgument) {
  return someFunction(someArgument)
}

function add10(num) {
  return num + 10
}

const result1 = callSomeFunction(add10, 20)

// console.log(result1);

function getGreeting(name) {
  return `Hello, ${name}`
}

const result2 = callSomeFunction(getGreeting, 'Elkhan')

// console.log(result2);

// *****************

// Object property comparison

// “In this code, an array called data is created with two objects. Each object has a name property and an age property. By default, the sort() method would call toString() on each object to determine the sort order, which wouldn’t give logical results in this case. Calling createComparisonFunction ("name") creates a comparison function that sorts based on the name property, which means the first item will have the name "Nicholas" and an age of 29. When createComparisonFunction ("age") is called, it creates a comparison function that sorts based on the age property, meaning the first item will be the one with its name equal to "Zachary" and age equal to 28.”

function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    const value1 = object1[propertyName]
    const value2 = object2[propertyName]

    if (value1 < value2) {
      return -1
    }
    if (value1 > value2) {
      return 1
    }
    return 0
  }
}

const data = [
  { name: 'Nicholas', age: 42 },
  { name: 'Zachary', age: 41 },
]

data.sort(createComparisonFunction('name'))
// console.log(data[0].name);

data.sort(createComparisonFunction('age'))
// console.log(data[0].name);

// ***************

// Arguments and this

function factorial(num) {
  if (num <= 1) {
    return 1
  }
  return num * factorial(num - 1)
}

function factorial(num) {
  if (num <= 1) {
    return 1
  }
  return num * arguments.callee(num - 1) // No longer references the function name - no tight coupling
}

const trueFactorial = factorial

factorial = function() {
  return 0
}

// console.log(trueFactorial(5));
// console.log(factorial(5));

// Caller

function outer() {
  inner()
}
// function inner() {
//   console.log(inner.caller);
// }

function inner() {
  console.log(arguments.callee.caller)
}

outer()
