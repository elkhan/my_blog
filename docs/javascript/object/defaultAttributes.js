const person = {}
Object.defineProperties(person, {
  name: {
    value: 'Jane',
  },
  age: {
    value: 32,
    writable: true,
  },
})
const personDesc = Object.getOwnPropertyDescriptors(person)
console.log(personDesc)
/*
{
  name: {
    value: 'Jane',
    writable: false,
    enumerable: false,
    configurable: false
  },
  age: { value: 32, writable: true, enumerable: false, configurable: false }
}
 */
