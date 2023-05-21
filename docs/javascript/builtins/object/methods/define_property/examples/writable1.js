const cat = {
  name: 'Jolly',
  color: 'Pink',
}
Object.defineProperty(cat, 'name', {
  writable: false,
})
console.log(Object.getOwnPropertyDescriptor(cat, 'name'))
/**
 * { value: 'Jolly',
  writable: false,
  enumerable: true,
  configurable: true }
 */

//  cat.name = "Scratchy" // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
console.log(cat.name) // Jolly

const dog = {
  name: {
    firstName: 'King',
    lastName: 'Little',
  },
  color: 'Brown',
}
Object.defineProperty(dog, 'name', {
  writable: false,
})
console.log(Object.getOwnPropertyDescriptor(dog, 'name'))
/**
 * { value: { firstName: 'King', lastName: 'Little' },
  writable: false,
  enumerable: true,
  configurable: true }
 */
dog.name.firstName = 'Dobbie'
console.log(dog) // { name: { firstName: 'Dobbie', lastName: 'Little' }, color: 'Brown' }
Object.freeze(dog.name)
//  dog.name.lastName = "The Kidd" // TypeError: Cannot assign to read only property 'lastName' of object '#<Object>'
