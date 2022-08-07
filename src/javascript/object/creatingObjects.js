// Object literal
const cat = {
  name: 'Fluffy',
  color: 'White',
  walk() {
    console.log('Walking')
  },
}
console.log(cat.name) // Fluffy
cat.age = 3
console.log(cat.age) // 3

cat.speak = function speak() {
  console.log(`${this.name} says - Meow`)
}
cat.speak() // Fluffy says - Meow
cat.walk() // Walking

// Object constructor
function Dog(name, color) {
  this.name = name
  this.color = color
}

const dog = new Dog('Tosha', 'brown')
console.log(dog.name) // Tosha
console.log(dog.color) // brown

// this keyword refers to an object that is currently executing the code.
// By default this refers to the global object - window in a browser

// Object.create() to create objects
const bird = Object.create(
  {},
  {
    name: {
      value: 'Tom',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    color: {
      value: 'grey',
      enumerable: true,
      writable: true,
      configurable: true,
    },
  }
)

console.log(bird.name) // Tom
console.log(bird.color) // grey

// Classes
class Squirrel {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  climb() {
    console.log(`${this.name} is climbing a tree`)
  }
}

const squirrel = new Squirrel('Jacky', 2)
console.log(squirrel.name) // Jacky
console.log(squirrel.age) // 2
squirrel.climb() // Jacky is climbing a tree
