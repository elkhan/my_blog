const person = {
  name: 'Jane',
}

console.log(Object.getPrototypeOf(person) === Object.prototype) // true
// eslint-disable-next-line no-proto
console.log(person.__proto__ === Object.prototype) // true
