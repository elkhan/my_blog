// Function Declaration
function functionName(arg0, arg1, arg2) {
  // function body
}
// works only in Firefox, Safari, Chrome, and Opera
console.log(functionName.name) // "functionName"

// One of the key characteristics of function declarations is function declaration hoisting, whereby function declarations are read before the code executes. That means a function declaration may appear after code that calls it and still work:
sayHi()
function sayHi() {
  console.log('Hi!')
}

// Function expressions have several forms. The most common is as follows:
const anotherFunctionName = function(arg0, arg1, arg2) {
  // functionBody
}

// ******************
// Recursion
function factorial(num) {
  if (num <= 1) {
    return 1
  }
  return num * factorial(num - 1)
} // Although this works initially, it’s possible to prevent it from functioning by running the following code immediately after it:
const anotherFactorial = factorial
factorial = null
// console.log(anotherFactorial(4)); // TypeError: factorial is not a function
function factorial(num) {
  if (num <= 1) {
    return 1
  }
  return num * arguments.callee(num - 1) // using arguments.callee instead of the function name ensures that this function will work regardless of how it is accessed.
}
console.log(anotherFactorial(4)) // 24

// The value of arguments.callee is not accessible to a script running in strict mode and will cause an error when attempts are made to read it. Instead, you can use named function expressions to achieve the same result.
var factorial = function f(num) {
  if (num <= 1) {
    return 1
  }
  return num * f(num - 1)
}

const oneMoreFactorial = factorial
factorial = null
console.log(oneMoreFactorial(3)) // 6

// *****************
// Closures
// Closures are functions that have access to variables from another function’s scope.
