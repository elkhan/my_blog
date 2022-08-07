/* eslint-disable no-prototype-builtins */
const obj = {
  num: 4,
}
// Object
console.log(obj.hasOwnProperty('hasOwnProperty')) // false
console.log(obj.__proto__.hasOwnProperty('hasOwnProperty')) // true
// Function
console.log(Function.__proto__) // [Function]
console.log(Function.prototype.__proto__) // {} - Object.prototype
console.log(Function.prototype.__proto__.__proto__) // null
/* All functions have a prototype object */
/* All objects have a __proto__ / [[Prototype]] pointer to functions' prototype object */
