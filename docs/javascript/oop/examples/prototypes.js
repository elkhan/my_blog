/* eslint-disable func-names */
/* eslint-disable no-proto */

// https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b

function Human(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.friends = ['jake', 'lucy']
}

Human.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

Human.prototype.getAge = function () {
  return 44
}

Human.prototype.sex = 'female'
Human.prototype.pets = ['woof', 'bruno']

console.log(Object.getOwnPropertyNames(Human.prototype)) // [ 'constructor', 'getFullName' ]

const person = new Human('joe', 'doe')
person.sex = 'male'
console.log(person.__proto__ === Human.prototype) // true

const person2 = new Human('jane', 'doe')
console.log(person.__proto__ === person2.__proto__) // true
console.log(person.sex) // male
console.log(person2.sex) // female
console.log(Human.prototype) // Human { getFullName: [Function], getAge: [Function], sex: 'female' }

console.log(person.pets) // [ 'woof', 'bruno' ]
person2.pets.push('luke')
console.log(person.pets) // [ 'woof', 'bruno', 'luke' ] => shared array reference

console.log(person.friends) // [ 'jake', 'lucy' ]
person2.friends.push('karl')
console.log(person.friends) // [ 'jake', 'lucy' ]
console.log(person2.friends) // [ 'jake', 'lucy', 'karl' ] => instance properties are not shared

module.exports = {}
