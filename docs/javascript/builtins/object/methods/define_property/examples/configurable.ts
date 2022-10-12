type Person = {
  name?: string
  age?: number
  occupation?: string
}

const person: Person = {}
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
Object.defineProperty(person, 'occupation', {
  value: 'coder',
  writable: false,
  configurable: true,
  enumerable: true,
})
console.log(person.name) // Jane
console.log(person.age) // 32
// delete person.name // TypeError: Cannot delete property 'name' of #<Object>
delete person.age
console.log(person.name) // Jane
console.log(person.age) // undefined

// person.occupation = 'teacher' // TypeError: Cannot assign to read only property 'occupation' of object '#<Object>'

console.log(person.occupation)
export {}
