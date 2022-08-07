// “Though ECMA-262 doesn’t indicate a way to access the Global object directly, web browsers implement it such that the window is the Global object’s delegate. Therefore, all variables and functions declared in the global scope become properties on window.”

const color = 'red'
function sayColor() {
  console.log(window.color)
}

window.sayColor() // "red"
// “A global variable named color and a global function named sayColor() are defined. Inside sayColor(), the color variable is accessed via window.color to show that the global variable became a property of window. The function is then called directly off of the window object as window.sayColor()”

// “Another way to retrieve the Global object is to use the following code:
const global = (function() {
  return this
})()
// This code creates an immediately-invoked function expression that returns the value of this. As mentioned previously, the this value is equivalent to the Global object when a function is executed with no explicit this value specified (either by being an object method or via call()/apply()). Thus, calling a function that simply returns this is a consistent way to retrieve the Global object in any execution environment.”
