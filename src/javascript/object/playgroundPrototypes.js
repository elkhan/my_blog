/* eslint-disable no-proto */
function Person(name, age) {
  this.name = name
  this.age = age
}

const person = new Person('Jim', 50)
console.log('person.__proto__', person.__proto__)
const anotherPerson = {
  __proto__: person,
}
console.log(anotherPerson.name) // Jim
console.log(anotherPerson.__proto__.__proto__) // Person
// eslint-disable-next-line no-prototype-builtins
console.log(anotherPerson.hasOwnProperty('name')) // false
console.log(Object.hasOwnProperty.call(anotherPerson, 'name')) // false
