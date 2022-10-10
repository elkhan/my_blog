const person = {}
Object.defineProperty(person, 'name', {
  value: 'Jane',
  writable: true,
  configurable: false,
  enumerable: true,
})
Object.defineProperty(person, 'age', {
  value: 32,
  writable: true,
  configurable: true,
  enumerable: true,
})
console.log(person.name) // Jane
console.log(person.age) // 32
delete person.name
delete person.age
console.log(person.name) // Jane
console.log(person.age) // undefined
