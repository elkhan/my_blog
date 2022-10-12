const person = {}
Object.defineProperty(person, 'name', {
  value: 'Jane',
  writable: false,
  configurable: true,
  enumerable: true
})
Object.defineProperty(person, 'age', {
  value: 32,
  writable: true,
  configurable: true,
  enumerable: true
})
console.log(person.name) // Jane
console.log(person.age) // 32
person.name = 'Jake'
person.age = 42
console.log(person.name) // Jane
console.log(person.age) // 42

module.exports = {}
