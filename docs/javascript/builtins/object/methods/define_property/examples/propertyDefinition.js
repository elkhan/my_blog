const person = {}

Object.defineProperty(person, 'name', {
  value: 'Adam',
  writable: true,
  configurable: true,
  enumerable: true
})

console.log(person.name) // Adam

module.exports = {}
