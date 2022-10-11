const person = {}
Object.defineProperty(person, 'name', {
  value: 'Jane',
  writable: true,
  configurable: true,
  enumerable: false,
})
Object.defineProperty(person, 'age', {
  value: 32,
  writable: true,
  configurable: true,
  enumerable: true,
})

for (const personKey in person) {
  if (Object.prototype.hasOwnProperty.call(person, personKey)) {
    console.log(person[personKey]) // 32
  }
}

const personSerialize = JSON.stringify(person)
console.log(personSerialize) // {"age":32}

const personKeys = Object.keys(person)
console.log(personKeys) // [ 'age' ]
