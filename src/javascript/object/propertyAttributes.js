const person = {
  name: 'Jake',
  age: 32,
}

const personDesc = Object.getOwnPropertyDescriptor(person, 'name')
console.log(personDesc)

const personDescriptors = Object.getOwnPropertyDescriptors(person)
console.log(personDescriptors)
/*
{
  name: {
    value: 'Jake',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 32, writable: true, enumerable: true, configurable: true }
}
 */
