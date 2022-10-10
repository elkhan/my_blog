// Each function being an object has two properties: length and prototype
// The length property indicates the number of named arguments that the function expects

function sayName(name) {
  console.log(name)
}

function sum(num1, num2) {
  return num1 + num2
}

function sayHi() {
  console.log('Hi')
}

console.log(sayName.length)
console.log(sum.length)
console.log(sayHi.length)

// 2 methods for functions: apply() and call()
// “These methods both call the function with a specific this value, effectively setting the value of the this object inside the function body.”

// apply()
function sum(num1, num2) {
  return num1 + num2
}

function callSum1(num1, num2) {
  return sum.apply(this, arguments) // passing in arguments object
}

function callSum2(num1, num2) {
  return sum.apply(this, [num1, num2]) // passing in array
}

console.log(callSum1(10, 10))
console.log(callSum2(10, 10))
// call()
function sum(num1, num2) {
  return num1 + num2
}

function callSum(num1, num2) {
  return sum.call(this, num1, num2)
}

console.log(callSum(10, 10))

// This

// window.color = "red"; //Must be run in a browser
var o = { color: 'blue' }

function sayColor() {
  // console.log(this.color);
}

sayColor() // Defined globally so this refers to window which is red
o.sayColor = sayColor
o.sayColor() // This points to o which is blue

// “Remember that function names are simply variables containing pointers, so the global sayColor() function and o.sayColor() point to the same function even though they execute in different contexts.”

// window.color = "red"; //Must be executed in a browser

var o = { color: 'blue' }

function sayColor() {
  // console.log(this.color);
}

sayColor() // red
sayColor.call(this) // red
// sayColor.call(window); //red
sayColor.call(o) // blue

// ECMASript 5 defines the bind() method
// “The bind() method creates a new function instance whose this value is bound to the value that was passed into bind()”

// “Here, a new function called objectSayColor() is created from sayColor() by calling bind() and passing in the object o. The objectSayColor() function has a this value equivalent to o, so calling the function, even as a global call, results in the string "blue" being displayed.”

// window.color = "red";

var o = { color: 'blue' }

function sayColor() {
  // console.log(this.color);
}

const objectSayColor = sayColor.bind(o)
objectSayColor() // blue
