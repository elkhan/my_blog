const objA = {
  name: 'Jane',
  age: 32,
}
const objB = {
  surname: 'Doe',
  age: 30,
  job: 'Google'
}
const objC = { ...objA, ...objB }
console.log(objC)

const {age, ...personWithoutAge} = objC
console.log(personWithoutAge)
