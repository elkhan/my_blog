/* eslint-disable no-unused-vars */
function Animal(name, energy) {
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function eat(amount) {
  console.log(`${this.name} is eating`)
  this.energy += amount
}
Animal.prototype.sleep = function sleep(length) {
  console.log(`${this.name} is sleeping`)
  this.energy += length
}
Animal.prototype.play = function play(length) {
  console.log(`${this.name} is playing`)
  this.energy -= length
}

function Dog(name, energy, breed) {
  Animal.call(this, name, energy)
  this.breed = breed
}

console.log(Dog.prototype) // Dog {}

// Order is important - first assign a prototype then create an instance
Dog.prototype = Object.create(Animal.prototype)

console.log(Dog.prototype) // Animal {}

Dog.prototype.constructor = Dog

const tot = new Dog('Tot', 10, 'Doberman')

console.log(tot.name) // Tot
tot.play(5) // Tot is playing

/**
 * Classes
 */

class AnimalClass {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }

  eat(amount) {
    console.log(`${this.name} is eating`)
    this.energy += amount
  }

  sleep(length) {
    console.log(`${this.name} is sleeping`)
    this.energy += length
  }

  play(length) {
    console.log(`${this.name} is playing`)
    this.energy -= length
  }
}

class DogClass extends Animal {
  constructor(name, energy, breed) {
    super(name, energy)
    this.breed = breed
  }

  bark() {
    console.log(`${this.name} barks: Woof Woof`)
  }
}

const charlie = new DogClass('Charlie', 5, 'Poodle')
charlie.bark() // Charlie barks: Woof Woof
charlie.eat(5) // Charlie is eating
console.log(charlie.energy) // 10
