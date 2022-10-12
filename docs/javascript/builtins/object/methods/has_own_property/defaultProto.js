const obj = {
  num: 3,
}
console.log(obj) // {num: 3}
// https://eslint.org/docs/rules/no-prototype-builtins
console.log(Object.prototype.hasOwnProperty.call(obj, 'num')) // true

function multiplyByTwo(num) {
  return num * 2
}
multiplyByTwo.score = 5
console.log(Object.prototype.hasOwnProperty.call(multiplyByTwo, 'score')) // true

/**
 * multiplyByTwo.toString();
 * Function.prototype // {toString: FUNCTION, call: FUNCTION, bind: FUNCTION}
 * Function.prototype.__proto__ // Object.prototype {hasOwnProperty: FUNCTION}
 */

/* eslint-disable no-proto */
console.log(multiplyByTwo.__proto__) // [Function]
console.log(multiplyByTwo.__proto__.__proto__) // {}
console.log(multiplyByTwo.__proto__.__proto__.__proto__) // null
console.log('--***--')
console.log(multiplyByTwo.prototype) // multiplyByTwo {}
console.log(multiplyByTwo.prototype.__proto__) // {}
console.log(multiplyByTwo.prototype.__proto__.__proto__) // null
