const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio() {
    return `${this.name[0]} ${this.name[1]} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
  },
  greeting() {
    return `Hi! I'm ${this.name[0]}.`
  },
}

console.log(person.bio())
console.log(person.greeting())

// eslint-disable-next-line no-new-object
const newPerson = {}
newPerson.name = 'Jane'
newPerson.age = 32
newPerson.gender = 'female'
newPerson.interests = ['music', 'dancing']
newPerson.bio = function bio() {
  return `${this.name} is ${this.age} years old. She likes ${this.interests[0]} and ${this.interests[1]}.`
}

console.log(newPerson.bio())

function PersonCtor(name, age, gender, interests) {
  this.name = name
  this.age = age
  this.gender = gender
  this.interests = interests
}

const anotherPerson = new PersonCtor('Bob', 32, 'male', ['music', 'skiing'])

anotherPerson.bio = function bio() {
  return `${this.name} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
}

anotherPerson.greeting = function greeting() {
  return `Hi! I'm ${this.name}. And I am ${this.gender}.`
}
console.log(anotherPerson.bio())
console.log(anotherPerson.greeting())

function Car(make, model, year, owner) {
  this.make = make
  this.model = model
  this.year = year
  this.owner = owner
}

const aCar = new Car('Eagle', 'Talon TSi', 1993, anotherPerson)
console.log(aCar.owner.name)
