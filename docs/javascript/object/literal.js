const person = {
  name: 'Jake',
}
console.log(person.name) // 'Jake'
delete person.name
console.log(person.name) // undefined

const car = {
  'four wheels': true,
}
const carMake = 'make'
car[carMake] = 'Ford'
car['Pink Cadillac'] = 'Mmmm, nice!'
console.log(car)
console.log(car['four wheels'])
