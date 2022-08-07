function Person(name, age) {
  const person = Object.create(Person.prototype)
  person.name = name
  person.age = age

  return person
}

Person.prototype.work = function work() {
  console.log(`${this.name} is working`)
}

const john = Person('John', 43)

john.work() // John is working

function PersonWithNew(name, age) {
  this.name = name
  this.age = age
}

const joe = new PersonWithNew('Joe', 34)

PersonWithNew.prototype.study = function study() {
  console.log(`${this.name} is reading a book`)
}

console.log(joe.name) // Joe
joe.study() // Joe is reading a book

class PersonClass {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  work() {
    console.log(`${this.name} is going to work`)
  }
}

const leo = new PersonClass('Leonardo', 100)
console.log(leo.name) // Leonardo
leo.work() // Leonardo is going to work
