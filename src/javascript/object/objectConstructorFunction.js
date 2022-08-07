function createNewPerson(name, age) {
  const obj = {}
  obj.name = name
  obj.age = age
  obj.greeting = function greeting() {
    return `Hi! I'm ${obj.name}. And I am ${obj.age} years old.`
  }
  return obj
}
const person = createNewPerson('Jane', 32)
console.log(person.greeting())
