/* Preventing extensions */
// Once you use this method on an object, you’ll never be able to add any new properties to it again.
const person = {
  name: 'Nicholas',
}

console.log(Object.isExtensible(person)) // true

Object.preventExtensions(person)

console.log(Object.isExtensible(person)) // false

person.sayName = () => {
  console.log(this.name)
}

console.log('sayName' in person) // false
person.age = 44
console.log('age' in person) // false
console.log(person.age) // undefined

/* Sealing */
// A sealed object is non-extensible, and all of its properties are non-configurable.
const person1 = {
  name: 'Mike',
}

console.log(Object.isExtensible(person1)) // true
console.log(Object.isSealed(person1)) // false

Object.seal(person1)
console.log(Object.isExtensible(person1)) // false
console.log(Object.isSealed(person1)) // true

person1.age = 44
console.log('age' in person1) // false
person1.name = 'Greg'
console.log(person1.name) // Greg

delete person1.name
console.log('name' in person1) // true
console.log(person1.name) // Greg
console.log(Object.getOwnPropertyDescriptor(person1, 'name'))
/*
{ value: 'Greg',
  writable: true,
  enumerable: true,
  configurable: false }
*/

/* Freezing */
/*
If an object is frozen, you can’t add or remove properties, you can’t change properties’ types, and you can’t write to any data properties.
In essence, a frozen object is a sealed object where data properties are also read-only.
Frozen objects can’t become unfrozen, so they remain in the state they were in when they became frozen.
 */
const person3 = {
  name: 'John',
}
console.log(Object.isExtensible(person3)) // true
console.log(Object.isSealed(person3)) // false
console.log(Object.isFrozen(person3)) // false

Object.freeze(person3)
console.log('frozen')
console.log(Object.isExtensible(person3)) // false
console.log(Object.isSealed(person3)) // true
console.log(Object.isFrozen(person3)) // true

person3.name = 'Greg'
console.log(person3.name) // John

person3.age = 44
console.log('age' in person) // false

delete person3.name
console.log('name' in person3) // true
console.log(person3.name) // John
console.log(Object.getOwnPropertyDescriptor(person3, 'name'))
/*
{ value: 'John',
  writable: false,
  enumerable: true,
  configurable: false }
 */

/*
When you use Object.seal() or Object.freeze() on an object,
you are acting solely on the object instance and the own properties.
You can’t add new own properties or change existing own properties on frozen objects,
but you can certainly still add properties on the prototype and continue extending those objects.
 */
